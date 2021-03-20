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
<!--    <div-->
<!--      class="streamers-button-next swiper-button-next"-->
<!--      slot="button-next"-->
<!--    ></div>-->
<!--    <div-->
<!--      class="streamers-button-prev swiper-button-prev"-->
<!--      slot="button-prev"-->
<!--    ></div>-->
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
          delay: 800000,
          disableOnInteraction: false
        },
        slidesPerColumn: 2,

        pagination: {
          el: ".streamers-pagination",
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          375: {
            slidesPerView: 2.2,
          },
          570: {
            slidesPerView: 4.3
          },
          920: {
            slidesPerView: 5
          }
        }
      }
    };
  }
};
</script>
