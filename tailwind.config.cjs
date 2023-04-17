/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "hsl(223, 87%, 63%)",
          pale: "hsl(223, 100%, 88%)",
          dark: "hsl(209, 33%, 12%)",
        },
        red: {
          light: "hsl(354, 100%, 66%)",
        },
        gray: {
          DEFAULT: "hsl(0, 0%, 59%)",
        },
      },
      fontFamily: {
        franklin: ["'Libre Franklin'", "sans-serif"],
      },
      fontSize: {
        base: "1.25rem",
      },
    },
  },
  plugins: [],
};
