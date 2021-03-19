<template>
  <header
    class="header"
    id="header"
    :class="[
      isHomePage && scrollPosition > 100 ? 'header-prepare-sticky' : '',
      isHomePage && scrollPosition > 150 ? 'header-sticky' : '',
      !isHomePage ? 'header-bg' : ''
    ]"
  >
    <div class="container">
      <div class="header-wrapper">
        <div @click="$router.push('/')" class="header-logo">
          <img class="logo_w" src="/logo.png" alt="" />
        </div>
        <div
          @click="hamburgerActive = !hamburgerActive"
          class="hamburger"
          :class="{ active: hamburgerActive }"
        >
          <div class="bar bar-1"></div>
          <div class="bar bar-2"></div>
          <div class="bar bar-3"></div>
          <div class="bar bar-4"></div>
        </div>
        <div class="header-nav">
          <!--                  navItemActive-->
          <ul>
            <li
              v-for="nav_item in nav_items"
              :key="nav_item.id"
              :class="[
                $route.path === nav_item.url
                  ? nav_item.star
                    ? 'navItemActive with-star'
                    : 'navItemActive'
                  : ''
              ]"
            >
              <nuxt-link :to="nav_item.url">{{ nav_item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="header-button">
          <nuxt-link
            :data-num="cartCount"
            class="header-button__cart"
            to="/cart"
            >корзина</nuxt-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  transition: "home",
  data() {
    return {
      isHomePage: null,
      scrollPosition: null,
      cart: null,
      nav_items: [
        { id: 1, name: "Участники", url: "/stars", star: true },
        { id: 2, name: "FAQ", url: "/faq", star: false },
        { id: 3, name: "Стать участником", url: "/how-to", star: false },
        { id: 4, name: "Как добраться", url: "/contact", star: false }
      ],
      hamburgerActive: false
    };
  },
  watch: {
    "$route.path": function() {
      this.isHomePage = this.$route.path === "/";
    }
  },
  computed: {
    ...mapGetters("cart", ["cartCount"])
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.isHomePage = this.$route.path === "/";
    this.$auth.$storage.getCookie("session_id") 
      ? this.$store.dispatch("cart/fetchCart")
      : this.$auth.$storage.setCookie("session_id", this.uuidv4());
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    }
  }
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
