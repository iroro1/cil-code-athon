/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      md: "735px",
      desktop: "1080px",
    },
    colors: {
      primary: "#5ba4a4",
      "neutral-light": "	#effafa",
      "neutral-light-small": "#eef6f6",
      "neutral-light-dark": "#7b8e8e",
      "neutral-light-extra-dark": "#2c3a3a",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
