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
                  type="mail"
                  class="input"
                  placeholder="@email"
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
                  type="mail"
                  class="input"
                  placeholder="@email"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': errors.includes('phone') }"
            >
              <label
                >Телефон
<!--                — -->
<!--                начиная с кода +7, если вы из России, или кода вашей-->
<!--                страны -->
                <sup>*</sup>
                <VuePhoneNumberInput
                  v-model="yourValue"
                  default-country-code="RU"
                  :countries-height= 44
                  :required="true"
                  error-color="#f8c8cc"
                  color="#0d6dd8"
                  :translations="{
                                countrySelectorLabel: 'Код страны',
                                countrySelectorError: 'Неверный формат номера',
                                phoneNumberLabel: 'Телефон',
                                example: 'Пример :'
                              }"
                                              />
<!--                <input-->
<!--                  @input="saveData({ phone: $event.target.value })"-->
<!--                  :value="form.phone || '+7'"-->
<!--                  class="input"-->
<!--                  placeholder="+7 123 456 78 90"-->
<!--                  pattern="^\+[0-9]+$"-->
<!--                  title="Разрешены только цифры и плюс в начале"-->
<!--                />-->
              </label>
            </div>
            <button
              class="btn btn--green"
              type="submit"
              :disabled="disabledPay"
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
          <img src="/pay/platron.svg" alt="" class="logo-pay" />
          <img src="/pay/maestro.svg" alt="" class="logo-pay" />
          <img src="/pay/visa.svg" alt="" class="logo-pay" />
          <img src="/pay/master.svg" alt="" class="logo-pay" />
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
import { mapState, mapActions } from "vuex";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  components: {VuePhoneNumberInput,},
  scrollToTop: true,
  data() {
    return {
      yourValue: null
    }
  },
  beforeMount() {
    this.getFormValues();
  },
  methods: {
    ...mapActions("checkout", ["getFormValues", "saveData", "getPayLink"]),
    submitForm(e) {
      e.preventDefault();
      this.$store.getters["cart/totalCount"]
        ? this.getPayLink(true)
        : this.$router.push("/");
    }
  },
  computed: mapState("checkout", ["form", "errors", "disabledPay"])
};
</script>
