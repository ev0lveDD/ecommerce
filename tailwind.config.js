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
        "collection-background" : "url('../public/cbackground.png')",
        "header-background-1" : "url('../public/header_images/header1.jpg')",
        "header-background-2" : "url('../public/header_images/header2.jpg')",
        "header-background-3" : "url('../public/header_images/header3.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translate(20vw,0)' , opacity: 0},
          '100%': { transform: 'translate(0,0)', opacity: 1 },
        },
        appear: {
          '0%': { opacity: 0},
          '100%': { opacity: 1 },
        }
      },
      animation: {
        slidein: 'slidein 0.8s ease-in-out',
        appear: 'appear 0.4s ease-in-out'
      }
    },
  },
  plugins: [],
};
