/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "0.6rem",
      sm: '0.8rem',
      normal: '1rem',
      md: '1.2rem',
      lg: '1.8rem',
      xl: '2.5rem',
      xxl: '3.6rem',
      xxxl: '5rem'
    },
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1020px'
    },

    extend: {
      colors: {
        primary: "#0085FF",
        greyB: "#EEECEB",
        purple: "#8C1865",
        lightPurple: "#ffecf9",
        skeletonBg: "#bbbaba"
        
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}