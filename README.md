# Zen Entertainment | Ashwika Interlink (OPC) Pvt. Ltd.

> Cinematic, award-level entertainment production website for **ASHWIKA INTERLINK (OPC) PVT. LTD., Marketed by ZEN ENTERTAINMENT** (Mumbai, India).

---

## 🎭 Mission & Creative Concept: "The Light Goes Up"
Every great show starts the same way: the house goes dark, then one spotlight hits the stage.
This website is crafted as an interactive cinematic experience moving patrons through the stages of production:
1. **Theatrical Opening**: 2-second vintage film leader countdown (skippable, session-cached).
2. **Hero Stage (100vh)**: Spotlight-reveal with mouse parallax, 35mm spinning film reel, and signature gradient typography.
3. **Services Crossfade**: Dynamic hover-swap updating full-bleed cinematic background stills.
4. **Draggable 3D Tilt Carousel**: Specular 3D tilting posters with custom gold "VIEW" cursor.
5. **Verified Credentials Grid & Lightbox**: Full-screen keyboard-navigable artwork viewer (Left/Right Arrow, Escape).
6. **Executive Leadership**: Full career histories of Founder/Director Ashwini Jalindar Kamble, Head of Operations Sneha Paradkar, and Creative Head Pooja Bhandare.
7. **End-Credits Finale**: Theatrical closing credits terminating at the final production presentation card.

---

## 🛠 Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & GSAP
- **Smooth Scroll**: Lenis (with `prefers-reduced-motion` detection)
- **Icons**: Lucide React
- **Typography**: Playfair Display, Cormorant Garamond, Bebas Neue, Manrope, Noto Sans Devanagari

---

## 🎨 Design System
- **Background**: `#06060A` (Pure Dark Theatre)
- **Surface**: `#0F0F15`, **Surface-2**: `#171720`
- **Gold (Primary)**: `#E8B04A`
- **Magenta (Zen Logo)**: `#E0357F`
- **Violet**: `#7B5CFF`
- **Ashwika Logo**: Blue `#2F6FED`, Orange `#F28C28`
- **Signature Gradient**: Gold → Magenta → Violet (`linear-gradient(135deg, #E8B04A 0%, #E0357F 50%, #7B5CFF 100%)`)

---

## 📁 Content Architecture (`/data/*.ts`)
All copy, links, contact details, and artwork reside in typed data files so clients can update content without touching components:
- `data/site.ts`: Company name, CIN, addresses, phones, WhatsApp, hero, mission, and distribution copy.
- `data/team.ts`: Verified biographies of Ashwini Jalindar Kamble, Sneha Paradkar, and Pooja Bhandare.
- `data/services.ts`: The 6 entertainment verticals with deliverables and background stills.
- `data/portfolio.ts`: 23 verified show posters, broadcast stills, and press clippings across 9 categories.
- `data/why-us.ts`: 6 value pillars (01–06) with original slide copy.
- `data/clients.ts`: 9 slide-verified client logos + credited broadcasting associations.
- `data/process.ts`: Production workflow (Concept → Script → Casting → Shoot → Edit & Post → Distribution).
- `data/testimonials.ts`: Empty array adhering strictly to the honesty requirement (never fabricate quotes).

---

## 🔍 Items to Confirm (Client Handover)
As required by the project specifications, the following placeholder metrics are marked for final client confirmation before press release:
- `50+ Productions Staged` (Flagged: `TODO confirm`)
- `10M+ Audience Reached` (Flagged: `TODO confirm`)
- `12+ Years Industry Experience` (Flagged: `TODO confirm`)

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/armaanfarooqui22/zen-entertainment.git
cd zen-entertainment

# Install dependencies
npm install

# Run development server
npm run dev

# Or build and launch production server
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

---

## 🚢 Deploy to Vercel
1. Import `armaanfarooqui22/zen-entertainment` into [Vercel](https://vercel.com).
2. Framework Preset will auto-detect **Next.js**.
3. Click **Deploy**. The site is production-ready with zero additional configuration needed.

---

## 🏢 Contact & Registered Details
- **Company**: ASHWIKA INTERLINK (OPC) PVT. LTD. | Marketed by ZEN ENTERTAINMENT
- **CIN**: U90009MH2025OPC463314
- **Address**: Jyoti Sadan, A Wing, Ground Floor, Room No. 1, Shitla Devi Temple, Mahim West, Mumbai – 400016
- **Email**: ashwika.interlink@gmail.com
- **Hotlines**: +91 99308 31798 / +91 98206 27819
- **Instagram**: [@Zen.entertainment_official](https://www.instagram.com/zen.entertainment_official/)
