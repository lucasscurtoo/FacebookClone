/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "cursive"],
      },
      colors: {
        bgPrimary: "#fff",
        bgSecondary: "#f0f2f5",
        bgThird: "#e4e6eb",
        bgFourth: "#f0f2f5",
        colorPrimary: "#050505",
        colorSecondary: "#65676b",
        divider: "#ced0d4",
        darkBgPrimary: "#18191a",
        darkBgSecondary: "#242526",
        darkBgThird: "#3a3b3c",
        darkColorPrimary: "#242526",
        darkColorSecondary: "#b0b3b8",
        blueColor: "#1876f2",
        greenColor: "#42b72a",
        secondGreenColor: "#36a420",
        lightBlueColor: "#e7f3ff",
        borderColor: "#ccced2",
        shadow1: "rgba(0, 0, 0, 0.2)",
        shadow2: " rgba(0, 0, 0, 0.1)",
        shadow3: "rgba(0, 0, 0, 0.3)",
        shadowInset: "rgba(255, 255, 255, 0.5)",
      },
      spacing: {
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        128: "32rem",
        132: "40rem",
      },
      minHeight: {
        20: "5rem",
      },
    },
  },
  plugins: [],
}
