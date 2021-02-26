<template>
  <div class="streamers-slider-wrap">
    <client-only>
      <swiper :options="streamersOptions">
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
    <div
      class="streamers-button-next swiper-button-next"
      slot="button-next"
    ></div>
    <div
      class="streamers-button-prev swiper-button-prev"
      slot="button-prev"
    ></div>
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
        loop: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".streamers-button-next",
          prevEl: ".streamers-button-prev"
        },
        pagination: {
          el: ".streamers-pagination",
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          570: {
            slidesPerView: 2
          },
          920: {
            slidesPerView: 3
          }
        }
      }
    };
  }
};
</script>
