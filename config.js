// Pulse deployment configuration.
// IMPORTANT: only use the Supabase PUBLISHABLE key here.
// NEVER put sb_secret_... or service_role keys in this file.
window.PULSE_CONFIG = {
  url: "https://zkkvctvpjjfjpltbwcpj.supabase.co",
  key: "sb_publishable_1VVvmOQHNOW8wFHpXfkOfQ__7HaLkzx"
};

/* Pulse approved maintenance UI: premium non-human wallet illustration.
   Kept inline/vector so the public site needs no third-party image host. */
(function () {
  const addWalletHero = () => {
    const hero = document.querySelector('[data-view="home"] .hero');
    const grid = hero && hero.querySelector('.heroGrid');
    if (!hero || !grid || hero.querySelector('.pulseWalletArt')) return;

    const art = document.createElement('div');
    art.className = 'pulseWalletArt';
    art.setAttribute('aria-hidden', 'true');
    art.innerHTML = `
      <svg viewBox="0 0 620 330" role="img" aria-label="Pulse wallet with savings coins and growth chart">
        <defs>
          <linearGradient id="pwBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6" stop-opacity=".28"/><stop offset="1" stop-color="#22d3ee" stop-opacity=".08"/></linearGradient>
          <linearGradient id="pwWallet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset=".55" stop-color="#6366f1"/><stop offset="1" stop-color="#2563eb"/></linearGradient>
          <linearGradient id="pwCoin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/></linearGradient>
          <linearGradient id="pwChart" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#22d3ee" stop-opacity=".08"/><stop offset="1" stop-color="#22d3ee" stop-opacity=".42"/></linearGradient>
          <filter id="pwGlow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="pwShadow"><feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#000" flood-opacity=".35"/></filter>
        </defs>
        <rect x="12" y="12" width="596" height="306" rx="34" fill="url(#pwBg)" stroke="#ffffff" stroke-opacity=".08"/>
        <circle cx="510" cy="72" r="38" fill="#22d3ee" opacity=".08" filter="url(#pwGlow)"/>
        <path d="M350 246 C395 214 420 226 448 187 S505 160 548 103" fill="none" stroke="#22d3ee" stroke-width="7" stroke-linecap="round" filter="url(#pwGlow)"/>
        <path d="M350 246 C395 214 420 226 448 187 S505 160 548 103 L548 246 Z" fill="url(#pwChart)"/>
        <line x1="354" y1="246" x2="552" y2="246" stroke="#ffffff" stroke-opacity=".13"/>
        <line x1="354" y1="194" x2="552" y2="194" stroke="#ffffff" stroke-opacity=".08"/>
        <line x1="354" y1="142" x2="552" y2="142" stroke="#ffffff" stroke-opacity=".08"/>
        <g transform="translate(392 54) rotate(-10)" filter="url(#pwShadow)">
          <rect width="132" height="92" rx="18" fill="#101827" stroke="#8b5cf6" stroke-width="3"/>
          <rect x="10" y="13" width="112" height="18" rx="9" fill="#ffffff" fill-opacity=".08"/>
          <circle cx="105" cy="22" r="6" fill="#22d3ee"/>
          <path d="M28 62 C40 48 52 78 66 60 S88 48 104 65" fill="none" stroke="#34d399" stroke-width="4" stroke-linecap="round"/>
        </g>
        <g transform="translate(166 96) rotate(-4)" filter="url(#pwShadow)">
          <rect x="0" y="0" width="218" height="142" rx="34" fill="url(#pwWallet)"/>
          <rect x="18" y="18" width="182" height="106" rx="26" fill="#0b1020" fill-opacity=".26" stroke="#ffffff" stroke-opacity=".2"/>
          <rect x="34" y="43" width="80" height="18" rx="9" fill="#ffffff" fill-opacity=".17"/>
          <rect x="34" y="75" width="118" height="11" rx="5" fill="#ffffff" fill-opacity=".11"/>
          <circle cx="170" cy="88" r="20" fill="#22d3ee" fill-opacity=".9"/>
          <path d="M163 88 l7 7 12 -16" fill="none" stroke="#07111b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M-8 32 C-35 28 -42 61 -16 70" fill="none" stroke="#a78bfa" stroke-width="7" stroke-linecap="round"/>
        </g>
        <g filter="url(#pwShadow)">
          <ellipse cx="104" cy="247" rx="54" ry="16" fill="#22d3ee" opacity=".14"/>
          <path d="M74 239 C80 201 87 178 104 158 C121 178 128 201 134 239 Z" fill="#34d399" opacity=".95"/>
          <path d="M103 158 C92 141 91 128 104 117 C117 128 116 141 103 158" fill="#86efac"/>
          <path d="M104 179 C92 160 74 161 66 178 C83 177 94 187 104 202" fill="#4ade80"/>
          <path d="M105 181 C117 162 136 164 143 181 C126 179 115 190 105 204" fill="#22c55e"/>
          <rect x="84" y="234" width="40" height="13" rx="6" fill="#f59e0b"/>
          <rect x="88" y="226" width="32" height="9" rx="4" fill="#fbbf24"/>
        </g>
        <g filter="url(#pwShadow)">
          <circle cx="177" cy="55" r="27" fill="url(#pwCoin)" stroke="#fef3c7" stroke-width="3"/>
          <text x="177" y="65" text-anchor="middle" font-size="28" font-weight="900" fill="#92400e">₹</text>
          <circle cx="286" cy="58" r="23" fill="url(#pwCoin)" stroke="#fef3c7" stroke-width="3"/>
          <text x="286" y="67" text-anchor="middle" font-size="24" font-weight="900" fill="#92400e">₹</text>
          <circle cx="324" cy="272" r="28" fill="url(#pwCoin)" stroke="#fef3c7" stroke-width="3"/>
          <text x="324" y="281" text-anchor="middle" font-size="27" font-weight="900" fill="#92400e">₹</text>
          <circle cx="465" cy="275" r="21" fill="url(#pwCoin)" stroke="#fef3c7" stroke-width="3"/>
          <text x="465" y="282" text-anchor="middle" font-size="21" font-weight="900" fill="#92400e">₹</text>
        </g>
        <g transform="translate(505 44)" filter="url(#pwShadow)">
          <path d="M0 40 L22 18 L48 27 L64 0 L76 10 L55 42 L31 33 L12 54 Z" fill="#f8fafc"/>
          <path d="M48 27 L64 0 L70 15" fill="#22d3ee"/>
        </g>
      </svg>`;

    const total = grid.lastElementChild;
    if (total) total.insertAdjacentElement('beforebegin', art);
    else grid.appendChild(art);

    const style = document.createElement('style');
    style.id = 'pulseWalletArtStyle';
    style.textContent = `
      .pulseWalletArt{position:absolute;right:17%;top:52px;width:min(360px,30vw);opacity:.92;pointer-events:none;z-index:0;filter:drop-shadow(0 18px 38px #0005)}
      .pulseWalletArt svg{display:block;width:100%;height:auto}
      [data-view="home"] .heroGrid>div{position:relative;z-index:1}
      @media(max-width:1100px){.pulseWalletArt{right:2%;width:min(330px,38vw);opacity:.34}}
      @media(max-width:680px){.pulseWalletArt{position:relative;right:auto;top:auto;width:100%;max-width:360px;margin:4px auto -4px;opacity:.9;order:3}.pulseWalletArt+div{position:relative}.heroGrid{display:flex!important;flex-direction:column}.heroGrid>div:first-child{order:1}.heroGrid>div:last-child{order:2}.pulseWalletArt{order:1}.heroGrid>div:first-child{order:2}.heroGrid>div:last-child{order:3}}
    `;
    document.head.appendChild(style);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addWalletHero, { once: true });
  else addWalletHero();
})();
