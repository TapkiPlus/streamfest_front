<template>
  <section class="streamer">
    <div class="container ">
      <div class="streamer-top">
        <div class="streamer-top__avatar" :style="`background: url(${streamer.photo})`"></div>
        <div class="streamer-top__big" :style="`background: url(${streamer.pageHeader})`"></div>


      </div>
      <div class="streamer-container">
        <div class="streamer-info">
          <div class="streamer-info__name">
            <p>{{streamer.nickName}}</p>
            <p>{{streamer.name}}</p>
          </div>
          <div class="streamer-info__links">
            <a :href="social_link.link" target="_blank"
               v-for="social_link in streamer.links"
               :key="social_link.id">
              <img class="streamer-info__icon" :src="social_link.icon.icon" alt="">
            </a>
          </div>
        </div>
        <div class="streamer-text">
          <div class="streamer-text__block" v-html="streamer.about"></div>
          <div class="streamer-text__block" v-html="streamer.streaming"></div>
        </div>
        <div class="streamer-bottom">
          <div class="streamer-bottom__buttons">
<!--            @click.prevent="addItem(ticket.id,streamer.id)"-->
            <div  v-for="ticket in tickets" :key="ticket.id" class="streamer-bottom__button "
                 :class="[ticket.is_one_day ? 'streamer-bottom__button--yellow' : 'streamer-bottom__button--red']">
              <p>{{ticket.is_one_day ? 'скоро билет на 1 день' : 'скоро билет на 2 дня'}}</p>
              <p>от {{streamer.nickName}}</p>
            </div>
          </div>
          <p class="streamer-bottom__text">Покупая билет от участника, ты его поддерживаешь.
            Часть стоимости билета идет участнику.</p>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  // auth: true,
  async asyncData({$axios,params}){
    const get_streamer = await $axios.get(`/api/get_streamer?name_slug=${params.streamer_slug}`)
    const streamer = get_streamer.data
    const get_tickets = await $axios.get(`/api/get_tickets`)
    const tickets = get_tickets.data
    return {streamer,tickets}
  },
  data() {
    return {
    };
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    notify(title,message,type){
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
    async addItem(t_id,s_id){
     await this.$axios.post('/api/add_item',{
       session_id:this.$auth.$storage.getCookie('session_id'),
       item_id:t_id,
       streamer_id:s_id
     })
     this.notify('Успешно','Билет добавлен в корзину', 'success')
     await this.$store.dispatch('cart/fetchCart')
   }
  }
}
</script>


