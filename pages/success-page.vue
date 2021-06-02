<template>
  <div class="info-page info-page--success">
    <div class="container">
      <div class="info-page__content">
        <h1 class="info__title">Ура</h1>
        <div class="info__subtitle">Заказ успешно оплачен!</div>
        <p>
          Поздравляем, вы идете на Стримфест!<br />
          Ждем вас 17–18 июля в Технопарке «Сколково», <br />
          <a href="/contact" target="_blank" rel="noopener noreferrers"
            >вот схема проезда.</a
          >
        </p>
        <p>
          Скоро вам на почту придет два письма: одно с чеком, другое — с билетом
          в виде QR-кода. Распечатайте письмо с QR-кодом или сохраните его на
          телефоне.
        </p>
        <p>
          Если письма не пришли, напишите на
          <a href="mailto:tickets@streamfest.ru">tickets@streamfest.ru</a>,
          указав ваш <br /><b>номер заказа: №<span id="orderId">{{ $route.query.pg_order_id }}</span><span v-show="false" id="orderAmount">{{order.amount}}RUR</span>.</b>
        </p>
        <nuxt-link to="/" class="btn"
          >На главную</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $axios, query }){
    try {
      const order = await $axios.get(`/api/get_order?id=${query.pg_order_id }`)
      return {order}
    } catch (e) {}
    return {order: {}}
  },
  mounted() {
    this.$store.dispatch("cart/fetchCart");
  }
};
</script>
