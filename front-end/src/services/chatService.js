/*
 * services/chatService.js
 *
 * جميع استدعاءات API الخاصة بالدردشة تكون هنا
 */

import api from './api';
import { getCurrentUserId } from './authService';


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

function formatMessageTime(dateValue) {
  if (!dateValue) return '';
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
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
    online: user.online ?? user.isOnline ?? user.IsOnline ?? false,
  };
}

/** تحويل رسالة الباكند إلى الشكل الذي تتوقعه ChatWindow */
export function mapMessageToListItem(message) {
  const currentUserId = getCurrentUserId();
  const senderId = String(message.senderId ?? message.SenderId ?? '');
  const text = message.messageText ?? message.MessageText ?? message.text ?? '';

  return {
    id: String(message.id ?? message.Id),
    text,
    sender: senderId === currentUserId ? 'me' : 'them',
    time: formatMessageTime(message.createdAt ?? message.CreatedAt) || message.time || '',
  };
}

/**
 * جلب قائمة المستخدمين المسجّلين
 * @returns {Promise<Array>}
 */
export async function fetchUsers() {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return [];
  }

  const response = await api.get('/Users');
  const raw = response.data;
  const data = Array.isArray(raw)
    ? raw
    : raw?.users ?? raw?.Users ?? raw?.data ?? raw?.Data ?? [];
  return data.map(mapUserToListItem);
}

/**
 * جلب أو إنشاء محادثة بين المستخدم الحالي ومستخدم آخر
 * @param {string|number} otherUserId
 * @returns {Promise<{ id: number }>}
 */
export async function getOrCreateChat(otherUserId) {
  const currentUserId = getCurrentUserId();
  if (!currentUserId) {
    throw new Error('SESSION_EXPIRED');
  }

  const userId1 = Number(currentUserId);
  const userId2 = Number(otherUserId);

  if (Number.isNaN(userId1) || Number.isNaN(userId2) || userId1 <= 0 || userId2 <= 0) {
    throw new Error(`معرّفات مستخدمين غير صالحة: ${currentUserId}, ${otherUserId}`);
  }

  const response = await api.post('/Chats/get-or-create', {
    userId1,
    userId2,
  });

  const chat = response.data;
  const id = chat.id ?? chat.Id;
  if (id == null) {
    throw new Error('الباكند لم يُرجع معرّف المحادثة');
  }

  return {
    id,
    user1Id: chat.user1Id ?? chat.User1Id,
    user2Id: chat.user2Id ?? chat.User2Id,
  };
}

/**
 * جلب رسائل محادثة معينة
 * @param {string|number} chatId
 * @returns {Promise<Array>}
 */
export async function fetchMessages(chatId) {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return  [];
  }

  const response = await api.get(`/Messages/${chatId}`);
  const raw = response.data;
  const data = Array.isArray(raw)
    ? raw
    : raw?.messages ?? raw?.Messages ?? raw?.data ?? raw?.Data ?? [];
  return data.map(mapMessageToListItem);
}

/**
 * إرسال رسالة جديدة
 * @param {string|number} chatId
 * @param {string} text
 * @returns {Promise<Object>}
 */
export async function sendMessageAPI(chatId, text) {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return {
      id: `m${Date.now()}`,
      text,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  }

  const response = await api.post('/Messages', {
    chatId: Number(chatId),
    senderId: Number(getCurrentUserId()),
    messageText: text,
    messageType: 'Text',
  });

  return mapMessageToListItem(response.data);
}
