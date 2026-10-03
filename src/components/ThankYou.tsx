import React from 'react';
import { motion } from 'motion/react';
import { InvitationConfig } from '../types';
import { FloralDivider, PalaceLantern, RajasthaniElephant } from './Ornaments';

interface ThankYouProps {
  data: InvitationConfig;
}

export const ThankYou: React.FC<ThankYouProps> = ({ data }) => (
  <div className="relative flex h-full min-h-[100dvh] w-full flex-col items-center justify-center overflow-y-auto px-6 py-20 text-center text-[#3A2118] paper-emboss">
    <div className="absolute inset-0 pointer-events-none bg-rajasthani-jali opacity-10" />

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex w-full max-w-sm flex-col items-center"
    >
      <div className="mb-5 flex items-center justify-center gap-5">
        <PalaceLantern size="sm" />
        <span className="font-cinzel text-[9px] tracking-[0.28em] font-semibold uppercase text-[#641C24]">
          With heartfelt gratitude
        </span>
        <PalaceLantern size="sm" />
      </div>

      <FloralDivider className="mb-4 w-48 text-[#C9A24A]" />
      <h1 className="font-cinzel-decorative text-4xl sm:text-5xl font-bold text-[#641C24]">
        Thank You
      </h1>
      <p className="mt-4 font-cormorant text-lg sm:text-xl italic leading-relaxed text-[#3A2118]">
        Your presence, blessings, and duas mean so much to our family.
      </p>
      <p className="mt-5 font-serif-luxury text-xl sm:text-2xl font-semibold text-[#641C24]">
        {data.groomFullName} &amp; {data.bride}
      </p>
      <FloralDivider className="mt-5 w-48 text-[#C9A24A]" />
      <div className="mt-6 flex items-center justify-center gap-10">
        <RajasthaniElephant className="h-8 w-12 text-[#C9A24A] opacity-80" />
        <RajasthaniElephant className="h-8 w-12 text-[#C9A24A] opacity-80" mirrored />
      </div>
    </motion.div>
  </div>
);
