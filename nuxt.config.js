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
    title: "Стримфест — главный фестиваль стримеров",
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
    ],
    script: [
      {
        innerHTML: `dataLayer = []`,
      },
      {
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NQT6H22')`,
      },
      {
        innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(38023235, "init", {trustedDomains: ["streamfest.ru"],clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true,trackHash:true});`
      },
      {
        src: 'https://vk.com/js/api/openapi.js?168'
      },
      {
        innerHTML: `!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?169",t.onload=function(){VK.Retargeting.Init("VK-RTRG-934249-hze71"),VK.Retargeting.Hit()},document.head.appendChild(t)}();`
      }
    ],
    noscript: [
      {
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQT6H22" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        body: true
      },
      {
        innerHTML: `<div><img src="https://mc.yandex.ru/watch/38023235" style="position:absolute; left:-9999px;" alt="" /></div>`,
        body: true
      },
      {
        innerHTML: `<img src="https://vk.com/rtrg?p=VK-RTRG-934249-hze71" style="position:fixed; left:-999px;" alt=""/>`,
        body: true
      }
    ],
     __dangerouslyDisableSanitizers: ['script','noscript']
  },
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/main.sass"],
  plugins: [
    "@/plugins/element-ui",
    { src: "@/plugins/scroll", mode: "client" },
    { src: "@/plugins/masonry", mode: "client" },
    "@/plugins/axios.js",
    "@/plugins/maz-ui",
    { src: "@/plugins/swiper", mode: "client" },
    { src: "@/plugins/silentbox", mode: "client" }
  ],
  components: true,
  buildModules: [],
  modules: [ "@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/robots"],
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
