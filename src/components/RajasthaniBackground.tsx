import React from 'react';

/**
 * RajasthaniBackground
 * Subtle, elegant SVG architectural patterns and traditional mandala motifs
 * overlaying the warm palace jali texture.
 */

// Ornate 16-point Rajasthani Royal Lotus Mandala SVG
export const RajasthaniMandala: React.FC<{
  className?: string;
  size?: number;
}> = ({
  className = "w-72 h-72",
  size = 300
}) => {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-[#C9A24A] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mandalaGoldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A24A" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#C9A24A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C9A24A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient center radial aura */}
      <circle cx="150" cy="150" r="140" fill="url(#mandalaGoldGlow)" />

      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Outermost Scalloped Ring */}
        <circle cx="150" cy="150" r="138" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="150" cy="150" r="132" strokeWidth="1.2" opacity="0.6" />

        {/* 24 Outer Lotus Petal Tips along the circumference */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={`petal-outer-${i}`} transform={`rotate(${angle} 150 150)`}>
              <path
                d="M 150 18 C 145 24, 142 30, 150 36 C 158 30, 155 24, 150 18 Z"
                fill="currentColor"
                fillOpacity="0.08"
                strokeWidth="0.8"
                opacity="0.55"
              />
              <circle cx="150" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
            </g>
          );
        })}

        {/* Middle Ring with Diamond / Floral beads */}
        <circle cx="150" cy="150" r="112" strokeWidth="1" opacity="0.5" />
        <circle cx="150" cy="150" r="106" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />

        {/* 16 Rajasthani Paisley / Mango (Kalka) Petals */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={`paisley-${i}`} transform={`rotate(${angle} 150 150)`}>
              <path
                d="M 150 44
                   C 138 56, 134 74, 150 90
                   C 166 74, 162 56, 150 44 Z"
                fill="currentColor"
                fillOpacity="0.06"
                strokeWidth="0.9"
                opacity="0.6"
              />
              <path
                d="M 150 54 C 144 64, 144 76, 150 82 C 156 76, 156 64, 150 54 Z"
                strokeWidth="0.6"
                opacity="0.4"
              />
              <circle cx="150" cy="68" r="2" fill="currentColor" opacity="0.5" />
            </g>
          );
        })}

        {/* Interlaced Eight-pointed Star (Traditional Khatam / Rajputana Geometrix) */}
        <g strokeWidth="0.9" opacity="0.55">
          <polygon
            points="150,70 178,122 230,150 178,178 150,230 122,178 70,150 122,122"
            fill="currentColor"
            fillOpacity="0.04"
          />
          <polygon
            points="150,70 178,122 230,150 178,178 150,230 122,178 70,150 122,122"
            transform="rotate(45 150 150)"
            fill="currentColor"
            fillOpacity="0.04"
          />
        </g>

        {/* Inner Eight-Petal Sacred Lotus (Ashtadal Kamal) */}
        <circle cx="150" cy="150" r="48" strokeWidth="1" opacity="0.6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <g key={`inner-petal-${i}`} transform={`rotate(${angle} 150 150)`}>
              <path
                d="M 150 102 C 141 114, 141 128, 150 138 C 159 128, 159 114, 150 102 Z"
                fill="currentColor"
                fillOpacity="0.12"
                strokeWidth="0.8"
                opacity="0.7"
              />
              <circle cx="150" cy="112" r="1.8" fill="currentColor" opacity="0.8" />
            </g>
          );
        })}

        {/* Core Medallion & Central Lotus Bud */}
        <circle cx="150" cy="150" r="18" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" opacity="0.75" />
        <circle cx="150" cy="150" r="9" strokeWidth="0.8" opacity="0.8" />
        <circle cx="150" cy="150" r="4" fill="currentColor" opacity="0.9" />
      </g>
    </svg>
  );
};

