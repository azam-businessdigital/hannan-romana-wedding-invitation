import { InvitationConfig } from '../types';

export function getGoogleCalendarUrl(data: InvitationConfig): string {
  // Reception Date: 2026-11-15 (Sunday)
  // 19:00 to 23:30 IST (+05:30) => UTC 13:30 to 18:00
  const startTime = '20261115T133000Z';
  const endTime = '20261115T180000Z';
  const title = encodeURIComponent(`Wedding Reception of ${data.groom} & ${data.bride}`);
  const details = encodeURIComponent(
    `You are cordially invited to celebrate the Wedding Reception of ${data.groom} & ${data.bride} at ${data.receptionVenue}, ${data.receptionAddress}.\n\nReception: ${data.receptionDay}, ${data.receptionDisplayDate} (${data.receptionTime})\nNikah: ${data.nikahDay}, ${data.nikahDisplayDate} (${data.nikahVenue}, Laxmangarh)\n\nRSVP: ${data.contactPerson} (${data.contactPhone})\n${data.closingBlessing}`
  );
  const location = encodeURIComponent(`${data.receptionVenue}, ${data.receptionAddress}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
}

export function downloadICalFile(data: InvitationConfig) {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Abdul Hannan and Dr Romana Bano//Wedding Reception Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'SUMMARY:' + `Wedding Reception of ${data.groom} & ${data.bride}`,
    'DTSTART:20261115T133000Z',
    'DTEND:20261115T180000Z',
    'LOCATION:' + `${data.receptionVenue}, ${data.receptionAddress}`,
    'DESCRIPTION:' + `Wedding Reception of ${data.groom} & ${data.bride}. Reception: ${data.receptionTime}. RSVP: ${data.contactPerson} (${data.contactPhone}).`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Abdul-Hannan-Dr-Romana-Wedding-Reception.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
