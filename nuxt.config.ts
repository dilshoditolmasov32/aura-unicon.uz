export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  components: [{ path: "~/components", pathPrefix: false }],
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxt/icon",
    "nuxt-svgo",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  elementPlus: {},
  css: ["~/assets/css/main.css"],
  i18n: {
    restructureDir: "",
    langDir: "locales",
    defaultLocale: "uz",
    locales: [
      { code: 'uz', iso: 'uz-UZ', file: 'uz-UZB.json', name: 'O‘zbekcha' },
      { code: 'en', iso: 'en-US', file: 'en-US.json', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'rus-RU.json', name: 'Русский' }
    ],
    vueI18n: './i18n.config.ts',
  },
  app: {
    head: {
      title: "AURA",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
});