// Grand Rajasthani Architectural Arch Arcade Silhouette (Mehrab / Jharokha Columns)
export const RajasthaniArchArcade: React.FC<{
  className?: string;
}> = ({
  className = "w-full"
}) => {
  return (
    <svg
      viewBox="0 0 1200 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-[#C9A24A] ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="archPillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A24A" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C9A24A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C9A24A" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Top Palace Cornice (Chhajja) Line */}
      <line x1="0" y1="20" x2="1200" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="0" y1="26" x2="1200" y2="26" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25" />

      {/* 5 Symmetrical Palace Arches across the width */}
      {[120, 360, 600, 840, 1080].map((centerX, idx) => (
        <g key={`arch-${idx}`}>
          {/* Chhatri Kalash Finial above each arch */}
          <path
            d={`M ${centerX} 6 L ${centerX + 4} 14 L ${centerX} 18 L ${centerX - 4} 14 Z`}
            fill="currentColor"
            opacity="0.4"
          />
          <circle cx={centerX} cy="4" r="1.5" fill="currentColor" opacity="0.5" />

          {/* Scalloped 7-foil Palace Arch */}
          <path
            d={`M ${centerX - 100} 420
               L ${centerX - 100} 180
               C ${centerX - 100} 150, ${centerX - 85} 130, ${centerX - 65} 125
               C ${centerX - 50} 120, ${centerX - 40} 100, ${centerX - 25} 95
               C ${centerX - 15} 90, ${centerX - 8} 75, ${centerX} 65
               C ${centerX + 8} 75, ${centerX + 15} 90, ${centerX + 25} 95
               C ${centerX + 40} 100, ${centerX + 50} 120, ${centerX + 65} 125
               C ${centerX + 85} 130, ${centerX + 100} 150, ${centerX + 100} 180
               L ${centerX + 100} 420`}
            stroke="url(#archPillarGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Parallel Arch Line */}
          <path
            d={`M ${centerX - 92} 420
               L ${centerX - 92} 185
               C ${centerX - 92} 158, ${centerX - 78} 138, ${centerX - 60} 134
               C ${centerX - 46} 128, ${centerX - 36} 110, ${centerX - 22} 105
               C ${centerX - 12} 100, ${centerX - 6} 86, ${centerX} 78
               C ${centerX + 6} 86, ${centerX + 12} 100, ${centerX + 22} 105
               C ${centerX + 36} 110, ${centerX + 46} 128, ${centerX + 60} 134
               C ${centerX + 78} 138, ${centerX + 92} 158, ${centerX + 92} 185
               L ${centerX + 92} 420`}
            stroke="url(#archPillarGrad)"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            opacity="0.3"
          />

          {/* Spandrel Pietra Dura Rosettes */}
          <circle cx={centerX - 75} cy="95" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          <circle cx={centerX - 75} cy="95" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx={centerX + 75} cy="95" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          <circle cx={centerX + 75} cy="95" r="1.5" fill="currentColor" opacity="0.4" />

          {/* Hanging Palace Chandelier / Kandil under center of each arch */}
          <g opacity="0.25">
            <line x1={centerX} y1="65" x2={centerX} y2="120" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2" />
            <polygon points={`${centerX},120 ${centerX + 6},130 ${centerX},140 ${centerX - 6},130`} fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.7" />
            <circle cx={centerX} cy="144" r="1.5" fill="currentColor" />
          </g>
        </g>
      ))}
    </svg>
  );
};

export const RajasthaniBackground: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Royal Jaipur Rose Sandstone & Palace Courtyard Ambiance */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #F5EBDD 0%, #F5EBDD 40%, #B9786D 75%, #B9786D 100%)'
        }}
      />

      {/* 2. Traditional Jali Lattice Pattern Overlay */}
      <div className="absolute inset-0 opacity-15 bg-rajasthani-jali" />

      {/* 3. Top Grand Palace Arch Arcade (Spanning desktop & mobile) */}
      <div className="absolute top-0 left-0 right-0 h-[280px] sm:h-[380px] opacity-30">
        <RajasthaniArchArcade className="w-full h-full text-[#C9A24A]" />
      </div>

      {/* 4. Left Flank: Traditional Royal Rajasthani Mandala (Desktop / Tablet showcase) */}
      <div className="absolute top-1/2 -left-28 sm:-left-16 lg:left-4 -translate-y-1/2 opacity-25 lg:opacity-35 pointer-events-none">
        <div className="rajasthani-mandala-orbit rajasthani-mandala-orbit-clockwise w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
          <RajasthaniMandala className="w-full h-full text-[#B9786D]" />
        </div>
      </div>

      {/* 5. Right Flank: Symmetrical Traditional Royal Rajasthani Mandala */}
      <div className="absolute top-1/2 -right-28 sm:-right-16 lg:right-4 -translate-y-1/2 opacity-25 lg:opacity-35 pointer-events-none">
        <div className="rajasthani-mandala-orbit rajasthani-mandala-orbit-counterclockwise w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
          <RajasthaniMandala className="w-full h-full text-[#B9786D]" />
        </div>
      </div>

      {/* 6. Subtle Center Watermark Mandala (Behind central card on mobile) */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 opacity-12 pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
          <RajasthaniMandala className="w-full h-full text-[#B9786D]" />
        </div>
      </div>

      {/* 7. Bottom Palace Balustrade (Subtle Jharokha Base Screen) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 opacity-25 flex items-end justify-center">
        <svg
          viewBox="0 0 1000 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#C9A24A]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="0" y1="10" x2="1000" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="0" y1="16" x2="1000" y2="16" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.3" />
          {/* Repeating miniature jali balusters */}
          {Array.from({ length: 40 }).map((_, i) => (
            <g key={`baluster-${i}`} transform={`translate(${i * 25 + 12}, 16)`}>
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
              <circle cx="0" cy="18" r="2" fill="currentColor" opacity="0.25" />
            </g>
          ))}
          <line x1="0" y1="58" x2="1000" y2="58" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
});
