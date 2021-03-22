<template>
  <section class="cart">
    <h4 class="cart__title">Корзина</h4>
    <div class="container">
      <div class="cart-logo ">
        <img src="/logo_b.png" alt="" />
      </div>
      <div class="cart-container ">
        <p class="cart-status success">Строка состояния на случай ошибки</p>
      </div>
      <div class="cart-header">
        <div class="cart-container cart-header__inner">
          <p>Товар</p>
          <p class="text-center">Цена</p>
          <p class="text-center">Количество</p>
          <p class="text-center">ИТОГО</p>
        </div>
      </div>
      <div class="cart-container">

        <div class="cart__full" v-if="items_in_cart.tickets.length > 0">
          <div class="cart__item">
            <div
              class="cart-row"
              v-for="item in items_in_cart.tickets"
              :key="item.id"
            >
              <div @click="delItem(item.id)" class="cart-row__delete">
                <img draggable="false" src="/delete.svg" alt="" />
              </div>
              <div class="cart-row__icon" v-if="!item.streamer">
                <img :src="item.ticket.is_one_day ? '/oneday.svg' : '/twoday.svg'" alt="" />
              </div>
              <div class="cart-row__icon" v-else>
                <img :src="item.ticket.is_one_day ? '/oneday-star.svg' : '/twoday-star.svg'" alt="" />
              </div>

              <div class="cart__body">

                <div class="cart-row__name" >
                  <p v-if="!item.streamer">
                    Билет на Стримфест&nbsp;2021 на {{ item.ticket.is_one_day ? "1 день" : "2 дня" }}
                  </p>
                  <p v-else>
                    Билет на Стримфест&nbsp;2021 на {{ item.ticket.is_one_day ? `1 день от ${item.streamer.name}` : `2 дня от ${item.streamer.name}` }}
                  </p>

                </div>
                <div class="cart-row__price">
                  <p>{{ item.ticket.price * item.quantity }}&nbsp;руб.</p>
                </div>
              </div>
              <div class="cart-row__quantity">
                <svg class="minus _disabled" @click="delItemQ(item.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="2" fill="white"/>
                  <rect x="5" y="11" width="14" height="2" rx="1" fill="#C4C4C4"/>
                  <rect x="5" y="11" width="14" height="2" rx="1" fill="#676767"/>
                </svg>
                <p>{{ item.quantity }}</p>
                <svg class="plus" @click="addItemQ(item.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="2" fill="white"/>
                  <rect x="5" y="11" width="14" height="2" rx="1" fill="#676767"/>
                  <rect x="13" y="5" width="14" height="2" rx="1" transform="rotate(90 13 5)" fill="#676767"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="cart__empty">
          <img src="/cart-big.svg" alt="">
          <p class="cart-row ">Ваша корзина пока что пуста</p>
          <a href="/#tickets" class="btn">Выбрать билет </a>
        </div>
      </div>


      <div class="cart-container ">
        <div class="cart-button" >
          <button
            :disabled="items_in_cart.tickets.length === 0"
            @click="$router.push('/checkout')"
          >
            Перейти к оформлению
          </button>
          <div class="cart-button__total">
            <p>Общая стоимость:</p>
            <p class="total">{{ items_in_cart.total_price }} ₽</p>
          </div>
        </div>
        <div class="separator separator--thin"></div>
        <p>
          <b>Количество билетов ограничено,</b> и чем ближе к Стримфесту, тем
          дороже они будут.<br /><br />
          <b>Билет — это QR-код</b>, который придет вам на email после оплаты.
          При входе на фестиваль билет считывается и гасится, а вы получаете
          взамен браслет посетителя.<br /><br />
          <b>Билеты не именные</b>: один человек может купить сразу несколько
          билетов, для себя и друзей.<br /><br />
          <b>Возрастные ограничения</b>: подростки 14-16 лет должны находиться
          на фестивале в постоянном сопровождении любого лица старше 18 лет;
          дети 8-13 лет на фестиваль не допускаются в соответствии с
          требованиями площадки; дети до 8 лет должны находиться на фестивале в
          постоянном с опровождении родственников или опекунов.<br /><br />
          <b>Не все участники и активности будут на фестивале оба дня</b>. Билет
          на два дня позволяет увидеть всех стримеров и подкастеров и
          поучаствовать во всех активностях. Билет на один день позволяет
          посетить фестиваль или 17, или 18 июля — на ваш выбор.<br /><br />
          <b>Баффы, полученные на фестивале</b>, действуют 8759 часов и множатся
          в зависимости от количества приведенных друзей ;)
        </p>
        <div class="cart-button cart-button--bottom" >
          <button
            :disabled="items_in_cart.tickets.length === 0"
            @click="$router.push('/checkout')"
          >
            Перейти к оформлению
          </button>

        </div>
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
      isCartPage: true,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    async addItemQ(id) {
      await this.$axios.post("/api/add_item_quantity", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id
      });
      await this.$store.dispatch("cart/fetchCart");
    },
    async delItemQ(id) {
      await this.$axios.post("/api/delete_item_quantity", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id
      });
      await this.$store.dispatch("cart/fetchCart");
    },
    async delItem(id) {
      await this.$axios.post("/api/delete_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id
      });
      await this.$store.dispatch("cart/fetchCart");
    }
  },
  computed: {
    items_in_cart() {
      return this.$store.getters["cart/getCart"];
    }
  }
};
</script>
