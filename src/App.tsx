import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { invitationData } from './config/invitationData';
import { InvitationCover } from './components/InvitationCover';
import { CoupleSection } from './components/CoupleSection';
import { Countdown } from './components/Countdown';
import { NikahDetailOnly } from './components/NikahDetailOnly';
import { ReceptionDetailOnly } from './components/ReceptionDetailOnly';
import { FamilySection } from './components/FamilySection';
import { FinalEnvelope } from './components/FinalEnvelope';
import { ThankYou } from './components/ThankYou';
import { MusicControl } from './components/MusicControl';
import { ShareButton } from './components/ShareButton';
import { PetalCanvas } from './components/PetalCanvas';
import { RajasthaniBackground } from './components/RajasthaniBackground';
import { RajasthaniPageFrame } from './components/Ornaments';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [petalIntensity, setPetalIntensity] = useState<'gentle' | 'celebratory'>('gentle');
  const touchStartY = useRef<number | null>(null);
  const lastWheelTime = useRef(0);
  
  // Royal Rajasthani Invitation Sections:
  // 1. First slide only initials
  // 2. Grandparents invite for wedding of beloved grandson + details (names in 2 lines, final invitation)
  // 3. Nikah detail only
  // 4. Nikah countdown
  // 5. Walima details
  // 6. Walima countdown
  // 7. RSVP
  // 8. Interactive wedding card
  // 9. Thank You
  const totalPages = 9;

  const pageTitles = [
    "A & R",
    "Family Invitation",
    "Nikah Ceremony",
    "Nikah Countdown",
    "Walima Ceremony",
    "Walima Countdown",
    "RSVP & Family",
    "Wedding Card",
    "Thank You"
  ];

  // Transition to specific page
  const goToPage = (pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= totalPages || pageIndex === currentPage) return;
    setDirection(pageIndex > currentPage ? 'forward' : 'backward');
    setCurrentPage(pageIndex);
    if (!hasStarted && pageIndex > 0) {
      setHasStarted(true);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  // User taps "CLICK FOR NEXT SLIDE" on cover
  const handleProceedFromCover = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setPetalIntensity('celebratory');
    setTimeout(() => setPetalIntensity('gentle'), 4000);
    goToPage(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // Preserve native scrolling inside a slide; turn the page only at its scroll boundary.
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 12) return;

      const slide = event.target instanceof Element
        ? event.target.closest<HTMLElement>('.slide-scroll-container')
        : null;
      if (slide && slide.scrollHeight > slide.clientHeight) {
        const canScrollDown = slide.scrollTop + slide.clientHeight < slide.scrollHeight - 1;
        const canScrollUp = slide.scrollTop > 0;
        if (event.deltaY > 0 ? canScrollDown : canScrollUp) return;
      }

      const now = Date.now();
      if (now - lastWheelTime.current < 800) {
        event.preventDefault();
        return;
      }

      lastWheelTime.current = now;
      event.preventDefault();
      if (event.deltaY > 0) nextPage();
      else prevPage();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const deltaY = touchStartY.current - (event.changedTouches[0]?.clientY ?? touchStartY.current);
    touchStartY.current = null;
    if (Math.abs(deltaY) < 56) return;

    const slide = (event.target as HTMLElement).closest<HTMLElement>('.slide-scroll-container');
    if (slide && slide.scrollHeight > slide.clientHeight) {
      const canScrollDown = slide.scrollTop + slide.clientHeight < slide.scrollHeight - 1;
      const canScrollUp = slide.scrollTop > 0;
      if (deltaY > 0 ? canScrollDown : canScrollUp) return;
    }

    if (deltaY > 0) nextPage();
    else prevPage();
  };

  // Page turning motion variants (luxurious royal paper feel)
  const variants: Variants = {
    enter: (dir: 'forward' | 'backward') => ({
      opacity: 0,
      scale: 0.97,
      y: dir === 'forward' ? 24 : -24,
    }),
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
    exit: (dir: 'forward' | 'backward') => ({
      opacity: 0,
      scale: 0.97,
      y: dir === 'forward' ? -24 : 24,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  return (
    <div 
      className="relative w-full h-[100dvh] overflow-hidden bg-[#F5EBDD] flex items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Authentic Rajasthani architectural background: palace arcade arches, traditional mandalas, and jali screen */}
      <RajasthaniBackground />

      {/* First visit begins at the carved haveli entrance. */}

      {/* Floating jasmine, gulab rose petals & shimmering antique gold dust with PARALLAX EFFECT */}
      <PetalCanvas 
        active={true}
        intensity={petalIntensity} 
        page={currentPage} 
        direction={direction} 
      />

      {/* FLOATING TOP NAVIGATION BAR (Persistent Luxury Header) */}
      <header className="fixed top-0 left-0 right-0 z-40 max-w-[520px] mx-auto px-4 pt-3 sm:pt-4 flex items-center justify-between pointer-events-none">
        {/* Left: Music control */}
        <div className="pointer-events-auto">
          <MusicControl musicUrl={invitationData.musicUrl} />
        </div>

        {/* Center: Current Section Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto px-3.5 py-1 rounded-full bg-[#F5EBDD]/95 backdrop-blur-md border border-[#B9786D]/60 shadow-xs flex items-center gap-1.5"
        >
          <span className="font-cinzel text-[10px] tracking-widest text-[#C9A24A] uppercase font-bold">
            {currentPage + 1} / {totalPages}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9786D]" />
          <span className="font-cinzel text-[10px] tracking-wider text-[#3A2118] font-bold uppercase truncate max-w-[120px] sm:max-w-[160px]">
            {pageTitles[currentPage]}
          </span>
        </motion.div>

        {/* Right: Share Button */}
        <div className="pointer-events-auto">
          <ShareButton data={invitationData} />
        </div>
      </header>

      {/* CENTRAL DIGITAL INVITATION BOOK CONTAINER (430px - 500px on desktop) */}
      <main className="relative w-full h-[100dvh] max-w-[480px] md:max-w-[500px] mx-auto shadow-[0_25px_80px_rgba(83,35,30,0.3)] rounded-none sm:rounded-2xl overflow-hidden flex flex-col justify-center">
        {/* Slim Rajasthani jali frame */}
        <RajasthaniPageFrame className="absolute inset-0 z-30 h-full w-full" />

        {/* Shared wildlife border anchored to the foot of every slide. */}
        <img
          src="/assets/rajasthani-wildlife-border.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 left-0 z-20 h-[clamp(72px,14vh,125px)] w-full object-cover object-bottom opacity-90 select-none ${currentPage === 6 ? 'hidden' : ''}`}
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Slide 1: Only Initials (with click next slide button) */}
            {currentPage === 0 && (
              <InvitationCover
                data={invitationData}
                onProceed={handleProceedFromCover}
              />
            )}

            {/* Slide 2: Grandparents invite for wedding of beloved grandson, names in 2 lines, final invitation */}
            {currentPage === 1 && (
              <CoupleSection
                data={invitationData}
              />
            )}

            {/* Slide 3: Nikah Detail Only */}
            {currentPage === 2 && (
              <NikahDetailOnly
                data={invitationData}
              />
            )}

            {/* Slide 4: Nikah Countdown */}
            {currentPage === 3 && (
              <Countdown targetDate={invitationData.nikahDate} displayDate={invitationData.nikahDisplayDate} eventName="Nikah" />
            )}

            {/* Slide 5: Reception Details Only */}
            {currentPage === 4 && (
              <ReceptionDetailOnly
                data={invitationData}
              />
            )}

            {/* Slide 6: Walima Countdown */}
            {currentPage === 5 && (
              <Countdown targetDate={invitationData.receptionDate} displayDate={invitationData.receptionDisplayDate} />
            )}

            {/* Slide 7: RSVP & Compliments */}
            {currentPage === 6 && (
              <FamilySection
                data={invitationData}
              />
            )}

            {/* Slide 7: Interactive Folding Card (names hidden, left Abdul Hannan, right Romana Bano; open reveals Abdul Hannan & Dr. Romana Bano) */}
            {currentPage === 7 && (
              <FinalEnvelope
                data={invitationData}
                onOpenTrigger={() => setPetalIntensity('celebratory')}
                onShare={() => {
                  const shareBtn = document.querySelector('[aria-label="Share Wedding Invitation"]') as HTMLButtonElement | null;
                  if (shareBtn) shareBtn.click();
                }}
              />
            )}

            {/* Slide 9: Thank You */}
            {currentPage === 8 && <ThankYou data={invitationData} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FLOATING BOTTOM PAGE-TURNING CONTROLS */}
      <motion.nav
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Invitation page navigation"
        className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 max-w-[480px] md:max-w-[500px] mx-auto px-4 flex items-center justify-between pointer-events-none"
      >
        {/* Previous Page Button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          type="button"
          aria-label="Previous invitation page"
          className={`pointer-events-auto px-3.5 py-1.5 rounded-full bg-[#F5EBDD]/95 backdrop-blur-md border border-[#B9786D]/60 font-cinzel text-[10px] tracking-wider uppercase text-[#3A2118] font-bold flex items-center gap-1 hover:border-[#B9786D] shadow-xs active:scale-95 transition-all ${
            currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-90 hover:opacity-100'
          }`}
        >
          <ChevronUp className="w-3.5 h-3.5 text-[#C9A24A]" />
          <span className="hidden xs:inline">PREV</span>
        </button>

        {/* Page Indicator Dots */}
        <div className="pointer-events-auto px-2.5 py-1.5 rounded-full bg-[#F5EBDD]/90 backdrop-blur-md border border-[#B9786D]/50 shadow-2xs flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              type="button"
              aria-label={`Go to page ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === currentPage
                  ? 'w-4 h-1.5 bg-[#C9A24A]'
                  : 'w-1.5 h-1.5 bg-[#B9786D]/40 hover:bg-[#B9786D]/80'
              }`}
            />
          ))}
        </div>

        {/* Next Page Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          type="button"
          aria-label="Next invitation page"
          className={`pointer-events-auto px-3.5 py-1.5 rounded-full bg-[#F5EBDD]/95 backdrop-blur-md border border-[#B9786D]/60 font-cinzel text-[10px] tracking-wider uppercase text-[#3A2118] font-bold flex items-center gap-1 hover:border-[#B9786D] shadow-xs active:scale-95 transition-all ${
            currentPage === totalPages - 1 ? 'opacity-0 pointer-events-none' : 'opacity-90 hover:opacity-100'
          }`}
        >
          <span className="hidden xs:inline">NEXT</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#C9A24A]" />
        </button>
      </motion.nav>
    </div>
  );
}
