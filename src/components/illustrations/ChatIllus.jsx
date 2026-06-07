/*
 * components/illustrations/ChatIllus.jsx
 *
 * Welcome-screen illustration — replaces MagicianIllus
 * شخصية تجلس أمام لابتوب وتتدردش مع فقاعات رسائل طائرة
 */

export default function ChatIllus() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>

      {/* Background circle */}
      <circle cx="200" cy="200" r="170" fill="#f0ecfa"/>

      {/* Desk surface */}
      <rect x="60" y="268" width="280" height="14" rx="7" fill="#d8d0ee"/>
      <rect x="80" y="282" width="12" height="50" rx="4" fill="#c8c0e0"/>
      <rect x="308" y="282" width="12" height="50" rx="4" fill="#c8c0e0"/>

      {/* Laptop */}
      <rect x="118" y="232" width="164" height="8" rx="4" fill="#b8b0d8"/>
      <rect x="128" y="148" width="144" height="90" rx="10" fill="#2d2a4a"/>
      <rect x="134" y="154" width="132" height="78" rx="7" fill="#1a1830"/>

      {/* Chat UI on screen */}
      <rect x="140" y="162" width="60" height="16" rx="8" fill="#e8306e" opacity="0.9"/>
      <circle cx="152" cy="170" r="2.5" fill="#fff"/>
      <circle cx="162" cy="170" r="2.5" fill="#fff"/>
      <circle cx="172" cy="170" r="2.5" fill="#fff"/>

      <rect x="186" y="184" width="70" height="14" rx="7" fill="#5a54c8" opacity="0.9"/>
      <circle cx="198" cy="191" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="207" cy="191" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="216" cy="191" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="225" cy="191" r="2" fill="#fff" opacity="0.8"/>

      <rect x="140" y="202" width="50" height="14" rx="7" fill="#e8306e" opacity="0.7"/>
      <circle cx="152" cy="209" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="160" cy="209" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="168" cy="209" r="2" fill="#fff" opacity="0.8"/>

      {/* Chair */}
      <rect x="170" y="200" width="60" height="70" rx="8" fill="#c8c0e0"/>
      <rect x="174" y="204" width="52" height="62" rx="6" fill="#d8d0ee"/>

      {/* Torso */}
      <rect x="175" y="222" width="50" height="55" rx="10" fill="#e8306e"/>
      <path d="M192,222 L200,235 L208,222" fill="#d42060"/>

      {/* Head */}
      <circle cx="200" cy="205" r="22" fill="#f4c8a0"/>
      <ellipse cx="200" cy="188" rx="20" ry="10" fill="#3a2a1a"/>
      <ellipse cx="184" cy="198" rx="6" ry="12" fill="#3a2a1a"/>
      <ellipse cx="216" cy="198" rx="6" ry="12" fill="#3a2a1a"/>

      {/* Eyes */}
      <ellipse cx="193" cy="205" rx="3" ry="3.5" fill="#fff"/>
      <ellipse cx="207" cy="205" rx="3" ry="3.5" fill="#fff"/>
      <circle cx="193" cy="206" r="2" fill="#2d1a0a"/>
      <circle cx="207" cy="206" r="2" fill="#2d1a0a"/>
      <circle cx="194" cy="205" r="0.8" fill="#fff"/>
      <circle cx="208" cy="205" r="0.8" fill="#fff"/>
      <path d="M194,213 Q200,218 206,213" stroke="#c87a50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Arms */}
      <path d="M175,248 Q155,262 148,238" stroke="#f4c8a0" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M225,248 Q245,262 252,238" stroke="#f4c8a0" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <ellipse cx="143" cy="236" rx="10" ry="7" fill="#f4c8a0"/>
      <ellipse cx="257" cy="236" rx="10" ry="7" fill="#f4c8a0"/>

      {/* Floating chat bubble — top left */}
      <rect x="28" y="80" width="90" height="38" rx="12" fill="#fff" opacity="0.9"/>
      <rect x="28" y="80" width="90" height="38" rx="12" fill="none" stroke="#e8306e" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="46" cy="99" r="4" fill="#e8306e" opacity="0.7"/>
      <circle cx="58" cy="99" r="4" fill="#e8306e" opacity="0.5"/>
      <circle cx="70" cy="99" r="4" fill="#e8306e" opacity="0.3"/>
      <path d="M44,118 L38,130 L58,118" fill="#fff"/>
      <path d="M44,118 L38,130 L58,118" fill="none" stroke="#e8306e" strokeWidth="1.5" opacity="0.6"/>

      {/* Floating chat bubble — top right */}
      <rect x="282" y="60" width="100" height="40" rx="12" fill="#5a54c8" opacity="0.85"/>
      <rect x="295" y="74" width="28" height="5" rx="2.5" fill="#fff" opacity="0.7"/>
      <rect x="295" y="84" width="48" height="5" rx="2.5" fill="#fff" opacity="0.5"/>
      <path d="M370,100 L376,114 L356,100" fill="#5a54c8" opacity="0.85"/>

      {/* Small bubble right */}
      <rect x="310" y="170" width="72" height="32" rx="10" fill="#fff" opacity="0.9"/>
      <rect x="310" y="170" width="72" height="32" rx="10" fill="none" stroke="#5a54c8" strokeWidth="1.2" opacity="0.5"/>
      <rect x="320" y="180" width="16" height="4" rx="2" fill="#5a54c8" opacity="0.5"/>
      <rect x="320" y="188" width="28" height="4" rx="2" fill="#5a54c8" opacity="0.3"/>
      <path d="M322,202 L316,212 L336,202" fill="#fff"/>
      <path d="M322,202 L316,212 L336,202" fill="none" stroke="#5a54c8" strokeWidth="1.2" opacity="0.5"/>

      {/* Notification bell */}
      <circle cx="48" cy="165" r="18" fill="#f5a623" opacity="0.9"/>
      <path d="M48,153 Q48,150 51,150 Q58,150 60,157 Q62,163 62,168 L34,168 Q34,163 36,157 Q38,150 45,150 Q48,150 48,153" fill="#fff" opacity="0.9"/>
      <rect x="44" y="167" width="8" height="4" rx="2" fill="#fff" opacity="0.9"/>
      <circle cx="48" cy="175" r="4" fill="#fff" opacity="0.9"/>
      <circle cx="60" cy="152" r="7" fill="#e8306e"/>
      <text x="60" y="156" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="sans-serif" fontWeight="700">3</text>

      {/* Sparkles */}
      <path d="M82,50 L84,44 L86,50 L92,52 L86,54 L84,60 L82,54 L76,52 Z" fill="#f5a623" opacity="0.8"/>
      <path d="M330,130 L331.5,125 L333,130 L338,131.5 L333,133 L331.5,138 L330,133 L325,131.5 Z" fill="#e8306e" opacity="0.6"/>
      <path d="M60,300 L61,297 L62,300 L65,301 L62,302 L61,305 L60,302 L57,301 Z" fill="#f5a623" opacity="0.6"/>

      {/* Typing bubble */}
      <rect x="108" y="330" width="60" height="28" rx="14" fill="#e8306e" opacity="0.85"/>
      <circle cx="124" cy="344" r="3.5" fill="#fff" opacity="0.9"/>
      <circle cx="138" cy="344" r="3.5" fill="#fff" opacity="0.9"/>
      <circle cx="152" cy="344" r="3.5" fill="#fff" opacity="0.9"/>

      {/* Online indicator */}
      <circle cx="255" cy="330" r="12" fill="#fff" opacity="0.9"/>
      <circle cx="255" cy="330" r="7" fill="#22c55e"/>
      <circle cx="255" cy="330" r="4" fill="#16a34a"/>

      {/* Wifi waves */}
      <path d="M296,310 Q316,290 336,310" stroke="#5a54c8" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M304,318 Q316,308 328,318" stroke="#5a54c8" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <circle cx="316" cy="324" r="3.5" fill="#5a54c8" opacity="0.8"/>

    </svg>
  );
}
