<template>
  <section class="faq faq--how-to">
    <div class="pattern-bg"></div>
    <div class="faq-banner">
      <img src="/SU.png" alt="" />
    </div>
    <div class="container">
      <div class="section-header">КАК СТАТЬ УЧАСТНИКОМ СТРИМФЕСТА 2022</div>
      <div class="faq-items">
        <template v-for="item in faq">
          <button
            :key="item.id"
            @click="toggleAccordion(item.id)"
            :class="{ 'faq-item-active': accordionIds.includes(item.id) }"
            class="faq-item"
          >
            <img class="faq-icon" :src="item.icon" />
            <div class="faq-question" v-html="item.question"></div>
            <svg
              class="faq-plus"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="14" y="5" width="2" height="20" rx="1" fill="#BAC8CF" />
              <rect
                x="25"
                y="14"
                width="2"
                height="20"
                rx="1"
                transform="rotate(90 25 14)"
                fill="#BAC8CF"
              />
            </svg>
          </button>
          <div
            :key="item.id"
            :class="{ visible: accordionIds.includes(item.id) }"
            class="faq-item__inner"
            v-html="item.answer"
          ></div>
        </template>
        <div class="faq-item-last">
          <h3 class="faq-item">У меня остались вопросы!</h3>
          <p class="mobile-hidden">
            Прекрасно, задайте их личным сообщением в нашей
            <a
              href="https://vk.com/streamfest"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >группе VK.</a
            >
          </p>
          <a
            href="https://vk.com/streamfest"
            class="btn btn--vk desktop-hidden"
            target="_blank"
            rel="noopener noreferrer"
            >Задайте их в личку ><svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.6791 25.8387C35.5824 25.681 34.9838 24.4146 32.1036 21.8118C29.0884 19.0863 29.4934 19.5289 33.1252 14.8162C35.3371 11.9461 36.2214 10.1933 35.9446 9.44401C35.6814 8.72977 34.0545 8.91819 34.0545 8.91819L28.6451 8.94886C28.6451 8.94886 28.2446 8.89628 27.9453 9.06936C27.655 9.24025 27.4683 9.63462 27.4683 9.63462C27.4683 9.63462 26.611 11.8562 25.4679 13.7448C23.0579 17.7301 22.0926 17.9404 21.6988 17.6929C20.783 17.1166 21.0125 15.3749 21.0125 14.1392C21.0125 10.2766 21.6133 8.66623 19.8402 8.24995C19.2507 8.11192 18.8186 8.0199 17.3133 8.00457C15.3826 7.98485 13.7468 8.01114 12.8219 8.45152C12.2054 8.7451 11.7306 9.40019 12.0209 9.43744C12.3787 9.48345 13.1887 9.64996 13.6185 10.2196C14.1743 10.9536 14.154 12.6055 14.154 12.6055C14.154 12.6055 14.4736 17.1517 13.4092 17.717C12.6779 18.1048 11.6766 17.3138 9.5277 13.6966C8.42737 11.8453 7.59481 9.79675 7.59481 9.79675C7.59481 9.79675 7.43505 9.41553 7.14928 9.21177C6.80275 8.9642 6.31672 8.88532 6.31672 8.88532L1.17284 8.91599C1.17284 8.91599 0.401032 8.9379 0.117511 9.26435C-0.134508 9.55575 0.0972595 10.1561 0.0972595 10.1561C0.0972595 10.1561 4.12506 19.3295 8.68389 23.9545C12.8669 28.194 17.6148 27.9157 17.6148 27.9157H19.766C19.766 27.9157 20.4163 27.8456 20.747 27.4973C21.053 27.1774 21.0418 26.5771 21.0418 26.5771C21.0418 26.5771 20.999 23.7661 22.3401 23.352C23.661 22.9445 25.3576 26.0688 27.1555 27.2716C28.5146 28.1808 29.5474 27.9815 29.5474 27.9815L34.356 27.9157C34.356 27.9157 36.8717 27.7646 35.6791 25.8387Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <Subscribe />
  </section>
</template>

<script>
import Subscribe from "@/components/Subscribe";

export default {
  async asyncData({ $axios }) {
    const faq = (await $axios.get("/api/get_faq_participant")).data.sort(
      (a, b) => a.ordering_number - b.ordering_number
    );

    return { faq };
  },
  components: {
    Subscribe
  },
  scrollToTop: true,
  data() {
    return {
      accordionIds: []
    };
  },
  mounted() {
    this.accordionIds = this.faq
      .filter(item => item.expanded)
      .map(item => item.id);
  },
  methods: {
    toggleAccordion(id) {
      this.accordionIds = this.accordionIds.includes(id)
        ? this.accordionIds.filter(_id => _id != id)
        : [...this.accordionIds, id];
    }
  }
};
</script>
