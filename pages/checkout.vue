<template>
  <section class="cart cart-checkout">
    <div class="container">
      <h4 class="cart__title">Данные покупателя</h4>
      <div class="cart-container">
        <form @submit="submitForm" class="cart-form">
          <div class="cart-form-row">
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': errors.includes('firstname') }"
            >
              <label
                >Имя <sup>*</sup>
                <input
                  @input="saveData({ firstname: $event.target.value })"
                  :value="form.firstname"
                  class="input"
                  placeholder="Андрей"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field "
              :class="{ 'item-error': errors.includes('lastname') }"
            >
              <label
                >Фамилия <sup>*</sup>
                <input
                  @input="saveData({ lastname: $event.target.value })"
                  :value="form.lastname"
                  class="input"
                  placeholder="Иванов"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': errors.includes('email') }"
            >
              <label
                >Email — на него придут ваши билеты <sup>*</sup>
                <input
                  @input="saveData({ email: $event.target.value })"
                  :value="form.email"
                  type="email"
                  class="input"
                  placeholder="mail@email.com"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': errors.includes('emailConfirm') }"
            >
              <label
                >Email — введите еще раз <sup>*</sup>
                <input
                  @input="
                    $store.commit('checkout/SET_FORM', {
                      emailConfirm: $event.target.value
                    })
                  "
                  @paste.prevent
                  type="email"
                  class="input"
                  placeholder="mail@email.com"
                  :readonly="emailConfirmReadonly"
                  autocomplete="new-password"
                  @focus="emailConfirmReadonly = false"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': errors.includes('phone') }"
            >
              <label
                >Телефон
                <sup>*</sup>
                <MazPhoneNumberInput
                  :class="{ 'item-error': errors.includes('phone') }"
                  v-model="phoneNumber"
                  default-country-code="RU"
                  @update="savePhoneNumber"
                  error-color="#f8c8cc"
                  color="#0d6dd8"
                  :translations="{
                    countrySelectorLabel: 'Код страны',
                    countrySelectorError: 'Неверный формат номера',
                    phoneNumberLabel: 'Телефон'
                  }"
                  :defaultPhoneNumber="form.phone || ''"
                  noExample
                />
              </label>
            </div>
            <button
              class="btn btn--green"
              type="submit"
              :disabled="loading || disabledPay"
            >
              <span class="split">Оплатить</span>
            </button>
            <p>
              Переходя к оплате, вы соглашаетесь с
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1ZaexFifUQPt8RNLHgBg3aZToA8pKszJOOWLiQEkKB-s/edit?usp=sharing
"
                >договором оферты</a
              >,
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1LWNuBF596Wndtl4hiI2t12cOo_qHJsxMSD4qedX6HTA/edit?usp=sharing"
                >условиями конфиденциальности</a
              >
              и
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1UiAIfANWzYRYZuGIW1sj3tAQ20-_AUEnvvgt8-xdPKQ/edit?usp=sharing"
                >правилами площадки</a
              >.
            </p>
          </div>
        </form>
        <p class="mb-35">
          После успешной оплаты вам на email придет два письма: одно с чеком,
          другое — с билетом в виде QR-кода. Распечатайте письмо с QR-кодом или
          сохраните его на телефоне. До встречи на Стримфесте 2021!
        </p>

        <div class="logo-pay--wrapper">
          <el-image class="logo-pay" src="/pay/platron.svg" lazy></el-image>
          <el-image class="logo-pay" src="/pay/maestro.svg" lazy></el-image>
          <el-image class="logo-pay" src="/pay/visa.svg" lazy></el-image>
          <el-image class="logo-pay" src="/pay/master.svg" lazy></el-image>
        </div>

        <p>
          Оплата производится через надежную платежную систему Platron по картам
          VISA, Maestro и MasterCard.
        </p>
        <p>
          <span>Не получается оплатить? </span>Напишите нам в
          <a class="link" href="https://vk.com/streamfest">личку ВК</a> или на
          почту
          <a class="link" href="mailto:tickets@streamfest.ru"
            >tickets@streamfest.ru</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  scrollToTop: true,
  data() {
    return {
      phoneNumber: "",
      emailConfirmReadonly: true
    };
  },
  computed: {
    ...mapState("cart", ["loading"]),
    ...mapState("checkout", ["form", "errors", "disabledPay"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.emailConfirmReadonly = false;
      vm.DISABLE_PAY(false);
    });
  },
  beforeMount() {
    this.getFormValues();
  },
  methods: {
    ...mapActions("checkout", ["getFormValues", "saveData", "getPayLink"]),
    ...mapMutations("checkout", ["DISABLE_PAY"]),
    savePhoneNumber(e) {
      e.formatInternational && this.saveData({ phone: e.formatInternational });
    },
    submitForm(e) {
      e.preventDefault();
      this.$store.getters["cart/totalCount"]
        ? this.getPayLink(true)
        : this.$router.push("/");
    }
  },
  watch: {
    phoneNumber(e) {
      !e && this.saveData({ phone: "" });
    }
  }
};
</script>
