import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      h:{
        '500':'500px',
      },
      colors:{
        background:'#F5F5F5',
        primarymain:'#13454E',
        primaryhover:'#0F373E',
        primarypresed:'#081C1F',
        primaryborder:'#93CED9',
        secondarymain:'#007B59',
        secondaryhover:'#006247',
        secondarypresed:'#003124',
        neutural:'#616161',
        neutural2:'#F5F5F5',
        neutural3:'#404040',
        black:'#0A0A0A',
        white:'#FFFFFF',
        abu:'#D9D9D9', 
      },
    },
  },
  plugins: [],
};
export default config;
