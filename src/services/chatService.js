/*
 * services/chatService.js
 *
 * جميع استدعاءات API الخاصة بالدردشة تكون هنا
 * يمكنك تغيير BASE_URL للتواصل مع Backend
 */

import { MOCK_USERS, INITIAL_MESSAGES } from '../constants';

// تغيير هذا الـ URL إلى عنوان Backend الفعلي
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const USE_MOCK_CHAT = process.env.REACT_APP_USE_MOCK_CHAT === 'true';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * جلب قائمة المستخدمين
 * @returns {Promise<Array>} قائمة المستخدمين
 */
export async function fetchUsers() {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return MOCK_USERS;
  }

  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // أضف token إذا كان Backend يتطلبه
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    if (!response.ok) {
      throw new Error(`خطأ: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('خطأ في جلب المستخدمين:', error);
    throw error;
  }
}

/**
 * جلب رسائل محادثة معينة
 * @param {string} userId - معرّف المستخدم
 * @returns {Promise<Array>} قائمة الرسائل
 */
export async function fetchMessages(userId) {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return INITIAL_MESSAGES[userId] ?? [];
  }

  try {
    const response = await fetch(`${BASE_URL}/messages/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    if (!response.ok) {
      throw new Error(`خطأ: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('خطأ في جلب الرسائل:', error);
    throw error;
  }
}

/**
 * إرسال رسالة جديدة
 * @param {string} receiverId - معرّف المستقبِل
 * @param {string} text - نص الرسالة
 * @returns {Promise<Object>} الرسالة المُرسلة
 */
export async function sendMessageAPI(receiverId, text) {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    const message = {
      id: `m${Date.now()}`,
      text,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    return message;
  }

  try {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        receiverId,
        text,
      }),
    });

    if (!response.ok) {
      throw new Error(`خطأ: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('خطأ في إرسال الرسالة:', error);
    throw error;
  }
}

/**
 * جلب معلومات المستخدم الحالي
 * @returns {Promise<Object>} بيانات المستخدم
 */
export async function fetchCurrentUser() {
  if (USE_MOCK_CHAT) {
    await sleep(300);
    return {
      id: 'me',
      name: 'أنت',
      email: 'me@example.com',
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    if (!response.ok) {
      throw new Error(`خطأ: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('خطأ في جلب بيانات المستخدم:', error);
    throw error;
  }
}
