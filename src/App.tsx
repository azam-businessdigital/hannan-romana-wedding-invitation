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
  const touchStart = useRef<{
    y: number;
    x: number;
    slide: HTMLElement | null;
    scrollables: Array<{ element: HTMLElement; scrollTop: number }>;
    target: EventTarget | null;
  } | null>(null);
  const transitionLocked = useRef(false);
  const transitionCooldownUntil = useRef(0);
  const wheelIdleDelay = 480;
  const intensityResetTimer = useRef<number | null>(null);
  const wheelIdleTimer = useRef<number | null>(null);
  const wheelTurnActive = useRef(false);
  const navigationRef = useRef({ currentPage, totalPages: 9, goToPage: (_page: number) => {}, nextPage: () => {}, prevPage: () => {} });
  
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
    if (transitionLocked.current || pageIndex < 0 || pageIndex >= totalPages || pageIndex === currentPage) return;
    transitionLocked.current = true;
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

  navigationRef.current = { currentPage, totalPages, goToPage, nextPage, prevPage };

  useEffect(() => () => {
    transitionLocked.current = false;
    if (intensityResetTimer.current !== null) window.clearTimeout(intensityResetTimer.current);
    if (wheelIdleTimer.current !== null) window.clearTimeout(wheelIdleTimer.current);
  }, []);

  // User taps "CLICK FOR NEXT SLIDE" on cover
  const handleProceedFromCover = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setPetalIntensity('celebratory');
    if (intensityResetTimer.current !== null) window.clearTimeout(intensityResetTimer.current);
    intensityResetTimer.current = window.setTimeout(() => {
      setPetalIntensity('gentle');
      intensityResetTimer.current = null;
    }, 4000);
    goToPage(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target;
      if (target instanceof HTMLElement && (target.isContentEditable || target.matches('input, textarea, select, button, a, [role="button"]'))) return;
      const insideSlideScroller = target instanceof Element && target.closest('.slide-scroll-container');
      const isSpace = e.code === 'Space' || e.key === ' ';
      if (isSpace && insideSlideScroller) return;
      const down = ['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key) || isSpace;
      const up = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key);
      if (!down && !up) return;
      const { currentPage: page, totalPages: count, nextPage: next, prevPage: prev } = navigationRef.current;
      if (transitionLocked.current || (down && page >= count - 1) || (up && page <= 0)) return;
      e.preventDefault();
      if (down) next(); else prev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Let native scrolling handle slide content; use wheel input for paging only at boundaries.
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 20 || !Number.isFinite(event.deltaY)) return;

      const slide = event.target instanceof Element
        ? event.target.closest<HTMLElement>('.slide-scroll-container')
        : null;
      if (!slide) return;
      // Never cancel a wheel event because an animation is in progress. Native
      // scrolling remains available on the current slide during page turns.
      if (wheelTurnActive.current) {
        if (wheelIdleTimer.current !== null) window.clearTimeout(wheelIdleTimer.current);
        wheelIdleTimer.current = window.setTimeout(() => {
          wheelTurnActive.current = false;
          wheelIdleTimer.current = null;
        }, wheelIdleDelay);
        return;
      }
      if (transitionLocked.current || Date.now() < transitionCooldownUntil.current) return;

      // A nested scrollable (when present) gets first refusal, then the slide.
      let canScrollDown = false;
      let canScrollUp = false;
      for (let node: Element | null = event.target instanceof Element ? event.target : slide; node; node = node.parentElement) {
        if (node instanceof HTMLElement && node !== slide && node.scrollHeight > node.clientHeight) {
          canScrollDown ||= node.scrollTop + node.clientHeight < node.scrollHeight - 1;
          canScrollUp ||= node.scrollTop > 0;
        }
        if (node === slide) break;
      }
      canScrollDown ||= slide.scrollHeight > slide.clientHeight && slide.scrollTop + slide.clientHeight < slide.scrollHeight - 1;
      canScrollUp ||= slide.scrollHeight > slide.clientHeight && slide.scrollTop > 0;
      if (event.deltaY > 0 ? canScrollDown : canScrollUp) return;
      // Consume only the first deliberate boundary gesture in a wheel burst.
      event.preventDefault();
      wheelTurnActive.current = true;
      if (wheelIdleTimer.current !== null) window.clearTimeout(wheelIdleTimer.current);
      const endWheelGesture = () => {
        wheelTurnActive.current = false;
        wheelIdleTimer.current = null;
      };
      wheelIdleTimer.current = window.setTimeout(endWheelGesture, wheelIdleDelay);
      if (event.deltaY > 0) navigationRef.current.nextPage();
      else navigationRef.current.prevPage();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    if (!touch) return;
    const target = event.target;
    const slide = target instanceof Element ? target.closest<HTMLElement>('.slide-scroll-container') : null;
    const scrollables: Array<{ element: HTMLElement; scrollTop: number }> = [];
    for (let node: Element | null = target instanceof Element ? target : null; node; node = node.parentElement) {
      if (node instanceof HTMLElement && node.scrollHeight > node.clientHeight) {
        const overflowY = window.getComputedStyle(node).overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') {
          scrollables.push({ element: node, scrollTop: node.scrollTop });
        }
      }
      if (node === slide) break;
    }
    touchStart.current = { y: touch.clientY, x: touch.clientX, slide, scrollables, target };
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch || transitionLocked.current) return;
    const deltaY = start.y - touch.clientY;
    const deltaX = start.x - touch.clientX;
    if (Math.abs(deltaY) < 64 || Math.abs(deltaY) < Math.abs(deltaX) * 1.35) return;
    const target = start.target;
    if (target instanceof HTMLElement && target.closest('button, a, input, textarea, select, [role="button"]')) return;
    if (start.scrollables.some(({ element, scrollTop }) => Math.abs(element.scrollTop - scrollTop) > 2)) return;
    const anotherScrollerCanConsume = start.scrollables.some(({ element }) => deltaY > 0
      ? element.scrollTop + element.clientHeight < element.scrollHeight - 1
      : element.scrollTop > 0);
    if (anotherScrollerCanConsume) return;
    if (Date.now() < transitionCooldownUntil.current) return;
    if (deltaY > 0) navigationRef.current.nextPage();
    else navigationRef.current.prevPage();
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
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
    exit: (dir: 'forward' | 'backward') => ({
      opacity: 0,
      scale: 0.97,
      y: dir === 'forward' ? -24 : 24,
      transition: {
        duration: 0.25,
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
          src="/assets/rajasthani-wildlife-border.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="low"
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
            onAnimationComplete={(definition) => {
              if (definition === 'center') {
                transitionLocked.current = false;
                transitionCooldownUntil.current = Date.now() + 300;
              }
            }}
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
