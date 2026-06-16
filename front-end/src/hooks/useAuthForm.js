/*
 * hooks/useAuthForm.js
 *
 * Manages form field values and basic validation.
 * Keeps all data-handling logic out of the UI layer.
 * Swap in a real API call inside `handleSubmit` when the backend is ready.
 */

import { useState, useCallback } from 'react';
import { AUTH_TABS, STRINGS } from '../constants';
import { signIn, signUp, getAuthErrorMessage, saveAuthSession, getCurrentUserId } from '../services/authService';

const INITIAL_FIELDS = {
  name:     '',
  email:    '',
  password: '',
};

export function useAuthForm(tab, onSuccess) {
  const [fields, setFields]         = useState(INITIAL_FIELDS);
  const [errors, setErrors]         = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading]       = useState(false);

  /** Generic field change handler — pass directly to input onChange */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    setSubmitError('');
    // Clear the error for this field as soon as the user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }, [errors]);

  /** Basic client-side validation — extend as needed */
  const validate = useCallback(() => {
    const next = {};
    
    if (!fields.email.trim()) {
      next.email = STRINGS.validation.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      next.email = STRINGS.validation.emailInvalid;
    }
    if (!fields.password) {
      next.password = STRINGS.validation.passwordRequired;
    } else if (fields.password.length < 6) {
      next.password = STRINGS.validation.passwordMin;
    }
    return next;
  }, [fields, tab]);

  /**
   * Submit handler.
   * Replace the console.log with a real authService call.
   */
  const handleSubmit = useCallback(async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitError('');
    setLoading(true);
    try {
      if (tab === AUTH_TABS.SIGN_IN) {
        const data = await signIn({ email: fields.email, password: fields.password });
        saveAuthSession(data);
        if (!getCurrentUserId()) {
          throw new Error(STRINGS.validation.sessionSaveFailed);
        }
        onSuccess?.();
      } else {
        await signUp({
          email: fields.email,
          password: fields.password,
        });
        const data = await signIn({ email: fields.email, password: fields.password });
        saveAuthSession(data);
        if (!getCurrentUserId()) {
          throw new Error(STRINGS.validation.sessionSaveFailed);
        }
        onSuccess?.();
      }
    } catch (error) {
      const fallback = tab === AUTH_TABS.SIGN_IN
        ? STRINGS.validation.invalidCredentials
        : STRINGS.validation.registrationFailed;
      setSubmitError(getAuthErrorMessage(error, fallback));
    } finally {
      setLoading(false);
    }
  }, [fields, tab, validate, onSuccess]);

  return { fields, errors, submitError, loading, handleChange, handleSubmit };
}
