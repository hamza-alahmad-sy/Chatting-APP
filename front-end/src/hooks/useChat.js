/*
 * hooks/useChat.js
 *
 * جلب البيانات من Backend ومعالجة حالات التحميل والأخطاء
 */

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { STRINGS } from '../constants';
import { getCurrentUserId, getApiErrorMessage } from '../services/authService';
import {
  fetchUsers,
  fetchMessages,
  sendMessageAPI,
  getOrCreateChat,
  mapMessageToListItem,
} from '../services/chatService';
import { startSignalR, stopSignalR } from '../services/signalRService';

function formatTime() {
  return new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
}

function resolveOpenChatError(err) {
  if (err?.message === 'SESSION_EXPIRED') {
    return STRINGS.chat.sessionExpired;
  }
  return getApiErrorMessage(err, STRINGS.chat.openChatFailed);
}

function resolveUserIdFromChat(chatIds, chatId, senderId) {
  const matchedUserId = Object.entries(chatIds).find(([, id]) => String(id) === String(chatId))?.[0];
  if (matchedUserId) return matchedUserId;
  if (senderId != null) return String(senderId);
  return null;
}

export function useChat() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [chatIds, setChatIds] = useState({});
  const [messages, setMessages] = useState({});
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [usersLoadError, setUsersLoadError] = useState('');
  const [messagesLoadError, setMessagesLoadError] = useState('');

  const chatIdsRef = useRef(chatIds);
  useEffect(() => {
    chatIdsRef.current = chatIds;
  }, [chatIds]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setUsersLoadError('');
        const data = await fetchUsers();
        const currentUserId = getCurrentUserId();
        const otherUsers = currentUserId
          ? data.filter(u => u.id !== currentUserId)
          : data;
        setUsers(otherUsers);
        setSelectedUserId(otherUsers.length > 0 ? otherUsers[0].id : null);
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
    const handleIncoming = (payload) => {
      const incoming = mapMessageToListItem(payload);
      const userId = resolveUserIdFromChat(
        chatIdsRef.current,
        payload.chatId,
        payload.senderId,
      );
      if (!userId) return;

      setChatIds(prev => {
        if (prev[userId]) return prev;
        return { ...prev, [userId]: payload.chatId };
      });

      setMessages(prev => {
        const existing = prev[userId] ?? [];
        if (existing.some(m => m.id === incoming.id)) return prev;
        return { ...prev, [userId]: [...existing, incoming] };
      });
    };

    startSignalR(handleIncoming).catch(err => {
      console.error('SignalR connection failed:', err);
    });

    return () => {
      stopSignalR().catch(() => {});
    };
  }, []);

  const openConversation = useCallback(async (userId) => {
    try {
      setMessagesLoading(true);
      setMessagesLoadError('');

      const chat = await getOrCreateChat(userId);
      setChatIds(prev => ({ ...prev, [userId]: chat.id }));

      const data = await fetchMessages(chat.id);
      setMessages(prev => ({
        ...prev,
        [userId]: data,
      }));
    } catch (err) {
      const message = resolveOpenChatError(err);
      console.error('لم يتمكن من فتح المحادثة:', err?.response?.data ?? err);
      setMessagesLoadError(message);
      setChatIds(prev => {
        const next = { ...prev };
        delete next[userId];
        return next;
      });
      setMessages(prev => ({
        ...prev,
        [userId]: [],
      }));
    } finally {
      setMessagesLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!selectedUserId) return;
    openConversation(selectedUserId);
  }, [selectedUserId, openConversation]);

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
    setMessagesLoadError('');
  }, []);

  const retryLoadMessages = useCallback(async () => {
    if (!selectedUserId) return;
    await openConversation(selectedUserId);
  }, [selectedUserId, openConversation]);

  const clearError = useCallback(() => setMessagesLoadError(''), []);

  const sendMessage = useCallback(async () => {
    const text = draft.trim();
    if (!text || !selectedUserId) return;

    const chatId = chatIds[selectedUserId];
    if (!chatId) {
      setMessagesLoadError(STRINGS.chat.sendMessageFailed);
      return;
    }

    try {
      setSendingMessage(true);
      const newMsg = await sendMessageAPI(chatId, text, selectedUserId);
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [...(prev[selectedUserId] ?? []), newMsg],
      }));
      setDraft('');
      setMessagesLoadError('');
    } catch (err) {
      console.error('خطأ في إرسال الرسالة:', err);
      setMessagesLoadError(getApiErrorMessage(err, STRINGS.chat.sendMessageFailed));
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
  }, [draft, selectedUserId, chatIds]);

  const retryMessage = useCallback(async (failedMsg) => {
    const chatId = chatIds[selectedUserId];
    if (!chatId) {
      setMessagesLoadError(STRINGS.chat.sendMessageFailed);
      return;
    }

    try {
      setSendingMessage(true);
      const newMsg = await sendMessageAPI(chatId, failedMsg.text, selectedUserId);
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [
          ...(prev[selectedUserId] ?? []).filter(m => m.id !== failedMsg.id),
          newMsg,
        ],
      }));
      setMessagesLoadError('');
    } catch (err) {
      console.error('خطأ في إعادة إرسال الرسالة:', err);
      setMessagesLoadError(getApiErrorMessage(err, STRINGS.chat.sendMessageFailed));
    } finally {
      setSendingMessage(false);
    }
  }, [selectedUserId, chatIds]);

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
    messagesLoading,
    sendingMessage,
    usersLoadError,
    messagesLoadError,
    retryLoadMessages,
    clearError,
    retryMessage,
  };
}
