<template>
  <section class="cart">
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
        <div v-if="items_in_cart.tickets.length > 0">
          <div class="cart-row" v-for="item in items_in_cart.tickets">
            <div @click="delItem(item.id)" class="cart-row__delete">
              <img draggable="false" src="/trash_ico.svg" alt="" />
            </div>

            <div v-if="!item.streamer" class="cart-row__name">
              <img src="/oneday.png" alt="" />
              <p>
                {{
                  item.ticket.is_one_day
                    ? "Билет на один день"
                    : "Билет на два дня"
                }}
              </p>
            </div>
            <div v-else class="cart-row__name">
              <img src="/oneday.png" alt="" />
              <p>
                {{
                  item.ticket.is_one_day
                    ? `Билет на один день от ${item.streamer.name}`
                    : `Билет на два дня от ${item.streamer.name}`
                }}
              </p>
            </div>
            <div class="cart-row__price">
              <p>{{ item.ticket.price }} руб.</p>
            </div>
            <div class="cart-row__quantity">
              <svg @click="delItemQ(item.id)" width="20px" height="20px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(186, 200, 207)"
                  d="M10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.523 4.477,20.000 10.000,20.000 C15.523,20.000 20.000,15.523 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 ZM13.999,10.975 L5.999,10.975 C5.447,10.975 4.999,10.527 4.999,9.975 C4.999,9.423 5.447,8.975 5.999,8.975 L13.999,8.975 C14.552,8.975 14.999,9.423 14.999,9.975 C14.999,10.527 14.552,10.975 13.999,10.975 Z"
                />
              </svg>
              <p>{{ item.quantity }}</p>
              <svg @click="addItemQ(item.id)" width="20px" height="20px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(186, 200, 207)"
                  d="M10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.523 4.477,20.000 10.000,20.000 C15.523,20.000 20.000,15.523 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 ZM14.000,10.975 L11.000,10.975 L11.000,13.975 C11.000,14.527 10.553,14.975 10.000,14.975 C9.448,14.975 9.000,14.527 9.000,13.975 L9.000,10.975 L6.000,10.975 C5.448,10.975 5.000,10.527 5.000,9.975 C5.000,9.423 5.448,8.975 6.000,8.975 L9.000,8.975 L9.000,5.975 C9.000,5.423 9.448,4.975 10.000,4.975 C10.553,4.975 11.000,5.423 11.000,5.975 L11.000,8.975 L14.000,8.975 C14.553,8.975 15.000,9.423 15.000,9.975 C15.000,10.527 14.553,10.975 14.000,10.975 Z"
                />
              </svg>
            </div>
            <div class="cart-row__total">
              <p>{{ item.ticket.price * item.quantity }} руб.</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="cart-row ">Ваша корзина пока что пуста</p>
        </div>
      </div>
      <div class="separator"></div>
      <div class="cart-container">
        <div class="cart-button">
          <button
            :disabled="items_in_cart.tickets.length === 0"
            @click="$router.push('/checkout')"
          >
            перейти к оформлению
          </button>
          <div class="cart-button__total">
            <p>Общая стоимость:</p>
            <p>{{ items_in_cart.total_price }}р</p>
          </div>
        </div>

        <p>
          <b>Количество билетов ограничено</b>, и чем ближе к Стримфесту, тем
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  // auth: true,

  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {
    async addItemQ(id) {
      await this.$axios.post("/api/add_item_quantity", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id,
      });
      await this.$store.dispatch("cart/fetchCart");
    },
    async delItemQ(id) {
      await this.$axios.post("/api/delete_item_quantity", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id,
      });
      await this.$store.dispatch("cart/fetchCart");
    },
    async delItem(id) {
      await this.$axios.post("/api/delete_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id,
      });
      await this.$store.dispatch("cart/fetchCart");
    },
  },
  computed: {
    items_in_cart() {
      return this.$store.getters["cart/getCart"];
    },
  },
};
</script>
