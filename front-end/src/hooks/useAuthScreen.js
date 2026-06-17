/*
 * hooks/useAuthScreen.js
 *
 * Encapsulates the screen-navigation and tab-switching logic.
 * The UI components stay "dumb" — they only render what this hook tells them.
 * This separation makes the logic unit-testable without mounting any DOM.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { SCREENS, AUTH_TABS } from '../constants';
import { isAuthenticated, clearAuthSession } from '../services/authService';
import { stopSignalR } from '../services/signalRService';

const SCREEN_EXIT_MS = 420;
const SCREEN_ENTER_MS = 780;

export function useAuthScreen() {
  const [screen,  setScreen]  = useState(() =>
    isAuthenticated() ? SCREENS.CHAT : SCREENS.WELCOME
  );
  const [tab,     setTab]     = useState(AUTH_TABS.SIGN_IN);
  const [animKey, setAnimKey] = useState(0);
  const [cardPhase, setCardPhase] = useState('idle');
  const transitionTimer = useRef(null);

  const clearTransitionTimer = useCallback(() => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }
  }, []);

  const changeScreen = useCallback((next) => {
    if (next === screen) return;

    const isAuthFlow =
      (screen === SCREENS.WELCOME || screen === SCREENS.AUTH) &&
      (next === SCREENS.WELCOME || next === SCREENS.AUTH);

    if (!isAuthFlow) {
      setScreen(next);
      setAnimKey(k => k + 1);
      return;
    }

    clearTransitionTimer();
    setCardPhase('exit');

    transitionTimer.current = setTimeout(() => {
      setScreen(next);
      setAnimKey(k => k + 1);
      setCardPhase('enter');

      transitionTimer.current = setTimeout(() => {
        setCardPhase('idle');
        transitionTimer.current = null;
      }, SCREEN_ENTER_MS);
    }, SCREEN_EXIT_MS);
  }, [screen, clearTransitionTimer]);

  useEffect(() => () => clearTransitionTimer(), [clearTransitionTimer]);

  /** Navigate from the Welcome screen to the Auth (form) screen */
  const goToAuth = useCallback(() => {
    changeScreen(SCREENS.AUTH);
  }, [changeScreen]);

  /** Switch between Sign In and Sign Up tabs */
  const switchTab = useCallback((nextTab) => {
    setTab(nextTab);
    setAnimKey(k => k + 1);
  }, []);

  /** Navigate to the main chat page after successful auth */
  const goToChat = useCallback(() => {
    changeScreen(SCREENS.CHAT);
  }, [changeScreen]);

  /** Clear session and return to the welcome screen */
  const logout = useCallback(() => {
    stopSignalR().finally(() => {
      clearAuthSession();
      setTab(AUTH_TABS.SIGN_IN);
      changeScreen(SCREENS.WELCOME);
    });
  }, [changeScreen]);

  return { screen, tab, animKey, cardPhase, goToAuth, switchTab, goToChat, logout };
}
