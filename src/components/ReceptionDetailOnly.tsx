import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import { InvitationConfig } from '../types';
import { FloralCorner, FloralDivider } from './Ornaments';

interface ReceptionDetailOnlyProps {
  data: InvitationConfig;
}

/**
 * Slide 5: RECEPTION DETAILS ONLY
 * Per user instruction: "reception details only"
 * Dedicated exclusively to the Walima Ceremony celebration, timings, venue, and directions.
 */
export const ReceptionDetailOnly: React.FC<ReceptionDetailOnlyProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center gap-3 p-3.5 sm:p-5 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
      <img
        src="/assets/walima-ceremony-artwork.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45 pointer-events-none"
      />
      {/* Subtle Rajasthani jali lattice texture & grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-rajasthani-jali"
      />

      {/* Decorative frame borders */}
      <div className="absolute inset-3 sm:inset-4.5 border border-[#C9A24A]/45 rounded-xl pointer-events-none" />
      <div className="absolute inset-4.5 sm:inset-6 border border-[#C9A24A]/25 rounded-lg pointer-events-none" />

      {/* Corner floral ornaments */}
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

      {/* Top Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="relative z-10 pt-10 sm:pt-12 w-full flex flex-col items-center text-center px-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs mb-1.5">
          <Sparkles className="w-3 h-3 text-[#C9A24A]" />
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            WEDDING CELEBRATION
          </span>
          <Sparkles className="w-3 h-3 text-[#C9A24A]" />
        </div>

        <h2 className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold tracking-[0.18em] uppercase text-[#3A2118] mt-0.5">
          WALIMA CEREMONY
        </h2>
        <span className="font-serif-luxury italic text-xs sm:text-[13px] text-[#3A2118]">
          Grand Wedding Reception &amp; Celebratory Feast
        </span>
      </motion.div>

      {/* Center Reception Dedicated Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md flex flex-col items-center px-1 sm:px-3"
      >
        {/* Cordial Invitation Banner */}
        <div className="bg-[#F5EBDD]/80 border border-[#C9A24A]/40 rounded-xl p-2.5 sm:p-3 text-center mb-2.5 w-full shadow-2xs">
          <p className="font-serif-luxury italic text-xs sm:text-[13px] text-[#3A2118] leading-relaxed">
  &ldquo;With the blessings of Allah Almighty, we invite you to join us in celebrating this blessed union and grace the newlywed couple with your presence, duas, and warmest blessings.&rdquo;
</p>
        </div>

        {/* The Grand Reception Card */}
        <div className="w-full bg-[#F5EBDD]/95 border-2 border-[#C9A24A]/60 rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(40,20,10,0.08)] flex flex-col gap-3">
          {/* Date & Time Row */}
          <div className="flex flex-col gap-3 pb-2.5 border-b border-[#C9A24A]/30">
            <div className="flex min-w-0 items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 flex items-center justify-center shrink-0 text-[#641C24]">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-cinzel text-[8px] tracking-[0.2em] text-[#C9A24A] uppercase font-bold block">
                  DATE
                </span>
                <p className="font-serif-luxury text-xs sm:text-[13px] font-bold text-[#3A2118] leading-tight break-words">
                  {data.receptionDay}
                </p>
                <p className="font-cinzel text-[10px] sm:text-[11px] font-semibold text-[#641C24]">
                  {data.receptionDisplayDate}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 flex items-center justify-center shrink-0 text-[#641C24]">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-cinzel text-[8px] tracking-[0.2em] text-[#C9A24A] uppercase font-bold block">
                  TIME
                </span>
                <p className="font-serif-luxury text-xs sm:text-[13px] font-bold text-[#3A2118] leading-tight break-words">
                  {data.receptionTime}
                </p>
                <p className="font-cormorant italic text-[11px] text-[#3A2118]">
                  Dinner &amp; Greetings
                </p>
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 flex items-center justify-center shrink-0 text-[#641C24] mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-cinzel text-[8px] tracking-[0.2em] text-[#C9A24A] uppercase font-bold block">
                RECEPTION BANQUET VENUE
              </span>
              <p className="font-serif-luxury text-sm sm:text-base font-bold text-[#3A2118] leading-snug break-words">
                {data.receptionVenue}
              </p>
              <p className="font-sans-body text-[11px] sm:text-[11.5px] text-[#3A2118] leading-tight mt-0.5 break-words">
                {data.receptionAddress}
              </p>
            </div>
          </div>


          {/* Interactive Navigation Link */}
          <a
            href={data.receptionMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-1 py-2 px-3 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/60 text-[#641C24] hover:bg-[#641C24] hover:text-[#F5EBDD] transition-all flex items-center justify-center gap-1.5 shadow-2xs group"
          >
            <Navigation className="w-3.5 h-3.5 text-[#C9A24A] group-hover:text-[#F5EBDD]" />
            <span className="font-cinzel text-[9.5px] sm:text-[10px] tracking-[0.16em] uppercase font-bold">
              GET DIRECTIONS TO WALIMA
            </span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 w-full max-w-sm pb-8 sm:pb-9 flex flex-col items-center text-center"
      >
        <FloralDivider className="w-40 sm:w-48 text-[#C9A24A] opacity-75 mb-1" />
        <div className="flex items-center justify-center">
          <span className="font-cinzel text-[8px] tracking-[0.25em] text-[#C9A24A] uppercase font-semibold">
            WALIMA CEREMONY
          </span>
        </div>
      </motion.div>
    </div>
  );
};
