/*
 * hooks/useChat.js
 *
 * Manages selected conversation, message list, search filter, and sending.
 */

import { useState, useCallback, useMemo } from 'react';
import { MOCK_USERS, INITIAL_MESSAGES } from '../constants';

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function useChat() {
  const [selectedUserId, setSelectedUserId] = useState(MOCK_USERS[0].id);
  const [searchQuery, setSearchQuery]       = useState('');
  const [messages, setMessages]             = useState(INITIAL_MESSAGES);
  const [draft, setDraft]                   = useState('');

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return MOCK_USERS;
    return MOCK_USERS.filter(u => u.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const selectedUser = useMemo(
    () => MOCK_USERS.find(u => u.id === selectedUserId) ?? null,
    [selectedUserId],
  );

  const activeMessages = messages[selectedUserId] ?? [];

  const selectUser = useCallback((userId) => {
    setSelectedUserId(userId);
    setDraft('');
  }, []);

  const sendMessage = useCallback(() => {
    const text = draft.trim();
    if (!text || !selectedUserId) return;

    const newMsg = {
      id:   `m${Date.now()}`,
      text,
      sender: 'me',
      time: formatTime(),
    };

    setMessages(prev => ({
      ...prev,
      [selectedUserId]: [...(prev[selectedUserId] ?? []), newMsg],
    }));
    setDraft('');
  }, [draft, selectedUserId]);

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
  };
}
