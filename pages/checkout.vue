<template>
  <section class="cart cart-checkout">
    <div class="container">
      <h4 class="cart__title">Данные покупателя</h4>
      <div class="cart-container">
        <form @submit.prevent="submitForm" class="cart-form">
          <div class="cart-form-row">
            <div
              class="cart-form-row__item input__field"
            >
              <label
                >Имя <sup>*</sup>
                <input
                  :value="firstname"
                  class="input"
                  placeholder="Андрей"
                  pattern="^[А-Я][а-я]*$"
                  title="Необходимо ввести кириллицу и первую букву заглавными буквами"
                  required
                  @input="onInput('firstname', $event)"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field "
            >
              <label
                >Фамилия <sup>*</sup>
                <input
                  :value="lastname"
                  class="input"
                  placeholder="Иванов"
                  pattern="^[А-Я][а-я]*$"
                  title="Необходимо ввести кириллицу и первую букву заглавными буквами"
                  required
                  @input="onInput('lastname', $event)"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
            >
              <label
                >Email — на него придут ваши билеты <sup>*</sup>
                <input
                  :value="email"
                  type="email"
                  class="input"
                  placeholder="mail@email.com"
                  required
                  @input="onInput('email', $event)"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
            >
              <label
                >Email — введите еще раз <sup>*</sup>
                <input
                v-model="emailConfirm"
                  class="input"
                  placeholder="mail@email.com"
                  :readonly="inputReadonly"
                  autocomplete="new-password"
                  :pattern="email"
                  title="Адреса e-mail не совпадают"
                  required
                  @focus="inputReadonly = false"
                  @paste.prevent
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
            >
              <label
                >Телефон
                <sup>*</sup>
                <MazPhoneNumberInput
                  v-model="phoneNumberModel"
                  :class="{ 'item-error': errors.includes('phone') }"
                  default-country-code="RU"
                  error-color="#f8c8cc"
                  color="#0d6dd8"
                  :translations="{
                    countrySelectorLabel: 'Код страны',
                    countrySelectorError: 'Неверный формат номера',
                    phoneNumberLabel: 'Телефон'
                  }"
                  :defaultPhoneNumber="phone || ''"
                  no-example
                  required
                  @update="savePhoneNumber"
                />
              </label>
            </div>
            <button
              class="btn btn--green"
              type="submit"
              :disabled="$store.state.cart.loading || disabledSubmit"
            >
              Оплатить
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
          <img class="logo-pay" src="/pay/platron.svg" loading="lazy"/>
          <img class="logo-pay" src="/pay/maestro.svg" loading="lazy"/>
          <img class="logo-pay" src="/pay/visa.svg" loading="lazy"/>
          <img class="logo-pay" src="/pay/master.svg" loading="lazy"/>
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
import { mapActions } from "vuex";
export default {
  scrollToTop: true,
  async asyncData({ $axios, $auth }) {
    const { firstname, lastname, email, phone } = (
        await $axios.get(
          `/api/get_user_data?session_id=${$auth.$storage.getCookie(
            "session_id"
          )}`
        )
      ).data;
      return { firstname, lastname, email, phone }
  },
  data() {
    return {
      emailConfirm: '',
      errors: [],
      phoneNumberModel: '',
      phoneNumber: {},
      inputReadonly: true,
      disabledSubmit: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.inputReadonly = false;
      vm.disabledSubmit = false
    });
  },
  watch: {
     phoneNumberModel(newValue) {
        this.saveData({phone: newValue === null ? '' : newValue})
     }
  },
  methods: {
    ...mapActions("checkout", ["getPayLink"]),
    ...mapActions("userData", ["saveData"]),
    onInput(key, event) {
      const {value} = event.target
      this[key] = value
      this.saveData({ [key]: value })
    },
    savePhoneNumber(e) {
       this.phoneNumber = e
    },
    submitForm() {
      this.disabledSubmit = true
      if(!this.phoneNumber.isValid) {
        this.errors.push('phone')
         this.disabledSubmit = false
      }
      else if(this.$store.getters["cart/totalCount"]) {
         this.saveData({ clickedPay: true })
          this.getPayLink({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            emailConfirm: this.emailConfirm,
            phone: this.phone
          })
      } else this.$router.push("/");
    }
  },
};
</script>
