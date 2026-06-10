/*
 * components/illustrations/ChatSideIllus.jsx
 *
 * Auth side-panel illustration — replaces ClapperIllus
 * هاتف بواجهة دردشة مع فقاعات رسائل طائرة
 */

export default function ChatSideIllus() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>

      {/* Phone frame */}
      <rect x="85" y="30" width="130" height="220" rx="20" fill="#fff" opacity="0.18"/>
      <rect x="85" y="30" width="130" height="220" rx="20" fill="none" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <rect x="120" y="35" width="60" height="8" rx="4" fill="#fff" opacity="0.3"/>

      {/* Header bar */}
      <rect x="90" y="48" width="120" height="22" rx="6" fill="#fff" opacity="0.12"/>
      <circle cx="103" cy="59" r="7" fill="#fff" opacity="0.6"/>
      <rect x="114" y="55" width="40" height="4" rx="2" fill="#fff" opacity="0.5"/>
      <rect x="114" y="62" width="24" height="3" rx="1.5" fill="#fff" opacity="0.3"/>
      <circle cx="196" cy="59" r="4" fill="#22c55e"/>
      <circle cx="196" cy="59" r="2.5" fill="#16a34a"/>

      {/* Incoming msg 1 */}
      <rect x="95" y="78" width="72" height="22" rx="11" fill="#fff" opacity="0.85"/>
      <rect x="100" y="85" width="20" height="4" rx="2" fill="#e8306e" opacity="0.6"/>
      <rect x="100" y="91" width="36" height="4" rx="2" fill="#e8306e" opacity="0.4"/>

      {/* Outgoing msg 1 */}
      <rect x="133" y="108" width="72" height="22" rx="11" fill="#fff" opacity="0.25"/>
      <rect x="138" y="115" width="42" height="4" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="138" y="121" width="28" height="4" rx="2" fill="#fff" opacity="0.5"/>

      {/* Typing indicator */}
      <rect x="95" y="138" width="60" height="22" rx="11" fill="#fff" opacity="0.85"/>
      <circle cx="108" cy="149" r="4" fill="#e8306e" opacity="0.5"/>
      <circle cx="119" cy="149" r="4" fill="#e8306e" opacity="0.35"/>
      <circle cx="130" cy="149" r="4" fill="#e8306e" opacity="0.2"/>

      {/* Outgoing msg 2 */}
      <rect x="138" y="168" width="67" height="36" rx="11" fill="#fff" opacity="0.25"/>
      <rect x="143" y="175" width="50" height="4" rx="2" fill="#fff" opacity="0.7"/>
      <rect x="143" y="183" width="38" height="4" rx="2" fill="#fff" opacity="0.5"/>
      <rect x="143" y="191" width="28" height="4" rx="2" fill="#fff" opacity="0.3"/>

      {/* Input bar */}
      <rect x="91" y="214" width="118" height="22" rx="11" fill="#fff" opacity="0.15"/>
      <circle cx="101" cy="225" r="5" fill="#fff" opacity="0.4"/>
      <rect x="110" y="222" width="60" height="6" rx="3" fill="#fff" opacity="0.2"/>
      <circle cx="201" cy="225" r="7" fill="#fff" opacity="0.35"/>
      <path d="M198,222 L204,225 L198,228" fill="#fff" opacity="0.6"/>

      {/* Floating bubble top-left */}
      <rect x="10" y="50" width="65" height="44" rx="14" fill="#fff" opacity="0.2"/>
      <rect x="10" y="50" width="65" height="44" rx="14" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
      <rect x="18" y="61" width="32" height="5" rx="2.5" fill="#fff" opacity="0.6"/>
      <rect x="18" y="70" width="44" height="5" rx="2.5" fill="#fff" opacity="0.4"/>
      <rect x="18" y="79" width="24" height="5" rx="2.5" fill="#fff" opacity="0.3"/>
      <path d="M24,94 L18,108 L40,94" fill="#fff" opacity="0.2"/>

      {/* Floating bubble top-right */}
      <rect x="228" y="40" width="58" height="36" rx="12" fill="#fff" opacity="0.2"/>
      <rect x="228" y="40" width="58" height="36" rx="12" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="243" cy="58" r="4.5" fill="#fff" opacity="0.5"/>
      <circle cx="256" cy="58" r="4.5" fill="#fff" opacity="0.35"/>
      <circle cx="269" cy="58" r="4.5" fill="#fff" opacity="0.2"/>
      <path d="M260,76 L266,88 L246,76" fill="#fff" opacity="0.2"/>

      {/* Floating bubble bottom-left */}
      <rect x="14" y="200" width="62" height="38" rx="12" fill="#fff" opacity="0.15"/>
      <rect x="14" y="200" width="62" height="38" rx="12" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
      <rect x="22" y="210" width="36" height="4" rx="2" fill="#fff" opacity="0.5"/>
      <rect x="22" y="218" width="28" height="4" rx="2" fill="#fff" opacity="0.35"/>
      <rect x="22" y="226" width="20" height="4" rx="2" fill="#fff" opacity="0.2"/>

      {/* Floating bubble bottom-right */}
      <rect x="226" y="210" width="64" height="40" rx="12" fill="#fff" opacity="0.15"/>
      <rect x="226" y="210" width="64" height="40" rx="12" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
      <rect x="234" y="220" width="20" height="4" rx="2" fill="#fff" opacity="0.5"/>
      <rect x="234" y="228" width="38" height="4" rx="2" fill="#fff" opacity="0.35"/>
      <rect x="234" y="236" width="26" height="4" rx="2" fill="#fff" opacity="0.2"/>

      {/* Heart */}
      <path d="M263,155 Q260,148 255,152 Q253,148 257,144 Q263,140 268,148 Q272,140 275,144 Q279,148 271,155 Q266,160 263,162 Z" fill="#fff" opacity="0.4"/>

      {/* Stars */}
      <path d="M46,168 L47.5,163 L49,168 L54,169.5 L49,171 L47.5,176 L46,171 L41,169.5 Z" fill="#fff" opacity="0.4"/>
      <path d="M256,188 L257,185 L258,188 L261,189 L258,190 L257,193 L256,190 L253,189 Z" fill="#fff" opacity="0.5"/>
      <path d="M26,130 L27,127 L28,130 L31,131 L28,132 L27,135 L26,132 L23,131 Z" fill="#fff" opacity="0.35"/>

      {/* Wifi dots */}
      <circle cx="150" cy="270" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="162" cy="270" r="3" fill="#fff" opacity="0.5"/>
      <circle cx="174" cy="270" r="3" fill="#fff" opacity="0.3"/>
      <path d="M130,260 Q150,244 170,260" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M118,252 Q150,232 182,252" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.25"/>

    </svg>
  );
}
