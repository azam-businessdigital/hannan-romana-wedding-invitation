import React from 'react';
import { motion } from 'motion/react';
import { FloralCorner, FloralDivider, PalaceLantern } from './Ornaments';
import { InvitationConfig } from '../types';

interface InvitationMessageProps {
  data: InvitationConfig;
}

/**
 * Slide 3: GRANDPARENTS' BLESSINGS & FORMAL ROYAL INVITATION LETTER
 * Dedicated to the revered elders & official invitation letter from the families:
 * - Clear clearance from header pill
 * - Respected Grandparents Honors (Chowhan & Gehlot families)
 * - Formal royal invitation wording
 * - Host RSVP details
 */
export const InvitationMessage: React.FC<InvitationMessageProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-between p-3.5 sm:p-5 paper-emboss text-[#3A2118] overflow-hidden select-none">
      {/* Background jali screen pattern & grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-rajasthani-jali"
      />

      {/* Outer borders */}
      <div className="absolute inset-3 sm:inset-4.5 border border-[#C9A24A]/45 rounded-xl pointer-events-none" />
      <div className="absolute inset-4 sm:inset-6 border border-[#C9A24A]/25 rounded-lg pointer-events-none" />

      {/* Opposite corner subtle floral ornaments */}
      <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5">
        <FloralCorner className="w-10 h-10 sm:w-14 sm:h-14 text-[#C9A24A]" position="top-left" />
      </div>
      <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5">
        <FloralCorner className="w-10 h-10 sm:w-14 sm:h-14 text-[#C9A24A]" position="top-right" />
      </div>
      <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5">
        <FloralCorner className="w-10 h-10 sm:w-14 sm:h-14 text-[#C9A24A]" position="bottom-left" />
      </div>
      <div className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-5">
        <FloralCorner className="w-10 h-10 sm:w-14 sm:h-14 text-[#C9A24A]" position="bottom-right" />
      </div>

      {/* Top Header with ample clearance from navigation header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="relative z-10 pt-11 sm:pt-13 w-full flex flex-col items-center text-center px-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs">
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            FORMAL INVITATION
          </span>
        </div>
      </motion.div>

      {/* Main Framed Royal Letter Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm sm:max-w-md my-auto rounded-xl bg-[#F5EBDD]/95 p-4 sm:p-5 border border-[#C9A24A]/50 shadow-[0_12px_36px_rgba(30,15,5,0.18)] flex flex-col items-center text-center mx-3"
      >
        {/* Inner thin decorative hairline border */}
        <div className="absolute inset-2 border border-[#C9A24A]/30 rounded-lg pointer-events-none" />

        <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#C9A24A] font-bold block mb-1">
          WITH BLESSINGS OF OUR FAMILIES
        </span>

        {/* Dedicated Grandparents Box */}
        <div className="w-full bg-[#F5EBDD] p-2.5 rounded-lg border border-[#C9A24A]/40 text-center my-1.5 flex flex-col gap-2">
          <div>
            <p className="font-serif-luxury text-xs sm:text-[13px] font-semibold text-[#3A2118] mt-0.5">
              Haji Abdul Rehman Chowhan &amp; Hajjan Zubeda Chowhan
            </p>
          </div>
          <div className="border-t border-[#C9A24A]/30 pt-1.5">
            <p className="font-serif-luxury text-xs sm:text-[13px] font-semibold text-[#3A2118] mt-0.5">
              Mr. Nisar Ahmed Gehlot &amp; Mrs. Jamila Gehlot
            </p>
          </div>
        </div>

        <FloralDivider className="w-28 sm:w-36 my-1" />

        {/* The Invitation Letter Note */}
        <div className="space-y-1.5 my-1 font-serif-luxury text-[#3A2118] px-1">
          <p className="italic text-xs sm:text-[13px] text-[#3A2118] leading-relaxed">
            cordially invite your esteemed presence and heartfelt prayers on the auspicious occasion of the Wedding Reception (Walima) of their beloved grandson
          </p>

          <p className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#641C24] leading-tight pt-0.5 whitespace-nowrap">
            Abdul Hannan &amp; Dr. Romana Bano
          </p>

          <p className="italic text-xs sm:text-[13px] text-[#3A2118] leading-relaxed pt-1">
            Your gracious presence and prayers will double our joy and bestow barakah upon the new journey of the bride &amp; groom.
          </p>
        </div>

        {/* Auspicious RSVP Host Badge */}
        <div className="mt-2.5 pt-2 border-t border-[#C9A24A]/30 w-full flex items-center justify-between px-2 text-[10px] sm:text-[10.5px]">
          <span className="font-cinzel text-[#C9A24A] font-bold tracking-wider uppercase">
            RSVP: {data.contactPerson}
          </span>
          <span className="font-sans-body font-semibold text-[#3A2118]">
            {data.contactPhone}
          </span>
        </div>
      </motion.div>

      {/* Symmetrical Palace Lanterns */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-15">
        <PalaceLantern size="sm" />
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-15">
        <PalaceLantern size="sm" />
      </div>

      {/* Bottom footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.5 }}
        className="relative z-10 pb-4 sm:pb-6 flex items-center justify-center gap-2"
      >
        <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#3A2118] font-bold whitespace-nowrap">
          Chowhan &amp; Gehlot Families • Sikar, Rajasthan
        </span>
      </motion.div>
    </div>
  );
};
