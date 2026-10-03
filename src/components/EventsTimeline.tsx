import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, Heart } from 'lucide-react';
import { WeddingEvent } from '../types';
import { FloralCorner, FloralCrest, FloralDivider } from './Ornaments';

interface EventsTimelineProps {
  events: WeddingEvent[];
}

export const EventsTimeline: React.FC<EventsTimelineProps> = ({ events }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#C9A24A]" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-[#C9A24A]" />;
      default:
        return <Heart className="w-4 h-4 text-[#C9A24A]" />;
    }
  };

  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-between p-5 sm:p-8 paper-emboss text-[#3A2118] overflow-hidden select-none">
      {/* Background paper texture & grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#B9786D 0.5px, transparent 0.5px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Decorative frame borders */}
      <div className="absolute inset-3 sm:inset-5 border border-[#C9A24A]/40 rounded-xl pointer-events-none" />
      <div className="absolute inset-4.5 sm:inset-7 border border-[#C9A24A]/20 rounded-lg pointer-events-none" />

      {/* Corner floral ornaments */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]/80" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]/80" position="top-right" />
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]/80" position="bottom-left" />
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A24A]/80" position="bottom-right" />
      </div>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="relative z-10 pt-6 sm:pt-8 flex flex-col items-center text-center"
      >
        <FloralCrest className="w-32 sm:w-40 h-6 text-[#C9A24A]/60 mb-2" />
        <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-normal tracking-[0.16em] uppercase text-[#3A2118]">
          Itinerary of Ceremonies
        </h2>
        <span className="font-serif-luxury italic text-sm text-[#B9786D] mt-1">
          Cherished moments of the evening
        </span>
        <FloralDivider className="w-28 sm:w-36 mt-1 mb-2" />
      </motion.div>

      {/* Vertically Centered Timeline on mobile */}
      <div className="relative z-10 my-auto w-full max-w-sm sm:max-w-md px-3 py-2 flex flex-col justify-center">
        {/* Continuous center vertical dashed gold line */}
        <div className="absolute left-[27px] sm:left-[31px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#C9A24A]/20 via-[#C9A24A]/60 to-[#C9A24A]/20" />

        <div className="space-y-4 sm:space-y-5">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: idx * 0.18 }}
              className="relative flex items-start gap-3.5 sm:gap-4 pl-1"
            >
              {/* Timeline Node Icon */}
              <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C9A24A]/60 bg-[#F5EBDD] flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(event.iconName)}
              </div>

              {/* Event Content Box */}
              <div className="flex-1 bg-[#F5EBDD]/90 p-3.5 sm:p-4 rounded-xl border border-[#C9A24A]/30 shadow-2xs text-left">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <h3 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-[#3A2118] uppercase">
                    {event.title}
                  </h3>
                  <span className="font-cinzel text-xs font-semibold text-[#C9A24A] tracking-wider">
                    {event.time}
                  </span>
                </div>

                <p className="font-serif-luxury italic text-xs text-[#B9786D] mt-0.5">
                  {event.subtitle}
                </p>

                <p className="font-sans-body text-xs text-[#3A2118] leading-relaxed mt-1.5">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Subtext */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.6 }}
        className="relative z-10 pb-6 sm:pb-8 flex flex-col items-center"
      >
        <span className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#B9786D]">
          Your presence will grace our celebrations
        </span>
      </motion.div>
    </div>
  );
};
