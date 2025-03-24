import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Example primary color (Blue-700)
        secondary: "#9333EA", // Example secondary color (Purple-600)
      },
    },
  },
  plugins: [],
};

export default config;
