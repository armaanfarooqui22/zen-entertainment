export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  included: string[];
  bgImage: string;
  categorySlug: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "film-production",
    number: "01",
    title: "Film Production",
    tagline: "Compelling cinematic narratives crafted for big screens and global festivals.",
    description:
      "We produce feature films, documentaries, and short films that resonate with audiences on an emotional and intellectual level. Our experienced team handles everything from script development and casting to shooting, editing, and post-production.",
    included: [
      "Original Script Development & Storyboarding",
      "Comprehensive Casting & Talent Management",
      "Multi-Camera Location & Studio Shoots",
      "High-End Color Grading & Post-Production",
      "Theatrical Master & Censor Certification Assistance",
    ],
    bgImage: "/assets/work/festivals/csmpaf-crowd.png",
    categorySlug: "films",
  },
  {
    id: "television-production",
    number: "02",
    title: "Television Production",
    tagline: "Prime-time serials, non-fiction broadcasts, and reality spectacles.",
    description:
      "We create captivating television series, including dramas, comedies, reality shows, and more. Our team excels in crafting engaging storylines and delivering high-quality production values for both broadcast and streaming platforms.",
    included: [
      "Custom Studio Set Design & Technical Build",
      "Multi-Camera Live & Recorded Broadcast Direction",
      "Celebrity & Guest Coordination",
      "Daily Turnaround Editing & Master QC",
      "Broadcast Network Delivery for Sun Marathi, Zee, & OTT",
    ],
    bgImage: "/assets/work/ott-tv/hau-de-charcha-set.png",
    categorySlug: "television",
  },
  {
    id: "digital-content",
    number: "03",
    title: "Digital Content",
    tagline: "High-impact web series, viral digital formats, and brand storytelling.",
    description:
      "We produce digital content, including web series, viral videos, and social media campaigns that connect with online audiences. Our expertise in digital storytelling helps brands and individuals make a meaningful impact in the digital space.",
    included: [
      "Concept Ideation for YouTube & OTT Originals",
      "Talent & Influencer Collaboration",
      "Digital Campaign Strategy & Visual Identity",
      "Optimized Social & Episodic Editing",
      "Audience Engagement & Community Distribution",
    ],
    bgImage: "/assets/work/digital/lights-camera-women.png",
    categorySlug: "digital",
  },
  {
    id: "music-production",
    number: "04",
    title: "Music Production",
    tagline: "Soulful classical mehfils, devotional epics, and contemporary music videos.",
    description:
      "We offer music production services, from recording and mixing to music video production. Our talented musicians and producers work collaboratively to create memorable and original music content.",
    included: [
      "Live Acoustic & Studio Tracking Sessions",
      "Folk, Classical (Ghazal/Natya Sangeet) & Contemporary Arrangements",
      "Professional Mixing & Dolby Atmos Mastering",
      "Cinematic Music Video Directing & Production",
      "Audio Streaming Distribution & Licensing",
    ],
    bgImage: "/assets/work/concerts/ghazaliyat.png",
    categorySlug: "music",
  },
  {
    id: "event-production",
    number: "05",
    title: "Event Production",
    tagline: "Massive cultural festivals, theatrical plays, and unforgettable stadium concerts.",
    description:
      "We specialize in event production, handling everything from concept development to execution. We organize and produce live events, including concerts, award shows, theatrical performances, and experiential marketing events, ensuring seamless execution and entertainment excellence. Our events leave a lasting impression, combining creativity with flawless execution.",
    included: [
      "End-to-End Festival Operations & Crowd Management",
      "Stage, Truss, Acoustic & Intelligent Lighting Design",
      "Live Theatre Management & State-Wide Tour Logisitics",
      "Artist Hospitality & Celebrity Security Protocol",
      "Government, Municipal & Police Permission Clearances",
    ],
    bgImage: "/assets/work/festivals/csmpaf-stage-1.png",
    categorySlug: "live-events",
  },
  {
    id: "animation-production",
    number: "06",
    title: "Animation Production",
    tagline: "Imaginative 3D CGI series, character worlds, and animated commercials.",
    description:
      "Our animation department crafts visually stunning and creatively rich animated films, series, and advertisements, catering to audiences of all ages.",
    included: [
      "Character Concept Art, Visual Development & 3D Modeling",
      "Storyboarding & 3D Pre-Visualization (Animatics)",
      "High-Resolution 3D CGI Animation (Full HD 25 FPS)",
      "Background Score, Foley & Sound Design for Animation",
      "Kids & Family Demographic IP Development",
    ],
    bgImage: "/assets/work/animation/jurassic-genius.png",
    categorySlug: "animation",
  },
];
