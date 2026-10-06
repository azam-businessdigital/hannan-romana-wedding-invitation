export interface WeddingEvent {
  title: string;
  subtitle: string;
  dateStr: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  description: string;
  isMainEvent?: boolean;
  iconName: 'ring' | 'heart' | 'utensils' | 'sparkles';
}

export interface Grandparents {
  dadaDadi: {
    title: string;
    names: string[];
  };
  nanaNani: {
    title: string;
    names: string[];
  };
}

export interface InvitationConfig {
  blessingIntro: string; // "With the blessings of Allah and our beloved family"
  grandparents: Grandparents;
  groomParents: {
    father: string;
    mother: string;
    display: string;
  };
  brideParents: {
    father: string;
    mother: string;
    display: string;
  };
  groom: string; // "Abdul Hannan"
  groomTitle: string; // "S/O Ataul Rehman Chowhan & Nasreen Chowhan"
  groomFullName: string;
  groomSubtitle: string;
  bride: string; // "Dr. Romana Bano"
  brideTitle: string; // "D/O Haji Asrar Ahmed & Hajjan Shabnam Jatoo"
  coupleSubtitle?: string;
  
  // Reception Details
  receptionDate: string; // "2026-11-15"
  receptionDisplayDate: string; // "15th November 2026"
  receptionDay: string; // "Sunday"
  receptionTime: string; // "7:00 PM Onwards"
  receptionVenue: string; // "Mohalla Hussain Gunj"
  receptionAddress: string; // "Mohalla Hussain Gunj, Sikar, Rajasthan – 332001"
  receptionCity: string; // "Sikar, Rajasthan"
  receptionMapsUrl: string;

  // Nikah Details
  nikahDate: string; // "2026-11-14"
  nikahDisplayDate: string; // "14th November 2026"
  nikahDay: string; // "Saturday"
  nikahTime: string; // "11:00 AM / Evening"
  nikahVenue: string; // "Madrare-Rahmat, Anjuman Moholla"
  nikahAddress: string; // "Behind Iddgah Masjid, Near Todi College, Laxmangarh, Sikar, Rajasthan – 332311"
  nikahCity: string; // "Laxmangarh, Sikar, Rajasthan"
  nikahMapsUrl: string;

  // Venue legacy alias for convenience
  venue: string;
  venueFullAddress: string;
  city: string;
  mapsUrl: string;
  embedMapsUrl?: string;

  // Compliments & RSVP
  compliments: string;
  closingBlessing: string;
  contactPerson: string; // "Ataul Rehman Chowhan"
  contactPhone: string; // "+91 9892020228"
  contactPhoneCall: string; // "+919892020228"
  contactPhoneRaw: string; // "919892020228"
  rsvpNames: string[];
  musicUrl: string;
  events: WeddingEvent[];
}

