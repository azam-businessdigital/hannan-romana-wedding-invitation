import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, MessageCircle, Navigation, Share2, Sparkles, Heart } from 'lucide-react';
import { InvitationConfig } from '../types';
import { FloralCorner, FloralDivider, BismillahCalligraphy, RajasthaniElephant, PalaceLantern } from './Ornaments';
import { getGoogleCalendarUrl } from '../utils/calendar';

interface FinalEnvelopeProps {
  data: InvitationConfig;
  onOpenTrigger?: () => void;
  onShare?: () => void;
}

/**
 * Slide 8: INTERACTIVE ROYAL FOLDING WEDDING CARD
 * Per user instructions:
 * - "Card"
 * - "(names are hidden, abdul hannan left romana bano right"
 * - "and when card open: Abdul Hannan & Dr. Romana Bano, make like this)"
 * 
 * Features:
 * - Left flap: "Abdul Hannan" with royal groom insignia
 * - Right flap: "Romana Bano" with royal bride insignia
 * - Central Royal Rajput Wax Seal: "TAP TO OPEN CARD"
 * - When tapped, the 3D card unfolds to reveal the couple's full royal invitation
 * - Re-foldable so guests can experience the interactive opening again and again!
 */
export const FinalEnvelope: React.FC<FinalEnvelopeProps> = ({
  data,
  onOpenTrigger,
  onShare
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCard = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (onOpenTrigger) {
        onOpenTrigger();
      }
    }
  };

  const handleCloseCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const googleCalUrl = getGoogleCalendarUrl(data);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.contactPhoneRaw}&text=${encodeURIComponent(`Assalamu Alaikum Ataul Rehman Bhai, hearty congratulations on the wedding of Abdul Hannan & Dr. Romana Bano!`)}`;

  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-between p-3.5 sm:p-5 paper-emboss text-[#3A2118] overflow-x-hidden overflow-y-auto slide-scroll-container select-none pb-20">
      {/* Subtle Rajasthani jali lattice texture & grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-rajasthani-jali"
      />

      {/* Decorative outer frame borders */}
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 shadow-2xs mb-1">
          <Sparkles className="w-3 h-3 text-[#C9A24A]" />
          <span className="font-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#641C24] font-bold whitespace-nowrap">
            {isOpen ? 'INVITATION CARD' : 'WEDDING CARD'}
          </span>
          <Sparkles className="w-3 h-3 text-[#C9A24A]" />
        </div>

        <div className="mt-0.5 flex items-center justify-center gap-2">
          <PalaceLantern size="sm" className="scale-[0.58] opacity-90" />
          <h2 className="font-cinzel text-base sm:text-lg md:text-xl font-bold tracking-[0.16em] uppercase text-[#3A2118]">
            WEDDING CARD
          </h2>
          <PalaceLantern size="sm" className="scale-[0.58] opacity-90" />
        </div>
        <span className="font-serif-luxury italic text-xs sm:text-[13px] text-[#3A2118]">
          {isOpen ? 'Fold card or share your heartfelt congratulations' : 'Tap the wax seal in the center to open the card'}
        </span>
      </motion.div>

      {/* CENTER STAGE: 3D FOLDING WEDDING CARD */}
      <div className="relative z-10 my-auto w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center px-2 py-1">
        <div 
          className="wedding-card-shell relative w-full max-w-[360px] sm:max-w-[400px] h-[min(66dvh,520px)] min-h-[390px] sm:h-[min(64dvh,560px)] sm:min-h-[460px] rounded-2xl shadow-[0_16px_40px_rgba(58,33,24,0.24)] bg-gradient-to-br from-[#F5EBDD] via-[#F5EBDD] to-[#B9786D]/30 border-2 border-[#641C24] flex items-center justify-center overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          {/* ======================================================== */}
          {/* THE INNER REVEALED INVITATION CARD (Visible when open)   */}
          {/* ======================================================== */}
          {isOpen && <div className="absolute inset-0 p-4 sm:p-5 flex flex-col items-center justify-between text-center select-text overflow-y-auto">
            {/* Inner Gold Foil Frame */}
            <div className="absolute inset-2 border border-[#C9A24A]/50 rounded-xl pointer-events-none" />
            <div className="absolute inset-3 border border-dashed border-[#C9A24A]/30 rounded-lg pointer-events-none" />

            {/* Top: Sacred Bismillah */}
            <div className="pt-1">
              <BismillahCalligraphy className="scale-75 sm:scale-85" />
              <span className="font-cinzel text-[7.5px] tracking-[0.24em] uppercase text-[#641C24] font-bold block mt-1">
                DAWAT-E-WALIMA
              </span>
            </div>

            {/* REVEALED COUPLE NAMES PER USER SPECIFICATION: */}
            {/* Abdul Hannan & Dr. Romana Bano */}
            <div className="my-auto py-1 w-full">
              <p className="font-cormorant text-xs sm:text-[13px] italic text-[#3A2118] mb-1">
                We cordially invite you to celebrate the joyous Walima ceremony of our grandson.
              </p>

              <div className="bg-[#F5EBDD]/80 border border-[#C9A24A]/50 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                {/* Groom Name */}
                <h1 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#3A2118] tracking-wide leading-tight">
                  {data.groomFullName}
                </h1>
                <p className="font-cormorant text-[11px] text-[#3A2118] italic">
                  Son of {data.groomParents.father} &amp; {data.groomParents.mother}
                </p>

                {/* & Symbol */}
                <div className="my-1 flex items-center justify-center gap-2">
                  <span className="h-px w-10 bg-[#C9A24A]/60" />
                  <span className="font-cinzel-decorative text-sm sm:text-base font-bold text-[#641C24]">&amp;</span>
                  <span className="h-px w-10 bg-[#C9A24A]/60" />
                </div>

                {/* Bride Name */}
                <h1 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#641C24] tracking-wide leading-tight">
                  {data.bride}
                </h1>
                <p className="font-cormorant text-[11px] text-[#3A2118] italic">
                  Daughter of {data.brideParents.father} &amp; {data.brideParents.mother}
                </p>
              </div>

              {/* Ceremony Dates Summary */}
              <div className="grid grid-cols-2 gap-1.5 mt-2 text-left">
                <div className="bg-[#F5EBDD] border border-[#C9A24A]/30 rounded-lg p-1.5">
                  <span className="font-cinzel text-[7px] tracking-wider text-[#641C24] uppercase font-bold block">
                    NIKAH
                  </span>
                  <p className="font-serif-luxury text-[10px] font-bold text-[#3A2118] leading-tight">
                    {data.nikahDay}, {data.nikahDisplayDate}
                  </p>
                  <p className="text-[9px] text-[#3A2118] truncate">
                    {data.nikahCity}
                  </p>
                </div>

                <div className="bg-[#F5EBDD] border border-[#C9A24A]/30 rounded-lg p-1.5">
                  <span className="font-cinzel text-[7px] tracking-wider text-[#641C24] uppercase font-bold block">
                    RECEPTION
                  </span>
                  <p className="font-serif-luxury text-[10px] font-bold text-[#3A2118] leading-tight">
                    {data.receptionDay}, {data.receptionDisplayDate}
                  </p>
                  <p className="text-[9px] text-[#3A2118] truncate">
                    {data.receptionCity}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions inside Card */}
            <div className="w-full pb-1 flex flex-col gap-1.5">
              <div className="grid grid-cols-2 gap-1.5 w-full">
                <a href={data.receptionMapsUrl} target="_blank" rel="noopener noreferrer" className="py-2 px-2 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/60 font-cinzel text-[9px] uppercase text-[#3A2118] font-bold flex items-center justify-center gap-1 shadow-2xs hover:bg-[#641C24] hover:text-[#F5EBDD] transition-colors">
                  <Navigation className="w-3 h-3 text-[#C9A24A]" />
                  View Location
                </a>
                <a href={googleCalUrl} target="_blank" rel="noopener noreferrer" className="py-2 px-2 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/60 font-cinzel text-[9px] uppercase text-[#3A2118] font-bold flex items-center justify-center gap-1 shadow-2xs hover:bg-[#641C24] hover:text-[#F5EBDD] transition-colors">
                  <Calendar className="w-3 h-3 text-[#C9A24A]" />
                  Add to Calendar
                </a>
              </div>
              <div className="grid grid-cols-2 gap-1.5 w-full">
                <a
                  href={`tel:${data.contactPhoneCall}`}
                  className="py-2 px-2 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/60 font-cinzel text-[9px] uppercase text-[#3A2118] font-bold flex items-center justify-center gap-1 shadow-2xs hover:bg-[#641C24] hover:text-[#F5EBDD] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#C9A24A]" />
                  Call Host
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 rounded-lg bg-[#F5EBDD] border border-[#C9A24A]/60 font-cinzel text-[9px] uppercase text-[#641C24] font-bold flex items-center justify-center gap-1 shadow-2xs hover:bg-[#641C24] hover:text-[#F5EBDD] transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
              </div>

              {/* Fold Card Button */}
              <button
                type="button"
                onClick={handleCloseCard}
                className="cursor-pointer py-1 text-center font-cinzel text-[8.5px] tracking-widest uppercase text-[#641C24] hover:text-[#C66A24] font-bold transition-colors"
              >
                [ FOLD &amp; CLOSE CARD ]
              </button>
            </div>
          </div>}

          {/* ======================================================== */}
          {/* LEFT DOOR FLAP: ABDUL HANNAN (Groom panel)               */}
          {/* Swings open to the left on tap                            */}
          {/* ======================================================== */}
          <motion.div
            onClick={handleOpenCard}
            initial={false}
            animate={{
              rotateY: isOpen ? -115 : 0,
              boxShadow: isOpen 
                ? '-10px 0 25px rgba(0,0,0,0.25)' 
                : '2px 0 8px rgba(40,20,10,0.15)'
            }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left center' }}
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#F5EBDD] bg-gradient-to-r from-[#F5EBDD] via-[#F5EBDD] to-[#C9A24A]/20 border-r-2 border-[#C9A24A] z-20 cursor-pointer flex flex-col items-center justify-between p-3 sm:p-4 select-none"
          >
            {/* Flap Gold Inner Border */}
            <div className="absolute inset-1.5 border border-[#C9A24A]/40 rounded-l-xl pointer-events-none" />
            <div className="absolute top-2 left-2">
              <FloralCorner className="w-6 h-6 text-[#C9A24A]" position="top-left" />
            </div>
            <div className="absolute bottom-2 left-2">
              <FloralCorner className="w-6 h-6 text-[#C9A24A]" position="bottom-left" />
            </div>

            {/* Top Insignia */}
            <div className="pt-2 text-center">
              <span className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.2em] text-[#641C24] uppercase font-bold">
                GROOM
              </span>
            </div>

            {/* Center: Abdul Hannan Stamped on Left Flap */}
            <div className="my-auto flex flex-col items-center text-center px-1">
              {/* Groom Seal Monogram */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#C9A24A] bg-[#641C24] text-[#F5EBDD] flex items-center justify-center shadow-md mb-2">
                <span className="font-cinzel-decorative text-base sm:text-lg font-bold">AH</span>
              </div>

              {/* Abdul Hannan Name On Left Flap */}
              <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#3A2118] tracking-wide leading-tight">
                Abdul Hannan
              </h3>
              <span className="font-cinzel text-[6.5px] sm:text-[7.5px] tracking-[0.22em] text-[#641C24] uppercase font-semibold mt-0.5">
                CHOWHAN
              </span>
            </div>

            {/* Bottom Flap Hint */}
            <div className="pb-1 text-center">
              <RajasthaniElephant className="w-6 h-4 text-[#C9A24A] opacity-70" />
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT DOOR FLAP: ROMANA BANO (Bride panel)               */}
          {/* Swings open to the right on tap                           */}
          {/* ======================================================== */}
          <motion.div
            onClick={handleOpenCard}
            initial={false}
            animate={{
              rotateY: isOpen ? 115 : 0,
              boxShadow: isOpen 
                ? '10px 0 25px rgba(0,0,0,0.25)' 
                : '-2px 0 8px rgba(40,20,10,0.15)'
            }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'right center' }}
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#F5EBDD] bg-gradient-to-l from-[#F5EBDD] via-[#F5EBDD] to-[#C9A24A]/20 border-l-2 border-[#C9A24A] z-20 cursor-pointer flex flex-col items-center justify-between p-3 sm:p-4 select-none"
          >
            {/* Flap Gold Inner Border */}
            <div className="absolute inset-1.5 border border-[#C9A24A]/40 rounded-r-xl pointer-events-none" />
            <div className="absolute top-2 right-2">
              <FloralCorner className="w-6 h-6 text-[#C9A24A]" position="top-right" />
            </div>
            <div className="absolute bottom-2 right-2">
              <FloralCorner className="w-6 h-6 text-[#C9A24A]" position="bottom-right" />
            </div>

            {/* Top Insignia */}
            <div className="pt-2 text-center">
              <span className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.2em] text-[#641C24] uppercase font-bold">
                BRIDE
              </span>
            </div>

            {/* Center: Romana Bano Stamped on Right Flap */}
            <div className="my-auto flex flex-col items-center text-center px-1">
              {/* Bride Seal Monogram */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#C9A24A] bg-[#F5EBDD] text-[#641C24] flex items-center justify-center shadow-md mb-2">
                <span className="font-cinzel-decorative text-base sm:text-lg font-bold">RB</span>
              </div>

              {/* Romana Bano Name On Right Flap */}
              <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#641C24] tracking-wide leading-tight">
                Romana Bano
              </h3>
              <span className="font-cinzel text-[6.5px] sm:text-[7.5px] tracking-[0.22em] text-[#641C24] uppercase font-semibold mt-0.5">
                JATOO
              </span>
            </div>

            {/* Bottom Flap Hint */}
            <div className="pb-1 text-center">
              <RajasthaniElephant className="w-6 h-4 text-[#C9A24A] opacity-70" mirrored />
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* CENTRAL GOLDEN WAX SEAL FASTENER                         */}
          {/* Holds left & right flaps together when closed             */}
          {/* ======================================================== */}
          <AnimatePresence>
            {!isOpen && (
              <motion.button
                type="button"
                aria-label="Open wedding card"
                onClick={handleOpenCard}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute z-30 cursor-pointer appearance-none border-0 bg-transparent p-0 text-inherit flex flex-col items-center justify-center"
              >
                {/* Radial golden glow */}
                <div className="absolute inset-0 rounded-full bg-[#C9A24A]/40 blur-md animate-pulse" />
                
                {/* Wax Seal Medallion */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-[#C9A24A] bg-gradient-to-br from-[#641C24] via-[#641C24] to-[#3A2118] shadow-[0_8px_25px_rgba(40,15,10,0.5)] flex flex-col items-center justify-center p-1">
                  <div className="w-full h-full rounded-full border border-dashed border-[#C9A24A]/80 flex flex-col items-center justify-center text-center">
                    <Sparkles className="w-3 h-3 text-[#C9A24A] mb-0.5" />
                    <span className="font-cinzel text-[7px] sm:text-[7.5px] tracking-widest text-[#F5EBDD] font-bold uppercase leading-none">
                      OPEN
                    </span>
                    <span className="font-cinzel text-[5.5px] tracking-wider text-[#C9A24A] uppercase mt-0.5">
                      CARD
                    </span>
                  </div>
                </div>

                {/* Subtitle pill badge */}
                <div className="mt-2 px-2.5 py-0.5 rounded-full bg-[#F5EBDD]/95 border border-[#C9A24A] shadow-xs">
                  <span className="font-cinzel text-[7px] sm:text-[7.5px] tracking-[0.2em] uppercase text-[#641C24] font-bold whitespace-nowrap">
                    TAP TO OPEN
                  </span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Footer Note with Elephants */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0, delay: 0.3 }}
        className="relative z-10 pb-8 sm:pb-9 flex items-center justify-center gap-2 text-center px-4"
      >
        <RajasthaniElephant className="w-4 h-3.5 text-[#C9A24A]" />
        <span className="font-cinzel text-[9px] sm:text-[9.5px] tracking-[0.2em] uppercase text-[#3A2118] font-semibold">
          {data.compliments}
        </span>
        <RajasthaniElephant className="w-4 h-3.5 text-[#C9A24A]" mirrored />
      </motion.div>
    </div>
  );
};
