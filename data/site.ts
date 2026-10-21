export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Zen Entertainment | Ashwika Interlink",
  legalName: "ASHWIKA INTERLINK (OPC) PVT. LTD.",
  marketedBy: "ZEN ENTERTAINMENT",
  cin: "U90009MH2025OPC463314",
  tagline: "We Tell Stories That Stay With You.",
  subTagline:
    "A dynamic, innovative entertainment production company creating high-quality content for a global audience.",
  description:
    "ASHWIKA INTERLINK (OPC) PVT. LTD., Marketed by Zen Entertainment, is a Mumbai-based production company producing films, television & OTT shows, digital content, music, live concerts, theatre events, and animation.",
  
  contact: {
    email: "ashwika.interlink@gmail.com",
    phones: ["9930831798", "9820627819"],
    whatsapp: "919930831798",
    whatsappMessage: "Hello Zen Entertainment! I would like to discuss an entertainment production project.",
    address: {
      line1: "Jyoti Sadan, A Wing, Ground Floor, Room No. 1",
      line2: "Shitla Devi Temple, Mahim West",
      city: "Mumbai",
      postalCode: "400016",
      state: "Maharashtra",
      country: "India",
      formatted:
        "Jyoti Sadan, A Wing, Ground Floor, Room No. 1, Shitla Devi Temple, Mahim West, Mumbai – 400016",
    },
    instagram: {
      handle: "@Zen.entertainment_official",
      url: "https://www.instagram.com/zen.entertainment_official/",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.554341907402!2d72.83988637599026!3d19.039308253106197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced5c1154383%3A0xeec82f9d2d0b5e82!2sShitla%20Devi%20Temple%20Mahim!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],

  hero: {
    eyebrow: "ASHWIKA INTERLINK (OPC) PVT. LTD. — MARKETED BY ZEN ENTERTAINMENT",
    headlinePart1: "We Tell ",
    headlineGradient: "Stories",
    headlinePart2: " That Stay With You.",
    sub: "A dynamic, innovative entertainment production company creating high-quality content for a global audience.",
    ctaWork: "View Our Work",
    ctaContact: "Start a Project",
    marqueeItems: [
      "FILMS",
      "TELEVISION",
      "DIGITAL",
      "MUSIC",
      "LIVE EVENTS",
      "ANIMATION",
    ],
  },

  about: {
    statement:
      "ASHWIKA INTERLINK (OPC) PVT. LTD., Marketed by Zen Entertainment, is a dynamic and innovative entertainment production company dedicated to creating high-quality content for a global audience. With a passion for storytelling, cutting-edge technology, and creative talent, we specialize in producing a wide range of entertainment content, including films, television shows, web series, documentaries, animations, and digital media projects.",
    stats: [
      { value: 50, suffix: "+", label: "Productions Staged", flag: "TODO confirm" },
      { value: 10, suffix: "M+", label: "Audience Reached", flag: "TODO confirm" },
      { value: 12, suffix: "+", label: "Years Industry Experience", flag: "TODO confirm" },
      { value: 9, suffix: "", label: "Major Enterprise Clients", flag: "Verified from slides" },
    ],
  },

  mission: {
    pullQuote:
      "To inspire, entertain, and connect people through compelling stories and exceptional visual experiences.",
    body:
      "We strive to push the boundaries of creativity and provide our audiences with unparalleled entertainment that leaves a lasting impact… while maintaining a commitment to artistic integrity, social responsibility, and business ethics.",
    pillars: [
      {
        id: "01",
        title: "Inspire & Educate",
        description: "Produce entertainment content that inspires, educates, and entertains.",
      },
      {
        id: "02",
        title: "Impactful Collaboration",
        description:
          "Collaborate with talented individuals and organizations to create impactful and meaningful stories.",
      },
      {
        id: "03",
        title: "Embrace Innovation",
        description:
          "Embrace technological advancements and creative trends to enhance audience experience.",
      },
      {
        id: "04",
        title: "Inclusive Culture",
        description:
          "Foster a positive and inclusive work environment that nurtures talent and encourages innovation.",
      },
    ],
  },

  distribution: {
    title: "Distribution & Licensing",
    body:
      "We have established relationships with distribution partners and can help bring your content to a global audience. Our licensing services enable us to maximize the reach and revenue potential of our content.",
    highlights: [
      "Broadcasting & OTT streaming channel syndication",
      "Domestic & international theatrical festival rights",
      "Music rights, digital streaming & publishing licensing",
      "IP monetization across regional and pan-India territories",
    ],
  },

  finalCta: {
    headline: "Have a story to tell? Let's make it unforgettable.",
    sub: "From intimate Marathi theatre to stadium concerts and broadcast television, we bring your vision to center stage.",
    primaryBtn: "Start a Project",
    secondaryBtn: "WhatsApp Us",
  },
};
