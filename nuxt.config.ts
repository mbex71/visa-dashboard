// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  // vite: {
  //   optimizeDeps: { exclude: ["fsevents"] },
  // },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
        },
      ],
    },
  },
  plugins: [
    "~/plugins/preline.client.ts",
    "~/plugins/vue-query.ts",
    "~/plugins/chart.client.ts",
  ],
  modules: ["nuxt-primevue"],
  primevue: {
    // unstyled: true,
    // options: {
    //   unstyled: true,
    // },
  },
});
