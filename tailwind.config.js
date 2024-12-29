/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "350px",
        xxsm: "250px",
        
      },
      colors: {
        "primary": "#5F6FFF",
        "text-color": "#1F2937",
        "boder": "#ADADAD",
        "ptag-color" : "#4B5563" 
      },
      fontFamily: {
        poppins: [' "Poppins", sans-serif'],
        outfit: ['"Outfit", serif'],
      },
    },
  },
  plugins: [],
};
