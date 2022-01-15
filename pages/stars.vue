<template>
  <section class="streamers">
    <div class="container">
      <h3 class="section-header">УЧАСТНИКИ СТРИМФЕСТА 2021</h3>
      <div class="section-subheader">
        <p>
          Дай пять, возьми автограф, задай вопрос, угости вкусняшкой, брось
          челлендж — приходи с друзьями!
        </p>
        <p>
          <b>
            На этой странице представлены все участники прошлого праздника
            стрим-культуры.
          </b>
        </p>
        <p>
          Заглядывай сюда почаще, вскоре мы начнем объявлять участников
          Стримфеста 2022. Жди сюрпризов! Хочешь участвовать?
          <nuxt-link class="link" to="/faq">Узнай как!</nuxt-link>
        </p>
      </div>
    </div>
    <div class="separator star">
      <svg
        class="faq-icon"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip1)">
          <path
            d="M8.54894 0.927052C8.8483 0.0057416 10.1517 0.00573945 10.4511 0.92705L11.6329 4.56434C11.7668 4.97636 12.1507 5.25532 12.5839 5.25532H16.4084C17.3771 5.25532 17.7799 6.49494 16.9962 7.06434L13.9021 9.31231C13.5516 9.56695 13.405 10.0183 13.5389 10.4303L14.7207 14.0676C15.02 14.9889 13.9656 15.7551 13.1818 15.1857L10.0878 12.9377C9.7373 12.6831 9.2627 12.6831 8.91222 12.9377L5.81815 15.1857C5.03444 15.7551 3.97996 14.9889 4.27931 14.0676L5.46114 10.4303C5.59501 10.0183 5.44835 9.56695 5.09787 9.31231L2.00381 7.06434C1.22009 6.49494 1.62287 5.25532 2.59159 5.25532H6.41606C6.84929 5.25532 7.23324 4.97636 7.36712 4.56434L8.54894 0.927052Z"
            fill="#0D6DD8"
          />
        </g>
        <defs>
          <clipPath id="clip1">
            <rect width="20" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="container">
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
        <img src="/active.svg" alt="" class="btn--icon" loading="lazy" />
        <a
          href="/how-to"
          class="btn btn-w-icon btn--blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          СТАТЬ УЧАСТНИКОМ
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import StreamerCard from "@/components/StreamerCard";
import StreamersSwiper from "@/components/StreamersSwiper";
export default {
  scrollToTop: true,
  components: {
    StreamerCard,
    StreamersSwiper,
  },
  data() {
    return {
      streamers: [],
    };
  },
  async mounted() {
    this.streamers = (
      await this.$axios.get(`/api/get_streamers?at_home=not_show`)
    ).data;
  },
};
</script>
