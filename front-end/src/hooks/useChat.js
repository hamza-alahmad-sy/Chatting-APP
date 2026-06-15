/*
 * hooks/useChat.js
 *
 * جلب البيانات من Backend ومعالجة حالات التحميل والأخطاء
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import { STRINGS } from '../constants';
import { fetchUsers, fetchMessages, sendMessageAPI } from '../services/chatService';

function formatTime() {
  return new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
}

export function useChat() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState({});
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [usersLoadError, setUsersLoadError] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setUsersLoadError('');
        const data = await fetchUsers();
        setUsers(data);
        setSelectedUserId(data.length > 0 ? data[0].id : null);
      } catch (err) {
        console.error('خطأ في جلب المستخدمين:', err);
        setUsers([]);
        setSelectedUserId(null);
        setUsersLoadError(STRINGS.chat.loadUsersFailed);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    if (!selectedUserId) return;

    const loadMessages = async () => {
      try {
        const data = await fetchMessages(selectedUserId);
        setMessages(prev => ({
          ...prev,
          [selectedUserId]: data,
        }));
      } catch (err) {
        console.warn('لم يتمكن من جلب الرسائل:', err);
        setMessages(prev => ({
          ...prev,
          [selectedUserId]: [],
        }));
      }
    };

    loadMessages();
  }, [selectedUserId]);

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u => u.name.toLowerCase().includes(q));
  }, [users, searchQuery]);

  const selectedUser = useMemo(
    () => users.find(u => u.id === selectedUserId) ?? null,
    [users, selectedUserId],
  );

  const activeMessages = messages[selectedUserId] ?? [];

  const selectUser = useCallback((userId) => {
    setSelectedUserId(userId);
    setDraft('');
  }, []);

  const retryLoadMessages = useCallback(async () => {
    if (!selectedUserId) return;

    try {
      const data = await fetchMessages(selectedUserId);
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: data,
      }));
    } catch (err) {
      console.warn('فشل إعادة تحميل الرسائل:', err);
    }
  }, [selectedUserId]);

  const clearError = useCallback(() => {}, []);

  const sendMessage = useCallback(async () => {
    const text = draft.trim();
    if (!text || !selectedUserId) return;

    try {
      setSendingMessage(true);
      const newMsg = await sendMessageAPI(selectedUserId, text);
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [...(prev[selectedUserId] ?? []), newMsg],
      }));
      setDraft('');
    } catch (err) {
      console.error('خطأ في إرسال الرسالة:', err);
      const localMsg = {
        id: `m${Date.now()}`,
        text,
        sender: 'me',
        time: formatTime(),
        failed: true,
      };
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [...(prev[selectedUserId] ?? []), localMsg],
      }));
      setDraft('');
    } finally {
      setSendingMessage(false);
    }
  }, [draft, selectedUserId]);

  const retryMessage = useCallback(async (failedMsg) => {
    try {
      setSendingMessage(true);
      const newMsg = await sendMessageAPI(selectedUserId, failedMsg.text);
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [
          ...(prev[selectedUserId] ?? []).filter(m => m.id !== failedMsg.id),
          newMsg,
        ],
      }));
    } catch (err) {
      console.error('خطأ في إعادة إرسال الرسالة:', err);
    } finally {
      setSendingMessage(false);
    }
  }, [selectedUserId]);

  return {
    filteredUsers,
    selectedUser,
    selectedUserId,
    activeMessages,
    searchQuery,
    draft,
    setSearchQuery,
    setDraft,
    selectUser,
    sendMessage,
    loading,
    sendingMessage,
    usersLoadError,
    retryLoadMessages,
    clearError,
    retryMessage,
  };
}
