import React, { useEffect, useRef, useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { InvitationConfig } from '../types';

interface ShareButtonProps {
  data: InvitationConfig;
  className?: string;
  variant?: 'floating' | 'button';
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  data,
  className = "",
  variant = 'floating'
}) => {
  const [copied, setCopied] = useState(false);
  const copiedResetTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (copiedResetTimer.current !== null) window.clearTimeout(copiedResetTimer.current);
  }, []);

  const handleShare = async () => {
    const shareTitle = `Wedding Reception Invitation: ${data.groom} & ${data.bride}`;
    const shareText = `With the blessings of Allah and our families, you are cordially invited to celebrate the Wedding Reception of ${data.groom} (${data.groomTitle}) & ${data.bride} (${data.brideTitle}) on ${data.receptionDay}, ${data.receptionDisplayDate} at ${data.receptionVenue}, Sikar, Rajasthan.\n\nRSVP: ${data.contactPerson} (${data.contactPhone})\n${data.closingBlessing}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl
        });
        return;
      } catch (err: unknown) {
        // User aborted or error; fallback to WhatsApp
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }

    // Fallback: WhatsApp Direct Sharing
    const whatsappText = encodeURIComponent(`${shareText}\n\nView the interactive invitation: ${shareUrl}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${whatsappText}`;
    
    // Attempt window open, or copy to clipboard
    const opened = window.open(whatsappUrl, '_blank');
    if (!opened) {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        setCopied(true);
        if (copiedResetTimer.current !== null) window.clearTimeout(copiedResetTimer.current);
        copiedResetTimer.current = window.setTimeout(() => {
          setCopied(false);
          copiedResetTimer.current = null;
        }, 2500);
      } catch {
        // Clipboard error
      }
    }
  };

  if (variant === 'button') {
    return (
      <button
        onClick={handleShare}
        type="button"
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F5EBDD] border border-[#C9A24A]/60 hover:border-[#C9A24A] font-cinzel text-xs tracking-wider uppercase text-[#3A2118] font-bold shadow-xs hover:shadow-md transition-all ${className}`}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#641C24]" />
            <span>LINK COPIED</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>SHARE INVITATION</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      type="button"
      aria-label="Share Wedding Invitation"
      className={`group relative flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full bg-[#F5EBDD]/95 backdrop-blur-md border border-[#C9A24A]/50 hover:border-[#C9A24A] shadow-xs hover:shadow-md transition-all duration-300 text-[#3A2118] cursor-pointer ${className}`}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#641C24]" />
      ) : (
        <Share2 className="w-3.5 h-3.5 text-[#C9A24A] group-hover:rotate-12 transition-transform duration-300" />
      )}
      <span className="hidden sm:inline-block font-cinzel text-[10px] tracking-widest uppercase font-bold text-[#C9A24A]">
        {copied ? 'COPIED' : 'SHARE'}
      </span>
    </button>
  );
};
