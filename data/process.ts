export interface ProcessStep {
  step: string;
  name: string;
  marathiName: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const productionProcess: ProcessStep[] = [
  {
    step: "01",
    name: "Concept",
    marathiName: "संकल्पना",
    title: "Ideation & Creative Blueprint",
    description:
      "We dissect the initial spark, define audience psychology, and construct an airtight creative treatment designed for emotional resonance and commercial viability.",
    deliverables: ["Creative Logline & Treatment", "Format Architecture", "Audience Demographic Mapping"],
  },
  {
    step: "02",
    name: "Script",
    marathiName: "पटकथा",
    title: "Screenplay & Dialogue Architecture",
    description:
      "Our writers craft authentic dialogues, rich character arcs, and tight episodic pacing that honour Marathi culture and global cinematic standards.",
    deliverables: ["Bound Screenplay", "Scene Breakdown & Shooting Script", "Broadcast Compliance Review"],
  },
  {
    step: "03",
    name: "Casting",
    marathiName: "कलाकार निवड",
    title: "Talent Curation & Ensemble Assembling",
    description:
      "Drawing on our deep ties across Bollywood, Marathi theatre, and digital creators, we match each role with the perfect performers and technical crew.",
    deliverables: ["Screen Tests & Auditions", "Ensemble Contracts", "Department Head Onboarding"],
  },
  {
    step: "04",
    name: "Shoot",
    marathiName: "चित्रीकरण",
    title: "Principal Photography & Technical Execution",
    description:
      "On studio floors or rugged exterior locations, our team captures high-definition cinema with choreographed multi-camera precision and strict budget adherence.",
    deliverables: ["Daily Footage Rush Delivery", "Multi-Camera Master Audio", "On-Set DIT Backups"],
  },
  {
    step: "05",
    name: "Edit & Post",
    marathiName: "संपादन व पोस्ट",
    title: "Editorial, Color Grading, VFX & Sound Design",
    description:
      "Where the story comes alive: picture editing, cinematic color grading, immersive Dolby Atmos sound design, Foley, and emotional background scoring.",
    deliverables: ["Director's Cut & Fine Cut", "Color Master & Sound Mix", "Censor Ready Master"],
  },
  {
    step: "06",
    name: "Distribution",
    marathiName: "वितरण",
    title: "Global Syndication & Release Execution",
    description:
      "We leverage established relationships with satellite networks, OTT streamers, theatre chains, and digital platforms to ensure maximum audience reach.",
    deliverables: ["Broadcaster Delivery Formats", "OTT Package Submission", "Promotional Marketing Kit"],
  },
];
