/*
 * components/auth/icons.jsx
 *
 * Tiny inline SVG icon components used as `icon` props for FormInput.
 * Keeping them here avoids repetition in SignInForm and SignUpForm.
 */

const iconProps = {
  width: 16, height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#bbb',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function UserIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}
