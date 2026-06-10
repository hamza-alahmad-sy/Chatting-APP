/*
 * services/authService.js
 *
 * All API communication lives here — no fetch/axios calls in components or hooks.
 * Swap the base URL or add auth tokens here without touching any UI file.
 */

import api from './api';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

/**
 * Extract a readable message from an axios / API error.
 */
export function getAuthErrorMessage(error, fallback) {
  const data = error.response?.data;
  if (typeof data === 'string' && data.trim()) return data;
  if (data?.message) return data.message;
  if (data?.title) return data.title;
  return fallback;
}

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
export async function signUp({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name, email, password }),
  });
  if (!response.ok) throw new Error('Registration failed');
  return response.json();
}

/**
 * Initiate OAuth flow for a social provider.
 * @param {'facebook'|'google'|'twitter'} provider
 */
export function socialLogin(provider) {
  window.location.href = `${BASE_URL}/auth/${provider}`;
}
