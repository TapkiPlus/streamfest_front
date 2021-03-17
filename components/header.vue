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
        <div v-if="getCartCount > 0" class="header-button">
          <nuxt-link
            :data-num="getCartCount"
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
  computed: {
    ...mapGetters("cart", ["getCartCount"])
  },
  mounted() {
    this.$store.commit(
      "cart/SET_CART",
      JSON.parse(localStorage.getItem("cart"))
    );
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        let r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
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
