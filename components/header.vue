<template>
 <header class="header" :class="[scrollPosition > 100 ? 'header-sticky': '',!isHomePage ? 'header-no-bg' : ''] ">
        <div class="container">
            <div class="header-wrapper">
                <div @click="$router.push('/')" class="header-logo">
                    <img src="/logo.png" alt="">
                </div>
                <div class="header-nav">
                    <ul>
                        <li class="navItemActive"><a href="#">Активности</a></li>

                        <li><nuxt-link to="/streamers">Участники</nuxt-link></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Стать участником</a></li>
                        <li><a href="#">Awards</a></li>
                        <li><a href="#">О фестивале</a></li>
                        <li><a href="#">Как добраться</a></li>
                    </ul>
                </div>
                <div class="header-button">
                    <a href="">купить билет</a>
                </div>
            </div>

        </div>

    </header>
</template>

<script>


export default {

  transition: 'home',
  data() {
    return {
      isHomePage:null,
      scrollPosition:null,

    }
  },
  watch: {
    '$route.path': function(val) {
      this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
    this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
  },
  methods: {
     updateScroll() {
      this.scrollPosition = window.scrollY
    },


  }
}
</script>


<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
