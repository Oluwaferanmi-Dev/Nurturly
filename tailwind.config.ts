import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-teal': '#00788E',
        'calm-blue': '#00A5B6',
        'deep-indigo': '#093859',
        'sage': '#68BEB0',
        'warm-yellow': '#FFDCAA',
        'cream': '#FAF6F0',
        'white': '#FFFFFF',
        'dark-text': '#093859',
        'muted-text': '#4a6367',
      },
    },
  },
  plugins: [],
};

export default config;
