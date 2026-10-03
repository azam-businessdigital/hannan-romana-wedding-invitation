import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { InvitationConfig } from '../types';
import {
  FloralCorner,
  BismillahCalligraphy,
  PalaceLantern
} from './Ornaments';

interface InvitationCoverProps {
  data: InvitationConfig;
  onProceed: () => void;
}

/**
 * Slide 1: ROYAL INITIALS OPENING SCENE
 * Per user instructions:
 * - "first slide only initials when click next slide"
 * - Displays ONLY the royal couple initials ("AH & RB") in a stately gold & crimson royal crest medallion.
 * - Flanked by palace lanterns, twin peacocks, and floral Pietra Dura inlay.
 * - Includes a prominent, inviting "NEXT SLIDE / CLICK TO ENTER" button.
 */
export const InvitationCover: React.FC<InvitationCoverProps> = ({
  data,
  onProceed
}) => {
  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center gap-6 p-4 sm:p-6 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
      {/* Subtle Rajasthani jali lattice texture & gold star dust */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-rajasthani-jali"
      />

      {/* Outer elegant double line embossed border with antique gold finish */}
      <div className="absolute inset-3 sm:inset-4.5 border border-[#C9A24A]/50 rounded-xl pointer-events-none" />
      <div className="absolute inset-4.5 sm:inset-6 border border-[#C9A24A]/30 rounded-lg pointer-events-none" />

      {/* Symmetrical Corner Floral Ornaments in Pietra Dura style */}
      <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5">
        <FloralCorner className="w-10 h-10 sm:w-14 sm:h-14 text-[#C9A24A]" position="top-left" />
      </div>
      <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5">
        <FloralCorner className="w-10 h-10 sm:w-14 sm:h-14 text-[#C9A24A]" position="top-right" />
      </div>

      {/* Top Section: Sacred Bismillah with clearance from header navigation */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full pt-14 sm:pt-16 flex flex-col items-center text-center px-2"
      >
        <BismillahCalligraphy className="scale-95 sm:scale-105" />
      </motion.div>

      {/* Center Stage: The Royal Monogram Crest featuring ONLY INITIALS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 py-2 px-3 flex flex-col items-center text-center max-w-sm sm:max-w-md w-full"
      >
        {/* Palace Lanterns Hanging */}
        <div className="flex items-center justify-between w-48 sm:w-56 mb-2">
          <PalaceLantern className="w-5 h-12 text-[#C9A24A] opacity-80" />
          
          {/* Royal Subtitle Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBDD]/95 border border-[#C9A24A]/60 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#C9A24A]" />
            <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.26em] uppercase text-[#641C24] font-bold whitespace-nowrap">
              WEDDING INVITATION
            </span>
            <Sparkles className="w-3 h-3 text-[#C9A24A]" />
          </div>

          <PalaceLantern className="w-5 h-12 text-[#C9A24A] opacity-80" />
        </div>

        {/* Grand Royal Crest Medallion with ONLY INITIALS */}
        <div className="relative my-3 flex items-center justify-center">
          {/* Subtle Golden Radial Glow */}
          <div className="absolute inset-0 rounded-full bg-[#C9A24A]/30 blur-lg scale-110" />
          
          {/* Ornate Gold Outer Beaded Chiseled Ring */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#C9A24A] bg-gradient-to-br from-[#F5EBDD] via-[#C9A24A]/20 to-[#B9786D]/35 shadow-[0_10px_32px_rgba(58,33,24,0.22)] flex items-center justify-center p-2">
            {/* Deep Rajput Crimson Velveteen Inlay */}
            <div className="w-full h-full rounded-full border border-dashed border-[#C9A24A]/80 flex flex-col items-center justify-center bg-gradient-to-br from-[#641C24] via-[#641C24] to-[#3A2118] shadow-inner p-1 overflow-hidden">
              {/* Couple Initials (AH & RB) */}
              <span className="font-cinzel-decorative text-2xl sm:text-3xl font-bold tracking-widest text-[#F5EBDD] drop-shadow-md whitespace-nowrap inline-flex items-center justify-center gap-1.5">
                H <span className="text-[#C9A24A] font-light text-base sm:text-lg">&amp;</span> R
              </span>
              <span className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.24em] text-[#C9A24A] uppercase mt-0.5 opacity-90">
                H &amp; R
              </span>
            </div>
          </div>
        </div>

        {/* Royal Subtext */}
        <span className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#C9A24A] font-bold block mt-2 mb-1">
          WEDDING INVITATION
        </span>

        <p className="font-cormorant text-sm sm:text-base italic text-[#3A2118] max-w-xs mx-auto mb-4">
          “In the name of Allah, the Most Gracious, the Most Merciful”
        </p>

        {/* Click to Next Slide / Proceed Button */}
        <motion.button
          onClick={onProceed}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          aria-label="Open invitation"
          className="relative group cursor-pointer inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-[#641C24] via-[#641C24] to-[#3A2118] text-[#F5EBDD] border border-[#C9A24A] shadow-[0_4px_16px_rgba(100,28,36,0.35)] transition-all hover:from-[#C66A24] hover:via-[#C66A24] hover:to-[#C66A24]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C9A24A] group-hover:rotate-12 transition-transform" />
          <span className="font-cinzel text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase text-[#F5EBDD]">
            OPEN INVITATION
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C9A24A] group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

    </div>
  );
};
