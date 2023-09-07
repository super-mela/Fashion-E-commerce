/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        resalesUtopia: {
          primary: "#ed5386",
          // secondary: "#1c40f2",
          secondary: "#e391a0",
          accent: "#ef4a23",
          neutral: "#001042",
          info: "#EFEDF7",
          "base-100": "#F8F8F8",
        },
      },
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
