<template>
  <div class="info-page info-page--error">
    <div class="container">
      <div class="info-page__content">
        <div class="info__number"> <span>603</span>
        </div>
        <h1 class="info__title">Ууупс!</h1>
        <div class="info__subtitle">Оплата не удалась.</div>
        <p>Возможно, вы неправильно указали данные карты, смс-код или на карте нет денег. Пожалуйста, попробуйте еще раз.</p>
        <p>Если вы считаете, что все правильно, но оплата все равно не проходит, пожалуйста, напишите нам в <a
          href="https://vk.com/streamfest">личку ВК</a> или на почту
          <a href="mailto:tickets@streamfest.ru">tickets@streamfest.ru</a>.
        </p>
        <a
          href="#"
          class="btn btn--yellow">
          <span class="split">Попробовать еще раз</span>
        </a>
      </div>
    </div>
    <!-- VK Widget -->
    <div id="vk_community_messages"></div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      isInfoPage: true,
    };
  },
  watch: {
  },
  mounted() {},
  methods: {
  }
}
</script>


