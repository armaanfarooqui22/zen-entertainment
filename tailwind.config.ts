import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#06060A',
        surface: {
          DEFAULT: '#0F0F15',
          2: '#171720',
          3: '#22222E',
        },
        cinema: {
          text: '#F5F1E8',
          muted: '#9C99A8',
          gold: '#E8B04A',
          magenta: '#E0357F',
          violet: '#7B5CFF',
          ashwikaBlue: '#2F6FED',
          ashwikaOrange: '#F28C28',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
        devanagari: ['var(--font-noto-devanagari)', 'sans-serif'],
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #E8B04A 0%, #E0357F 50%, #7B5CFF 100%)',
        'signature-gradient-h': 'linear-gradient(90deg, #E8B04A 0%, #E0357F 50%, #7B5CFF 100%)',
        'gold-glow': 'radial-gradient(circle at center, rgba(232, 176, 74, 0.15) 0%, transparent 70%)',
        'spotlight-radial': 'radial-gradient(circle at top center, rgba(232, 176, 74, 0.25) 0%, rgba(224, 53, 127, 0.08) 40%, transparent 80%)',
      },
      borderRadius: {
        '20': '20px',
      },
      transitionTimingFunction: {
        'cinema': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'reel-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spotlight-sweep': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(-20px)' },
          '50%': { opacity: '1', transform: 'scale(1.05) translateY(0)' },
          '100%': { opacity: '0.9', transform: 'scale(1) translateY(0)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '41.99%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '45%': { opacity: '0.3' },
          '46%': { opacity: '1' },
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'reel-spin': 'reel-spin 20s linear infinite',
        'spotlight-sweep': 'spotlight-sweep 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'flicker': 'flicker 4s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
