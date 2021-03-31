<template>
  <div class="streamers-slider-wrap">
    <client-only>
      <swiper :options="streamersOptions" >
        <swiper-slide v-for="streamer in streamers" :key="streamer.id">
          <nuxt-link :to="`/${streamer.nickNameSlug}`">
            <div class="streamers-item">
              <img :src="streamer.photo" alt="" />
              <p class="streamers-item__nick">{{ streamer.nickName }}</p>
              <p class="streamers-item__fio">{{ streamer.name }}</p>
            </div>
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </client-only>
    <div class="streamers-pagination swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  props: ["streamers"],
  data() {
    return {
      streamersOptions: {
        spaceBetween: 20,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false
        },
        slidesPerColumn: 2,
        resizeObserver: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        pagination: false,

        breakpoints: {
          0: {
            slidesPerView: 2,
            slidesPerColumn: 2,
          },
          375: {
            slidesPerView: 2.2,
            slidesPerColumn: 2,
          },
          570: {
            slidesPerView: 4.3,
            slidesPerColumn: 2,
          },
          920: {
            slidesPerView: 5,
            slidesPerColumn: 2,
          }
        }
      }
    };
  },

};
</script>
