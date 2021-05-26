import serveStatic from "serve-static";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: "static",
  server: {
    port: 3000,
    host: "localhost"
  },
  env: {
    img_url: "https://streamfest.ru"
  },
  loading: {
    color: "rgba(255,255,255,0.8)"
  },
  serverMiddleware: ["~/middleware/redirects.js"],
  head: {
    title: "streamfest_front",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "description", name: "description", content: "" },
      {
        hid: "og:image",
        property: "og:image",
        content: "/og_img.png"
      },
      {name:"facebook-domain-verification", content:"gdwwtt8fj1li8w6tqr2maceqf2dim2"}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,600&display=swap"
      }
    ]
  },
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/main.sass"],
  plugins: [
    "@/plugins/mixins",
    "@/plugins/element-ui",
    "@/plugins/scroll",
    "@/plugins/masonry",
    "@/plugins/axios.js",
    "@/plugins/maz-ui",
    { src: "@/plugins/swiper", mode: "client" },
    { src: "@/plugins/silentbox", mode: "client" }
  ],
  components: true,
  buildModules: [],
  modules: [ "@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/robots"],
  // gtm: {
  //   enabled: true, 
  //   autoInit: false,
  //   pageTracking: true,
  // },
  robots: {
    UserAgent: '*',
    Disallow: '/account/',
  },
  axios: {
    // baseURL: "http://sf.tagobar.ru"
    // baseURL: "http://localhost:8000"
    baseURL: "https://streamfest.ru"
  },
  build: {
    transpile: [/^element-ui/],

    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "maz-ui",
            styleLibraryName: "css"
          }
        ]
      ]
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/", method: "post", propertyName: "auth_token" },
          logout: { url: "/", method: "post" },
          user: { url: "/", method: "get", propertyName: false }
        },
        tokenType: "Token"
      }
    }
  }
};
