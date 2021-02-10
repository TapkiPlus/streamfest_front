<template>
 <header class="header" :class="[scrollPosition > 100 ? 'header-sticky': '',!isHomePage ? 'header-no-bg' : ''] ">
        <div class="container">
            <div class="header-wrapper">
                <div @click="$router.push('/')" class="header-logo">
                    <img src="/logo.png" alt="">
                </div>
                <div class="header-nav">
<!--                  navItemActive-->
                    <ul>
                        <li v-for="nav_item in nav_items" :key="nav_item.id">
                          <nuxt-link :to="nav_item.url">{{nav_item.name}}</nuxt-link>
                        </li>
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
      nav_items:[
        {id:1,name:'Активности',url:'/1'},
        {id:2,name:'Участники',url:'/streamers'},
        {id:3,name:'FAQ',url:'/faq'},
        {id:4,name:'Стать участником',url:'/how-to'},
        {id:5,name:'Awards',url:'/3'},
        {id:6,name:'О фестивале',url:'/4'},
        {id:7,name:'Как добраться',url:'/5'},
      ]

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
    if (!this.$cookie.get("session_id")){
      this.$cookie.set("session_id", this.uuidv4())
    }

  },
  methods: {
     updateScroll() {
      this.scrollPosition = window.scrollY
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }


  }
}
</script>


<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
