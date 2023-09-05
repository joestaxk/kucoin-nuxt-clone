/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        kcoin: "#7289DA",
        dark: "#01081e",
        black: "rgb(29,29,29)",
        green: "rgb(1,188,141)",
        red: "rgb(246,103,84)"
      },
    },
  }, 
  plugins: [],
}

