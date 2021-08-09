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
        <nuxt-link to="/" class="header-logo" @click.native="hamburgerActive = false">
        <img class="logo_w"
            src="/logo.svg"
            alt="СТРИМФЕСТ"
            loading="lazy" />
            <img class="logo_b"
            src="/logo-blue.svg"
            alt="СТРИМФЕСТ"
            loading="lazy" />
        </nuxt-link>
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
            class="btn header__button btn--yellow header__button--cart"
            to="/cart"
            @click.native="hamburgerActive = false"
          >
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.339 5.82987C25.6454 4.09506 23.9904 2.97493 22.1226 2.97493H21.8574V2.06667H9.1426V2.97487H8.87739C7.00955 2.97487 5.35456 4.09506 4.66097 5.82981L1.74635 12.9651H0V14.7815H1.30643C1.72413 14.7815 2.08606 15.0645 2.18803 15.4689L5.19315 27.2498C5.49643 28.464 6.5838 29.3127 7.83616 29.3127H23.1638C24.4162 29.3127 25.5641 28.4639 25.8674 27.2489L28.812 15.4697C28.914 15.0644 29.2758 14.7815 29.6936 14.7815H31V12.9651H29.2537L26.339 5.82987ZM10.959 25.6799H9.1426V16.5979H10.959V25.6799ZM16.4082 25.6799H14.5918V16.5979H16.4082V25.6799ZM21.8574 25.6799H20.041V16.5979H21.8574V25.6799ZM6.34794 6.50393C6.76387 5.46361 7.75726 4.79133 8.87739 4.79133H9.1426V5.69947H21.8575V4.79127H22.1227C23.2429 4.79127 24.2362 5.46355 24.6521 6.50387L27.2971 12.9651H3.70286L6.34794 6.50393Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="15.5" y1="2.06667" x2="15.5" y2="29.3127" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#072170"/>
                  <stop offset="1" stop-color="#0A30A1"/>
                </linearGradient>
              </defs>
            </svg>
            корзина
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
        { id: 6, name: "О фестивале", url: "/about", star: false },
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
      this.isAccountPage = ["/account"].includes(this.$route.path);
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
