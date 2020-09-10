module.exports = {
  purge: [
    "./src/**/*.svelte",
    "./src/routes/**/*.svelte",
    "./src/components/**/*.svelte",
    "./src/template.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        nixieOne: [
          "Nixie One",
          "Noto Sans",
          "sans-serif",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
        payTon: ["Paytone One", "sans-serif", "Roboto"],
        roboto: ["Roboto", "sans-serif", "Arial"],
        SourceSans: ['"Source Sans Pro"', "Roboto", "sans-serif"],
        robotoMono: ['"Roboto Mono"', "sans-serif", "Arial"],
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [require("@tailwindcss/typography")],
};
