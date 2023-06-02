/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lred: " hsl(356, 100%, 66%)",
        vlred: "hsl(355, 100%, 74%)",
        vdblue: "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        gblue: "hsl(240, 2%, 79%)",
        vdgblue: "hsl(207, 13%, 34%)",
        vdbblue: "hsl(240, 10%, 16%)",
      },

      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        introd: "url(/src/images/bg-pattern-intro-desktop.svg)",
      },
    },
  },
  plugins: [],
};
