/*
 * hooks/useAuthScreen.js
 *
 * Encapsulates the screen-navigation and tab-switching logic.
 * The UI components stay "dumb" — they only render what this hook tells them.
 * This separation makes the logic unit-testable without mounting any DOM.
 */

import { useState, useCallback } from 'react';
import { SCREENS, AUTH_TABS } from '../constants';

export function useAuthScreen() {
  const [screen,  setScreen]  = useState(SCREENS.WELCOME);
  const [tab,     setTab]     = useState(AUTH_TABS.SIGN_IN);
  // animKey forces React to remount animated panels when screen/tab changes,
  // triggering CSS entry animations again.
  const [animKey, setAnimKey] = useState(0);

  /** Navigate from the Welcome screen to the Auth (form) screen */
  const goToAuth = useCallback(() => {
    setScreen(SCREENS.AUTH);
    setAnimKey(k => k + 1);
  }, []);

  /** Switch between Sign In and Sign Up tabs */
  const switchTab = useCallback((nextTab) => {
    setTab(nextTab);
    setAnimKey(k => k + 1);
  }, []);

  return { screen, tab, animKey, goToAuth, switchTab };
}
