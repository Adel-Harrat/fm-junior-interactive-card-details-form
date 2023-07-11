/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-active-input-border-from": "hsl(249, 99%, 64%)",
        "tw-active-input-border-to": "hsl(278, 94%, 30%)",
        "tw-input-errors": "hsl(0, 100%, 66%)",
        "tw-white": "hsl(0, 0%, 100%)",
        "tw-light-gray": "hsl(270, 3%, 87%)",
        "tw-dark-gray": "hsl(279, 6%, 55%)",
        "tw-dark-violet": "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
