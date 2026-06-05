/*
 * components/illustrations/MagicianIllus.jsx
 *
 * Welcome-screen illustration.
 * Pure SVG — no external dependencies, no styles needed.
 */

export default function MagicianIllus() {
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Ferris wheel background */}
      <circle cx="210" cy="110" r="80" fill="none" stroke="#d0c8ea" strokeWidth="2.5"/>
      <line x1="210" y1="30"  x2="210" y2="190" stroke="#d0c8ea" strokeWidth="1.5"/>
      <line x1="130" y1="110" x2="290" y2="110" stroke="#d0c8ea" strokeWidth="1.5"/>
      <line x1="153" y1="53"  x2="267" y2="167" stroke="#d0c8ea" strokeWidth="1.5"/>
      <line x1="153" y1="167" x2="267" y2="53"  stroke="#d0c8ea" strokeWidth="1.5"/>
      <circle cx="210" cy="110" r="10" fill="#d0c8ea"/>
      {/* Gondolas */}
      {[[210,30],[290,110],[210,190],[130,110],[267,53],[267,167],[153,53],[153,167]].map(([cx,cy],i) => (
        <rect key={i} x={cx-8} y={cy-6} width="16" height="12" rx="3" fill="#c8c0e0" opacity="0.7"/>
      ))}
      {/* Ground */}
      <line x1="50" y1="260" x2="280" y2="260" stroke="#d0c8ea" strokeWidth="1.5"/>
      {/* Flag pole */}
      <line x1="260" y1="100" x2="260" y2="260" stroke="#c8c0e0" strokeWidth="2"/>
      <polygon points="260,100 285,112 260,124" fill="#e0d0f0"/>
      {/* Camera on tripod */}
      <rect x="68" y="148" width="60" height="38" rx="7" fill="#2d2d3a"/>
      <rect x="74" y="154" width="24" height="24" rx="12" fill="#3d3d4a"/>
      <circle cx="86" cy="166" r="9" fill="#666"/>
      <circle cx="86" cy="166" r="5" fill="#222"/>
      <rect x="100" y="158" width="18" height="12" rx="3" fill="#f5a623"/>
      <rect x="116" y="160" width="10" height="8" rx="2" fill="#f5a623"/>
      <line x1="80"  y1="186" x2="68"  y2="230" stroke="#555" strokeWidth="3"/>
      <line x1="108" y1="186" x2="120" y2="230" stroke="#555" strokeWidth="3"/>
      <line x1="98"  y1="186" x2="98"  y2="230" stroke="#555" strokeWidth="3"/>
      <line x1="58"  y1="230" x2="130" y2="230" stroke="#555" strokeWidth="3"/>
      {/* Magician head */}
      <circle cx="180" cy="88" r="20" fill="#f4c2a0"/>
      <ellipse cx="180" cy="72" rx="18" ry="8" fill="#1a1a2e"/>
      <path d="M172,96 Q176,100 180,96 Q184,100 188,96" stroke="#1a1a2e" strokeWidth="2" fill="none"/>
      {/* Hat */}
      <rect x="162" y="58" width="36" height="26" rx="3" fill="#1a1a2e"/>
      <rect x="156" y="80" width="48" height="7"  rx="3" fill="#2d2d3a"/>
      <rect x="174" y="52" width="12" height="10" rx="1" fill="#e8306e"/>
      {/* Coat */}
      <path d="M155,108 Q165,106 180,108 Q195,106 205,108 L210,180 L150,180 Z" fill="#e8306e"/>
      <path d="M178,108 L170,130 L180,135 L190,130 L182,108" fill="#fff"/>
      {/* Left arm with wand */}
      <line x1="205" y1="120" x2="235" y2="88"  stroke="#e8306e" strokeWidth="12" strokeLinecap="round"/>
      <line x1="234" y1="89"  x2="255" y2="68"  stroke="#333"    strokeWidth="4"  strokeLinecap="round"/>
      <circle cx="256" cy="67" r="6" fill="#fff" stroke="#e8306e" strokeWidth="2"/>
      <text x="262" y="58" fontSize="12" fill="#f5a623">✦</text>
      <text x="248" y="48" fontSize="8"  fill="#fff" opacity="0.9">✦</text>
      {/* Right arm with clapperboard */}
      <line x1="155" y1="120" x2="128" y2="148" stroke="#e8306e" strokeWidth="12" strokeLinecap="round"/>
      <rect x="100" y="140" width="36" height="28" rx="4" fill="#1a1a2e"/>
      <rect x="100" y="140" width="36" height="10" rx="4" fill="#333"/>
      <line x1="107" y1="140" x2="104" y2="150" stroke="#e8306e" strokeWidth="3"/>
      <line x1="116" y1="140" x2="113" y2="150" stroke="#fff"    strokeWidth="3"/>
      <line x1="125" y1="140" x2="122" y2="150" stroke="#e8306e" strokeWidth="3"/>
      <circle cx="118" cy="158" r="7" fill="#e8306e"/>
      <polygon points="115,154 115,162 123,158" fill="#fff"/>
      {/* Legs */}
      <rect x="162" y="178" width="18" height="50" rx="5" fill="#e8306e"/>
      <rect x="182" y="178" width="18" height="50" rx="5" fill="#e8306e"/>
      <rect x="156" y="222" width="24" height="12" rx="4" fill="#8B3a2e"/>
      <rect x="180" y="218" width="22" height="12" rx="4" fill="#8B3a2e"/>
      {/* Teal coat tail */}
      <path d="M155,160 Q140,190 135,220" stroke="#1bb3a0" strokeWidth="8" fill="none" strokeLinecap="round"/>
      {/* Film reel */}
      <circle cx="45" cy="155" r="18" fill="none" stroke="#bbb" strokeWidth="2.5"/>
      <circle cx="45" cy="155" r="6"  fill="#999"/>
      {[0,72,144,216,288].map((a,i) => (
        <circle key={i}
          cx={45 + 14 * Math.cos(a * Math.PI / 180)}
          cy={155 + 14 * Math.sin(a * Math.PI / 180)}
          r="3.5" fill="#888"
        />
      ))}
      {/* Floating reel 2 */}
      <circle cx="230" cy="185" r="14" fill="none" stroke="#bbb" strokeWidth="2"/>
      <circle cx="230" cy="185" r="5"  fill="#999"/>
      {/* Tickets */}
      <rect x="30" y="100" width="28" height="15" rx="4" fill="#f5a623" transform="rotate(-22 30 100)"/>
      <line x1="42" y1="98" x2="38" y2="116" stroke="#e88c1a" strokeWidth="1" strokeDasharray="2,2"/>
      <rect x="42" y="210" width="28" height="15" rx="4" fill="#f5a623" transform="rotate(18 42 210)"/>
      <rect x="235" y="200" width="28" height="15" rx="4" fill="#f5a623" transform="rotate(-12 235 200)"/>
      {/* Sparkles */}
      <text x="140" y="60"  fontSize="14" fill="#f5a623">✦</text>
      <text x="60"  y="80"  fontSize="10" fill="#e8306e">✦</text>
      <text x="205" y="220" fontSize="9"  fill="#f5a623">✦</text>
    </svg>
  );
}
