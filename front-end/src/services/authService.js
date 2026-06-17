/*
 * services/authService.js
 *
 * All API communication lives here — no fetch/axios calls in components or hooks.
 * Swap the base URL or add auth tokens here without touching any UI file.
 */

import api from './api';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

/** حفظ التوكن بغض النظر عن شكل استجابة ASP.NET */
export function saveAuthToken(data) {
  const token = data?.token ?? data?.Token ?? data?.accessToken ?? data?.AccessToken;
  if (token) sessionStorage.setItem('token', token);
}

/** حفظ بيانات الجلسة بعد تسجيل الدخول */
export function saveAuthSession(data) {
  saveAuthToken(data);
  const userId = data?.userId ?? data?.UserId;
  const userName = data?.userName ?? data?.UserName;
  if (userId != null) sessionStorage.setItem('userId', String(userId));
  if (userName) sessionStorage.setItem('userName', userName);
}

/** معرّف المستخدم الحالي المسجّل دخوله */
export function getCurrentUserId() {
  return sessionStorage.getItem('userId');
}

/** اسم المستخدم الحالي المسجّل دخوله */
export function getCurrentUserName() {
  return sessionStorage.getItem('userName');
}

function getInitials(name) {
  const trimmed = (name || '').trim();
  if (!trimmed) return '??';
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return trimmed.slice(0, 2).toUpperCase();
}

/** بيانات المستخدم الحالي للعرض في الواجهة */
export function getAuthUserProfile() {
  const userName = getCurrentUserName() || '';
  const displayName = userName.includes('@')
    ? userName.split('@')[0]
    : userName || 'مستخدم';
  return {
    userName,
    displayName,
    initials: getInitials(displayName),
  };
}

/** هل يوجد جلسة محفوظة؟ */
export function isAuthenticated() {
  return Boolean(sessionStorage.getItem('userId') || sessionStorage.getItem('token'));
}

/** مسح الجلسة عند تسجيل الخروج */
export function clearAuthSession() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('userName');
}

/**
 * Extract a readable message from an axios / API error.
 */
export function getApiErrorMessage(error, fallback) {
  const data = error?.response?.data;
  if (typeof data === 'string' && data.trim()) return data;
  if (data?.message) return data.message;
  if (data?.title) return data.title;
  if (error?.message) return error.message;
  return fallback;
}

/** @deprecated استخدم getApiErrorMessage */
export const getAuthErrorMessage = getApiErrorMessage;

/**
 * Sign in an existing user.
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<{ token?: string, user?: object }>}
 */
export async function signIn({ email, password }) {
  const response = await api.post('/auth/login', { userName: email, password });
  return response.data;
}

/**
 * Register a new user.
 * @param {{ name: string, email: string, password: string }} data
 * @returns {Promise<{ token: string, user: object }>}
 */
export async function signUp({ email, password }) {
  const response = await api.post('/Auth/register', { UserName: email, Password: password });
  return response.data;
}

/**
 * Initiate OAuth flow for a social provider.
 * @param {'facebook'|'google'|'twitter'} provider
 */
export function socialLogin(provider) {
  window.location.href = `${BASE_URL}/auth/${provider}`;
}
