import { StoryMilestone, ScheduleEvent, GalleryPhoto } from '../types';

export const WEDDING_CONFIG = {
  couple: {
    groom: 'Yehasab',
    bride: 'Absalat',
    groomFull: 'Yehasab Befrdu',
    brideFull: 'Absalat Girma',
    groomAmharic: 'የሀሳብ በፍርዱ',
    brideAmharic: 'አብሳላት ግርማ',
    monogram: 'Y & A',
    hashtag: '#YehasabAndAbsalat2026',
    amharicBlessing: 'እግዚአብሔር ያጣመረውን ሰው አይለየውም',
    amharicBlessingTranslation: '"What God has joined together, let no man separate." — Mark 10:9',
    trinityInvocation: 'በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን',
    trinityTranslation: 'In the name of the Father, and of the Son, and of the Holy Spirit, One God, Amen.',
  },
  date: {
    fullDate: 'September 13, 2026 (መስከረም 3 , 2019)',
    dayName: 'Sunday',
    dayNumber: '13',
    monthYear: 'SEPTEMBER 2026',
    time: '9:00 ሌሊት (የጋብቻ ሥነ-ሥርዓት) · 4:00 ጠዋት (ቁርስ)',
    isoDate: '2026-09-13T14:30:00',
    rsvpDeadline: 'September 13, 2026',
  },
  churchVenue: {
    name: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    amharicName: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    eventTitle: 'The Sacred Crowning Ceremony',
    shortAddress: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    fullAddress: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    googleMapsUrl: 'https://maps.google.com/?q=%E1%88%9D%E1%8B%95%E1%88%AB%E1%87%88%20%E1%89%85%E1%8B%B1%E1%88%B3%E1%8A%95%20%E1%87%88%E1%88%88%E1%8C%88%20%E1%88%85%E1%8B%AD%E1%8B%88%E1%89%93%20%E1%8A%A0%E1%89%A1%E1%8A%80%20%E1%8C%88/%E1%88%98%E1%8A%95%E1%87%88%E1%88%B5%20%E1%89%85%E1%8B%B1%E1%88%B5%20%E1%8A%A5%E1%8A%83%20%E1%8A%A0%E1%89%A1%E1%8A%80%20%E1%8A%A0%E1%88%A8%E1%8C%8B%E1%8B%8A%20%E1%8C%88%E1%8B%B3%E1%88%9D',
    time: '9:00 ለሊት – 3:00 ጠዋት',
    note: 'Guests are kindly requested to arrive by 9:00 ሌሊት. Modest church attire requested; women are welcomed to wear white Netela scarfs.',
  },
  venue: {
    name: 'Church Hall (ምዕራፈ ቅዱሳን ገዳም አዳራሽ)',
    amharicName: 'ምዕራፈ ቅዱሳን ገዳም አዳራሽ',
    eventTitle: 'Breakfast Celebration & Blessings',
    shortAddress: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    fullAddress: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    googleMapsUrl: 'https://maps.google.com/?q=%E1%88%9D%E1%8B%95%E1%88%AB%E1%87%88%20%E1%89%85%E1%8B%B1%E1%88%B3%E1%8A%95%20%E1%87%88%E1%88%88%E1%8C%88%20%E1%88%85%E1%8B%AD%E1%8B%88%E1%89%93%20%E1%8A%A0%E1%89%A1%E1%8A%80%20%E1%8C%88/%E1%88%98%E1%8A%95%E1%87%88%E1%88%B5%20%E1%89%85%E1%8B%B1%E1%88%B5%20%E1%8A%A5%E1%8A%83%20%E1%8A%A0%E1%89%A1%E1%8A%80%20%E1%8A%A0%E1%88%A8%E1%8C%8B%E1%8B%8A%20%E1%8C%88%E1%8B%B3%E1%88%9D',
    time: '4:00 ጠዋት – 7:00 ጠዋት',
    ceremonyArea: 'ምዕራፈ ቅዱሳን ገዳም',
    receptionArea: 'Church Hall Breakfast Reception',
    valetNote: 'Complimentary parking is available at the church grounds.',
  },
  melsVenue: {
    name: 'Church Hall (ምዕራፈ ቅዱሳን ገዳም አዳራሽ)',
    amharicName: 'የቁርስ ሥነ-ሥርዓት',
    eventTitle: 'Breakfast Reception',
    date: 'Sunday, September 13, 2026 (መስከረም 3 , 2019)',
    time: '4:30 – 7:00 ',
    shortAddress: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    fullAddress: 'ምዕራፈ ቅዱሳን ፈለገ ህይወት አቡነ ገ/መንፈስ ቅዱስ እና አቡነ አረጋዊ ገዳም',
    googleMapsUrl: 'https://maps.google.com/?q=%E1%88%9D%E1%8B%95%E1%88%AB%E1%87%88%20%E1%89%85%E1%8B%B1%E1%88%B3%E1%8A%95%20%E1%87%88%E1%88%88%E1%8C%88%20%E1%88%85%E1%8B%AD%E1%8B%88%E1%89%93%20%E1%8A%A0%E1%89%A1%E1%8A%80%20%E1%8C%88/%E1%88%98%E1%8A%95%E1%87%88%E1%88%B5%20%E1%89%85%E1%8B%B1%E1%88%B5%20%E1%8A%A5%E1%8A%83%20%E1%8A%A0%E1%89%A1%E1%8A%80%20%E1%8A%A0%E1%88%A8%E1%8C%8B%E1%8B%8A%20%E1%8C%88%E1%8B%B3%E1%88%9D',
    note: 'Join us for a beautiful morning-style feast, traditional coffee, and heartfelt blessings as we break bread together.',
  },
  contact: {
    email: 'workalemahuabsalat2011@gmail.com',
    phone: '+251 923326684',
  }
};

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: 'FEBRUARY 2024',
    title: 'An Unexpected Beginning',
    description: 'We met on a video call while volunteering for a Pan-African organization. Despite living in Jimma and Addis Ababa, distance didn\'t stop late-night calls, messages, and long conversations.',
    location: 'Jimma & Addis Ababa',
  },
  {
    year: 'THE FIRST MEETING',
    title: 'From Friendship to Love',
    description: 'Our friendship blossomed into love, and one beautiful day we finally met in person outside the gates of St. Gorge church at Piyassa. From that day on, we built our relationship on faith, trust, and unwavering support.',
    location: 'St. Gorge Church, Piyassa',
  },
  {
    year: 'BUILDING A FUTURE',
    title: 'Piece by Piece',
    description: 'We celebrated each other\'s victories and stood together through challenges. As our dreams grew, we chose our wedding rings, bought our first bed, and furnished our future home, encouraging each other to grow into better people.',
    location: 'Our Future Home',
  },
  {
    year: 'SEPTEMBER 13, 2026 (መስከረም 3, 2019)',
    title: 'The Next Chapter',
    description: 'Today, we\'re filled with gratitude as we begin this next chapter. We are so thankful to have you with us as we say, "I do."',
    location: 'ምዕራፈ ቅዱሳን ገዳም',
  },
];

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    time: '9፡00 ሌሊት',
    title: 'Church Arrival & Clergy Welcome',
    subtitle: 'ምዕራፈ ቅዱሳን ገዳም (Me\'rafe Qidusan)',
    description: 'Guests arrive as sacred bells resonate and deacons chant traditional Tewahedo hymns of blessing.',
    iconName: 'Church',
  },
  {
    time: '10:00 ሌሊት',
    title: 'The Holy Crowning Ceremony',
    subtitle: 'Main Sanctuary & Altar',
    description: 'The sacred sacrament of matrimony: blessing of rings, vesting with royal velvet Kaba capes, and the holy crowning of Bride and Groom with golden Akelil.',
    iconName: 'Crown',
  },
  {
    time: '3:45 ጠዋት',
    title: 'Kebero Procession, Chants & Photos',
    subtitle: 'Church Courtyard',
    description: 'Joyous rhythmic chanting with ceremonial Kebero (drums), Meqomiya, and celebratory congratulations as the newly crowned couple exit the sanctuary.',
    iconName: 'Music',
  },
  {
    time: '4:00 ጠዋት',
    title: 'Breakfast Celebration',
    subtitle: 'Church Hall',
    description: 'Join us for a beautiful morning-style feast, traditional coffee, and heartfelt blessings in the church hall as we break bread together.',
    iconName: 'UtensilsCrossed',
  },
  {
    time: '7:00 ከሰዓት',
    title: 'Farewell Blessings',
    subtitle: 'Church Hall',
    description: 'Concluding the celebration with a final blessing from our clergy before the newlyweds depart.',
    iconName: 'HeartHandshake',
  },
];

