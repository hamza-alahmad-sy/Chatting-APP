/*
 * components/illustrations/ClapperIllus.jsx
 *
 * Auth-screen (Sign In / Sign Up) side-panel illustration.
 * Pure SVG — no external dependencies.
 */

export default function ClapperIllus() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Film strip — left */}
      <rect x="14" y="68" width="14" height="70" rx="3" fill="#2d2d3a"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x="16" y={72 + i * 16} width="10" height="10" rx="1.5" fill="#444"/>
      ))}
      {/* Film strip — right */}
      <rect x="172" y="68" width="14" height="70" rx="3" fill="#2d2d3a"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x="174" y={72 + i * 16} width="10" height="10" rx="1.5" fill="#444"/>
      ))}
      {/* Clapperboard body */}
      <rect x="34" y="78" width="132" height="90" rx="10" fill="#1a1a2e"/>
      {/* Clapperboard top stripe row */}
      <rect x="34" y="78" width="132" height="28" rx="10" fill="#2d2d3a"/>
      {[0,1,2,3,4].map(i => (
        <line key={i}
          x1={47 + i * 20} y1="78"
          x2={40 + i * 20} y2="106"
          stroke={i % 2 === 0 ? '#e8306e' : '#fff'}
          strokeWidth="7"
        />
      ))}
      {/* Play button */}
      <circle cx="100" cy="132" r="24" fill="#e8306e"/>
      <polygon points="93,121 93,143 114,132" fill="#fff"/>
      {/* Popcorn */}
      <rect x="136" y="136" width="32" height="36" rx="4" fill="#f5a623"/>
      <rect x="138" y="132" width="28" height="9"  rx="2.5" fill="#e88c1a"/>
      {[0,1,2].map(i => (
        <circle key={i} cx={143 + i * 9} cy={128} r={7 - i} fill="#fff" opacity="0.9"/>
      ))}
      {/* Film reel */}
      <circle cx="42" cy="148" r="16" fill="none" stroke="#555" strokeWidth="2.5"/>
      <circle cx="42" cy="148" r="6"  fill="#555"/>
      {[0,72,144,216,288].map((a,i) => (
        <circle key={i}
          cx={42 + 11 * Math.cos(a * Math.PI / 180)}
          cy={148 + 11 * Math.sin(a * Math.PI / 180)}
          r="3" fill="#666"
        />
      ))}
      {/* Ticket */}
      <rect x="22" y="58" width="28" height="16" rx="4" fill="#f5a623" transform="rotate(-28 22 58)"/>
      <line x1="30" y1="50" x2="26" y2="68" stroke="#e88c1a" strokeWidth="1" strokeDasharray="2,2"/>
      {/* Sparkles */}
      <text x="154" y="72"  fontSize="12" fill="#fff"    opacity="0.8">✦</text>
      <text x="30"  y="102" fontSize="8"  fill="#f5a623"            >✦</text>
      <text x="168" y="158" fontSize="10" fill="#fff"    opacity="0.7">✦</text>
      <text x="105" y="62"  fontSize="9"  fill="#f5a623"            >✦</text>
    </svg>
  );
}
