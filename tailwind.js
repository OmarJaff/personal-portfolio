module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.svelte"],
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
  variants: {},
  plugins: [],
};
