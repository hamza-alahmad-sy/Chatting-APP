/*
 * services/chatService.js
 *
 * جميع استدعاءات API الخاصة بالدردشة تكون هنا
 */

import api from './api';
import { MOCK_USERS, INITIAL_MESSAGES } from '../constants';

const USE_MOCK_CHAT = process.env.REACT_APP_USE_MOCK_CHAT === 'true';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getDisplayName(user) {
  return user.name || user.userName || user.UserName || user.email || user.Email || 'مستخدم';
}

function getInitials(name) {
  const trimmed = name.trim();
  if (!trimmed) return '??';
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return trimmed.slice(0, 2).toUpperCase();
}

/** تحويل بيانات الباكند إلى الشكل الذي تتوقعه UserList */
export function mapUserToListItem(user) {
  const name = getDisplayName(user);
  return {
    id: String(user.id ?? user.Id),
    name,
    initials: user.initials ?? getInitials(name),
    lastMessage: user.lastMessage ?? '',
    time: user.time ?? '',
    online: user.online ?? false,
  };
}

/**
 * جلب قائمة المستخدمين المسجّلين
 * @returns {Promise<Array>}
 */
export async function fetchUsers() {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return MOCK_USERS;
  }

  const response = await api.get('/Users');
  const raw = response.data;
  const data = Array.isArray(raw)
    ? raw
    : raw?.users ?? raw?.Users ?? raw?.data ?? raw?.Data ?? [];
  return data.map(mapUserToListItem);
}

/**
 * جلب رسائل محادثة معينة
 * @param {string} userId
 * @returns {Promise<Array>}
 */
export async function fetchMessages(userId) {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return INITIAL_MESSAGES[userId] ?? [];
  }

  const response = await api.get(`/messages/${userId}`);
  return response.data;
}

/**
 * إرسال رسالة جديدة
 * @param {string} receiverId
 * @param {string} text
 * @returns {Promise<Object>}
 */
export async function sendMessageAPI(receiverId, text) {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return {
      id: `m${Date.now()}`,
      text,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  }

  const response = await api.post('/messages', { receiverId, text });
  return response.data;
}

/**
 * جلب معلومات المستخدم الحالي
 * @returns {Promise<Object>}
 */
export async function fetchCurrentUser() {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return { id: 'me', name: 'أنت', email: 'me@example.com' };
  }

  const response = await api.get('/auth/me');
  return response.data;
}
