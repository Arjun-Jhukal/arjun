import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
    },

    fontFamily: {
      Karla: "Karla,sans-serif",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#ff4c33",
          100: "#a90722",
        },
        black: {
          DEFAULT: "#1d1d1d",
          100: "#131314",
          200: "#393E46",
          300: "#888888",
        },
        blue: {
          DEFAULT: "rgba(14,130,136,1)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#f7f7f7",
        },
      },
    },
  },
  plugins: [],
};
export default config;
