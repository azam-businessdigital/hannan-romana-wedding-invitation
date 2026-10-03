import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles, Navigation } from 'lucide-react';
import { InvitationConfig } from '../types';
import { FloralCorner, FloralDivider, RajasthaniMehrabArch, RajasthaniElephant } from './Ornaments';

interface WeddingDetailsProps {
  data: InvitationConfig;
}

export const WeddingDetails: React.FC<WeddingDetailsProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-between p-3.5 sm:p-6 paper-emboss text-[#3A2118] overflow-hidden select-none">
      {/* Subtle Rajasthani jali lattice texture & grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-rajasthani-jali"
      />

      {/* Decorative frame borders */}
      <div className="absolute inset-3 sm:inset-4.5 border border-[#C9A24A]/45 rounded-xl pointer-events-none" />
      <div className="absolute inset-4 sm:inset-6 border border-[#C9A24A]/25 rounded-lg pointer-events-none" />

      {/* Corner floral ornaments */}
      <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]" position="top-left" />
      </div>
      <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]" position="top-right" />
      </div>
      <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]" position="bottom-left" />
      </div>
      <div className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-5">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]" position="bottom-right" />
      </div>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="relative z-10 pt-11 sm:pt-13 w-full flex flex-col items-center text-center px-2"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs mb-1">
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            WEDDING PROGRAMME • SCHEDULE
          </span>
        </div>
        <h2 className="font-cinzel text-base sm:text-lg md:text-xl font-bold tracking-[0.16em] uppercase text-[#3A2118] mt-0.5">
          Ceremonies &amp; Venues
        </h2>
        <span className="font-serif-luxury italic text-xs sm:text-[13px] text-[#3A2118]">
          Auspicious Celebrations in Sikar &amp; Laxmangarh, Rajasthan
        </span>
      </motion.div>

      {/* Two Detailed Ornamental Ceremony Cards (Strictly within frame padding) */}
      <div className="relative z-10 my-auto w-full max-w-sm sm:max-w-md flex flex-col gap-2.5 px-4 sm:px-6">
        {/* 1. NIKAH CEREMONY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative p-3.5 sm:p-4 rounded-xl bg-[#F5EBDD] border border-[#B9786D]/50 shadow-xs flex items-start gap-2.5 sm:gap-3 text-left overflow-hidden"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#B9786D]/60 flex items-center justify-center text-[#C9A24A] bg-[#F5EBDD] shrink-0 mt-0.5">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A24A]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1.5 flex-wrap">
              <span className="font-cinzel text-[9.5px] sm:text-[10px] tracking-[0.16em] text-[#C9A24A] uppercase font-bold truncate">
                NIKAH CEREMONY
              </span>
              <span className="text-[8.5px] font-cinzel font-bold px-2 py-0.5 rounded-full bg-[#641C24]/15 text-[#641C24] tracking-wider shrink-0">
                14 NOV 2026
              </span>
            </div>
            <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <p className="font-serif-luxury text-sm sm:text-base font-semibold text-[#3A2118] leading-tight">
                Saturday, {data.nikahDisplayDate}
              </p>
            </div>
            <div className="mt-1 pt-1 border-t border-[#B9786D]/20 text-[11px] font-sans-body">
              <p className="font-semibold text-[#3A2118] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C9A24A] shrink-0" />
                <span className="truncate">{data.nikahVenue}</span>
              </p>
              <p className="text-[#3A2118] text-[10px] sm:text-[10.5px] leading-tight pl-4 mt-0.5">
                Behind Iddgah Masjid, Near Todi College, Laxmangarh, Sikar, Rajasthan – 332311
              </p>
            </div>
            <a
              href={data.nikahMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-cinzel text-[9px] tracking-wider text-[#C9A24A] hover:text-[#3A2118] font-bold uppercase mt-1.5 transition-colors"
            >
              <Navigation className="w-2.5 h-2.5" />
              Directions to Laxmangarh &rarr;
            </a>
          </div>
        </motion.div>

        {/* 2. RECEPTION (Walima) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative p-3.5 sm:p-4 rounded-xl bg-[#F5EBDD] border-2 border-[#B9786D]/70 shadow-sm flex items-start gap-2.5 sm:gap-3 text-left overflow-hidden"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#B9786D]/80 flex items-center justify-center text-[#C9A24A] bg-[#F5EBDD] shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A24A]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1.5 flex-wrap">
              <span className="font-cinzel text-[9.5px] sm:text-[10px] tracking-[0.16em] text-[#C9A24A] uppercase font-bold truncate">
                WALIMA (RECEPTION)
              </span>
              <span className="text-[8.5px] font-cinzel font-bold px-2 py-0.5 rounded-full bg-[#B9786D]/25 text-[#641C24] tracking-wider shrink-0">
                MAIN FEAST
              </span>
            </div>
            <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <p className="font-serif-luxury text-sm sm:text-base font-semibold text-[#3A2118] leading-tight">
                Sunday, {data.receptionDisplayDate}
              </p>
              <span className="font-sans-body text-xs text-[#C9A24A] font-semibold">
                • {data.receptionTime}
              </span>
            </div>
            <div className="mt-1 pt-1 border-t border-[#B9786D]/20 text-[11px] font-sans-body">
              <p className="font-semibold text-[#3A2118] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C9A24A] shrink-0" />
                <span className="truncate">{data.receptionVenue}</span>
              </p>
              <p className="text-[#3A2118] text-[10px] sm:text-[10.5px] leading-tight pl-4 mt-0.5">
                Mohalla Hussain Gunj, Sikar, Rajasthan – 332001
              </p>
            </div>
            <a
              href={data.receptionMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-cinzel text-[9px] tracking-wider text-[#C9A24A] hover:text-[#3A2118] font-bold uppercase mt-1.5 transition-colors"
            >
              <Navigation className="w-2.5 h-2.5" />
              Directions to Sikar Venue &rarr;
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Note with Elephants */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.5 }}
        className="relative z-10 pb-4 sm:pb-6 flex flex-col items-center text-center px-4"
      >
        <span className="font-serif-luxury italic text-xs text-[#3A2118]">
          &ldquo;{data.closingBlessing}&rdquo;
        </span>
        <div className="flex items-center gap-2 mt-1">
          <RajasthaniElephant className="w-4 h-3.5 text-[#C9A24A]" />
          <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#3A2118] font-bold">
            RSVP: {data.contactPerson} ({data.contactPhone})
          </span>
          <RajasthaniElephant className="w-4 h-3.5 text-[#C9A24A]" mirrored={true} />
        </div>
      </motion.div>
    </div>
  );
};
