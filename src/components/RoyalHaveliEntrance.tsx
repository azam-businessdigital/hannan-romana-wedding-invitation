import { TransitionEvent, useEffect, useRef, useState } from 'react';

type RoyalHaveliEntranceProps = {
  onOpened?: () => void;
};

export function RoyalHaveliEntrance({ onOpened }: RoyalHaveliEntranceProps) {
  const [state, setState] = useState<'closed' | 'opening' | 'opened'>('closed');
  const timers = useRef<number[]>([]);
  const completed = useRef(false);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const handleTransitionEnd = (event: TransitionEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'opacity' || state !== 'opened') return;
    if (completed.current) return;
    completed.current = true;
    timers.current.forEach(window.clearTimeout);
    onOpened?.();
  };

  const openDoors = () => {
    if (state !== 'closed') return;
    setState('opening');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The fallback also covers browsers that do not dispatch transitionend.
    timers.current.push(window.setTimeout(() => {
      setState('opened');
    }, reducedMotion ? 150 : 1750));
    timers.current.push(window.setTimeout(() => {
      if (completed.current) return;
      completed.current = true;
      onOpened?.();
    }, reducedMotion ? 800 : 2400));
  };

  return (
    <section
      onTransitionEnd={handleTransitionEnd}
      className={`haveli-entrance ${state !== 'closed' ? 'is-opening' : ''} ${state === 'opened' ? 'is-opened' : ''}`}
      aria-label="Royal haveli entrance"
    >
      <div className="haveli-night" />
      <div className="haveli-arch" aria-hidden="true">
        <div className="haveli-arch-inner" />
      </div>
      <button
        className="haveli-doorway"
        type="button"
        onClick={openDoors}
        aria-label="Open the wedding invitation doors"
        disabled={state !== 'closed'}
      >
        <span className="haveli-door haveli-door-left" />
        <span className="haveli-door haveli-door-right" />
      </button>

      <div className={`haveli-seal ${state !== 'closed' ? 'seal-breaking' : ''}`} aria-hidden="true">
        <span className="seal-letters">A <i>&amp;</i> R</span>
      </div>
      <div className={`haveli-invitation-cue ${state !== 'closed' ? 'cue-fading' : ''}`}>
        <span>Click to open</span>
        <b aria-hidden="true">⌄</b>
      </div>
      <div className="haveli-light" aria-hidden="true" />
    </section>
  );
}
