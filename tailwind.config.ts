import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        grid: '1440px',
        'hero-content': '1220px',
        'area-mockups': '980px',
        'area-cards': '1320px',
      },
      height: {
        'section-hero': '874px',
        'area-icons': '855px',
        'area-cards': '600px',
      },
      screens: {
        md: '1220px',
      }
    },
  },
  plugins: [],
};
export default config;
