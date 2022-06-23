<template>
  <section class="faq">
    <div class="pattern-bg"></div>
    <div class="faq-banner">
      <img src="/FAQ.png" alt="" />
    </div>
    <div class="container">
      <h3 class="section-header">УЧАСТНИКИ СТРИМФЕСТА 2021</h3>
      <div class="section-subheader">
        <p>
          Дай пять, возьми автограф, задай вопрос, угости вкусняшкой, брось
          челлендж — приходи с друзьями!
        </p>
        <p>
          <b> Это участники Стримфеста 2021 — но скоро мы объявим новых. </b>
        </p>
        <p>
          Заглядывай сюда почаще! Жди сюрпризов! Хочешь участвовать?
          <nuxt-link class="link" to="/how-to">Узнай как!</nuxt-link>
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
    <div class="container-wide">
      <div class="activities-tabs__content">
        <p class="tab-description">
          Смотри, что покажу! Самые интересные места и события
          <b>Стримфеста 2021</b>, которые просто нельзя было пропустить.
          Демозоны, анонсы, шоу-матчи, технологии, весь фарш и вау-косплей —
          дальше только круче, расскажем, как придет время!
        </p>
        <div class="activities-grid">
          <masonry
            :cols="{ default: 2, 767: 1 }"
            :gutter="{ default: '60px', 1024: '30px' }"
          >
            <div v-for="activity in activities" :key="activity.id">
              <div
                ref="activities"
                class="activities-item"
                :style="{ 'border-color': activity.border_color }"
              >
                <div class="activities-item__img" v-if="activity.image">
                  <img :src="activity.image" alt="" loading="lazy" />
                </div>
                <div class="activities-item__content">
                  <div class="activities-item__body">
                    <div class="activities-item__title">
                      <img
                        class="activities-item__icon"
                        :src="activity.icon"
                        alt=""
                        loading="lazy"
                      />
                      <span>{{ activity.title }}</span>
                    </div>
                    <div
                      class="activities-item__descr"
                      v-html="activity.description"
                    ></div>
                  </div>
                  <div class="activities-item__footer">
                    <div class="activities-item__place-id">
                      <img
                        class="activities-item__place-icon"
                        src="/activity/place-id.svg"
                        alt=""
                        loading="lazy"
                      />
                      <span>{{ activity.place.id }}</span>
                    </div>
                    <div class="activities-item__info">
                      <div class="activities-item__place">
                        {{ activity.place.name }}
                      </div>
                      <div
                        v-if="![undefined, null, 4].includes(activity.day)"
                        class="activities-item__date"
                      >
                        {{ getDay(activity.day) }}, начало {{ activity.start }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="activities-item__corner" v-if="!activity.image">
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d)">
                      <path
                        d="M15.7722 11.7722L24.988 2.32C29.3715 -2.17586 37 0.927558 37 7.2067V26C37 29.866 33.866 33 30 33H11.2067C4.92756 33 1.82413 25.3715 6.32 20.988L15.7722 11.7722Z"
                        :fill="activity.border_color"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d"
                        x="0.193359"
                        y="0.192627"
                        width="40.8074"
                        height="40.8074"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </masonry>
        </div>
      </div>
    </div>
    <Subscribe />
  </section>
</template>

<script>
import Subscribe from '@/components/Subscribe';
export default {
  scrollToTop: true,
  async asyncData({$axios}) {
    const activities = (await $axios.get('/api/get_activities')).data.map(
        (activity) => {
          !activity.place &&
          (activity.place = {
            id: null,
            name: 'Весь фестиваль',
          });
          return activity;
        },
    );
    // const places = activities.map(({place})=>(
    //  place ? {
    //     id: place.id,
    //     name: place.name
    //   } : {
    //     id: null,
    //     name: "Весь фестиваль"
    //   }
    // ))
    return {activities};
  },
  name: 'Activities',
  data() {
    return {
      activeTable: 1,
      days: [1, 2],
      openStageList: false,
      activeStage: 1,
      activeDay: 1,
      activePlaceId: null,
    };
  },
  mounted() {
    if (this.$refs.activities?.length) {
      for (const activity of this.$refs.activities) {
        for (const link of activity.querySelectorAll('a')) {
          link.classList.add('link');
        }
      }
    }
  },
  methods: {
    getDay(day) {
      let dayStr = '';
      switch (day) {
        case 1:
          dayStr = '25 июня';
          break;
        case 2:
          dayStr = '26 июня';
          break;
        case 3:
          dayStr = '25 и 26 июня';
          break;
      }
      return dayStr;
    },
  },
};
</script>
