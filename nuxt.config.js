import serveStatic from "serve-static";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
     //port: 80, // default: 3000
     port: 3000, // default: 3000
        //host: '185.119.57.46' // default: localhost
        host: 'localhost' // default: localhost
      },
   env: {
         //img_url: 'http://185.119.57.46:8000',
         img_url: 'http://localhost:8000',
     },

  serverMiddleware: [
    '~/middleware/redirects.js'
  ],
  head: {
    title: "streamfest_front",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,600&display=swap",
      },
    ],
  },
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/main.sass"],
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/scroll",
    { src: "@/plugins/swiper", mode: "client" },
    { src: "@/plugins/lightbox", mode: "client" },
  ],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
     // baseURL:'http://185.119.57.46:8000'
     baseURL:'http://localhost:8000'
  },
  build: {
    transpile: [/^element-ui/],
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/", method: "post", propertyName: "auth_token" },
          logout: { url: "/", method: "post" },
          user: { url: "/", method: "get", propertyName: false },
        },
        tokenType: "Token",
      },
    },
  },
};
