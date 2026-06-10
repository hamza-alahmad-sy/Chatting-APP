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
  },
};

/** Mock users for the chat sidebar (replace with API data later) */
export const MOCK_USERS = [
  { id: '1', name: 'سارة أحمد',    initials: 'سأ', lastMessage: 'مرحباً، كيف حالك؟',              time: '10:30', online: true  },
  { id: '2', name: 'عمر حسن',      initials: 'عح', lastMessage: 'أراك غداً!',                      time: '09:15', online: true  },
  { id: '3', name: 'ليلى محمود',   initials: 'لم', lastMessage: 'شكراً على المساعدة 🙏',           time: 'أمس',   online: false },
  { id: '4', name: 'يوسف علي',     initials: 'يع', lastMessage: 'هل شاهدت الفيلم؟',                time: 'أمس',   online: false },
  { id: '5', name: 'نور إبراهيم',  initials: 'نإ', lastMessage: 'أخبرني عندما تكون متاحاً',        time: 'الاثنين', online: true  },
  { id: '6', name: 'هناء صالح',    initials: 'هص', lastMessage: 'يبدو جيداً!',                     time: 'الأحد', online: false },
  { id: '7', name: 'جميل أحمد',    initials: 'جأ', lastMessage: 'مرحباً، كيف حالك؟',               time: '10:30', online: true  },
];

/** Seed messages per conversation */
export const INITIAL_MESSAGES = {
  '1': [
    { id: 'm1', text: 'مرحباً! كيف حالك؟', sender: 'them', time: '10:28' },
    { id: 'm2', text: 'أنا بخير، شكراً! أعمل على المشروع الجديد.', sender: 'me', time: '10:29' },
    { id: 'm3', text: 'مرحباً، كيف حالك؟', sender: 'them', time: '10:30' },
  ],
  '2': [
    { id: 'm4', text: 'هل ما زلنا نلتقي غداً؟', sender: 'me', time: '09:10' },
    { id: 'm5', text: 'نعم! نفس المكان كالعادة.', sender: 'them', time: '09:12' },
    { id: 'm6', text: 'أراك غداً!', sender: 'them', time: '09:15' },
  ],
  '3': [
    { id: 'm7', text: 'هل يمكنك مساعدتي في صفحة تسجيل الدخول؟', sender: 'them', time: 'أمس' },
    { id: 'm8', text: 'بالتأكيد، أرسلت لك المستندات.', sender: 'me', time: 'أمس' },
    { id: 'm9', text: 'شكراً على المساعدة 🙏', sender: 'them', time: 'أمس' },
  ],
  '4': [
    { id: 'm10', text: 'هل شاهدت الفيلم؟', sender: 'them', time: 'أمس' },
  ],
  '5': [
    { id: 'm11', text: 'أخبرني عندما تكون متاحاً', sender: 'them', time: 'الاثنين' },
  ],
  '6': [
    { id: 'm12', text: 'يبدو جيداً!', sender: 'them', time: 'الأحد' },
  ],
};

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
