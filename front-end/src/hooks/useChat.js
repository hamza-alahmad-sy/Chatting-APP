/*
 * hooks/useChat.js
 *
 * جلب البيانات من Backend ومعالجة حالات التحميل والأخطاء
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import { MOCK_USERS } from '../constants';
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
  
  // حالات التحميل والأخطاء
  const [loading, setLoading] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);

  // جلب قائمة المستخدمين عند تحميل الـ Component
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        
        // تجربة جلب البيانات من Backend
        // إذا فشلت، استخدم البيانات الوهمية
        try {
          const data = await fetchUsers();
          setUsers(data);
          if (data.length > 0) {
            setSelectedUserId(data[0].id);
          }
        } catch (err) {
          console.warn('استخدام البيانات الوهمية:', err);
          setUsers(MOCK_USERS);
          setSelectedUserId(MOCK_USERS[0].id);
        }
      } catch (err) {
        setUsers(MOCK_USERS);
        setSelectedUserId(MOCK_USERS[0].id);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // جلب الرسائل عند تغيير المستخدم المختار
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

  // تصفية المستخدمين حسب البحث
  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u => u.name.toLowerCase().includes(q));
  }, [users, searchQuery]);

  // المستخدم المختار الحالي
  const selectedUser = useMemo(
    () => users.find(u => u.id === selectedUserId) ?? null,
    [users, selectedUserId],
  );

  // الرسائل النشطة للمستخدم المختار
  const activeMessages = messages[selectedUserId] ?? [];

  // اختيار مستخدم
  const selectUser = useCallback((userId) => {
    setSelectedUserId(userId);
    setDraft('');
  }, []);

  // إعادة محاولة تحميل الرسائل
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

  // مسح رسالة الخطأ
  const clearError = useCallback(() => {
    // لا نحتاجها الآن لأننا لا نستخدم error state
  }, []);

  // إرسال رسالة جديدة
  const sendMessage = useCallback(async () => {
    const text = draft.trim();
    if (!text || !selectedUserId) return;

    try {
      setSendingMessage(true);
      
      // إرسال الرسالة إلى Backend
      const newMsg = await sendMessageAPI(selectedUserId, text);
      
      // إضافة الرسالة إلى قائمة الرسائل المحلية
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [...(prev[selectedUserId] ?? []), newMsg],
      }));
      
      setDraft('');
    } catch (err) {
      console.error('خطأ في إرسال الرسالة:', err);
      
      // إضافة الرسالة محلياً مع علامة failed
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

  // إعادة محاولة إرسال رسالة فاشلة
  const retryMessage = useCallback(async (failedMsg) => {
    try {
      setSendingMessage(true);
      
      // إرسال الرسالة إلى Backend
      const newMsg = await sendMessageAPI(selectedUserId, failedMsg.text);
      
      // حذف الرسالة الفاشلة وإضافة الجديدة
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [
          ...(prev[selectedUserId] ?? []).filter(m => m.id !== failedMsg.id),
          newMsg,
        ],
      }));
    } catch (err) {
      console.error('خطأ في إعادة إرسال الرسالة:', err);
      // الرسالة تبقى مع علامة failed
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
    retryLoadMessages,
    clearError,
    retryMessage,
  };
}
