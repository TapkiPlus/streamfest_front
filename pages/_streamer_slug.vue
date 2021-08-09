<template>
  <section class="streamer">
    <div class="pattern-bg"></div>
    <div class="container ">
      <div class="streamer-top">
        <div
          class="streamer-top__avatar"
          :style="`background-image: url(${streamer.photo})`"
        ></div>
        <div
          class="streamer-top__big"
          :style="`background-image: url(${streamer.pageHeader})`"
        ></div>
      </div>
      <div class="streamer-container">
        <div class="streamer-info">
          <div class="streamer-info__name">
            <p>{{ streamer.nickName }}</p>
            <p>{{ streamer.name }}</p>
          </div>
          <div class="streamer-info__links">
            <a
              :href="
                social_link.link.startsWith('http')
                  ? social_link.link
                  : `https://${social_link.link}`
              "
              target="_blank"
              rel="noopener noreferrer"
              v-for="social_link in streamer.links"
              :key="social_link.id"
            >
              <img
                class="streamer-info__icon"
                :src="social_link.icon.icon"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="streamer-text">
          <div class="streamer-text__block" v-html="streamer.about"></div>
          <div class="streamer-text__block" v-html="streamer.streaming"></div>
        </div>
        <div v-if="streamer.sells" class="streamer-bottom">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $axios, params }) {
    try {
      const get_streamer = await $axios.get(
        `/api/get_streamer?name_slug=${params.streamer_slug}`
      );
      const streamer = get_streamer.data;
      const get_tickets = await $axios.get(`/api/get_ticket_types`);
      const tickets = get_tickets.data;
      return { streamer, tickets };
    } catch (error) {
      throw { statusCode: 404, message: "Streamer not found" };
    }
  },
  methods: {
    async addItem(t_id, s_id) {
      await this.$store.dispatch("cart/addItem", {
        t_id,
        s_id
      });
      const { $router } = this;
      this.$notify({
        title: "Успешно",
        message: "Билет добавлен в корзину",
        type: "success",
        customClass: "c-pointer",
        onClick() {
          $router.push("cart");
        }
      });
    }
  }
};
</script>