export const DRESS_CODE_INFO = {
  title: 'Habesha Traditional or Black Tie Formal',
  description: 'We warmly encourage guests to honor this sacred celebration in either traditional Ethiopian formal attire or Western black-tie elegance in rich midnight navy, royal blue, champagne gold, and soft ivory.',
  colors: [
    { name: 'Midnight Navy', hex: '#050B18', border: 'border-slate-700' },
    { name: 'Royal Velvet Blue', hex: '#0A1931', border: 'border-blue-900' },
    { name: 'Champagne Gold', hex: '#D4AF37', border: 'border-amber-400' },
    { name: 'Soft Habesha White / Ivory', hex: '#FAF6EE', border: 'border-amber-100' },
    { name: 'Antique Gold Tibeb', hex: '#C5A059', border: 'border-amber-600' },
  ],
  guidelines: [
    {
      target: 'Traditional Ethiopian Attire (Welcomed & Celebrated)',
      text: 'Ladies: Elegant Habesha Kemis (የሀበሻ ቀሚስ) with royal blue and gold Tibeb (ጥበብ) borders and matching Netela. Gentlemen: White woven Habesha tunic, Jano, or formal suit accented with gold embroidery.',
    },
    {
      target: 'Western Black Tie / Formal Evening Attire',
      text: 'Ladies: Floor-length evening gowns or elegant formal midi dresses in navy, sapphire, emerald, or metallic gold. Gentlemen: Black-tie tuxedos or tailored navy/charcoal suits with formal neckties.',
    },
    {
      target: 'Cathedral Sacred Etiquette',
      text: 'During the holy Crowning liturgy at the Cathedral, women are invited to drape a light white Netela or scarf over their shoulders out of reverence.',
    }
  ]
};

// export const INITIAL_GUEST_MESSAGES = [
//   {
//     name: 'Abba Gebre & Deacon Melaku',
//     message: 'እንኳን ለዚህ ቅዱስ ጋብቻ በሰላም አደረሳችሁ! May the Almighty God bless your crowning with eternal peace, unity, and abundance.',
//     date: 'August 12, 2026',
//   },
//   {
//     name: 'Girma & Almaz (Parents of the Bride)',
//     message: 'We are overflowing with joy for our beloved Absalat and Yehasab. Seeing the beautiful fusion of faith, heritage, and love touches our hearts deeply.',
//     date: 'August 18, 2026',
//   },
//   {
//     name: 'Solomon & Meron Tadesse',
//     message: 'እንኳን ደስ አላችሁ! Cannot wait to put on our Kaba and Habesha Kemis and dance Eskista all night long to celebrate your union!',
//     date: 'August 24, 2026',
//   }
// ];
