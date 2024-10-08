/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    fontFamily:{
      oswald:["Oswald","sans-serif"],
      noto:["Noto Sans","sans-serif"],
      anton:["Anton SC","sans-serif"],
      poppins:["Poppins","sans-serif"],
      aclonica:["Aclonica","sans-serif"],
      hand:["Just Another Hand","cursive"],
      viga:["Viga","sans-serif"]
    }
  },
  plugins: [],
};
