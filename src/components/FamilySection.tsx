import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { InvitationConfig } from '../types';
import { FloralCorner, FloralDivider, RajasthaniMehrabArch, RajasthaniElephant } from './Ornaments';

interface FamilySectionProps {
  data: InvitationConfig;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ data }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.contactPhoneRaw}&text=${encodeURIComponent(`Assalamu Alaikum Ataul Rehman Bhai, hearty congratulations on the wedding of Abdul Hannan & Dr. Romana Bano!`)}`;

  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-between p-3.5 sm:p-6 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
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
        className="relative z-10 pt-11 sm:pt-13 w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs">
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            AHL-E-KHAANDAN • FAMILY &amp; RSVP
          </span>
        </div>
      </motion.div>

      {/* Center Family Greetings & Lineage Cards */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center px-3 max-w-sm sm:max-w-md w-full">
        {/* Grandparents Tribute Box (Strictly single-line typography) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="w-full p-3 sm:p-3.5 rounded-xl bg-[#F5EBDD] border border-[#C9A24A]/45 shadow-2xs mb-2 text-center"
        >
          <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#C9A24A] font-bold block mb-1.5 whitespace-nowrap">
            With The Blessings Of Our Families
          </span>
          <div className="flex flex-col gap-2 text-center pt-1.5 border-t border-[#C9A24A]/25 w-full">
            <div className="bg-[#F5EBDD] p-2 rounded-lg border border-[#C9A24A]/30">
              <p className="font-serif-luxury text-xs sm:text-[13px] text-[#3A2118] font-semibold mt-0.5">
                Haji Abdul Rehman Chowhan &amp; Hajjan Zubeda Chowhan
              </p>
            </div>
            <div className="bg-[#F5EBDD] p-2 rounded-lg border border-[#C9A24A]/30">
              <p className="font-serif-luxury text-xs sm:text-[13px] text-[#3A2118] font-semibold mt-0.5">
                Mr. Nisar Ahmed Gehlot &amp; Mrs. Jamila Gehlot
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing Blessing Quote from prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="my-1"
        >
          <FloralDivider className="w-28 sm:w-36 mb-1.5" />
          <p className="font-serif-luxury italic text-xs sm:text-sm text-[#3A2118] leading-relaxed max-w-xs mx-auto">
            &ldquo;{data.closingBlessing}&rdquo;
          </p>
        </motion.div>

        {/* Contact & RSVP Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.0, delay: 0.35 }}
          className="w-full p-3.5 sm:p-4 rounded-xl bg-[#F5EBDD] border-2 border-[#C9A24A]/70 shadow-sm flex flex-col items-center mt-1.5"
        >
          <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-[#C9A24A] font-bold">
            R.S.V.P &amp; Warm Welcome
          </span>
          <p className="font-serif-luxury text-xl font-medium text-[#3A2118] mt-1">
            {data.contactPerson}
          </p>
          <p className="font-sans-body text-xs text-[#3A2118] mt-0.5 tracking-wider font-semibold">
            {data.contactPhone}
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex items-center gap-2.5 mt-3 w-full justify-center">
            <a
              href={`tel:${data.contactPhoneCall}`}
              className="flex-1 max-w-[140px] py-2 px-3 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/70 hover:border-[#C9A24A] font-cinzel text-[10px] tracking-wider uppercase text-[#3A2118] font-bold flex items-center justify-center gap-1.5 shadow-2xs hover:bg-[#F5EBDD] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A24A]" />
              Call
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-[140px] py-2 px-3 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/70 hover:border-[#C9A24A] font-cinzel text-[10px] tracking-wider uppercase text-[#641C24] font-bold flex items-center justify-center gap-1.5 shadow-2xs hover:bg-[#B9786D] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#641C24]" />
              WhatsApp
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
        className="relative z-10 pb-4 sm:pb-6 flex items-center justify-center gap-2 text-center px-4"
      >
        <RajasthaniElephant className="w-4 h-3.5 text-[#C9A24A]" />
        <span className="font-cinzel text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase text-[#3A2118] font-semibold">
          {data.compliments}
        </span>
        <RajasthaniElephant className="w-4 h-3.5 text-[#C9A24A]" mirrored={true} />
      </motion.div>
    </div>
  );
};
