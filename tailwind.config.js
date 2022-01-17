module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFCC33",
        secondary: "#ffffff",
        dark: "#23383f",
        light: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
