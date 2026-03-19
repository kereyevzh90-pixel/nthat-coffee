export const MenuIllustrations: Record<string, React.ReactNode> = {
  espresso: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="saucer" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#f0e0c8"/>
          <stop offset="100%" stopColor="#c8a882"/>
        </radialGradient>
        <radialGradient id="cup_e" cx="50%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e8d5c0"/>
        </radialGradient>
        <radialGradient id="espresso_liq" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#5c2a0e"/>
          <stop offset="60%" stopColor="#3a1a08"/>
          <stop offset="100%" stopColor="#1a0a04"/>
        </radialGradient>
        <radialGradient id="crema" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#c8823c" stopOpacity="0.9"/>
          <stop offset="70%" stopColor="#9a5a20" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#6b3810" stopOpacity="0.3"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="162" rx="68" ry="10" fill="#8b6040" opacity="0.25"/>
      <ellipse cx="100" cy="155" rx="65" ry="12" fill="url(#saucer)"/>
      <ellipse cx="100" cy="152" rx="60" ry="9" fill="#e8d0b0" opacity="0.6"/>
      <path d="M55 120 Q55 155 100 155 Q145 155 145 120 L140 85 Q140 75 100 75 Q60 75 60 85 Z" fill="url(#cup_e)"/>
      <path d="M65 118 Q65 148 100 148 Q135 148 135 118 L131 88 Q131 80 100 80 Q69 80 69 88 Z" fill="#d8c5a8" opacity="0.4"/>
      <ellipse cx="100" cy="100" rx="36" ry="34" fill="url(#espresso_liq)"/>
      <ellipse cx="100" cy="98" rx="34" ry="30" fill="url(#crema)"/>
      <path d="M72 95 Q100 88 128 95" stroke="#c87830" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M75 100 Q100 94 125 100" stroke="#b06828" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M78 105 Q100 100 122 105" stroke="#c87830" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M63 90 Q62 105 64 118" stroke="white" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M140 100 Q162 100 162 115 Q162 132 140 132" stroke="#d8c5a8" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M140 100 Q158 100 158 115 Q158 128 140 128" stroke="white" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M88 70 Q84 60 88 50 Q92 40 88 30" stroke="#cccccc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M100 68 Q96 57 100 47 Q104 37 100 27" stroke="#cccccc" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M112 70 Q108 60 112 50 Q116 40 112 30" stroke="#cccccc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  flatwhite: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="fw_cup" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e0cdb5"/>
        </radialGradient>
        <radialGradient id="fw_liq" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#7a4520"/>
          <stop offset="100%" stopColor="#3a1a08"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="162" rx="62" ry="9" fill="#7a5030" opacity="0.2"/>
      <ellipse cx="100" cy="156" rx="60" ry="11" fill="#e8d4b8"/>
      <path d="M58 128 Q58 156 100 156 Q142 156 142 128 L137 82 Q137 72 100 72 Q63 72 63 82 Z" fill="url(#fw_cup)"/>
      <ellipse cx="100" cy="108" rx="38" ry="36" fill="url(#fw_liq)"/>
      <ellipse cx="100" cy="106" rx="36" ry="32" fill="#f5ede0" opacity="0.95"/>
      <path d="M100 118 Q82 108 82 98 Q82 90 90 90 Q96 90 100 96 Q104 90 110 90 Q118 90 118 98 Q118 108 100 118Z" fill="#c8783c" opacity="0.7"/>
      <ellipse cx="88" cy="94" rx="5" ry="3" fill="white" opacity="0.5" transform="rotate(-20 88 94)"/>
      <path d="M66 88 Q65 108 67 126" stroke="white" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round"/>
      <path d="M138 104 Q160 104 160 118 Q160 135 138 135" stroke="#d8c8b0" strokeWidth="7" fill="none" strokeLinecap="round"/>
      <path d="M90 67 Q86 55 90 44 Q94 33 90 22" stroke="#bbb" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M110 67 Q106 55 110 44 Q114 33 110 22" stroke="#bbb" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
    </svg>
  ),

  cappuccino: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="cap_cup" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff8f0"/>
          <stop offset="100%" stopColor="#ddc8a8"/>
        </radialGradient>
        <radialGradient id="cap_foam" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fff5e8"/>
          <stop offset="60%" stopColor="#f0e0c0"/>
          <stop offset="100%" stopColor="#d4b888"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="160" rx="64" ry="11" fill="#7a5030" opacity="0.2"/>
      <ellipse cx="100" cy="154" rx="62" ry="10" fill="#e8d5b8"/>
      <path d="M56 125 Q56 154 100 154 Q144 154 144 125 L139 80 Q139 70 100 70 Q61 70 61 80 Z" fill="url(#cap_cup)"/>
      <ellipse cx="100" cy="105" rx="40" ry="38" fill="#6b3818"/>
      <ellipse cx="100" cy="100" rx="40" ry="35" fill="url(#cap_foam)"/>
      <circle cx="88" cy="95" r="6" fill="white" opacity="0.4"/>
      <circle cx="100" cy="90" r="8" fill="white" opacity="0.35"/>
      <circle cx="113" cy="96" r="5" fill="white" opacity="0.4"/>
      <circle cx="94" cy="108" r="5" fill="white" opacity="0.3"/>
      <circle cx="108" cy="106" r="6" fill="white" opacity="0.35"/>
      <circle cx="86" cy="108" r="4" fill="white" opacity="0.25"/>
      <ellipse cx="100" cy="100" rx="30" ry="26" fill="#8b4820" opacity="0.18"/>
      <path d="M64 86 Q63 106 65 124" stroke="white" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M140 102 Q163 102 163 118 Q163 136 140 136" stroke="#d4c0a0" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M90 64 Q86 52 90 40" stroke="#ccc" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M110 64 Q106 52 110 40" stroke="#ccc" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  latte: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="lat_glass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4e8f0" stopOpacity="0.6"/>
          <stop offset="40%" stopColor="#f0f8ff" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#b8d4e0" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="lat_layers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5ede0"/>
          <stop offset="25%" stopColor="#e8d0a8"/>
          <stop offset="55%" stopColor="#c89060"/>
          <stop offset="80%" stopColor="#7a4020"/>
          <stop offset="100%" stopColor="#4a2010"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="38" ry="7" fill="#7a5030" opacity="0.2"/>
      <path d="M68 40 L62 165 Q62 172 100 172 Q138 172 138 165 L132 40 Z" fill="url(#lat_layers)"/>
      <path d="M68 40 L62 165 Q62 172 100 172 Q138 172 138 165 L132 40 Z" fill="url(#lat_glass)"/>
      <ellipse cx="100" cy="52" rx="32" ry="8" fill="#f8f0e4"/>
      <ellipse cx="100" cy="50" rx="30" ry="6" fill="#fff8f0"/>
      <path d="M100 54 Q88 46 88 42 Q94 38 100 44 Q106 38 112 42 Q112 46 100 54Z" fill="#d4904c" opacity="0.5"/>
      <path d="M71 50 L66 155" stroke="white" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M90 38 Q86 26 90 15" stroke="#ccc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M110 38 Q106 26 110 15" stroke="#ccc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  raf: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="raf_liq" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0e4d0"/>
          <stop offset="30%" stopColor="#ddc090"/>
          <stop offset="70%" stopColor="#b07840"/>
          <stop offset="100%" stopColor="#6b3818"/>
        </linearGradient>
        <radialGradient id="raf_foam" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fff8f0"/>
          <stop offset="100%" stopColor="#f0dfc0"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="168" rx="40" ry="7" fill="#7a5030" opacity="0.2"/>
      <path d="M64 38 L60 164 Q60 172 100 172 Q140 172 140 164 L136 38 Z" fill="url(#raf_liq)"/>
      <ellipse cx="100" cy="44" rx="36" ry="14" fill="url(#raf_foam)"/>
      <path d="M72 42 Q85 35 100 38 Q115 35 128 42" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
      <path d="M78 48 Q90 42 100 44 Q110 42 122 48" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <ellipse cx="100" cy="42" rx="20" ry="6" fill="#c89040" opacity="0.2"/>
      <path d="M67 50 L63 155" stroke="white" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M88 28 Q84 17 88 8" stroke="#ccc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M100 26 Q96 15 100 6" stroke="#ccc" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M112 28 Q108 17 112 8" stroke="#ccc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  coldbrew: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cb_liq" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a3010"/>
          <stop offset="100%" stopColor="#1a0a04"/>
        </linearGradient>
        <linearGradient id="cb_glass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a8d4e8" stopOpacity="0.5"/>
          <stop offset="50%" stopColor="#e8f4ff" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#90c0d8" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="172" rx="36" ry="6" fill="#3a2010" opacity="0.25"/>
      <path d="M70 55 L66 166 Q66 173 100 173 Q134 173 134 166 L130 55 Z" fill="url(#cb_liq)"/>
      <path d="M70 55 L66 166 Q66 173 100 173 Q134 173 134 166 L130 55 Z" fill="url(#cb_glass)"/>
      <rect x="76" y="80" width="22" height="22" rx="4" fill="white" opacity="0.25" transform="rotate(15 87 91)"/>
      <rect x="100" y="75" width="20" height="20" rx="4" fill="white" opacity="0.2" transform="rotate(-10 110 85)"/>
      <rect x="82" y="108" width="18" height="18" rx="4" fill="white" opacity="0.22" transform="rotate(8 91 117)"/>
      <rect x="105" y="105" width="19" height="19" rx="4" fill="white" opacity="0.18" transform="rotate(-15 115 115)"/>
      <rect x="78" y="82" width="8" height="4" rx="2" fill="white" opacity="0.4" transform="rotate(15 82 84)"/>
      <rect x="118" y="30" width="6" height="140" rx="3" fill="#d4784a" opacity="0.85"/>
      <rect x="119" y="30" width="2" height="140" rx="1" fill="white" opacity="0.3"/>
      <path d="M73 62 L69 158" stroke="white" strokeWidth="4" fill="none" opacity="0.45" strokeLinecap="round"/>
    </svg>
  ),

  matcha: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="mat_liq" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8e8a0"/>
          <stop offset="40%" stopColor="#88c060"/>
          <stop offset="100%" stopColor="#4a8030"/>
        </linearGradient>
        <radialGradient id="mat_foam" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#e8f8d8"/>
          <stop offset="100%" stopColor="#c0dca0"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="168" rx="40" ry="7" fill="#4a7030" opacity="0.2"/>
      <path d="M64 42 L60 163 Q60 171 100 171 Q140 171 140 163 L136 42 Z" fill="url(#mat_liq)"/>
      <ellipse cx="100" cy="48" rx="36" ry="12" fill="url(#mat_foam)"/>
      <path d="M100 52 Q88 44 88 38 Q100 34 112 38 Q112 44 100 52Z" fill="#68a840" opacity="0.6"/>
      <path d="M100 52 L100 34" stroke="#50903a" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M67 54 L63 155" stroke="white" strokeWidth="4" fill="none" opacity="0.45" strokeLinecap="round"/>
      <path d="M90 36 Q86 24 90 14" stroke="#a0c880" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M110 36 Q106 24 110 14" stroke="#a0c880" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  masala: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="mas_cup" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff4e8"/>
          <stop offset="100%" stopColor="#ddc0a0"/>
        </radialGradient>
        <radialGradient id="mas_liq" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#d48040"/>
          <stop offset="100%" stopColor="#7a3818"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="160" rx="62" ry="10" fill="#8b5030" opacity="0.2"/>
      <ellipse cx="100" cy="153" rx="60" ry="9" fill="#e8d0b0"/>
      <path d="M58 122 Q58 153 100 153 Q142 153 142 122 L137 80 Q137 70 100 70 Q63 70 63 80 Z" fill="url(#mas_cup)"/>
      <ellipse cx="100" cy="102" rx="38" ry="36" fill="url(#mas_liq)"/>
      <ellipse cx="100" cy="100" rx="36" ry="32" fill="#c87030" opacity="0.5"/>
      <circle cx="100" cy="100" r="6" fill="#e89050" opacity="0.8"/>
      <path d="M100 90 L102 96 L100 94 L98 96Z" fill="#c86020" opacity="0.7"/>
      <path d="M100 110 L102 104 L100 106 L98 104Z" fill="#c86020" opacity="0.7"/>
      <path d="M90 100 L96 102 L94 100 L96 98Z" fill="#c86020" opacity="0.7"/>
      <path d="M110 100 L104 102 L106 100 L104 98Z" fill="#c86020" opacity="0.7"/>
      <path d="M66 86 Q65 106 67 121" stroke="white" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M138 100 Q160 100 160 116 Q160 133 138 133" stroke="#d4b898" strokeWidth="7" fill="none" strokeLinecap="round"/>
      <path d="M90 64 Q86 52 90 42" stroke="#dda070" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M110 64 Q106 52 110 42" stroke="#dda070" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  oolong: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="ool_cup" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fafaf8"/>
          <stop offset="100%" stopColor="#e0ddd8"/>
        </radialGradient>
        <radialGradient id="ool_liq" cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#d4b878"/>
          <stop offset="100%" stopColor="#8a6030"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="162" rx="55" ry="9" fill="#7a6040" opacity="0.2"/>
      <ellipse cx="100" cy="154" rx="52" ry="8" fill="#e0d8c8"/>
      <path d="M62 128 Q60 154 100 154 Q140 154 138 128 Q136 90 100 88 Q64 88 62 128Z" fill="url(#ool_cup)"/>
      <ellipse cx="100" cy="102" rx="34" ry="30" fill="url(#ool_liq)"/>
      <ellipse cx="96" cy="98" rx="16" ry="8" fill="#e8d090" opacity="0.4" transform="rotate(-20 96 98)"/>
      <ellipse cx="108" cy="106" rx="8" ry="3" fill="#7a6028" opacity="0.6" transform="rotate(30 108 106)"/>
      <path d="M66 98 Q65 118 67 130" stroke="white" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M135 108 Q152 108 152 120 Q152 132 135 132" stroke="#d4ccb8" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M92 84 Q89 74 92 64" stroke="#c8c0a8" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M108 84 Q105 74 108 64" stroke="#c8c0a8" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
    </svg>
  ),

  ginger: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gin_liq" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8e870"/>
          <stop offset="50%" stopColor="#e8c840"/>
          <stop offset="100%" stopColor="#c8a020"/>
        </linearGradient>
        <linearGradient id="gin_glass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b0d8e8" stopOpacity="0.5"/>
          <stop offset="50%" stopColor="#f0f8ff" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#90c0d0" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="36" ry="6" fill="#a09020" opacity="0.2"/>
      <path d="M68 52 L64 165 Q64 172 100 172 Q136 172 136 165 L132 52 Z" fill="url(#gin_liq)"/>
      <path d="M68 52 L64 165 Q64 172 100 172 Q136 172 136 165 L132 52 Z" fill="url(#gin_glass)"/>
      <circle cx="88" cy="120" r="22" fill="#f0d830" opacity="0.85"/>
      <circle cx="88" cy="120" r="18" fill="#f8e840"/>
      <line x1="88" y1="102" x2="88" y2="138" stroke="#e0c020" strokeWidth="1.5" opacity="0.6"/>
      <line x1="70" y1="120" x2="106" y2="120" stroke="#e0c020" strokeWidth="1.5" opacity="0.6"/>
      <line x1="75" y1="107" x2="101" y2="133" stroke="#e0c020" strokeWidth="1" opacity="0.4"/>
      <line x1="75" y1="133" x2="101" y2="107" stroke="#e0c020" strokeWidth="1" opacity="0.4"/>
      <circle cx="88" cy="120" r="5" fill="#f8e840"/>
      <path d="M112 108 Q122 104 126 112 Q128 120 120 124 Q112 126 108 118 Q106 110 112 108Z" fill="#d4a040" opacity="0.75"/>
      <path d="M71 60 L67 158" stroke="white" strokeWidth="4" fill="none" opacity="0.45" strokeLinecap="round"/>
    </svg>
  ),

  croissant: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="cr_body" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f0c868"/>
          <stop offset="50%" stopColor="#d4942c"/>
          <stop offset="100%" stopColor="#9a5c10"/>
        </radialGradient>
        <radialGradient id="cr_dark" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#c07820"/>
          <stop offset="100%" stopColor="#7a4010"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="168" rx="72" ry="14" fill="#f0e8d8"/>
      <ellipse cx="100" cy="164" rx="68" ry="11" fill="#faf5ee"/>
      <ellipse cx="100" cy="148" rx="55" ry="10" fill="#a07030" opacity="0.2"/>
      <path d="M40 120 Q35 90 55 72 Q75 55 100 60 Q125 55 145 72 Q165 90 160 120 Q155 140 140 148 Q120 155 100 148 Q80 155 60 148 Q45 140 40 120Z" fill="url(#cr_dark)"/>
      <path d="M44 115 Q40 88 60 72 Q80 57 100 62 Q120 57 140 72 Q160 88 156 115 Q152 134 138 142 Q118 150 100 143 Q82 150 62 142 Q48 134 44 115Z" fill="url(#cr_body)"/>
      <path d="M50 100 Q60 78 80 70 Q100 64 120 70 Q140 78 150 100" stroke="#e8b050" strokeWidth="2.5" fill="none" opacity="0.5"/>
      <path d="M46 110 Q58 85 80 76 Q100 70 120 76 Q142 85 154 110" stroke="#f0c868" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <path d="M72 72 Q100 60 128 72" stroke="#f8e098" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
      <ellipse cx="82" cy="82" rx="6" ry="2" fill="#d4a840" opacity="0.7" transform="rotate(20 82 82)"/>
      <ellipse cx="100" cy="76" rx="7" ry="2" fill="#c89830" opacity="0.65" transform="rotate(-10 100 76)"/>
      <ellipse cx="118" cy="82" rx="5" ry="2" fill="#d4a840" opacity="0.7" transform="rotate(15 118 82)"/>
    </svg>
  ),

  avocado: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="av_bread" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8903c"/>
          <stop offset="100%" stopColor="#8a5c1c"/>
        </linearGradient>
        <radialGradient id="av_avocado" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#98d850"/>
          <stop offset="60%" stopColor="#68b030"/>
          <stop offset="100%" stopColor="#3a7018"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="74" ry="14" fill="#f0e8d8"/>
      <ellipse cx="100" cy="166" rx="70" ry="11" fill="#faf5ee"/>
      <rect x="32" y="108" width="136" height="46" rx="8" fill="url(#av_bread)"/>
      <rect x="36" y="90" width="128" height="22" rx="6" fill="#78b838" opacity="0.9"/>
      <path d="M50 90 Q50 55 70 45 Q90 35 90 55 Q90 75 70 85 Z" fill="url(#av_avocado)"/>
      <circle cx="70" cy="68" r="12" fill="#8b5a1c"/>
      <circle cx="67" cy="65" r="5" fill="#a87030" opacity="0.5"/>
      <path d="M110 90 Q110 58 128 48 Q146 38 146 58 Q146 76 128 86 Z" fill="url(#av_avocado)" opacity="0.9"/>
      <circle cx="128" cy="68" r="11" fill="#8b5a1c"/>
      <ellipse cx="100" cy="80" rx="20" ry="16" fill="white" opacity="0.92"/>
      <ellipse cx="100" cy="80" rx="10" ry="8" fill="#f8c040"/>
      <ellipse cx="97" cy="77" rx="4" ry="3" fill="#fdd060" opacity="0.6"/>
      <path d="M42 90 Q45 82 48 88" stroke="#60c028" strokeWidth="1.5" fill="none"/>
      <path d="M47 90 Q51 80 55 88" stroke="#50b020" strokeWidth="1.5" fill="none"/>
      <path d="M148 90 Q152 80 156 88" stroke="#60c028" strokeWidth="1.5" fill="none"/>
    </svg>
  ),

  cheesecake: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cc_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff8f0"/>
          <stop offset="100%" stopColor="#f0dfc0"/>
        </linearGradient>
        <linearGradient id="cc_base" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8903c"/>
          <stop offset="100%" stopColor="#8a5c1c"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="76" ry="14" fill="#f0e8d8"/>
      <ellipse cx="100" cy="166" rx="72" ry="11" fill="#faf5ee"/>
      <path d="M42 145 L158 145 L158 158 Q158 164 100 164 Q42 164 42 158 Z" fill="url(#cc_base)"/>
      <path d="M40 85 L40 145 L160 145 L160 85 Q160 75 100 75 Q40 75 40 85 Z" fill="url(#cc_body)"/>
      <ellipse cx="100" cy="82" rx="60" ry="10" fill="#fff8f0"/>
      <path d="M60 82 Q80 72 100 78 Q120 72 140 82" fill="#d0405c" opacity="0.85"/>
      <path d="M60 82 Q80 75 100 80 Q120 75 140 82 Q120 88 100 84 Q80 88 60 82Z" fill="#c83850"/>
      <circle cx="72" cy="77" r="8" fill="#cc2244"/>
      <circle cx="69" cy="74" r="3" fill="#e83060" opacity="0.6"/>
      <circle cx="88" cy="74" r="7" fill="#8844aa"/>
      <circle cx="104" cy="75" r="8" fill="#cc2244"/>
      <circle cx="101" cy="72" r="3" fill="#e83060" opacity="0.6"/>
      <circle cx="120" cy="73" r="7" fill="#8844aa"/>
      <circle cx="135" cy="76" r="6" fill="#cc2244"/>
      <path d="M42 88 L42 143" stroke="white" strokeWidth="2" opacity="0.5"/>
    </svg>
  ),

  granola: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="gr_bowl" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f8f4f0"/>
          <stop offset="100%" stopColor="#e0d4c4"/>
        </radialGradient>
        <radialGradient id="gr_yogurt" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#f4f0e8"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="172" rx="66" ry="10" fill="#7a6040" opacity="0.2"/>
      <path d="M34 110 Q34 172 100 172 Q166 172 166 110 Q166 80 100 80 Q34 80 34 110Z" fill="url(#gr_bowl)"/>
      <path d="M44 112 Q44 162 100 162 Q156 162 156 112 Q156 88 100 88 Q44 88 44 112Z" fill="url(#gr_yogurt)"/>
      <ellipse cx="100" cy="95" rx="56" ry="10" fill="white" opacity="0.8"/>
      <ellipse cx="72" cy="100" rx="10" ry="7" fill="#c87c28" opacity="0.85" transform="rotate(-15 72 100)"/>
      <ellipse cx="90" cy="95" rx="9" ry="6" fill="#d4902c" opacity="0.8" transform="rotate(10 90 95)"/>
      <ellipse cx="110" cy="97" rx="10" ry="6" fill="#c87c28" opacity="0.85" transform="rotate(-8 110 97)"/>
      <ellipse cx="128" cy="102" rx="9" ry="7" fill="#d4902c" opacity="0.8" transform="rotate(12 128 102)"/>
      <circle cx="85" cy="102" r="7" fill="#d83858"/>
      <circle cx="83" cy="100" r="2.5" fill="#f05070" opacity="0.6"/>
      <circle cx="115" cy="104" r="6" fill="#8844aa"/>
      <circle cx="100" cy="100" r="7" fill="#d83858"/>
      <path d="M60 88 Q75 82 90 88 Q95 90 92 96" stroke="#e8a020" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
      <ellipse cx="100" cy="83" rx="56" ry="10" fill="none" stroke="white" strokeWidth="2" opacity="0.5"/>
      <path d="M37 108 Q36 130 40 150" stroke="white" strokeWidth="3" fill="none" opacity="0.35" strokeLinecap="round"/>
    </svg>
  ),

  syrniki: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="sy_cake" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f0c878"/>
          <stop offset="60%" stopColor="#d4943c"/>
          <stop offset="100%" stopColor="#9a6020"/>
        </radialGradient>
        <radialGradient id="sy_cream" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#f4f0e8"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="172" rx="74" ry="12" fill="#f0e8d8"/>
      <ellipse cx="100" cy="168" rx="70" ry="9" fill="#faf5ee"/>
      <ellipse cx="100" cy="148" rx="48" ry="18" fill="url(#sy_cake)"/>
      <ellipse cx="100" cy="128" rx="44" ry="16" fill="url(#sy_cake)"/>
      <ellipse cx="100" cy="108" rx="42" ry="15" fill="url(#sy_cake)"/>
      <ellipse cx="100" cy="100" rx="38" ry="8" fill="#e8a030" opacity="0.7"/>
      <ellipse cx="100" cy="96" rx="18" ry="10" fill="url(#sy_cream)"/>
      <ellipse cx="100" cy="94" rx="15" ry="7" fill="white" opacity="0.8"/>
      <path d="M95 92 Q100 80 108 85 Q114 90 108 96 Q102 100 95 92Z" fill="#cc2244" opacity="0.85"/>
      <path d="M108 88 Q116 78 110 98" stroke="#cc2244" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round"/>
      <ellipse cx="82" cy="98" rx="12" ry="5" fill="white" opacity="0.18" transform="rotate(-20 82 98)"/>
    </svg>
  ),

  tiramisu: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ti_cream" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff8f0"/>
          <stop offset="100%" stopColor="#f0e8d8"/>
        </linearGradient>
        <linearGradient id="ti_biscuit" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9a6428"/>
          <stop offset="100%" stopColor="#5c3a10"/>
        </linearGradient>
        <linearGradient id="ti_cocoa" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5c3010"/>
          <stop offset="100%" stopColor="#3a1c08"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="76" ry="13" fill="#f0e8d8"/>
      <ellipse cx="100" cy="166" rx="72" ry="10" fill="#faf5ee"/>
      <rect x="40" y="148" width="120" height="14" rx="3" fill="url(#ti_cream)"/>
      <rect x="40" y="126" width="120" height="22" rx="3" fill="url(#ti_biscuit)"/>
      <line x1="40" y1="130" x2="160" y2="130" stroke="#7a4c18" strokeWidth="1" opacity="0.5"/>
      <line x1="40" y1="136" x2="160" y2="136" stroke="#7a4c18" strokeWidth="1" opacity="0.5"/>
      <line x1="40" y1="142" x2="160" y2="142" stroke="#7a4c18" strokeWidth="1" opacity="0.5"/>
      <line x1="80" y1="126" x2="80" y2="148" stroke="#6a3c10" strokeWidth="1" opacity="0.4"/>
      <line x1="120" y1="126" x2="120" y2="148" stroke="#6a3c10" strokeWidth="1" opacity="0.4"/>
      <rect x="40" y="100" width="120" height="28" rx="3" fill="url(#ti_cream)"/>
      <rect x="40" y="72" width="120" height="30" rx="4" fill="#fff8f0"/>
      <rect x="40" y="65" width="120" height="12" rx="3" fill="url(#ti_cocoa)" opacity="0.85"/>
      <ellipse cx="68" cy="68" rx="7" ry="5" fill="#3a1c08" opacity="0.8" transform="rotate(20 68 68)"/>
      <line x1="68" y1="63" x2="68" y2="73" stroke="#5a3010" strokeWidth="1" opacity="0.5"/>
      <ellipse cx="100" cy="66" rx="7" ry="5" fill="#3a1c08" opacity="0.8" transform="rotate(-10 100 66)"/>
      <line x1="100" y1="61" x2="100" y2="71" stroke="#5a3010" strokeWidth="1" opacity="0.5"/>
      <ellipse cx="132" cy="68" rx="7" ry="5" fill="#3a1c08" opacity="0.8" transform="rotate(15 132 68)"/>
      <line x1="132" y1="63" x2="132" y2="73" stroke="#5a3010" strokeWidth="1" opacity="0.5"/>
      <rect x="40" y="65" width="4" height="100" rx="2" fill="white" opacity="0.2"/>
    </svg>
  ),
};
