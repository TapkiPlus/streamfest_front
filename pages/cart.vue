<template>
  <section class="cart">
    <div class="container">
      <h4 class="cart__title">Корзина</h4>
    </div>
    <div class="container">
      <div
        class="cart__full"
        v-if="data.cartitem_set && data.cartitem_set.length"
      >
        <div
          class="cart__item"
          v-for="{ id, streamer, ticket_type, quantity } in data.cartitem_set"
          :key="id"
        >
          <div class="cart-row">
            <div @click="deleteItem(id)" class="cart-row__delete">
              <img draggable="false" src="/delete.svg" alt="" />
            </div>
            <div class="cart-row__icon" v-if="!streamer">
              <img
                :src="
                  ticket_type.days_qty === 1 ? '/oneday.svg' : '/twoday.svg'
                "
                alt=""
              />
            </div>
            <div class="cart-row__icon" v-else>
              <img
                :src="
                  ticket_type.days_qty === 1
                    ? '/oneday-star.svg'
                    : '/twoday-star.svg'
                "
                alt=""
              />
            </div>
            <div class="cart__body">
              <div class="cart-row__name">
                <p>
                  Билет на Стримфест&nbsp;2021 на
                  {{ ticket_type.days_qty === 1 ? "1 день" : "2 дня" }}
                  {{ streamer && streamer.nickName && ` от ${streamer.nickName}` }}
                </p>
              </div>
              <div class="cart-row__quantity">
                <svg
                  class="minus _disabled"
                  @click="
                    changeQuantity({
                      t_id: id,
                      increase: false
                    })
                  "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="2" fill="white" />
                  <rect
                    x="5"
                    y="11"
                    width="14"
                    height="2"
                    rx="1"
                    fill="#C4C4C4"
                  />
                  <rect
                    x="5"
                    y="11"
                    width="14"
                    height="2"
                    rx="1"
                    fill="#676767"
                  />
                </svg>
                <p>{{ quantity }}</p>
                <svg
                  class="plus"
                  @click="
                    changeQuantity({
                      t_id: id,
                      increase: true
                    })
                  "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="2" fill="white" />
                  <rect
                    x="5"
                    y="11"
                    width="14"
                    height="2"
                    rx="1"
                    fill="#676767"
                  />
                  <rect
                    x="13"
                    y="5"
                    width="14"
                    height="2"
                    rx="1"
                    transform="rotate(90 13 5)"
                    fill="#676767"
                  />
                </svg>
              </div>
              <div class="cart-row__price">
                <p>
                  {{
                    (ticket_type.price * quantity).toLocaleString()
                  }}&nbsp;руб.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__empty" v-else>
        <img src="/cart-big.svg" alt="" />
        <p class="cart-row ">Ваша корзина пока что пуста</p>
        <button @click="goToHome" class="btn btn--blue">
          <span class="split">Выбрать билет</span>
        </button>
      </div>
    </div>
    <div class="container" v-if="data.cartitem_set && data.cartitem_set.length">
      <div class="btn-wrapper">
        <button
          class="btn btn--blue"
          :disabled="!data.cartitem_set.length"
          @click="goToCheckout"
        >
          <span class="split">Перейти к оформлению</span>
        </button>
        <div class="cart-button__total">
          <p>Общая стоимость:</p>
          <p class="total">{{ data.total_price.toLocaleString() }} руб.</p>
        </div>
      </div>
      <div class="separator separator--thin"></div>
      <p class="cart__info">
        <b>Количество билетов ограничено,</b> и чем ближе к Стримфесту, тем
        дороже они будут.<br /><br />
        <b>Билет — это QR-код</b>, который придет вам на email после оплаты. При
        входе на фестиваль билет считывается и гасится, а вы получаете взамен
        браслет посетителя.<br /><br />
        <b>Билеты не именные</b>: один человек может купить сразу несколько
        билетов, для себя и друзей.<br /><br />
        <b>Возрастные ограничения</b>: подростки 14-16 лет должны находиться на
        фестивале в постоянном сопровождении любого лица старше 18 лет; дети
        8-13 лет на фестиваль не допускаются в соответствии с требованиями
        площадки; дети до 8 лет должны находиться на фестивале в постоянном
        сопровождении родственников или опекунов.<br /><br />
        <b>Не все участники и активности будут на фестивале оба дня</b>. Билет
        на два дня позволяет увидеть всех стримеров и подкастеров и
        поучаствовать во всех активностях. Билет на один день позволяет посетить
        фестиваль или 17, или 18 июля — на ваш выбор.<br /><br />
        <b>Баффы, полученные на фестивале</b>, действуют 8759 часов и множатся в
        зависимости от количества приведенных друзей ;)
      </p>
      <div class="cart-button--bottom desktop-hidden">
        <button
          class="btn btn--blue"
          :disabled="!data.cartitem_set.length"
          @click="goToCheckout"
        >
          <span class="split">Перейти к оформлению</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  scrollToTop: true,
  data() {
    return {
      statusTitle: "",
      timerId: null,
      isCartPage: true
    };
  },
  computed: {
    ...mapState("cart", ["data"])
  },
  methods: {
    ...mapActions("cart", ["changeQuantity", "deleteItem"]),
    ...mapActions("userData", ["saveData"]),
    goToHome() {
      this.saveData({ returnedToShop: true });
      this.$router.push("/#tickets");
    },
    goToCheckout() {
      this.$gtm.push({
        event: 'goToCheckout',
        totalPrice: `${this.data.total_price.toLocaleString()} руб`
      })
      this.$router.push("/checkout");
    }
  }
};
</script>
