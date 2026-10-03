import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Navigation, MapPin } from 'lucide-react';
import { InvitationConfig } from '../types';
import { FloralCorner, FloralDivider, RajasthaniMehrabArch } from './Ornaments';

interface VenueSectionProps {
  data: InvitationConfig;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'reception' | 'nikah'>('reception');

  const currentVenue = activeTab === 'reception' ? {
    title: "WEDDING RECEPTION VENUE",
    name: data.receptionVenue,
    address: data.receptionAddress,
    city: data.receptionCity,
    date: `${data.receptionDay}, ${data.receptionDisplayDate}`,
    mapsUrl: data.receptionMapsUrl,
    embedQuery: "Mohalla+Hussain+Gunj+Sikar+Rajasthan"
  } : {
    title: "NIKAH CEREMONY VENUE",
    name: data.nikahVenue,
    address: data.nikahAddress,
    city: data.nikahCity,
    date: `${data.nikahDay}, ${data.nikahDisplayDate}`,
    mapsUrl: data.nikahMapsUrl,
    embedQuery: "Iddgah+Masjid+Laxmangarh+Sikar+Rajasthan"
  };

  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center gap-3 p-3.5 sm:p-6 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
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
            MAQAMAT • VENUE LOCATIONS
          </span>
        </div>
        <h2 className="font-cinzel text-base sm:text-lg md:text-xl font-bold tracking-[0.16em] uppercase text-[#3A2118] mt-0.5">
          Ceremony Locations
        </h2>
        <span className="font-serif-luxury italic text-xs sm:text-[13px] text-[#3A2118]">
          Interactive Maps for Sikar &amp; Laxmangarh, Rajasthan
        </span>
      </motion.div>

      {/* Center Venue Card & Switcher (With generous padding from stone border) */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md flex flex-col items-center text-center px-4 sm:px-6">
        {/* Venue Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F5EBDD] border border-[#B9786D]/60 mb-3 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('reception')}
            className={`px-3.5 py-1.5 rounded-full font-cinzel text-[10px] tracking-wider uppercase font-bold transition-all ${
              activeTab === 'reception'
                ? 'bg-[#641C24] text-[#F5EBDD] shadow-xs'
                : 'text-[#3A2118] hover:text-[#3A2118]'
            }`}
          >
            Reception • Sikar
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nikah')}
            className={`px-3.5 py-1.5 rounded-full font-cinzel text-[10px] tracking-wider uppercase font-bold transition-all ${
              activeTab === 'nikah'
                ? 'bg-[#641C24] text-[#F5EBDD] shadow-xs'
                : 'text-[#3A2118] hover:text-[#3A2118]'
            }`}
          >
            Nikah • Laxmangarh
          </button>
        </div>

        {/* Selected Venue Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <span className="font-cinzel text-[9px] tracking-widest text-[#C9A24A] uppercase font-bold">
            {currentVenue.title} ({currentVenue.date})
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#3A2118] leading-tight mt-0.5">
            {currentVenue.name}
          </h3>
          <p className="font-sans-body text-xs text-[#3A2118] mt-1 font-medium leading-relaxed max-w-xs mx-auto">
            {currentVenue.address}
          </p>

          {/* Ornamental Map Frame */}
          <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-[#B9786D]/70 shadow-sm bg-[#B9786D] mt-3 group">
            {/* Inner hairline border */}
            <div className="absolute inset-1.5 border border-[#B9786D]/35 rounded-lg pointer-events-none z-10" />

            <iframe
              title={`${currentVenue.name} Map`}
              src={`https://www.google.com/maps?q=${currentVenue.embedQuery}&output=embed`}
              className="w-full h-full border-0 filter saturate-90 opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Subtle gold badge in map corner */}
            <div className="absolute top-2.5 left-2.5 z-10 bg-[#F5EBDD]/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#B9786D]/60 flex items-center gap-1.5 shadow-2xs">
              <MapPin className="w-3 h-3 text-[#C9A24A]" />
              <span className="font-cinzel text-[9px] tracking-wider uppercase text-[#3A2118] font-bold">
                {currentVenue.city}
              </span>
            </div>
          </div>

          {/* Action Button: GET DIRECTIONS */}
          <div className="mt-3.5 w-full flex justify-center">
            <a
              href={currentVenue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-2.5 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/80 hover:border-[#C9A24A] shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-[#3A2118]"
            >
              <span className="absolute inset-0.5 rounded-full border border-[#C9A24A]/30 group-hover:border-[#C9A24A]/60 pointer-events-none transition-colors" />
              <Navigation className="w-3.5 h-3.5 text-[#C9A24A] group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-cinzel text-xs tracking-[0.25em] uppercase font-bold text-[#C9A24A] group-hover:text-[#3A2118]">
                OPEN IN GOOGLE MAPS
              </span>
              <ExternalLink className="w-3 h-3 text-[#3A2118] opacity-80 group-hover:opacity-100" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.5 }}
        className="relative z-10 pb-4 sm:pb-6 flex items-center justify-center gap-2 text-center px-4"
      >
        <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-[#3A2118] font-bold">
          RSVP: {data.contactPerson} • {data.contactPhone}
        </span>
      </motion.div>
    </div>
  );
};
