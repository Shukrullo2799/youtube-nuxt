// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxty",
      meta: [
        {
          name: "description",
          content: "Nuxt + Vite + TailwindCSS",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    currency_key: process.env.CURRENCY_API_KEY,
  },
});
