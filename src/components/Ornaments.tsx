import React from 'react';

/**
 * Reusable luxury SVG ornaments, royal Rajasthani palace scalloped arches (Mehrab/Jharokha),
 * brass palace lanterns with flickering candles, royal elephant emblems,
 * embossed frames, Bismillah calligraphy, and Rajput crimson wax seal.
 */

// Grand Rajasthani Scalloped Mehrab Archway (Multi-cusped Jharokha frame)
export const RajasthaniMehrabArch: React.FC<{
  className?: string;
  children?: React.ReactNode;
  showGarland?: boolean;
}> = ({
  className = "w-full",
  children,
  showGarland = true
}) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Top Scalloped Arch Frame SVG (Cleaned: no odd eye dots, elegant royal profile) */}
      <svg
        viewBox="0 0 400 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px] pointer-events-none select-none text-[#C9A24A]"
        aria-hidden="true"
      >
        <defs>
          {/* Gold leaf gradient */}
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A24A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#C9A24A" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A24A" stopOpacity="0.9" />
          </linearGradient>
          {/* Delicate terracotta rose accent */}
          <linearGradient id="roseAccentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B9786D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#641C24" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Outer Master Scalloped Cusped Arch (Classic 9-foil Rajputana Palace Mehrab) */}
        <path
          d="M 36 115
             L 36 82
             C 36 72, 46 66, 56 64
             C 68 62, 78 52, 88 50
             C 100 48, 110 38, 122 36
             C 136 34, 148 24, 164 22
             C 178 20, 190 10, 200 4
             C 210 10, 222 20, 236 22
             C 252 24, 264 34, 278 36
             C 290 38, 300 48, 312 50
             C 322 52, 332 62, 344 64
             C 354 66, 364 72, 364 82
             L 364 115"
          stroke="url(#goldLeafGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Parallel Filigree Arch */}
        <path
          d="M 44 115
             L 44 85
             C 44 77, 52 72, 62 70
             C 73 68, 81 59, 90 57
             C 101 55, 110 45, 121 43
             C 134 41, 145 31, 160 29
             C 173 27, 185 17, 200 11
             C 215 17, 227 27, 240 29
             C 255 31, 266 41, 279 43
             C 290 45, 299 55, 310 57
             C 319 59, 327 68, 338 70
             C 348 72, 356 77, 356 85
             L 356 115"
          stroke="url(#goldLeafGrad)"
          strokeWidth="1"
          strokeOpacity="0.75"
          strokeDasharray="3 2"
        />

        {/* Central Crown Finial (Kalash / Lotus Bud) at arch peak */}
        <g transform="translate(200, 4)">
          <path d="M 0 -5 L 3.5 0 L 0 3.5 L -3.5 0 Z" fill="url(#goldLeafGrad)" />
          <circle cx="0" cy="-7" r="2" fill="url(#goldLeafGrad)" />
          <circle cx="0" cy="-9.5" r="1" fill="#C9A24A" />
        </g>

        {/* Delicate Floral Garland (Roses along cusps, soft and non-intrusive) */}
        {showGarland && (
          <g opacity="0.85">
            {[
              { x: 74, y: 58 },
              { x: 106, y: 44 },
              { x: 144, y: 30 },
              { x: 182, y: 17 },
              { x: 218, y: 17 },
              { x: 256, y: 30 },
              { x: 294, y: 44 },
              { x: 326, y: 58 }
            ].map((pt, i) => (
              <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
                <circle cx="0" cy="0" r="2.8" fill="#F5EBDD" stroke="#C9A24A" strokeWidth="0.6" />
                <circle cx="0" cy="0" r="1.5" fill={i % 2 === 0 ? "url(#roseAccentGrad)" : "#C9A24A"} />
              </g>
            ))}
          </g>
        )}
      </svg>

      {/* Embedded Content under the arch */}
      {children && (
        <div className="w-full relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

// Royal Rajasthani Brass Lantern (Fanoos / Kandil) with Flickering Candle
export const PalaceLantern: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({
  className = "",
  size = 'md'
}) => {
  const sizeClasses = {
    sm: "w-8 h-14",
    md: "w-11 h-18 sm:w-12 sm:h-20",
    lg: "w-14 h-24"
  }[size];

  return (
    <div className={`relative flex flex-col items-center select-none pointer-events-none ${sizeClasses} ${className}`}>
      {/* Warm Ambient Glow behind lantern */}
      <div className="absolute inset-0 top-3 rounded-full bg-[#C66A24]/25 blur-lg animate-pulse-glow" />

      <svg
        viewBox="0 0 50 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#C9A24A]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5EBDD" />
            <stop offset="38%" stopColor="#C9A24A" />
            <stop offset="72%" stopColor="#C66A24" />
            <stop offset="100%" stopColor="#641C24" />
          </linearGradient>
          <radialGradient id="candleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5EBDD" />
            <stop offset="40%" stopColor="#C9A24A" />
            <stop offset="100%" stopColor="#C66A24" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Top hanging ring & cap */}
        <circle cx="25" cy="5" r="3.5" stroke="url(#brassGrad)" strokeWidth="1.2" />
        <path d="M 23 8 L 27 8 L 29 13 L 21 13 Z" fill="url(#brassGrad)" />
        
        {/* Tiered Domed Roof (Chhatri Style) */}
        <path d="M 25 13 C 21 16, 12 18, 10 23 L 40 23 C 38 18, 29 16, 25 13 Z" fill="url(#brassGrad)" stroke="#C9A24A" strokeWidth="0.8" />
        <circle cx="25" cy="13" r="1.5" fill="#C9A24A" />

        {/* Glass Lantern Body (Hexagonal Glass Cage) */}
        <rect x="12" y="23" width="26" height="38" rx="2" fill="#F5EBDD" fillOpacity="0.35" stroke="url(#brassGrad)" strokeWidth="1.2" />
        
        {/* Intricate Jali Lattice on Glass */}
        <path d="M 12 36 L 38 36" stroke="url(#brassGrad)" strokeWidth="0.8" strokeOpacity="0.7" />
        <path d="M 12 49 L 38 49" stroke="url(#brassGrad)" strokeWidth="0.8" strokeOpacity="0.7" />
        <path d="M 20 23 L 20 61" stroke="url(#brassGrad)" strokeWidth="0.8" strokeOpacity="0.6" />
        <path d="M 30 23 L 30 61" stroke="url(#brassGrad)" strokeWidth="0.8" strokeOpacity="0.6" />

        {/* Flickering Candle Flame inside */}
        <g className="animate-candle-flicker" style={{ transformOrigin: '25px 44px' }}>
          {/* Flame Halo */}
          <circle cx="25" cy="44" r="8" fill="url(#candleGlow)" />
          {/* Inner Teardrop Flame */}
          <path d="M 25 39 C 26.5 42, 27 44, 26 46 C 25 47.5, 24 46.5, 24 45 C 24 43.5, 24.5 41, 25 39 Z" fill="#F5EBDD" />
          <path d="M 25 41 C 26 43, 26.2 44.5, 25.5 45.5 C 24.8 46.2, 24.5 45.5, 24.5 44.5 Z" fill="#C66A24" />
          {/* Candle wick & wax stick */}
          <line x1="25" y1="46" x2="25" y2="48" stroke="#3A2118" strokeWidth="0.8" />
          <rect x="23" y="48" width="4" height="12" rx="1" fill="#F5EBDD" stroke="#C9A24A" strokeWidth="0.5" />
        </g>

        {/* Ornate Base Plinth with feet */}
        <path d="M 9 61 L 41 61 L 39 67 L 11 67 Z" fill="url(#brassGrad)" stroke="#C9A24A" strokeWidth="0.8" />
        <circle cx="14" cy="69" r="1.5" fill="url(#brassGrad)" />
        <circle cx="36" cy="69" r="1.5" fill="url(#brassGrad)" />
        <circle cx="25" cy="69" r="1.5" fill="url(#brassGrad)" />
      </svg>
    </div>
  );
};

// Royal Rajasthani Palace Peacock (Mayura) with Sapphire Blue Neck & Emerald Train
export const RoyalPeacock: React.FC<{
  className?: string;
  mirrored?: boolean;
}> = ({
  className = "w-14 h-20",
  mirrored = false
}) => {
  return (
    <svg
      viewBox="0 0 70 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-sm ${className}`}
      style={{ transform: mirrored ? 'scale(-1, 1)' : 'none' }}
      aria-hidden="true"
    >
      <defs>
        {/* Sapphire Lapis Royal Blue Gradient */}
        <linearGradient id={`peacockBlue-${mirrored}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E6DA8" />
          <stop offset="50%" stopColor="#0E4B75" />
          <stop offset="100%" stopColor="#082A45" />
        </linearGradient>
        {/* Emerald Jade Train Gradient */}
        <linearGradient id={`peacockGreen-${mirrored}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A8B58" />
          <stop offset="60%" stopColor="#1B663E" />
          <stop offset="100%" stopColor="#0F4225" />
        </linearGradient>
        {/* Antique Gold Wing Mantle Gradient */}
        <linearGradient id={`peacockGold-${mirrored}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A24A" />
          <stop offset="45%" stopColor="#C9A24A" />
          <stop offset="100%" stopColor="#C9A24A" />
        </linearGradient>
      </defs>

      {/* 1. Long Sweeping Emerald Feather Train */}
      <path
        d="M 32 48
           C 30 60, 24 75, 12 88
           C 22 84, 34 76, 42 62
           C 48 54, 46 48, 38 46 Z"
        fill={`url(#peacockGreen-${mirrored})`}
        stroke="#0F4225"
        strokeWidth="0.8"
      />
      {/* Additional trailing plume */}
      <path
        d="M 28 54
           C 24 66, 16 78, 6 86
           C 14 80, 26 70, 32 58 Z"
        fill={`url(#peacockGreen-${mirrored})`}
        opacity="0.85"
      />

      {/* Peacock Feather Eyespots (Ocelli) */}
      {[
        { cx: 28, cy: 64, r: 4 },
        { cx: 20, cy: 75, r: 3.5 },
        { cx: 12, cy: 84, r: 3 }
      ].map((eye, i) => (
        <g key={i}>
          <circle cx={eye.cx} cy={eye.cy} r={eye.r} fill="#C9A24A" />
          <circle cx={eye.cx} cy={eye.cy} r={eye.r * 0.65} fill="#1E7A4A" />
          <circle cx={eye.cx} cy={eye.cy} r={eye.r * 0.35} fill="#0E4B75" />
        </g>
      ))}

      {/* 2. Scaled Gold Wing Mantle */}
      <path
        d="M 32 38
           C 36 38, 48 42, 46 54
           C 44 60, 36 60, 30 52
           C 28 46, 28 40, 32 38 Z"
        fill={`url(#peacockGold-${mirrored})`}
        stroke="#C9A24A"
        strokeWidth="0.8"
      />
      {/* Wing feather scallops */}
      <path d="M 34 44 C 38 46, 42 46, 44 50" stroke="#C9A24A" strokeWidth="0.8" />
      <path d="M 32 48 C 36 50, 39 50, 41 54" stroke="#C9A24A" strokeWidth="0.8" />

      {/* 3. Regal Sapphire Blue Body & Elegant S-Neck */}
      <path
        d="M 38 48
           C 42 46, 46 40, 44 32
           C 42 24, 40 18, 44 12
           C 46 9, 44 6, 40 7
           C 37 8, 36 12, 37 16
           C 38 22, 34 26, 32 32
           C 30 38, 32 46, 38 48 Z"
        fill={`url(#peacockBlue-${mirrored})`}
        stroke="#062238"
        strokeWidth="0.8"
      />

      {/* Beak */}
      <polygon points="43,8 50,11 44,13" fill="#C9A24A" stroke="#3A2118" strokeWidth="0.5" />
      {/* Eye */}
      <circle cx="41.5" cy="9.5" r="1.2" fill="#F5EBDD" />
      <circle cx="41.5" cy="9.5" r="0.7" fill="#0A1822" />

      {/* Crown Crest Aigrette (3 royal fan feathers) */}
      <line x1="40" y1="7" x2="38" y2="2" stroke="#C9A24A" strokeWidth="0.7" />
      <circle cx="38" cy="2" r="1.2" fill="#1E6DA8" stroke="#C9A24A" strokeWidth="0.4" />
      <line x1="41" y1="6.5" x2="42" y2="1.5" stroke="#C9A24A" strokeWidth="0.7" />
      <circle cx="42" cy="1.5" r="1.2" fill="#1E6DA8" stroke="#C9A24A" strokeWidth="0.4" />
      <line x1="42" y1="7" x2="45" y2="2.5" stroke="#C9A24A" strokeWidth="0.7" />
      <circle cx="45" cy="2.5" r="1.2" fill="#1E6DA8" stroke="#C9A24A" strokeWidth="0.4" />

      {/* Legs & Claws on base */}
      <line x1="36" y1="56" x2="35" y2="68" stroke="#3A2118" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="40" y1="54" x2="41" y2="68" stroke="#3A2118" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 32 68 L 36 68 L 38 67" stroke="#3A2118" strokeWidth="1" strokeLinecap="round" />
      <path d="M 38 68 L 42 68 L 44 67" stroke="#3A2118" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
};

// Royal Palace Balustrade with Twin Peacocks and Rose Clusters (Matches User Reference Images 1 & 3)
export const RoyalPalaceBalustrade: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full flex items-end justify-between px-2 sm:px-3 pt-1 pointer-events-none select-none ${className}`}>
      {/* Left Peacock with Rose Accent */}
      <div className="flex items-end -mb-1">
        <RoyalPeacock className="w-11 h-15 sm:w-13 sm:h-18" mirrored={false} />
        <div className="hidden xs:flex flex-col items-center -ml-2 mb-1 z-10">
          <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#B9786D] to-[#641C24] border border-[#641C24] shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#B9786D] to-[#B9786D] -mt-1 shadow-2xs" />
        </div>
      </div>

      {/* Center Carved Stone Jali Railing */}
      <div className="flex-1 mx-2 mb-1 flex flex-col items-center">
        <div className="w-full h-2 border-y border-[#C9A24A]/70 bg-gradient-to-r from-[#F5EBDD] via-[#F5EBDD] to-[#F5EBDD] flex items-center justify-around px-1 shadow-2xs">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#641C24]/60" />
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1 h-1 rounded-full bg-[#0E4B75]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A]" />
          <span className="w-1 h-1 rounded-full bg-[#641C24]" />
        </div>
      </div>

      {/* Right Peacock with Rose Accent */}
      <div className="flex items-end -mb-1">
        <div className="hidden xs:flex flex-col items-center -mr-2 mb-1 z-10">
          <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#B9786D] to-[#641C24] border border-[#641C24] shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#B9786D] to-[#B9786D] -mt-1 shadow-2xs" />
        </div>
        <RoyalPeacock className="w-11 h-15 sm:w-13 sm:h-18" mirrored={true} />
      </div>
    </div>
  );
};

// Symmetrical Rajasthani floral corner ornament (Pietra Dura marble inlay style)
export const FloralCorner: React.FC<{ className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  className = "w-16 h-16 text-[#C9A24A]",
  position = 'top-left'
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scale(-1, 1)';
      case 'bottom-left': return 'scale(1, -1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-transform ${className}`}
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        {/* Outer corner guide */}
        <path d="M 6 60 L 6 6 L 60 6" strokeWidth="1.4" opacity="0.65" />
        <path d="M 12 48 L 12 12 L 48 12" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />
        
        {/* Corner rose & petal flourish (Pietra Dura) */}
        <path d="M 18 18 C 24 14, 30 18, 30 24 C 30 30, 24 30, 20 28 C 16 26, 14 20, 18 18 Z" fill="#641C24" fillOpacity="0.22" stroke="#641C24" strokeWidth="0.8" />
        <circle cx="24" cy="24" r="3.5" fill="currentColor" fillOpacity="0.5" />
        
        {/* Branch sweeping down */}
        <path d="M 6 36 C 14 36, 20 44, 20 54 C 20 62, 14 70, 8 74" />
        <path d="M 14 42 C 22 42, 26 48, 26 56" />
        <path d="M 18 48 C 24 46, 28 50, 26 56 C 24 60, 20 58, 18 48 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 10 62 C 16 62, 18 66, 16 70 C 14 72, 10 70, 10 62 Z" fill="currentColor" fillOpacity="0.2" />

        {/* Branch sweeping right */}
        <path d="M 36 6 C 36 14, 44 20, 54 20 C 62 20, 70 14, 74 8" />
        <path d="M 42 14 C 42 22, 48 26, 56 26" />
        <path d="M 48 18 C 46 24, 50 28, 56 26 C 60 24, 58 20, 48 18 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 62 10 C 62 16, 66 18, 70 16 C 72 14, 70 10, 62 10 Z" fill="currentColor" fillOpacity="0.2" />
        
        {/* Fine ornamental accent dots */}
        <circle cx="6" cy="6" r="2" fill="currentColor" />
        <circle cx="3" cy="3" r="1.2" fill="currentColor" opacity="0.8" />
        <circle cx="78" cy="8" r="1.6" fill="currentColor" />
        <circle cx="8" cy="78" r="1.6" fill="currentColor" />
      </g>
    </svg>
  );
};

// Symmetrical top or bottom royal Rajasthani crest with Lotus & Paisley
export const FloralCrest: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = "w-48 h-12 text-[#C9A24A]",
  inverted = false
}) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: inverted ? 'rotate(180deg)' : 'none' }}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        {/* Center Royal Lotus Blossom */}
        <circle cx="100" cy="18" r="3" fill="currentColor" fillOpacity="0.6" />
        <path d="M 100 8 C 104 13, 108 16, 100 24 C 92 16, 96 13, 100 8 Z" fill="#641C24" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.9" />
        <path d="M 90 18 C 95 14, 98 12, 106 18 C 98 24, 95 21, 90 18 Z" fill="currentColor" fillOpacity="0.25" />
        
        {/* Left graceful swirl */}
        <path d="M 92 20 C 80 20, 72 14, 60 14 C 48 14, 40 22, 28 20 C 20 18, 12 12, 4 12" />
        <path d="M 74 15 C 68 10, 60 8, 56 12 C 52 16, 56 22, 64 18" fill="currentColor" fillOpacity="0.18" />
        <path d="M 44 18 C 38 14, 32 14, 30 18 C 28 22, 34 24, 40 21" fill="currentColor" fillOpacity="0.18" />
        
        {/* Right graceful swirl */}
        <path d="M 108 20 C 120 20, 128 14, 140 14 C 152 14, 160 22, 172 20 C 180 18, 188 12, 196 12" />
        <path d="M 126 15 C 132 10, 140 8, 144 12 C 148 16, 144 22, 136 18" fill="currentColor" fillOpacity="0.18" />
        <path d="M 156 18 C 162 14, 168 14, 170 18 C 172 22, 166 24, 160 21" fill="currentColor" fillOpacity="0.18" />

        {/* Delicate droplets */}
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
        <circle cx="196" cy="12" r="1.5" fill="currentColor" />
        <circle cx="100" cy="5" r="2" fill="currentColor" />
      </g>
    </svg>
  );
};

