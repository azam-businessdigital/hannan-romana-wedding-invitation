import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { InvitationConfig } from '../types';
import {
  FloralCorner,
  FloralDivider,
  RajasthaniElephant
} from './Ornaments';

interface CoupleSectionProps {
  data: InvitationConfig;
}

/**
 * Slide 2: GRANDPARENTS' INVITATION FOR BELOVED GRANDSON
 * Per user instructions:
 * - "grandparents invite for wedding of their beloved grandson"
 * - "then details if names are not coming in one like keep in 2 lines"
 * - "it is final invitation of their names"
 */
export const CoupleSection: React.FC<CoupleSectionProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-between p-3.5 sm:p-5 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
      {/* Subtle Rajasthani jali lattice texture & grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-rajasthani-jali"
      />

      {/* Outer borders */}
      <div className="absolute inset-3 sm:inset-4.5 border border-[#C9A24A]/45 rounded-xl pointer-events-none" />
      <div className="absolute inset-4.5 sm:inset-6 border border-[#C9A24A]/25 rounded-lg pointer-events-none" />

      {/* Symmetrical Corner Floral Ornaments in Pietra Dura style */}
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

      {/* Top Header Section (Generous clearance for persistent header badge) */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 pt-10 sm:pt-12 w-full flex flex-col items-center text-center px-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs mb-1.5">
          <Sparkles className="w-3 h-3 text-[#C9A24A]" />
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            BLESSINGS OF ELDERS
          </span>
          <Sparkles className="w-3 h-3 text-[#C9A24A]" />
        </div>

        <h2 className="font-cinzel text-[10.5px] sm:text-[12px] tracking-[0.22em] text-[#C9A24A] uppercase font-bold mb-1">
          WITH THE BLESSINGS OF OUR FAMILIES
        </h2>

        <div className="w-full max-w-sm grid grid-cols-2 gap-2 mt-1 px-1">
          <div className="bg-[#F5EBDD]/80 border border-[#C9A24A]/40 rounded-lg p-2 text-center shadow-2xs">
            <p className="font-serif-luxury text-[11px] sm:text-[12px] text-[#3A2118] font-semibold leading-tight mt-0.5">
              {data.grandparents.dadaDadi.names.join(' & ')}
            </p>
          </div>

          <div className="bg-[#F5EBDD]/80 border border-[#C9A24A]/40 rounded-lg p-2 text-center shadow-2xs">
            <p className="font-serif-luxury text-[11px] sm:text-[12px] text-[#3A2118] font-semibold leading-tight mt-0.5">
              {data.grandparents.nanaNani.names.join(' & ')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Center Invitation of Beloved Grandson & Couple Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.15 }}
        className="relative z-10 my-auto flex flex-col items-center text-center px-3 max-w-sm sm:max-w-md w-full py-1"
      >
        <p className="font-cormorant text-xs sm:text-[13px] italic text-[#3A2118] max-w-xs mb-2">
          We cordially invite you to celebrate the joyous Walima ceremony of our grandson.
        </p>

        {/* COUPLE NAMES: Strictly kept in 2 lines per user request! */}
        <div className="w-full bg-[#F5EBDD]/90 border border-[#C9A24A]/50 rounded-xl p-3 sm:p-4 shadow-xs relative">
          <div className="flex flex-col items-center text-center">
            {/* Line 1: Groom Name */}
            <div className="w-full">
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.24em] text-[#C9A24A] uppercase font-semibold block mb-0.5">
                GROOM
              </span>
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#3A2118] tracking-wide leading-tight">
                {data.groom}
              </h1>
              <p className="font-cormorant text-[11.5px] sm:text-xs text-[#3A2118] italic mt-0.5">
                {data.groomTitle}
              </p>
            </div>

            {/* Elegant Ampersand / Weds divider */}
            <div className="my-1.5 flex items-center justify-center gap-2 w-full max-w-[200px]">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/70 to-transparent" />
              <div className="w-6 h-6 rounded-full border border-[#C9A24A] bg-[#641C24] text-[#F5EBDD] flex items-center justify-center shadow-xs">
                <span className="font-cinzel-decorative text-xs font-bold">&amp;</span>
              </div>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/70 to-transparent" />
            </div>

            {/* Line 2: Bride Name */}
            <div className="w-full">
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.24em] text-[#C9A24A] uppercase font-semibold block mb-0.5">
                BRIDE
              </span>
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#641C24] tracking-wide leading-tight">
                {data.bride}
              </h1>
              <p className="font-cormorant text-[11.5px] sm:text-xs text-[#3A2118] italic mt-0.5">
                {data.brideTitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2.5 px-2 text-center">
          <p className="font-cormorant text-xs sm:text-[13px] italic text-[#3A2118]">
            “Your presence, prayers, and heartfelt blessings are the greatest gift as they unite in lifelong faith and love.”
          </p>
        </div>
      </motion.div>

      {/* Bottom Section: Auspicious Royal Elephants with clearance from bottom navigation */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 w-full max-w-sm pb-8 sm:pb-9 flex flex-col items-center"
      >
        <FloralDivider className="w-40 sm:w-48 text-[#C9A24A] opacity-75 mb-1" />
        <div className="flex items-center justify-between w-48 sm:w-56">
          <RajasthaniElephant className="w-10 h-7 text-[#C9A24A] opacity-80" />
          <span className="font-cinzel text-[8px] tracking-[0.25em] text-[#C9A24A] uppercase font-semibold">
            PADHARO SA
          </span>
          <RajasthaniElephant className="w-10 h-7 text-[#C9A24A] opacity-80" mirrored />
        </div>
      </motion.div>
    </div>
  );
};
