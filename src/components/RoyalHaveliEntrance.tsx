import { useState } from 'react';

type RoyalHaveliEntranceProps = {
  onOpened?: () => void;
};

export function RoyalHaveliEntrance({ onOpened }: RoyalHaveliEntranceProps) {
  const [state, setState] = useState<'closed' | 'opening' | 'opened'>('closed');

  const openDoors = () => {
    if (state !== 'closed') return;
    setState('opening');
    window.setTimeout(() => {
      setState('opened');
      window.setTimeout(() => onOpened?.(), 250);
    }, 1300);
  };

  return (
    <section
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