// Subtle ornamental divider with center diamond / botanical motif
export const FloralDivider: React.FC<{ className?: string }> = ({
  className = "w-36 h-6 text-[#C9A24A]"
}) => {
  return (
    <div className={`flex items-center justify-center my-3 select-none pointer-events-none ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/60 to-[#C9A24A]/90" />
      <svg viewBox="0 0 40 16" className="w-8 h-4 mx-2 text-[#C9A24A]" fill="none" stroke="currentColor">
        <path d="M 20 2 L 26 8 L 20 14 L 14 8 Z" strokeWidth="1" fill="#641C24" fillOpacity="0.3" />
        <circle cx="20" cy="8" r="2" fill="currentColor" />
        <circle cx="6" cy="8" r="1" fill="currentColor" />
        <circle cx="34" cy="8" r="1" fill="currentColor" />
        <path d="M 10 8 L 13 8" strokeWidth="1" />
        <path d="M 27 8 L 30 8" strokeWidth="1" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A24A]/60 to-[#C9A24A]/90" />
    </div>
  );
};

// Bismillah Islamic Calligraphy Presentation with Rajasthani gold and deep espresso
export const BismillahCalligraphy: React.FC<{ className?: string }> = ({
  className = "text-[#3A2118]"
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <p className="font-arabic text-2xl md:text-3xl tracking-wide leading-relaxed text-[#3A2118] drop-shadow-xs select-none" dir="rtl">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>
      <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C9A24A] mt-1 font-bold">
        Bismillahir Rahmanir Raheem
      </span>
      <span className="font-sans-body text-[9px] sm:text-[10px] tracking-[0.15em] text-[#3A2118] mt-0.5 italic">
        In the name of Allah, the Most Gracious, the Most Merciful
      </span>
    </div>
  );
};

// Royal Rajasthani Rajput Crimson & Gold Wax Seal with Embossed Monogram
export const WaxSeal: React.FC<{
  monogram?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isBroken?: boolean;
}> = ({
  monogram = "H & R",
  onClick,
  className = "",
  size = 'md',
  isBroken = false
}) => {
  const sizeClasses = {
    sm: "w-14 h-14 text-xs",
    md: "w-18 h-18 text-sm",
    lg: "w-22 h-22 text-base"
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Wax Seal"
      className={`relative inline-flex items-center justify-center rounded-full cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95 group focus:outline-none ${sizeClasses} ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #641C24 0%, #641C24 55%, #641C24 100%)',
        boxShadow: isBroken 
          ? '0 4px 10px rgba(0,0,0,0.25)' 
          : '0 8px 22px rgba(45, 10, 15, 0.45), inset 0 2px 4px rgba(255, 200, 205, 0.4), inset 0 -3px 5px rgba(0,0,0,0.6)'
      }}
    >
      {/* Outer scalloped molten wax rim */}
      <div className="absolute inset-0.5 rounded-full border border-[#B9786D]/40 opacity-75" />
      
      {/* Inner embossed gold ridge with single-line monogram */}
      <div className="w-[82%] h-[82%] rounded-full border border-[#C9A24A]/70 flex items-center justify-center shadow-inner bg-[#641C24]/80 px-1 overflow-hidden">
        <span className="font-cinzel-decorative font-bold tracking-wider text-[#C9A24A] drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] select-none whitespace-nowrap inline-flex items-center justify-center">
          {monogram}
        </span>
      </div>

      {/* Shimmer highlight */}
      <div className="absolute top-1 left-2 w-4 h-2 bg-white/30 rounded-full blur-[1px] transform -rotate-45" />
    </button>
  );
};

