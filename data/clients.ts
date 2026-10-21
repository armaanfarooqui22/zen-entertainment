export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  category: "Client" | "Broadcast Partner" | "Festival & Institution";
  marathiName?: string;
  relation?: string;
}

export const clientsData: ClientLogo[] = [
  {
    id: "sun-marathi",
    name: "Sun Marathi",
    marathiName: "सन मराठी",
    logo: "/assets/clients/sun-marathi.png",
    category: "Broadcast Partner",
    relation: "Broadcast Network for 'Hau De Charcha'",
  },
  {
    id: "planet-marathi",
    name: "Planet Marathi OTT",
    marathiName: "प्लॅनेट मराठी",
    logo: "/assets/clients/planet-marathi.png",
    category: "Broadcast Partner",
    relation: "OTT Platform for 'Ubhya Ubhya!'",
  },
  {
    id: "society-tea",
    name: "Society Tea",
    marathiName: "सोसायटी टी",
    logo: "/assets/clients/society-tea.png",
    category: "Client",
    relation: "Title Sponsor & Co-Branding Partner",
  },
  {
    id: "csmpaf",
    name: "Chatrapati Shivaji Maharaj Park Art Festival",
    marathiName: "छत्रपती शिवाजी महाराज पार्क Art Festival",
    logo: "/assets/clients/csmpaf.png",
    category: "Festival & Institution",
    relation: "Core Committee & Festival Production Partner",
  },
  {
    id: "paaneri",
    name: "Paaneri (Dadar • Thane)",
    marathiName: "पानेरी",
    logo: "/assets/clients/paaneri.png",
    category: "Client",
    relation: "Leading Saree & Bridal Brand Partner",
  },
  {
    id: "adwait-theater",
    name: "Adwait Theater",
    marathiName: "अद्वैत थिएटर",
    logo: "/assets/clients/adwait-theater.png",
    category: "Client",
    relation: "Historic Theatre Production Collaborator",
  },
  {
    id: "mumbai-bank",
    name: "Mumbai Bank",
    marathiName: "मुंबई बँक",
    logo: "/assets/clients/mumbai-bank.png",
    category: "Client",
    relation: "Institutional Banking & Event Sponsor",
  },
  {
    id: "tender-guru",
    name: "TG Tender Guru",
    marathiName: "टेंडर गुरु",
    logo: "/assets/clients/tender-guru.png",
    category: "Client",
    relation: "Digital Media & Channel Partner",
  },
  {
    id: "chaurang",
    name: "Chaurang Fine & Dine",
    marathiName: "चौरंग",
    logo: "/assets/clients/chaurang.png",
    category: "Client",
    relation: "Hospitality & Event Partner",
  },
];

export const creditedPartners = [
  "Zee Marathi",
  "BookMyShow",
  "Zee Yuva",
  "Zee24taas",
  "Brio Studio",
  "Lokmat Sakhi",
  "Saamana",
  "Punya Nagari",
];
