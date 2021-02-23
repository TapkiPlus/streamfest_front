<template>
   <section class="faq">
        <div class="container">
            <div class="faq-banner">
                <img src="http://placehold.it/1000x290" alt="">
            </div>
            <div class="section-header">СТАТЬ УЧАСТНИКОМ</div>
            <div class="faq-items">
              <div v-for="how_to_item in how_to_items" :key="how_to_item.id">
                 <button class="faq-item">

                   <img :src="how_to_item.icon" alt="">
                    {{how_to_item.question}}
                </button>
                <div class="faq-item__inner" v-html="how_to_item.answer"></div>
              </div>


                <div class="faq-item-last">
                    <h3 class="faq-item">У меня остались вопросы!</h3>
                    <p>Прекрасно, задайте их личным сообщением в нашей <a href="">группе VK.</a></p>
                </div>


            </div>
            <div class="tickets-form">
                <p>Новости и плюшки Стримфеста</p>
                <form action="">
                    <input type="text" placeholder="Ваш Email">
                    <button type="submit">подписаться</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  scrollToTop: true,
  // auth: true,
  async asyncData({$axios}){
    const get_get_how_to = await $axios.get(`/api/get_how_to`)
    const how_to_items = get_get_how_to.data
    return {how_to_items}
  },
  data() {
    return {
    };
  },
  watch: {
  },
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
  methods: {
  }
}
</script>


