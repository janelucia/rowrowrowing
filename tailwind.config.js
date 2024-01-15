/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "night",
      {
        mytheme: {
          primary: "#a700ff",

          secondary: "#00b3ec",

          accent: "#009800",

          neutral: "#0d0802",

          "base-100": "#f4fff4",

          info: "#00d5f2",

          success: "#00c03c",

          warning: "#ffa51c",

          error: "#ff4950",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
