/*
 * constants/index.js
 *
 * All static/config data lives here.
 * Components import from this file instead of hardcoding strings or arrays.
 * Makes future i18n, rebranding, or data changes trivial.
 */

/** Screen identifiers */
export const SCREENS = {
  WELCOME: 'welcome',
  AUTH:    'auth',
};

/** Auth tab identifiers */
export const AUTH_TABS = {
  SIGN_IN: 'signin',
  SIGN_UP: 'signup',
};

/** App branding */
export const APP_NAME = 'Layer Tancap';

/** Social login providers shown on the auth form */
export const SOCIAL_PROVIDERS = [
  { id: 'facebook', label: 'f',  className: 'sb-fb', color: '#1877f2', title: 'Facebook' },
  { id: 'google',   label: 'G',  className: 'sb-g',  color: '#ea4335', title: 'Google'   },
  { id: 'twitter',  label: 't',  className: 'sb-tw', color: '#1da1f2', title: 'Twitter'  },
];

/** Content that changes between Sign In and Sign Up tabs */
export const TAB_CONTENT = {
  [AUTH_TABS.SIGN_IN]: {
    formTitle:  'Sign in use',
    actionBtn:  'SIGN IN',
    sideTitle:  'Hello,\nfriend!',
    sideSub:    'watch and share your best movies',
  },
  [AUTH_TABS.SIGN_UP]: {
    formTitle:  'Create account',
    actionBtn:  'SIGN UP',
    sideTitle:  'Join us\ntoday!',
    sideSub:    'Start watching your favourite movies',
  },
};
