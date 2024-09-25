/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "signm-beige": "#F4EBE4",
        "signm-green": "#4E514A",
        "signm-burgundy": "#683A3A",
        "signm-blue": "#ABC5CE",
        "signm-brown": "##9E7C65",
        "signm-grey": {
          300: "#808080",
          200: "#B3B3B3",
          100: "##E6E6E6",
        },
      },
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          md: "680px",
          lg: "1064px",
          xl: "1200px",
        },
      },
      fontSize: {
        "4.25xl": ["2.375rem", "2.5rem"],
        "4.5xl": ["2.625rem", "2.75rem"],
        "8xl": ["70px", "70px"],
      },
    },
  },
  plugins: [],
};
