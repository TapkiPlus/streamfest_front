<template>
  <section class="faq">
    <div class="pattern-bg"></div>
    <div class="faq-banner">
      <img src="/FAQ.png" alt="" />
    </div>
    <div class="container">
      <template v-if="generalFaq.length">
        <p
          v-if="covidFaq.length || organizingFaq.length"
          class="section-header"
        >
          ОБЩИЕ ВОПРОСЫ ПРО ФЕСТИВАЛЬ
        </p>
        <div class="faq-items">
          <template v-for="item in generalFaq">
            <button
              :key="item.id"
              @click="toggleAccordion(item.id)"
              :class="{ 'faq-item-active': accordionIds.includes(item.id) }"
              class="faq-item"
            >
              <svg
                class="faq-icon"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3304 9.67198L16.4195 0.617977C16.2556 0.109311 15.6756 -0.0566894 15.3072 0.300644L12.6853 2.84598C11.7143 2.07398 8.12269 2.07398 7.15173 2.84598L4.52979 0.300644C4.1614 -0.0566894 3.58076 0.109311 3.41753 0.617977L0.506566 9.67198C-0.0889176 11.5246 0.672373 13.59 2.29173 14.4233C4.33753 15.476 6.92399 15.9673 9.91882 15.9673C12.913 15.9673 15.4995 15.476 17.5453 14.4233C19.1646 13.59 19.9259 11.5246 19.3304 9.67198Z"
                  fill="#0060CF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3304 9.67198L16.4195 0.617977C16.2556 0.109311 15.6756 -0.0566894 15.3072 0.300644L12.6853 2.84598C11.7143 2.07398 8.12269 2.07398 7.15173 2.84598L4.52979 0.300644C4.1614 -0.0566894 3.58076 0.109311 3.41753 0.617977L0.506566 9.67198C-0.0889176 11.5246 0.672373 13.59 2.29173 14.4233C4.33753 15.476 6.92399 15.9673 9.91882 15.9673C12.913 15.9673 15.4995 15.476 17.5453 14.4233C19.1646 13.59 19.9259 11.5246 19.3304 9.67198Z"
                  fill="#C4C4C4"
                />
              </svg>
              <div class="faq-question" v-html="item.question"></div>
              <svg
                class="faq-plus"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="14"
                  y="5"
                  width="2"
                  height="20"
                  rx="1"
                  fill="#BAC8CF"
                />
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
          <Support v-if="!covidFaq.length && !organizingFaq.length" />
        </div>
      </template>
      <template v-if="covidFaq.length">
        <p class="section-header">ПРО COVID-FREE И КОРОНАВИРУСНЫЕ ПРАВИЛА</p>
        <div class="faq-items">
          <template v-for="item in covidFaq">
            <button
              :key="item.id"
              @click="toggleAccordion(item.id)"
              :class="{ 'faq-item-active': accordionIds.includes(item.id) }"
              class="faq-item"
            >
              <svg
                class="faq-icon"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3304 9.67198L16.4195 0.617977C16.2556 0.109311 15.6756 -0.0566894 15.3072 0.300644L12.6853 2.84598C11.7143 2.07398 8.12269 2.07398 7.15173 2.84598L4.52979 0.300644C4.1614 -0.0566894 3.58076 0.109311 3.41753 0.617977L0.506566 9.67198C-0.0889176 11.5246 0.672373 13.59 2.29173 14.4233C4.33753 15.476 6.92399 15.9673 9.91882 15.9673C12.913 15.9673 15.4995 15.476 17.5453 14.4233C19.1646 13.59 19.9259 11.5246 19.3304 9.67198Z"
                  fill="#0060CF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3304 9.67198L16.4195 0.617977C16.2556 0.109311 15.6756 -0.0566894 15.3072 0.300644L12.6853 2.84598C11.7143 2.07398 8.12269 2.07398 7.15173 2.84598L4.52979 0.300644C4.1614 -0.0566894 3.58076 0.109311 3.41753 0.617977L0.506566 9.67198C-0.0889176 11.5246 0.672373 13.59 2.29173 14.4233C4.33753 15.476 6.92399 15.9673 9.91882 15.9673C12.913 15.9673 15.4995 15.476 17.5453 14.4233C19.1646 13.59 19.9259 11.5246 19.3304 9.67198Z"
                  fill="#C4C4C4"
                />
              </svg>
              <div class="faq-question" v-html="item.question"></div>
              <svg
                class="faq-plus"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="14"
                  y="5"
                  width="2"
                  height="20"
                  rx="1"
                  fill="#BAC8CF"
                />
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
          <Support v-if="!organizingFaq.length" />
        </div>
      </template>
      <template v-if="organizingFaq.length">
        <p class="section-header">ПРО ОРГАНИЗАЦИЮ АВТОГРАФ-СЕССИЙ</p>
        <div class="faq-items">
          <template v-for="item in organizingFaq">
            <button
              :key="item.id"
              @click="toggleAccordion(item.id)"
              :class="{ 'faq-item-active': accordionIds.includes(item.id) }"
              class="faq-item"
            >
              <svg
                class="faq-icon"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3304 9.67198L16.4195 0.617977C16.2556 0.109311 15.6756 -0.0566894 15.3072 0.300644L12.6853 2.84598C11.7143 2.07398 8.12269 2.07398 7.15173 2.84598L4.52979 0.300644C4.1614 -0.0566894 3.58076 0.109311 3.41753 0.617977L0.506566 9.67198C-0.0889176 11.5246 0.672373 13.59 2.29173 14.4233C4.33753 15.476 6.92399 15.9673 9.91882 15.9673C12.913 15.9673 15.4995 15.476 17.5453 14.4233C19.1646 13.59 19.9259 11.5246 19.3304 9.67198Z"
                  fill="#0060CF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3304 9.67198L16.4195 0.617977C16.2556 0.109311 15.6756 -0.0566894 15.3072 0.300644L12.6853 2.84598C11.7143 2.07398 8.12269 2.07398 7.15173 2.84598L4.52979 0.300644C4.1614 -0.0566894 3.58076 0.109311 3.41753 0.617977L0.506566 9.67198C-0.0889176 11.5246 0.672373 13.59 2.29173 14.4233C4.33753 15.476 6.92399 15.9673 9.91882 15.9673C12.913 15.9673 15.4995 15.476 17.5453 14.4233C19.1646 13.59 19.9259 11.5246 19.3304 9.67198Z"
                  fill="#C4C4C4"
                />
              </svg>
              <div class="faq-question" v-html="item.question"></div>
              <svg
                class="faq-plus"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="14"
                  y="5"
                  width="2"
                  height="20"
                  rx="1"
                  fill="#BAC8CF"
                />
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
          <Support />
        </div>
      </template>
    </div>
    <Subscribe />
  </section>
</template>

<script>
import Support from "@/components/Faq/Support";
import Subscribe from "@/components/Subscribe";

export default {
  async asyncData({ $axios }) {
    const faq = (await $axios.get("/api/get_faq_common")).data.sort(
      (a, b) => a.ordering_number - b.ordering_number
    );

    const generalFaq = faq.filter(item => item.category === 1);
    const covidFaq = faq.filter(item => item.category === 2);
    const organizingFaq = faq.filter(item => item.category === 3);

    return { generalFaq, covidFaq, organizingFaq };
  },
  components: {
    Support,
    Subscribe
  },
  scrollToTop: true,
  data() {
    return {
      accordionIds: []
    };
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
