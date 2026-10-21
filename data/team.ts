export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bioSnippet: string;
  fullBio: string[];
  credentials: string[];
}

export const teamIntro = {
  title: "The People Behind the Magic",
  eyebrow: "OUR LEADERSHIP",
  description:
    "At the heart of ASHWIKA INTERLINK (OPC) PVT. LTD., Marketed by ZEN ENTERTAINMENT, is a team of passionate and talented professionals. From experienced filmmakers and writers to skilled technicians and creative artists, our team collaborates seamlessly to bring visions to life. We foster a collaborative and inclusive work environment where creativity thrives, allowing us to deliver exceptional results.",
};

export const teamMembers: TeamMember[] = [
  {
    id: "ashwini-kamble",
    name: "Ashwini Jalindar Kamble",
    role: "Founder, Director & Producer",
    image: "/assets/team/ashwini-kamble.png",
    bioSnippet:
      "Director of Ashwika Interlink & Founder of Zen Entertainment. Former Entertainment Reporter & Producer at Zee24taas with deep industry relationships.",
    fullBio: [
      "Director of ASHWIKA INTERLINK (OPC) PVT. LTD. and Producer & Founder of ZEN ENTERTAINMENT.",
      "Reporter and Producer (Entertainment) with Zee24taas from 2014 to 2016, producing and hosting marquee shows including 'Smart Women'.",
      "Production Head for prestigious theatre productions: Karun Gelo Gav, Shodha Akbar, Bombay 17, Statue Of Liberty, Albatya Galbatya, Aaranyak, Nimma Shimma Rakshas, and Iblis in association with Adwait Theatre, Zee Marathi, and BookMyShow.",
      "Core committee member of Chatrapati Shivaji Maharaj Park Art Festival (CSMPAF).",
      "Established long-standing relations with top Event companies, Technical teams, Creative teams, Management, PR & Marketing firms, Ad agencies, Marathi Cinema, Daily Soaps, Theatre Industry, and Bollywood.",
    ],
    credentials: [
      "Producer & Founder, Zen Entertainment",
      "Director, Ashwika Interlink (OPC) Pvt. Ltd.",
      "Ex-Zee24taas Reporter & Producer (2014–2016)",
      "Production Head, Blockbuster Marathi Theatre Plays",
      "Core Committee Member, CSMPAF",
    ],
  },
  {
    id: "sneha-paradkar",
    name: "Sneha Paradkar",
    role: "Head, Production & Finance (Operations)",
    image: "/assets/team/sneha-paradkar.png",
    bioSnippet:
      "Operations powerhouse leading daily production workflows, budget monitoring, financial reporting, and compliance adherence.",
    fullBio: [
      "Manages daily production and operational workflows across television, live shows, concerts, and digital media.",
      "Coordinates finance-related execution and reporting, maintaining rigorous cost monitoring, budget adherence, and ROI.",
      "Drives compliance coordination including GST, invoices, contracts, and vendor accounting records.",
      "Oversees vendor and internal team coordination with SOP-based continuous process improvement.",
      "Accomplished Voice-Over artist at Zee Marathi (Essel Vision Pvt. Ltd.) from 2018 to 2020, lending her voice to the prestigious SSPM Lifetime Hospital documentary.",
      "Previously worked as Sales & Marketing Head at Pavitravivah.com Pvt. Ltd., Hashtrend Finserv Pvt. Ltd., and Trending Properties.",
      "Artist at Sahyadri Channel and former Production Head at G-Corp Media.",
    ],
    credentials: [
      "Head of Production & Finance (Operations)",
      "Ex-Voice Over Artist, Zee Marathi / Essel Vision",
      "Voice for SSPM Lifetime Hospital Documentary",
      "Ex-Production Head, G-Corp Media",
      "Ex-Sales & Marketing Head, Pavitravivah.com & Hashtrend Finserv",
    ],
  },
  {
    id: "pooja-bhandare",
    name: "Pooja Bhandare",
    role: "Creative Head",
    image: "/assets/team/pooja-bhandare.png",
    bioSnippet:
      "Acclaimed theatre director, costume designer, FM Gold RJ, sound editor, Visharad in Bharat Natyam & Sangeet, and PhD scholar in Folk Art.",
    fullBio: [
      "Broadcaster at All India Radio Mumbai as an FM Gold RJ, Sound Editor, and Announcer for Akashwani Asmita Vahini.",
      "Celebrated costume designer for Marathi theatre plays: 'Shivaji Underground in Bhim Nagar Mohalla', 'Ekada Pahav Na Karun', and 'Statue of Liberty' (Nominated for Best Costume Design at Zee Natya Gaurav).",
      "Holds Visharad certifications in both Bharat Natyam and Indian Classical Sangeet.",
      "Assistant Director for landmark Marathi play 'Shivaji Underground in Bhim Nagar Mohalla' directed by Nandu Madhav.",
      "Accomplished actress in Marathi play 'Thasht' directed by Sanjay Pawar, and performed as a Hindi actress with the Indian People's Theatre Association (IPTA).",
      "Currently pursuing a PhD in Folk Art, bringing deep research and cultural authenticity to every production.",
      "Maintains strong creative relationships across Marathi classical singers, folk artists, theatre veterans, and Bollywood talent.",
    ],
    credentials: [
      "Creative Head, Zen Entertainment",
      "Zee Natya Gaurav Best Costume Nominee",
      "Ex-FM Gold RJ & Sound Editor, All India Radio",
      "Visharad in Bharat Natyam & Sangeet",
      "Assistant Director, Shivaji Underground... (dir. Nandu Madhav)",
      "PhD Scholar in Folk Art",
    ],
  },
];
