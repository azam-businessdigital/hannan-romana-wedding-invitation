import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { luxuryAudio } from '../utils/audioPlayer';

interface MusicControlProps {
  musicUrl: string;
}

export const MusicControl: React.FC<MusicControlProps> = ({ musicUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    luxuryAudio.init(musicUrl);
    const unsubscribe = luxuryAudio.subscribe(setIsPlaying);
    return () => {
      unsubscribe();
    };
  }, [musicUrl]);

  const toggleMusic = () => {
    luxuryAudio.toggle(musicUrl);
  };

  return (
    <button
      onClick={toggleMusic}
      type="button"
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      className="group relative flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full bg-[#F5EBDD]/95 backdrop-blur-md border border-[#C9A24A]/50 hover:border-[#C9A24A] shadow-xs hover:shadow-md transition-all duration-300 text-[#3A2118] cursor-pointer"
    >
      {/* Animated Sound Wave Bars when playing */}
      {isPlaying ? (
        <div className="flex items-center gap-0.5 h-3.5 px-0.5">
          <span className="w-0.5 h-2 bg-[#C9A24A] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
          <span className="w-0.5 h-3.5 bg-[#C9A24A] rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s]" />
          <span className="w-0.5 h-2.5 bg-[#C9A24A] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
        </div>
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-[#3A2118]" />
      )}

      <span className="hidden sm:inline-block font-cinzel text-[10px] tracking-widest uppercase font-bold text-[#C9A24A]">
        {isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}
      </span>
    </button>
  );
};
