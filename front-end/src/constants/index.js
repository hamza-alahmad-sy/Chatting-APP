/*
 * constants/index.js
 *
 * All static/config data lives here.
 * Components import from this file instead of hardcoding strings or arrays.
 */

/** Screen identifiers */
export const SCREENS = {
  WELCOME: 'welcome',
  AUTH:    'auth',
  CHAT:    'chat',
};

/** App branding */
export const APP_NAME = 'تطبيق الدردشة';

export const STRINGS = {
  welcome: {
    titleLine1: 'مرحباً',
    titleLine2: 'بعودتك',
    subtitle: 'للبقاء على تواصل معنا، يرجى تسجيل الدخول بمعلوماتك الشخصية',
    signIn: 'تسجيل الدخول',
  },
  auth: {
    signInTab: 'تسجيل الدخول',
    signUpTab: 'إنشاء حساب',
    divider: 'أو استخدم حساب بريدك الإلكتروني:',
    forgotPassword: 'هل نسيت كلمة المرور؟',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    fullName: 'الاسم الكامل',
    signingIn: 'جاري تسجيل الدخول…',
    creating: 'جاري الإنشاء…',
  },
  chat: {
    messages: 'الرسائل',
    searchUsers: 'ابحث عن مستخدمين...',
    selectConversation: 'اختر محادثة لبدء الدردشة',
    online: 'متصل',
    offline: 'غير متصل',
    typeMessage: 'اكتب رسالة...',
    sendMessage: 'إرسال رسالة',
    sending: 'جاري الإرسال...',
    loading: 'جاري التحميل...',
    noUsers: 'لا يوجد مستخدمون مسجلون',
    loadUsersFailed: 'تعذر تحميل قائمة المستخدمين',
    openChatFailed: 'تعذر فتح المحادثة',
    sessionExpired: 'انتهت الجلسة، يرجى تسجيل الدخول مرة أخرى',
    sendMessageFailed: 'تعذر إرسال الرسالة، تأكد من فتح المحادثة أولاً',
    logout: 'تسجيل الخروج',
  },
  validation: {
    nameRequired: 'الاسم مطلوب',
    emailRequired: 'البريد الإلكتروني مطلوب',
    emailInvalid: 'أدخل بريداً إلكترونياً صالحاً',
    passwordRequired: 'كلمة المرور مطلوبة',
    passwordMin: 'ستة أحرف على الأقل',
    invalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحين',
    authFailed: 'حدث خطأ أثناء تسجيل الدخول، حاول مرة أخرى',
    registrationFailed: 'فشل إنشاء الحساب، حاول مرة أخرى',
    sessionSaveFailed: 'تم تسجيل الدخول لكن لم تُحفظ بيانات الجلسة، حاول مرة أخرى',
  },
};

/** Mock users for the chat sidebar (replace with API data later) */



/** Auth tab identifiers */
export const AUTH_TABS = {
  SIGN_IN: 'signin',
  SIGN_UP: 'signup',
};

/** Social login providers shown on the auth form */
export const SOCIAL_PROVIDERS = [
  { id: 'facebook', label: 'f', className: 'sb-fb', color: '#1877f2', title: 'فيسبوك' },
  { id: 'google',   label: 'G', className: 'sb-g',  color: '#ea4335', title: 'جوجل'   },
  { id: 'twitter',  label: 't', className: 'sb-tw', color: '#1da1f2', title: 'تويتر'  },
];

/** Content that changes between Sign In and Sign Up tabs */
export const TAB_CONTENT = {
  [AUTH_TABS.SIGN_IN]: {
    formTitle:  'تسجيل الدخول',
    actionBtn:  'تسجيل الدخول',
    sideTitle:  'مرحباً\nبك يا صديقي!',
    sideSub:    '',
  },
  [AUTH_TABS.SIGN_UP]: {
    formTitle:  'إنشاء حساب',
    actionBtn:  'إنشاء حساب',
    sideTitle:  'انضم\nإلينا اليوم!',
    sideSub:    '',
  },
};
