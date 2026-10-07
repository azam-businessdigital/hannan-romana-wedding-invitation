import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FloralCorner, FloralDivider, RajasthaniMehrabArch, PalaceLantern } from './Ornaments';

interface CountdownProps {
  targetDate: string; // "2026-11-15"
  displayDate: string;
  eventName?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate, displayDate, eventName = 'Walima' }) => {
  const calculateTime = (): TimeRemaining => {
    const target = new Date(`${targetDate}T19:00:00+05:30`).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false
    };
  };

  const [time, setTime] = useState<TimeRemaining>(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINUTES', value: time.minutes },
    { label: 'SECONDS', value: time.seconds }
  ];

  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center gap-3 p-4 sm:p-7 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
      {/* Subtle Rajasthani jali lattice pattern & grain */}
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

      {/* Top Scalloped Mehrab Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="relative z-10 pt-11 sm:pt-13 w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs">
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            COUNTDOWN TO {eventName.toUpperCase()}
          </span>
        </div>
      </motion.div>

      {/* Center Countdown Unit */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm sm:max-w-md w-full">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.0 }}
          className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.16em] uppercase text-[#3A2118] mb-2"
        >
          Until The {eventName}
        </motion.h2>

        <FloralDivider className="w-32 sm:w-40 mb-4 sm:mb-5" />

        {/* Countdown Grid: 4 elegant royal Jaipur Rose & gold boxes */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-[#F5EBDD] border border-[#B9786D]/60 shadow-xs"
            >
              <span className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#3A2118] tracking-tight tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] text-[#C9A24A] font-bold uppercase mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="font-serif-luxury italic text-xs sm:text-sm text-[#3A2118] mt-4 leading-relaxed max-w-xs"
        >
          &ldquo;Your gracious presence and blessings will make our celebration truly special.&rdquo;
        </motion.p>
      </div>

      {/* Symmetrical Palace Lanterns at plinth corners */}
      <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-7 z-15 hidden xs:block">
        <PalaceLantern size="sm" />
      </div>
      <div className="absolute bottom-6 right-5 sm:bottom-8 sm:right-7 z-15 hidden xs:block">
        <PalaceLantern size="sm" />
      </div>

      {/* Bottom Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.7 }}
        className="relative z-10 pb-4 sm:pb-6 flex flex-col items-center text-center px-4"
      >
        <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#3A2118] font-bold">
          {displayDate} • Mohalla Hussain Gunj, Sikar
        </span>
      </motion.div>
    </div>
  );
};
