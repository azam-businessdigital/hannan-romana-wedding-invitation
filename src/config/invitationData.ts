import { InvitationConfig } from '../types';

export const invitationData: InvitationConfig = {
  blessingIntro: "With the blessings of Allah and our beloved family",
  
  grandparents: {
    dadaDadi: {
      title: "Family Elders",
      names: ["Haji Abdul Rehman Chowhan", "Hajjan Zubeda Chowhan"]
    },
    nanaNani: {
      title: "Family Elders",
      names: ["Mr. Nisar Ahmed Gehlot", "Mrs. Jamila Gehlot"]
    }
  },

  groomParents: {
    father: "Ataul Rehman Chowhan",
    mother: "Nasreen Chowhan",
    display: "Ataul Rehman Chowhan & Nasreen Chowhan"
  },

  brideParents: {
    father: "Haji Asrar Ahmed",
    mother: "Hajjan Shabnam Jatoo",
    display: "Haji Asrar Ahmed & Hajjan Shabnam Jatoo"
  },

  groom: "Abdul Hannan",
  groomTitle: "S/O Ataul Rehman Chowhan & Nasreen Chowhan",
  groomFullName: "Abdul Hannan Chowhan",
  groomSubtitle: "Son of Ataul Rehman & Nasreen Chowhan",

  bride: "Dr. Romana Bano",
  brideTitle: "D/O Haji Asrar Ahmed & Hajjan Shabnam Jatoo",
  coupleSubtitle: "Two lives united under Allah's grace, embarking on a lifelong journey of companionship and faith.",

  // Reception (Grand Celebratory Banquet)
  receptionDate: "2026-11-15",
  receptionDisplayDate: "15th November 2026 • 5th Jumadil Aakhirah, 1448 Hijri",
  receptionDay: "Sunday",
  receptionTime: "After Namaz-e-Magrib",
  receptionVenue: "Mohalla Hussain Gunj",
  receptionAddress: "Mohalla Hussain Gunj, Sikar, Rajasthan – 332001",
  receptionCity: "Sikar, Rajasthan",
  receptionMapsUrl: "https://maps.google.com/?q=Mohalla+Hussain+Gunj+Sikar+Rajasthan+332001",

  // Nikah Ceremony
  nikahDate: "2026-11-14",
  nikahDisplayDate: "14th November 2026 • 4th Jumadil Aakhirah, 1448 Hijri",
  nikahDay: "Saturday",
  nikahTime: "After Namaz-e-Magrib",
  nikahVenue: "Madrare-Rahmat, Anjuman Moholla",
  nikahAddress: "Madrare-Rahmat, Anjuman Moholla, Behind Iddgah Masjid, Near Todi College, Laxmangarh, Sikar, Rajasthan – 332311",
  nikahCity: "Laxmangarh, Sikar, Rajasthan",
  nikahMapsUrl: "https://maps.google.com/?q=Madrare-Rahmat+Anjuman+Moholla+Behind+Iddgah+Masjid+Near+Todi+College+Laxmangarh+Sikar+Rajasthan+332311",

  // Primary venue alias for components
  venue: "Mohalla Hussain Gunj",
  venueFullAddress: "Mohalla Hussain Gunj, Sikar, Rajasthan – 332001",
  city: "Sikar, Rajasthan",
  mapsUrl: "https://maps.google.com/?q=Mohalla+Hussain+Gunj+Sikar+Rajasthan+332001",
  embedMapsUrl: "https://www.google.com/maps?q=Mohalla+Hussain+Gunj+Sikar+Rajasthan&output=embed",

  // Compliments & RSVP
  compliments: "With best compliments from Chowhan & Gehlot Family & Relatives",
  closingBlessing: "Your gracious presence and blessings will make our celebration truly special.",
  contactPerson: "Ataul Rehman Chowhan",
  contactPhone: "+91 9892020228",
  contactPhoneCall: "+919892020228",
  contactPhoneRaw: "919892020228",  rsvpNames: [
    "Atiqur Rehman",
    "Abul Ala",
    "Abul Khair",
    "Abul Lais",
    "Abul Hasan",
    "Mohammed Zaheeruddin"
  ],

  // Soothing regal Indian classical / sufi instrumental background melody
  musicUrl: "/assets/audio.mp3",

  events: [
    {
      title: "NIKAH CEREMONY",
      subtitle: "Sacred Solemnization of Marriage",
      dateStr: "14th November 2026 • Saturday",
      time: "After Namaz-e-Magrib",
      venueName: "Madrare-Rahmat, Anjuman Moholla",
      venueAddress: "Behind Iddgah Masjid, Near Todi College, Laxmangarh, Sikar, Rajasthan – 332311",
      mapsUrl: "https://maps.google.com/?q=Madrare-Rahmat+Anjuman+Moholla+Behind+Iddgah+Masjid+Near+Todi+College+Laxmangarh+Sikar+Rajasthan+332311",
      description: "The sacred bond of marriage solemnized in the presence of elders and loved ones according to the Sunnah.",
      isMainEvent: false,
      iconName: "ring"
    },
    {
      title: "WEDDING RECEPTION",
      subtitle: "Grand Feast & Blessings (Walima)",
      dateStr: "15th November 2026 � Sunday � 5th Jumadil Aakhirah, 1448 Hijri",
      time: "After Namaz-e-Magrib",
      venueName: "Mohalla Hussain Gunj",
      venueAddress: "Mohalla Hussain Gunj, Sikar, Rajasthan – 332001",
      mapsUrl: "https://maps.google.com/?q=Mohalla+Hussain+Gunj+Sikar+Rajasthan+332001",
      description: "You are cordially invited to celebrate the joyful union and bestow your prayers and blessings upon the couple.",
      isMainEvent: true,
      iconName: "utensils"
    }
  ]
};
