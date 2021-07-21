<template>
  <div class="info-page info-page--error">
    <div class="container">
      <div class="info-page__content">
        <div class="info__number"><span>603</span></div>
        <h1 class="info__title">Ууупс!</h1>
        <div class="info__subtitle">Оплата не удалась.</div>
        <p>
          Возможно, вы неправильно указали данные карты, смс-код или на карте
          нет денег. Пожалуйста, попробуйте еще раз.
        </p>
        <p>
          Если вы считаете, что все правильно, но оплата все равно не проходит,
          пожалуйста, напишите нам в
          <a
            @click="saveData({ clickedTechAssistance: true })"
            href="https://vk.com/streamfest"
            target="_blank"
            rel="noopener noreferrer"
            >личку ВК</a
          >
          или на почту
          <a href="mailto:tickets@streamfest.ru">tickets@streamfest.ru</a>.
        </p>
        <button
          @click="retryPay"
          class="btn btn--yellow"
          :disabled="disabledSubmit"
        >
          Попробовать еще раз
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  scrollToTop: true,
  data() {
    return {
      isInfoPage: true,
      disabledSubmit: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => (
      vm.disabledSubmit = false
    ));
  },
  methods: {
    ...mapActions("userData", ["saveData"]),
    ...mapActions("checkout", ["getPayLink"]),
    async retryPay() {
      this.disabledSubmit = true;
      this.saveData({ tryedToPayAgain: true });
      const { firstname, lastname, email, phone } = (
        await this.$axios.get(
          `/api/get_user_data?session_id=${this.$auth.$storage.getCookie(
            "session_id"
          )}`
        )
      ).data;
      !this.getPayLink({ firstname, lastname, email, phone }) && this.$router.push("/");
    }
  }
};
</script>