/** Rajasthani haveli inspired jali frame for the invitation edges. */
export const RajasthaniPageFrame: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 500 1000" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern id="rajasthani-page-frame-jali" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M9 1 17 9 9 17 1 9Z" fill="none" stroke="#C9A24A" strokeWidth="1.1" />
          <circle cx="9" cy="9" r="1.3" fill="#B9786D" />
        </pattern>
      </defs>
      {/* Fine jali bands and double edging, kept close to the page perimeter. */}
      <rect x="4" y="4" width="492" height="992" fill="none" stroke="#641C24" strokeWidth="2" />
      <rect x="10" y="10" width="480" height="980" fill="none" stroke="#C9A24A" strokeWidth="1.4" />
      <rect x="16" y="16" width="468" height="968" fill="none" stroke="url(#rajasthani-page-frame-jali)" strokeWidth="7" />
      <rect x="21" y="21" width="458" height="958" fill="none" stroke="#641C24" strokeOpacity=".75" strokeWidth="1" />
      {/* Small lotus rosettes decorate the corners without entering the text area. */}
      {[[20, 20], [480, 20], [20, 980], [480, 980]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="5.5" fill="#641C24" stroke="#C9A24A" strokeWidth="1.3" />
          <path d="M0-4 1.5-1.5 4 0 1.5 1.5 0 4-1.5 1.5-4 0-1.5-1.5Z" fill="#C9A24A" />
        </g>
      ))}
    </svg>
  </div>
);
