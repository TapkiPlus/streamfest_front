<template>
  <div class="subscribe" id="subscribe">
    <p>Новости и плюшки Стримфеста</p>
    <form @submit="subscribe">
      <input v-model="email" type="text" placeholder="Ваш email" />
      <button type="submit" class="btn btn--blue"><span class="split">Подписаться</span></button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    notify(title, message, type) {
      this.$notify({
        title,
        message,
        type
      });
    },
    async subscribe(e) {
      e.preventDefault();
      if (this.email.trim())
        try {
          await this.$axios.post("/api/subscribe_email", {
            email: this.email
          });
          this.notify("Успешно", "Вы подписаны на рассылку!", "success");
        } catch (e) {
          this.notify("Ошибка", "Введенный email не валидный", "error");
        }
      else
        this.notify(
          "Ошибка",
          "Поле ввода email не должно быть пустым",
          "error"
        );
    }
  }
};
</script>
