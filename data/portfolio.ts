export interface PortfolioItem {
  id: string;
  title: string;
  marathiTitle?: string;
  category: string;
  categoryKey: string;
  image: string;
  aspectRatio?: string;
  description: string;
  clientOrPartner?: string;
  tags: string[];
  featured?: boolean;
}

export const portfolioCategories = [
  { key: "all", label: "All Works" },
  { key: "live-shows", label: "Live Shows Managed" },
  { key: "concerts", label: "Live Musical Concerts" },
  { key: "festivals", label: "Festival & Technical" },
  { key: "ott", label: "Non-Fiction for OTT" },
  { key: "tv", label: "Non-Fiction for Sun Marathi" },
  { key: "youtube", label: "Non-Fiction for YouTube" },
  { key: "psa", label: "Public Service Announcement" },
  { key: "cartoon", label: "BGM & Edit for Cartoon" },
  { key: "press", label: "Press & Media Coverage" },
];

export const portfolioItems: PortfolioItem[] = [
  // Live Shows Managed (Marathi Theatre)
  {
    id: "aaranyak",
    title: "Aaranyak",
    marathiTitle: "आरण्यक",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/aaranyak.png",
    aspectRatio: "portrait",
    description:
      "A classic Mahabharata theatre masterpiece written and directed by Ratnakar Matkari, starring Dilip Prabhavalkar. Production head: Ashwini Kamble.",
    clientOrPartner: "Zee Marathi • Adwait Theatre",
    tags: ["Theatre", "Ratnakar Matkari", "Dilip Prabhavalkar", "Zee Marathi"],
    featured: true,
  },
  {
    id: "albatya-galbatya",
    title: "Albatya Galbatya",
    marathiTitle: "अलबत्या गलबत्या",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/albatya-galbatya.png",
    aspectRatio: "portrait",
    description:
      "World-record-breaking fantasy stage spectacle written by Ratnakar Matkari and directed by Chinmay Mandlekar, starring Vaibhav Mangle.",
    clientOrPartner: "Zee Marathi • Adwait Theatre",
    tags: ["World Record", "Chinmay Mandlekar", "Vaibhav Mangle", "Theatre"],
    featured: true,
  },
  {
    id: "nimma-shimma-rakshas",
    title: "Nimma Shimma Rakshas",
    marathiTitle: "निम्मा शिम्मा राक्षस",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/nimma-shimma-rakshas.png",
    aspectRatio: "portrait",
    description:
      "Blockbuster children's fantasy stage production written by Ratnakar Matkari and directed by Chinmay Mandlekar. Production head: Ashwini Kamble.",
    clientOrPartner: "Adwait Theatre • BookMyShow",
    tags: ["Kids Fantasy", "BookMyShow", "Chinmay Mandlekar"],
    featured: true,
  },
  {
    id: "iblis",
    title: "Iblis",
    marathiTitle: "इब्लिस ... शैतान हाजिर !!!",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/iblis.png",
    aspectRatio: "portrait",
    description:
      "Thrilling psychological drama presented by Zee Marathi and produced by Adwait Theatre, starring Apurva Nemlekar, Rahul Mehendale, and Vaibhav Mangle.",
    clientOrPartner: "Zee Marathi • Adwait Theatre",
    tags: ["Drama", "Zee Marathi", "Vaibhav Mangle", "Apurva Nemlekar"],
    featured: false,
  },
  {
    id: "shodha-akbar",
    title: "Shodha Akbar",
    marathiTitle: "शोधा अकबर",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/shodha-akbar.png",
    aspectRatio: "portrait",
    description:
      "Historical comedy stage production by Adwait Theatre, featuring Prasad Khandekar and ensemble.",
    clientOrPartner: "Adwait Theatre",
    tags: ["Historical Comedy", "Prasad Khandekar", "Stage"],
    featured: false,
  },
  {
    id: "statue-of-liberty",
    title: "Statue of Liberty",
    marathiTitle: "स्टॅच्यू ऑफ लिबर्टी",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/statue-of-liberty.png",
    aspectRatio: "portrait",
    description:
      "Thought-provoking social satire written and directed by Arvind Jagtap. Nominated for Best Costume Design at Zee Natya Gaurav.",
    clientOrPartner: "Adwait Theatre",
    tags: ["Social Satire", "Arvind Jagtap", "Zee Natya Gaurav Nominee"],
    featured: false,
  },
  {
    id: "mehfil-e-ilahi",
    title: "Mehfil-e-Ilahi",
    marathiTitle: "महफ़िल-ए-इलाही",
    category: "Live Shows Managed",
    categoryKey: "live-shows",
    image: "/assets/work/live-shows/mehfil-e-ilahi.png",
    aspectRatio: "portrait",
    description:
      "A soulful Ghazal rendition featuring Ghazal Nawaz Bhimrao Panchale celebrating the verses of veteran ghazal maestro Ilahi Jamadar at Shivaji Mandir, Dadar.",
    clientOrPartner: "Ghazal Sagar Pratishthan • Adwait Theatres",
    tags: ["Ghazal", "Bhimrao Panchale", "Ilahi Jamadar", "Shivaji Mandir"],
    featured: false,
  },

  // Live Musical Concerts
  {
    id: "ghazaliyat",
    title: "Ghazaliyat",
    marathiTitle: "ग़ज़लियत (मराठी-उर्दू गझलांची भावगर्भ मैफिल)",
    category: "Live Musical Concerts",
    categoryKey: "concerts",
    image: "/assets/work/concerts/ghazaliyat.png",
    aspectRatio: "landscape",
    description:
      "Grand Golden Jubilee musical concert honoring Ghazal Nawaz Bhimrao Panchale and Dr. Bhagyashree Panchale, produced and organized by Zen Entertainment at Shivaji Mandir, Dadar.",
    clientOrPartner: "Zen Entertainment Presents",
    tags: ["Concert", "Ghazal", "Bhimrao Panchale", "Live Music"],
    featured: true,
  },
  {
    id: "swarangan",
    title: "Swarangan - Diwali Pahat",
    marathiTitle: "स्वरांगण (एक सुरेल दीपोत्सव! दिवाळी पहाट)",
    category: "Live Musical Concerts",
    categoryKey: "concerts",
    image: "/assets/work/concerts/swarangan.png",
    aspectRatio: "landscape",
    description:
      "A luminous morning celebration of music produced by Zen Entertainment and presented by Zee Yuva, featuring Spruha Joshi, Anandi Joshi, Mandar Apte, and ensemble at Dinanath Natyagruh, Vile Parle.",
    clientOrPartner: "Zen Entertainment • Zee Yuva",
    tags: ["Diwali Pahat", "Zee Yuva", "Spruha Joshi", "Anandi Joshi"],
    featured: true,
  },

  // Festival & Technical Production (CSMPAF)
  {
    id: "csmpaf-crowd",
    title: "CSMPAF Stadium Crowd Management",
    marathiTitle: "छत्रपती शिवाजी महाराज पार्क Art Festival",
    category: "Festival & Technical Production",
    categoryKey: "festivals",
    image: "/assets/work/festivals/csmpaf-crowd.png",
    aspectRatio: "landscape",
    description:
      "Core committee execution managing 10,000+ enthusiastic festival attendees, crowd flow, and security operations at the iconic Shivaji Park grounds.",
    clientOrPartner: "CSMPAF Core Committee",
    tags: ["Crowd Operations", "Shivaji Park", "Live Festival"],
    featured: true,
  },
  {
    id: "csmpaf-stage",
    title: "CSMPAF Main Stage & Technical Setup",
    marathiTitle: "मंच व तांत्रिक व्यवस्थापन",
    category: "Festival & Technical Production",
    categoryKey: "festivals",
    image: "/assets/work/festivals/csmpaf-stage-1.png",
    aspectRatio: "landscape",
    description:
      "End-to-end technical production managing professional audio engineering, stage lighting, trussing, and artist performances.",
    clientOrPartner: "CSMPAF",
    tags: ["Technical Production", "Stage & Truss", "Audio Engineering"],
    featured: false,
  },
  {
    id: "csmpaf-art-installation",
    title: "CSMPAF Visual Art & Installations",
    marathiTitle: "कला व देखावा मांडणी",
    category: "Festival & Technical Production",
    categoryKey: "festivals",
    image: "/assets/work/festivals/csmpaf-art-installation.png",
    aspectRatio: "square",
    description:
      "Curating and producing large-scale performing arts environments, visual art installations, and cultural exhibits.",
    clientOrPartner: "CSMPAF",
    tags: ["Art Installation", "Cultural Curation", "Visual Arts"],
    featured: false,
  },

  // Non-Fiction for OTT
  {
    id: "ubhya-ubhya",
    title: "Ubhya Ubhya!",
    marathiTitle: "उभ्या उभ्या! (Celebrity Standup Comedy)",
    category: "Non-Fiction for OTT",
    categoryKey: "ott",
    image: "/assets/work/ott-tv/ubhya-ubhya-planet-marathi.png",
    aspectRatio: "landscape",
    description:
      "Celebrity standup comedy series on Planet Marathi OTT featuring Mahesh Manjrekar, Kranti Redkar, Parth Bhalerao, Viju Mane, and Maharashtra's top comedy creators. Produced by Zen Entertainment.",
    clientOrPartner: "Planet Marathi OTT • Produced by Zen Entertainment",
    tags: ["OTT", "Standup Comedy", "Mahesh Manjrekar", "Planet Marathi"],
    featured: true,
  },

  // Non-Fiction for Sun Marathi
  {
    id: "hau-de-charcha",
    title: "Hau De Charcha... Karyakram Aahe Gharcha!",
    marathiTitle: "होऊ दे चर्चा... कार्यक्रम आहे घरचा !",
    category: "Non-Fiction for Sun Marathi",
    categoryKey: "tv",
    image: "/assets/work/ott-tv/hau-de-charcha-sun-marathi.png",
    aspectRatio: "landscape",
    description:
      "Prime-time Sunday celebrity talk show on Sun Marathi hosted by Sonalee Kulkarni, featuring prominent dignitaries and artists from across Maharashtra. Co-powered by Santoor & Society Tea.",
    clientOrPartner: "Sun Marathi • Marketed by Zen Entertainment",
    tags: ["Sun Marathi", "Sonalee Kulkarni", "Talk Show", "Television"],
    featured: true,
  },
  {
    id: "hau-de-charcha-set",
    title: "Custom Television Studio Set of Hau De Charcha",
    marathiTitle: "सेट ऑफ शो — होऊ दे चर्चा",
    category: "Non-Fiction for Sun Marathi",
    categoryKey: "tv",
    image: "/assets/work/ott-tv/hau-de-charcha-set.png",
    aspectRatio: "landscape",
    description:
      "High-end broadcast television set architecture designed, built, and lit for multi-camera live broadcast on Sun Marathi.",
    clientOrPartner: "Sun Marathi Broadcast Studio",
    tags: ["Studio Set", "Lighting Design", "Broadcast Engineering"],
    featured: false,
  },

  // Non-Fiction for YouTube
  {
    id: "lights-camera-women",
    title: "Lights Camera Women",
    marathiTitle: "Lights Camera Women",
    category: "Non-Fiction for YouTube",
    categoryKey: "youtube",
    image: "/assets/work/digital/lights-camera-women.png",
    aspectRatio: "portrait",
    description:
      "Special digital series putting the spotlight on visionary women filmmakers, artists, writers, and technicians transforming Indian cinema and entertainment.",
    clientOrPartner: "YouTube Originals • Zen Entertainment",
    tags: ["YouTube", "Women In Film", "Digital Series", "Documentary"],
    featured: true,
  },
  {
    id: "dawat-and-gossip",
    title: "Dawat & Gossip",
    marathiTitle: "दावत & Gossip",
    category: "Non-Fiction for YouTube",
    categoryKey: "youtube",
    image: "/assets/work/digital/dawat-and-gossip.png",
    aspectRatio: "square",
    description:
      "Vibrant food and entertainment talk show format combining candid celebrity gossip over delectable culinary feasts.",
    clientOrPartner: "YouTube Digital • Zen Entertainment",
    tags: ["YouTube", "Food & Talk", "Celebrity Gossip"],
    featured: false,
  },

  // Public Service Announcement
  {
    id: "constitution-day",
    title: "Celebrating Indian Constitution Day (26th November)",
    marathiTitle: "भारतीय संविधान दिन — २६ नोव्हेंबर",
    category: "Public Service Announcement",
    categoryKey: "psa",
    image: "/assets/work/psa/indian-constitution-day.png",
    aspectRatio: "portrait",
    description:
      "Inspiring public service tribute video by Zen Entertainment honoring Dr. Bhimrao Ambedkar's legacy: 'We are Indians, firstly and lastly.'",
    clientOrPartner: "Zen Entertainment Presents",
    tags: ["PSA", "Indian Constitution", "National Heritage"],
    featured: true,
  },

  // BGM & Edit for Cartoon
  {
    id: "jurassic-genius",
    title: "Jurassic Genius",
    marathiTitle: "Jurassic Genius (CG-Animated Series)",
    category: "BGM & Edit for Cartoon",
    categoryKey: "cartoon",
    image: "/assets/work/animation/jurassic-genius.png",
    aspectRatio: "portrait",
    description:
      "Background score composition, sound design, and episodic editing for Brio Studio's prehistoric CG-animated action-adventure series.",
    clientOrPartner: "Brio Studio Private Limited",
    tags: ["Animation", "BGM", "Sound Design", "CGI", "Kids"],
    featured: true,
  },
  {
    id: "tibu-n-friends",
    title: "Tibu n Friends",
    marathiTitle: "Tibu n Friends (CGI Short-Format)",
    category: "BGM & Edit for Cartoon",
    categoryKey: "cartoon",
    image: "/assets/work/animation/tibu-n-friends.png",
    aspectRatio: "portrait",
    description:
      "Audio editing, Foley, and post-production for Brio Studio's 26-episode CGI short-format series for young audiences (Ages 4 to 9).",
    clientOrPartner: "Brio Studio Private Limited",
    tags: ["Animation", "CGI", "Kids 4-9", "Audio Edit"],
    featured: false,
  },

  // Press & Media Coverage
  {
    id: "saamana-press",
    title: "Saamana: 'Ghazaliyat Mesmerizes Packed Audience'",
    marathiTitle: "सामना: 'भीमराव पांचाळे यांच्या गजलियतने प्रेक्षक धुंद'",
    category: "Press & Media Coverage",
    categoryKey: "press",
    image: "/assets/work/press/saamana-newspaper.png",
    aspectRatio: "square",
    description:
      "Leading Marathi daily Saamana Mumbai edition coverage (May 29, 2023) spotlighting Ashwini Kamble honoring Ghazal Nawaz Bhimrao Panchale at Shivaji Mandir.",
    clientOrPartner: "Saamana Daily (सामना)",
    tags: ["Newspaper", "Saamana", "Ghazaliyat Review"],
    featured: true,
  },
  {
    id: "punya-nagari-press",
    title: "Punya Nagari: 'Golden Jubilee Celebration of Ghazal Nawaz'",
    marathiTitle: "पुण्य नगरी: 'पं. भीमराव पांचाळे यांच्या कारकीर्दीचा सुवर्णमहोत्सव'",
    category: "Press & Media Coverage",
    categoryKey: "press",
    image: "/assets/work/press/punya-nagari-newspaper.png",
    aspectRatio: "square",
    description:
      "Punya Nagari Smart Mumbai edition feature highlighting Zen Entertainment Director Ashwini Kamble's collaboration with Shri Chhatrapati Shivaji Smarak Mandal.",
    clientOrPartner: "Punya Nagari (पुण्य नगरी)",
    tags: ["Newspaper", "Punya Nagari", "Press Feature"],
    featured: false,
  },
  {
    id: "lokmat-sakhi-press",
    title: "Lokmat Sakhi: 'Selfmade Producer Ashwini Kamble'",
    marathiTitle: "लोकमत सखी: 'संविधानात स्त्रीचा सन्मान सर्वोच्च आहे'",
    category: "Press & Media Coverage",
    categoryKey: "press",
    image: "/assets/work/press/lokmat-sakhi-interview.png",
    aspectRatio: "landscape",
    description:
      "In-depth video interview on Lokmat Sakhi featuring Producer Ashwini Kamble discussing women empowerment, constitutional values, and creative entrepreneurship.",
    clientOrPartner: "Lokmat Sakhi (लोकमत सखी)",
    tags: ["Lokmat Sakhi", "Video Interview", "Women Empowerment"],
    featured: true,
  },
];
