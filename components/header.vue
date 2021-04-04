<template>
  <header
    class="header"
    id="header"
    :class="[
      isHomePage && scrollPosition > 100 ? 'header-prepare-sticky' : '',
      isHomePage && scrollPosition > 150 ? 'header-sticky' : '',
      !isHomePage ? 'header-bg' : '',
      isInfoPage ? 'header-info' : ''
    ]"
  >
    <div class="container">
      <div class="header-wrapper">
        <div @click="$router.push('/')" class="header-logo">
          <img
            class="logo_w"
            src="/logo.svg"
            alt=""
            @click="hamburgerActive = false"
          />
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
              @click="hamburgerActive = false"
              :class="[
                $route.path === nav_item.url
                  ? nav_item.star
                    ? 'navItemActive with-star'
                    : 'navItemActive'
                  : ''
              ]"
            >
              <nuxt-link :to="nav_item.url">{{ nav_item.name }} </nuxt-link>
            </li>
          </ul>
          <nuxt-link
            v-if="totalCount > 0 ? true : false"
            :data-num="totalCount"
            class="btn header__button btn-yellow header__button-cart"
            to="/cart"
            @click="hamburgerActive = false"
          >
            <span class="split">корзина</span>
          </nuxt-link>
          <nuxt-link
            v-else
            @click.native="handleScroll"
            class="btn btn-yellow header__button"
            to="/#tickets"
          >
            <div class="btn-bg"></div>
            <span class="split">
              Купить билет
            </span>
          </nuxt-link>
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
      isCartPage: null,
      isInfoPage: null,
      scrollPosition: null,
      cart: null,
      nav_items: [
        { id: 1, name: "Главная", url: "/", star: false },
        { id: 2, name: "Участники", url: "/stars", star: true },
        { id: 3, name: "Активности", url: "#", star: false },
        { id: 4, name: "FAQ", url: "/faq", star: false },
        { id: 5, name: "Стать участником", url: "/how-to", star: false },
        { id: 6, name: "О фестивале", url: "#", star: false },
        { id: 7, name: "Как добраться", url: "/contact", star: false }
      ],
      hamburgerActive: false
    };
  },
  watch: {
    "$route.path": function() {
      this.isHomePage = this.$route.path === "/";
      this.isInfoPage =
        this.$route.path === "/error-page/" ||
        this.$route.path === "/success-page/";
    }
  },
  computed: {
    ...mapGetters("cart", ["totalCount"])
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.isHomePage = this.$route.path === "/";
    this.isInfoPage =
      this.$route.path === "/error-page/" ||
      this.$route.path === "/success-page/";
    this.$auth.$storage.getCookie("session_id")
      ? this.$store.dispatch("cart/fetchCart")
      : this.$auth.$storage.setCookie("session_id", this.uuidv4());
  },
  methods: {
    handleScroll() {
      this.hamburgerActive = false;
      if (this.$route.hash) {
        const anchor = document.querySelector(`#tickets`);
        if (anchor) {
          window.scrollTo({
            top: anchor.getBoundingClientRect().top + window.pageYOffset
          });
        }
      }
    },
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
