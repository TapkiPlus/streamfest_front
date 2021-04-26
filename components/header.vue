<template>
  <header
    class="header"
    id="header"
    :class="[
      isHomePage && scrollPosition > 100 ? 'header-prepare-sticky' : '',
      isHomePage && scrollPosition > 150 ? 'header-sticky' : '',
      !isHomePage && !isAccountPage ? 'header-bg' : '',
      isInfoPage ? 'header-info' : '',
      isAccountPage ? 'header-account' : ''

    ]"
  >
    <div class="container">
      <div class="header-wrapper">
        <div @click="$router.push('/')" class="header-logo">

          <img class="logo_w" src="/logo.svg" alt="СТРИМФЕСТ"
          @click="hamburgerActive = false" />
          <img class="logo_b" src="/logo-blue.svg" alt=""
               @click="hamburgerActive = false"/>
        </div>
        <div
          @click="hamburgerActive = !hamburgerActive"
          class="hamburger"
          :class="{ active: hamburgerActive }"
          v-if="!isAccountPage"
        >
          <div class="bar bar-1"></div>
          <div class="bar bar-2"></div>
          <div class="bar bar-3"></div>
          <div class="bar bar-4"></div>
        </div>
        <div class="header-nav" v-if="!isAccountPage">
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
            v-show="cartTotalCount"
            :data-num="cartTotalCount"
            class="btn header__button btn--yellow header__button-cart"
            to="/cart"
            @click.native="hamburgerActive = false"
          >
            <span class="split">корзина</span>
          </nuxt-link>
          <nuxt-link
            v-show="!cartTotalCount"
            @click.native="handleScroll"
            class="btn btn--yellow header__button"
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
import { mapState } from "vuex";
export default {
  transition: "home",
  data() {
    return {
      isHomePage: null,
      isCartPage: null,
      isInfoPage: null,
      isAccountPage: null,
      scrollPosition: null,
      cart: null,
      nav_items: [
        { id: 1, name: "Главная", url: "/", star: false },
        { id: 2, name: "Участники", url: "/stars", star: true },
        { id: 3, name: "Активности", url: "/activities", star: false },
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
      this.checkRoutePath();
    }
  },
  computed: {
    ...mapState("cart", ["data"]),
    cartTotalCount() {
      return this.data.cartitem_set
        ? this.data.cartitem_set.reduce(
            (acc, { quantity }) => acc + quantity,
            0
          )
        : 0;
    }
  },
  beforeMount() {
    !this.$auth.$storage.getCookie("session_id") &&
      this.$auth.$storage.setCookie("session_id", this.uuidv4());
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.checkRoutePath();
    this.$store.dispatch("cart/fetchCart");
  },
  methods: {
    checkRoutePath() {
      this.isHomePage = this.$route.path === "/";
      this.isInfoPage = ["/error-page", "/success-page"].includes(
        this.$route.path
      );
      this.isAccountPage=["/account"].includes(
        this.$route.path
      );
    },
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
