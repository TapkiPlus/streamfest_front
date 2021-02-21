<template>
  <section class="streamers" >

    <div class="container">
      <h3 class="section-header">ВСТРЕТИМСЯ В РЕАЛЕ</h3>
      <p class="section-subheader">Дай пять, возьми автограф, задай вопрос, угости вкусняшкой,
        брось челлендж — приходи с друзьями!</p>
      <div class="separator star"></div>
      <div class="streamers-wrapper">
       <StreamerCard v-for="streamer in streamers" :key="streamer.id"
                              :image="streamer.photo"
                              :name="streamer.name"
                              :name_slug="streamer.nickNameSlug"
                              :nickname="streamer.nickName" />
      </div>
      <div class="streamers-btn">
        <a href="#" class="btn btn-w-icon">
          СТАТЬ УЧАСТНИКОМ
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  // auth: true,
  async asyncData({$axios}){
    const get_streamers = await $axios.get(`/api/get_streamers?at_home=not_show`)
    const streamers = get_streamers.data
    return {streamers}
  },
  data() {
    return {
    };
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>


