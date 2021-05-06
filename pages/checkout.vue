<template>
  <section class="cart cart-checkout">
    <div class="container">
      <h4 class="cart__title">Данные покупателя</h4>
      <div class="cart-container">
        <div class="cart-form">
          <form class="cart-form-row">
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': nameError }"
            >
              <label
                >Имя <sup>*</sup>
                <input
                  v-model="userData.name"
                  type="text"
                  class="input"
                  placeholder="Андрей"
                />
              </label>
            </div>

            <div
              class="cart-form-row__item input__field "
              :class="{ 'item-error': familyError }"
            >
              <label
                >Фамилия <sup>*</sup>
                <input
                  v-model="userData.family"
                  type="text"
                  class="input"
                  placeholder="Иванов"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': email1Error }"
            >
              <label
                >Email — на него придут ваши билеты <sup>*</sup>
                <input
                  v-model="userData.email1"
                  type="mail"
                  class="input"
                  placeholder="@email"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': email2Error }"
            >
              <label
                >Email — введите еще раз <sup>*</sup>
                <input
                  v-model="userData.email2"
                  type="mail"
                  class="input"
                  placeholder="@email"
                />
              </label>
            </div>
            <div
              class="cart-form-row__item input__field"
              :class="{ 'item-error': phoneError }"
            >
              <label
                >Телефон — начиная с кода +7, если вы из России, или кода вашей
                страны <sup>*</sup>
                <input
                  v-model="userData.phone"
                  type="tel"
                  class="input"
                  placeholder="+7 123 456 78 90"
                />
              </label>
            </div>
            <button class="btn btn--green" :disabled="!is_ok" @click="pay">
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
          </form>
        </div>
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://front.platron.ru/support/"
          >Инструкция по оплате.</a
        >
        <p class="mb-35">
          После успешной оплаты вам на email придет два письма: одно с чеком,
          другое — с билетом в виде QR-кода. Распечатайте письмо с QR-кодом или
          сохраните его на телефоне. До встречи на Стримфесте 2021!
        </p>

        <div class="logo-pay--wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://front.platron.ru/"
          >
            <img src="/pay/platron.svg" alt="" class="logo-pay" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://front.platron.ru/"
          >
            <img src="/pay/maestro.svg" alt="" class="logo-pay" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://front.platron.ru/"
          >
            <img src="/pay/visa.svg" alt="" class="logo-pay" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://front.platron.ru/"
          >
            <img src="/pay/master.svg" alt="" class="logo-pay" />
          </a>
        </div>

        <p>
          Оплата производится через надежную
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://front.platron.ru/"
            >платежную систему Platron</a
          >
          по картам VISA, Maestro и MasterCard.
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
export default {
  scrollToTop: true,
  // auth: true,

  data() {
    return {
      temp: [],
      base_url: process.env.img_url,
      userData: {
        name: "",
        family: "",
        email1: "",
        email2: "",
        phone: ""
      }
    };
  },
  watch: {},

  methods: {
    async pay() {
      const responce = await this.$axios.post("/api/create_order", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        name: this.userData.name,
        family: this.userData.family,
        email: this.userData.email2,
        phone: this.userData.phone
      });
      console.log(responce.data);
      this.temp = responce.data.tickets;
      await this.$store.dispatch("cart/fetchCart");
    }
  },
  computed: {
    nameError() {
      return this.userData.name === "";
    },
    familyError() {
      return this.userData.family === "";
    },
    email1Error() {
      return (
        this.userData.email1 === "" ||
        this.userData.email1 !== this.userData.email2
      );
    },
    email2Error() {
      return (
        this.userData.email2 === "" ||
        this.userData.email1 !== this.userData.email2
      );
    },
    phoneError() {
      return this.userData.phone === "";
    },
    is_ok() {
      return (
        this.userData.email1 === this.userData.email2 &&
        this.userData.name &&
        this.userData.family &&
        this.userData.email1 &&
        this.userData.email2 &&
        this.userData.phone
      );
    }
  }
};
</script>
