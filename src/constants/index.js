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
  CHAT:    'chat',
};

/** Mock users for the chat sidebar (replace with API data later) */
export const MOCK_USERS = [
  { id: '1', name: 'Sara Ahmed',    initials: 'SA', lastMessage: 'Hey, how are you?',        time: '10:30', online: true  },
  { id: '2', name: 'Omar Hassan',   initials: 'OH', lastMessage: 'See you tomorrow!',        time: '09:15', online: true  },
  { id: '3', name: 'Layla Mahmoud', initials: 'LM', lastMessage: 'Thanks for the help 🙏',   time: 'Yesterday', online: false },
  { id: '4', name: 'Youssef Ali',   initials: 'YA', lastMessage: 'Did you watch the movie?', time: 'Yesterday', online: false },
  { id: '5', name: 'Nour Ibrahim',  initials: 'NI', lastMessage: 'Let me know when free',    time: 'Mon', online: true  },
  { id: '6', name: 'Hana Saleh',    initials: 'HS', lastMessage: 'Sounds good!',             time: 'Sun', online: false },
  { id: '7', name: 'Jamil Ahmed',   initials: 'JA', lastMessage: 'Hello, how are you?',        time: '10:30', online: true  },
];

/** Seed messages per conversation */
export const INITIAL_MESSAGES = {
  '1': [
    { id: 'm1', text: 'Hey! How are you doing?', sender: 'them', time: '10:28' },
    { id: 'm2', text: "I'm good, thanks! Working on the new project.", sender: 'me', time: '10:29' },
    { id: 'm3', text: 'Hey, how are you?', sender: 'them', time: '10:30' },
  ],
  '2': [
    { id: 'm4', text: 'Are we still meeting tomorrow?', sender: 'me', time: '09:10' },
    { id: 'm5', text: 'Yes! Same place as last time.', sender: 'them', time: '09:12' },
    { id: 'm6', text: 'See you tomorrow!', sender: 'them', time: '09:15' },
  ],
  '3': [
    { id: 'm7', text: 'Can you help me with the login page?', sender: 'them', time: 'Yesterday' },
    { id: 'm8', text: 'Sure, I sent you the docs.', sender: 'me', time: 'Yesterday' },
    { id: 'm9', text: 'Thanks for the help 🙏', sender: 'them', time: 'Yesterday' },
  ],
  '4': [
    { id: 'm10', text: 'Did you watch the movie?', sender: 'them', time: 'Yesterday' },
  ],
  '5': [
    { id: 'm11', text: 'Let me know when free', sender: 'them', time: 'Mon' },
  ],
  '6': [
    { id: 'm12', text: 'Sounds good!', sender: 'them', time: 'Sun' },
  ],
};

/** Auth tab identifiers */
export const AUTH_TABS = {
  SIGN_IN: 'signin',
  SIGN_UP: 'signup',
};

/** App branding */
export const APP_NAME = 'Chat App';

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
    sideSub:    '',
  },
  [AUTH_TABS.SIGN_UP]: {
    formTitle:  'Create account',
    actionBtn:  'SIGN UP',
    sideTitle:  'Join us\ntoday!',
    sideSub:    '',
  },
};
