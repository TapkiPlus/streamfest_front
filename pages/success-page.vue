<template>
  <div class="info-page info-page--success">
    <div class="container">
      <div class="info-page__content">
        <h1 class="info__title">Ура</h1>
        <div class="info__subtitle">Заказ успешно оплачен!</div>
        <p>
          Поздравляем, вы идете на Стримфест!<br />
          Ждем вас 25–26 июня в Технопарке «Сколково», <br />
          <a href="/contact" target="_blank" rel="noopener noreferrer"
            >вот схема проезда.</a
          >
        </p>
        <p>
          <b>ВАЖНО! Стримфест проходит в формате COVID-free.</b> Это безопасно!
          Для входа вам нужны билет, QR-код и паспорт. Билеты на фестиваль
          проверяются только после
          <a class="link" href="/faq" target="_blank" rel="noopener noreferrer"
            >проверки QR-кода</a
          >.
        </p>
        <p>
          Скоро вам на почту придет два письма: одно с чеком, другое — с билетом
          в виде QR-кода (не путать с COVID-free QR-кодом, который вы получаете
          сами). Распечатайте письмо с билетом или сохраните его на телефоне.
        </p>
        <p>
          Если письма не пришли, напишите на
          <a href="mailto:tickets@streamfest.ru">tickets@streamfest.ru</a>,
          указав ваш <br /><b
            >номер заказа: №<span id="orderId">{{
              $route.query.pg_order_id
            }}</span
            ><span v-show="false" id="orderAmount">{{
              data.total_price && data.total_price.toLocaleString()
            }}</span
            >.</b
          >
        </p>
        <nuxt-link to="/" class="btn">На главную</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  scrollToTop: true,
  computed: mapState("cart", ["data"]),
  mounted() {
    this.$store.dispatch("cart/fetchCart");
  }
};
</script>
