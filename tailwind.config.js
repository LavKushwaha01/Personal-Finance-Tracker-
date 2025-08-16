/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // if using src/ structure
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}" // so ShadCN styles are included
  ],
  theme: {
    extend: {},
  },
  darkMode: ["class"],
  plugins: [],
};
