/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#050A30",
        neonCyan: "#00FFFF",
        neonPink: "#FF007F",
        neonPurple: "#9400D3",
        neonYellow: "#FFD700",
        textLight: "#EDEDED"
      },
      boxShadow: {
        neon: "0px 0px 10px rgba(0, 255, 255, 0.8)",
        pinkGlow: "0px 0px 10px rgba(255, 0, 127, 0.8)",
        purpleGlow: "0px 0px 10px rgba(148, 0, 211, 0.8)"
      }
    }
  },
  plugins: []
};
