<template>
  <section class="cart">
    <div class="container">
      <div class="cart-logo ">
        <img src="/logo_b.png" alt="" />
      </div>
      <div class="cart-back">
        <nuxt-link class="link" to="/cart">Назад в корзину</nuxt-link>
      </div>
      <div class="separator"></div>
      <div class="cart-container">
        <div class="cart-form">
          <p class="cart-form__title">Данные покупателя</p>

          <div class="cart-form-row">
            <div
              class="cart-form-row__item"
              :class="{ 'item-error': nameError }"
            >
              <p>Имя <sup>*</sup></p>
              <input v-model="userData.name" type="text" />
            </div>

            <div
              class="cart-form-row__item "
              :class="{ 'item-error': familyError }"
            >
              <p>Фамилия <sup>*</sup></p>
              <input v-model="userData.family" type="text" />
            </div>
            <div
              class="cart-form-row__item"
              :class="{ 'item-error': email1Error }"
            >
              <p>Email — на него придут ваши билеты <sup>*</sup></p>
              <input v-model="userData.email1" type="text" />
            </div>
            <div
              class="cart-form-row__item"
              :class="{ 'item-error': email2Error }"
            >
              <p>Email — введите еще раз <sup>*</sup></p>
              <input v-model="userData.email2" type="text" />
            </div>
            <div
              class="cart-form-row__item"
              :class="{ 'item-error': phoneError }"
            >
              <p>Телефон — начиная с кода вашей страны <sup>*</sup></p>
              <input v-model="userData.phone" type="text" />
            </div>
          </div>
        </div>
        <div class="cart-big-button">
          <button :disabled="!is_ok" @click="pay">оплатить</button>
          <p>
            Переходя к оплате, вы соглашаетесь с
            <a class="link" href="">договором оферты</a> ,
            <a class="link" href="">условиями конфиденциальности</a> и
            <a class="link" href="">правилами площадки</a>.
          </p>
        </div>

        <div class="">
          <img :src="base_url + i.qr" alt="" v-for="i in temp" />
        </div>
        <p class="mb-35">
          После успешной оплаты вам на email придет два письма: одно с чеком,
          другое — с билетом в виде QR-кода. Распечатайте письмо с QR-кодом или
          сохраните его на телефоне. <br /><br />
          До встречи на Стримфесте 2021!
        </p>
        <img src="/platron_logo.png" alt="" />
        <p>
          Оплата производится через надежную платежную систему Platron по картам
          VISA, Maestro и MasterCard. Не получается оплатить? Напишите нам в
          <a class="link" href="">личку ВК</a> или на почту
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
