import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060714",
        foreground: "#262840",
        "dark-100": "#060714",
        "dark-90": "#262840",
        "grey-100":"#7780A1",
        "grey-50":"#BBC0D0",
        "grey-20":"#E2E2ED",
        "grey-10":"#F2F3F6",
        "purple-dark-100":"#2A27C9",
        "purple-light-100":"#514CFF",
        "purple-dark-10":"#2A27C9",
        "purple-light-15":"#514CFF",
        "accent-green":"#76DECC",
        "accent-pink":"#EA6CBC",
        "accent-red":"#FB4539",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        inter: ['inter', 'sans-serif']
      },
      fontSize:{
        'body-medium-24': '24px',
        'body-medium-16': '16px',
        'body-medium-14': '14px',
      },
      lineHeight: {
        'body-medium': '150%',
      },
      letterSpacing: {
        'body-medium': '0.2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
