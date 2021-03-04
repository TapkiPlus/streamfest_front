<template>
  <section class="streamers">
    <div class="container">
      <h3 class="section-header">ВСТРЕТИМСЯ В РЕАЛЕ</h3>
      <p class="section-subheader">
        Дай пять, возьми автограф, задай вопрос, угости вкусняшкой, брось
        челлендж — приходи с друзьями!
      </p>
      <div class="separator star"></div>
      <div class="streamers-wrapper">
        <StreamerCard
          v-for="streamer in streamers"
          :key="streamer.id"
          :image="streamer.photo"
          :name="streamer.name"
          :name_slug="streamer.nickNameSlug"
          :nickname="streamer.nickName"
        />
      </div>
      <StreamersSwiper :streamers="streamers" />
      <div class="streamers-btn">
        <nuxt-link to="/how-to" class="btn btn-w-icon"
          >СТАТЬ УЧАСТНИКОМ</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import StreamerCard from "@/components/StreamerCard";
import StreamersSwiper from "@/components/StreamersSwiper";
export default {
  scrollToTop: true,
  // auth: true,
  components: {
    StreamerCard,
    StreamersSwiper
  },
  async asyncData({ $axios }) {
    const get_streamers = await $axios.get(
      `/api/get_streamers?at_home=not_show`
    );
    const streamers = get_streamers.data;
    return { streamers };
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
