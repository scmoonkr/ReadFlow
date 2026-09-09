import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  devServer: { port: 9912 },
  app: {
    head: {
      title: "ReadFlow — 도서관 운영",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  css: [
    fileURLToPath(new URL("../../shared/tokens.css", import.meta.url)),
    "~/assets/css/main.css",
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:9910/api",
    },
  },
});
