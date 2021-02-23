<template>
  <section class="faq">
    <div class="container">
      <div class="faq-banner">
        <img src="http://placehold.it/1000x290" alt="" />
      </div>
      <div class="section-header">СТАТЬ УЧАСТНИКОМ</div>
      <div class="faq-items">
        <div v-for="how_to_item in how_to_items" :key="how_to_item.id">
          <button class="faq-item">
            <svg width="13px" height="10px">
              <path
                fill-rule="evenodd"
                fill="rgb(186, 200, 207)"
                d="M12.606,6.019 L10.716,0.359 C10.610,0.041 10.233,-0.063 9.994,0.161 L8.291,1.752 C7.661,1.270 5.329,1.270 4.699,1.752 L2.996,0.161 C2.757,-0.063 2.380,0.041 2.274,0.359 L0.384,6.019 C-0.003,7.177 0.492,8.468 1.543,8.990 C2.871,9.648 4.551,9.955 6.495,9.955 C8.439,9.955 10.118,9.648 11.447,8.990 C12.498,8.468 12.993,7.177 12.606,6.019 Z"
              />
            </svg>
            {{ how_to_item.question }}
          </button>
          <div class="faq-item__inner" v-html="how_to_item.answer"></div>
        </div>

        <div class="faq-item-last">
          <h3 class="faq-item">У меня остались вопросы!</h3>
          <p>
            Прекрасно, задайте их личным сообщением в нашей
            <a href="">группе VK.</a>
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </section>
</template>

<script>
import Subscribe from "@/components/Subscribe";

export default {
  scrollToTop: true,
  // auth: true,
  components: {
    Subscribe,
  },
  async asyncData({ $axios }) {
    const get_get_how_to = await $axios.get(`/api/get_how_to`);
    const how_to_items = get_get_how_to.data;
    return { how_to_items };
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {
    let acc = document.getElementsByClassName("faq-item");
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("faq-item-active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  },
  methods: {},
};
</script>
