import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ilustracao_inicio: "url('/img/ilustração.svg')"
      },
      colors: {
      dark_purple: '#442779',
      basic_purple: '#673BB7',
      primary_white: '#FFFFFF',
      primary_black: '#000000',
      cyan_color: '#14CEBE'
    }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    }
    
  },
  plugins: [],
};
export default config;
