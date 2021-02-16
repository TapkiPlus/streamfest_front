<template>
   <div class="container ticket-info">
     <h3 class="section-header mb-20" style="text-align: left">Статус оплаты: {{ticket.is_payed ? 'Оплачен' : 'Не оплачен'}}</h3>
     <p class="mb-20" v-if="!ticket.streamer" >Билет на {{ticket.ticket.is_one_day ? 'На один день':'На два дня'}}</p>
     <p class="mb-20" v-else >Билет на {{ticket.ticket.is_one_day ? `На один день от ${ticket.streamer.name}`:`На два дня от ${ticket.streamer.name}`}}</p>
     <p class="mb-20" >Данные покупателя</p>
     <ul class="mb-45">
       <li>Имя: {{ticket.order_name}}</li>
       <li>Фамилия: {{ticket.order_family}}</li>
       <li>E-Mail: {{ticket.order_email}}</li>
       <li>Телефон: {{ticket.order_phone}}</li>
     </ul>

   </div>
</template>

<script>
export default {
  scrollToTop: true,
  // auth: true,
  async asyncData({$axios,params}){
    try{
      const get_ticket = await $axios.get(`/api/get_ticket?uuid=${params.uuid}`)
    const ticket = get_ticket.data
    return {ticket}
    }catch (e) {
      console.log(e)
    }

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
  }
}
</script>


