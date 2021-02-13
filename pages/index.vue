<template>
<div class="">
  <section class="offer">
        <video  class="offer-video" loop="loop" autoplay="" muted="">
            <source src="https://streamfest.ru/wp-content/uploads/2020/03/Стримфест-2019.-20-секунд-на-сайт_new.mp4" type="video/mp4">
        </video>
        <div class="container offer-wrapper">
            <h3 class="offer__title">СТРИМФЕСТ 2021</h3>
            <p class="offer__subtitle">Главный фестиваль весны!</p>
            <p class="offer__subtitle subtitle-last">17–18 апреля<br>Москва, Сколково</p>
            <a class="offer__button" href="#" v-scroll-to="'#tickets'">купить билет</a>
            <p class="offer__22px">до начала</p>
            <p class="offer__36px">30 часов</p>



        </div>
    </section>
    <section class="video-block">
        <div class="video-block__online">
            <p>Стрим онлайн</p>
        </div>
        <div class="container">
            <h3 class="section-header mb-20">ВСЕ ЗВЁЗДЫ И ЖАНРЫ СТРИМИНГА</h3>
            <p class="section-subheader">Стримфест — это крупнейший фестиваль в СНГ фестиваль стрим-культуры.
                Здесь известные стримеры и подкастеры встречаются со своими зрителями. Балдёж-кутёж,
                живое общение, море развлечений, мастер-классы — без сомнения, лучшие выходные года!</p>
            <video class="video-video" controls >

                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Your browser does not support HTML video.
            </video>
            <div class="video-wrapper">
                <div class="video-item">
                    <img src="/cats/img_1.png" alt="">
                    <p class="video-item__title">Встречи со звездами</p>
                    <p>Топы всех платформ: Twitch.tv, YouTube, TikTok, WASD, Goodgame, VK и OK</p>
                </div>
                <div class="video-item">
                    <img src="/cats/img_4.png" alt="">
                    <p class="video-item__title">Игровые зоны и конкурсы</p>
                    <p>Развлечения по полной: видеоигры, роботы, танцы, фотозоны и призы</p>
                </div>
                <div class="video-item">
                    <img src="/cats/img_2.png" alt="">
                    <p class="video-item__title">Турниры и шоу-матчи</p>
                    <p>MOBA, шутеры и батл рояли — участвуй сам и смотри, как жарят киберкотлеты!</p>
                </div>
                <div class="video-item">
                    <img src="/cats/img_5.png" alt="">
                    <p class="video-item__title">Настолки и застолья</p>
                    <p>Тащи друзей в партию или в кафешки, там всё вкусно и по карману</p>
                </div>
                <div class="video-item">
                    <img src="/cats/img_3.png" alt="">
                    <p class="video-item__title">Дефиле косплееров</p>
                    <p>Самый демократичный конкурс фанатского костюма — портал открывается!</p>
                </div>
                <div class="video-item">
                    <img src="/cats/img_6.png" alt="">
                    <p class="video-item__title">Лекции и мастер-классы</p>
                    <p>Два дня интенсива: прокачаем скиллы, научим зарабатывать на стримах.</p>
                </div>
            </div>
            <div class="video-buttons">
                <a class="btn" href="#">РАСПИСАНИЕ</a>
                <a class="btn btn-w-icon" href="#">И ДРУГИЕ АКТИВНОСТИ</a>
                <a class="btn" href="#">КАРТА ФЕСТИВАЛЯ</a>
            </div>
        </div>
    </section>
    <div class="separator star"></div>
    <section class="streamers">

        <div class="container">
            <h3 class="section-header">ОЧЕНЬ ПРОСТО ПОВСТРЕЧАТЬ</h3>
            <div class="streamers-wrapper">
                <StreamerCard v-for="streamer in streamers" :key="streamer.id"
                              :image="streamer.photo"
                              :name="streamer.name"
                              :name_slug="streamer.nickNameSlug"
                              :nickname="streamer.nickName" />
            </div>
            <div class="streamers-btn">
              <nuxt-link class="btn btn-w-icon w-img" to="/streamers">КТО ТОЛЬКО НЕ ПРИДЕТ
                    <img  src="/btn-img.png" alt=""></nuxt-link>

            </div>
        </div>
    </section>
    <section id="tickets" class="tickets">
        <h3  class="section-header">ЦЕНЫ ВЫРАСТУТ — БЕРИ БИЛЕТ СЕЙЧАС!</h3>
        <div  class="tickets-wrapper">
            <div class="tickets-item" v-for="ticket in tickets" :key="ticket.id">
                <div class="tickets-item__wrapper">
                    <p v-if="ticket.is_one_day" class="tickets-item__days">Билет на один из дней<br>17 или 18 апреля</p>
                    <p v-else class="tickets-item__days">Билет на оба дня<br>17 и 18 апреля</p>
                    <ul v-if="ticket.is_one_day" class="tickets-item__list">
                        <li class="tickets-item__list--item checked">Хайп, веселье, конкурсы</li>
                        <li class="tickets-item__list--item checked">Все стенды и развлечения</li>
                        <li class="tickets-item__list--item ">Все стримеры и подкастеры</li>
                        <li class="tickets-item__list--item ">Все лекции и мастер-классы</li>
                        <li class="tickets-item__list--item ">Два дня праздника</li>
                    </ul>
                    <ul v-else class="tickets-item__list">
                        <li class="tickets-item__list--item checked">Хайп, веселье, конкурсы</li>
                        <li class="tickets-item__list--item checked">Все стенды и развлечения</li>
                        <li class="tickets-item__list--item checked">Все стримеры и подкастеры</li>
                        <li class="tickets-item__list--item checked">Все лекции и мастер-классы</li>
                        <li class="tickets-item__list--item checked">Два дня праздника</li>
                    </ul>
                </div>
                <div class="tickets-item__bottom">
                    <p class="tickets-item__price">{{ticket.price}} ₽</p>
                    <a v-if="ticket.is_one_day" href="#" @click.prevent="addItem(ticket.id)" class="tickets-item__button">КУПИТЬ БИЛЕТ НА 1 ДЕНЬ</a>
                    <a v-else href="#" @click.prevent="addItem(ticket.id)" class="tickets-item__button">КУПИТЬ БИЛЕТ  НА 2 ДНЯ</a>
                </div>
            </div>
        </div>
        <div class="tickets-form">
            <p>Новости и плюшки Стримфеста</p>
            <form action="">
                <input type="text" placeholder="Ваш Email">
                <button type="submit">подписаться</button>
            </form>
        </div>
    </section>
    <section class="how-it-was">
        <div class="container">
            <h3 class="section-header">КАК ЭТО БЫЛО В 2019</h3>
            <p class="section-subheader">Два дня в Сколково, 170 топовых стримеров, 7000 посетителей<br> и больше 2 млн зрителей онлайн — это было легендарно!</p>
            <video class="video-video" controls >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Your browser does not support HTML video.
            </video>

            <div class="separator gamepad"></div>
            <div class="how-it-was-photos">
                <div class="how-it-was-photo">
                  <el-image src="/home_gall/1_s.png" lazy></el-image>

                </div>
                <div class="how-it-was-photo">
                    <el-image src="/home_gall/2_s.png" lazy></el-image>
                </div>
                <div class="how-it-was-photo">
                     <el-image src="/home_gall/3_s.png" lazy></el-image>
                </div>
                <div class="how-it-was-photo">
                     <el-image src="/home_gall/4_s.png" lazy></el-image>
                </div>
                <div class="how-it-was-photo">
                    <el-image src="/home_gall/5_s.png" lazy></el-image>
                </div>
                <div class="how-it-was-photo">
                   <el-image src="/home_gall/6_s.png" lazy></el-image>
                </div>
            </div>
            <div class="streamers-btn">
                <a href="#" class="btn btn-w-icon">
                    больше фото
                </a>
            </div>
        </div>

    </section>
    <section class="feedbacks">
        <div class="container">
          <client-only>
        <swiper class="slider-streams__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide >
             <div class="feedback-item">
                                <div class="feedback-item__inner">
                                    <p class="feedback-item__text">“Стримфест — это прекрасная возможность
                                        познакомиться с культурой стриминга,
                                        популярными кастерами и научиться новому.
                                        Я рад, что мы можем делиться опытом и
                                        развиваться.”</p>
                                    <p class="feedback-item__from">Денис Welovegames Коробков,</p>
                                    <p class="feedback-item__who">стример</p>
                                </div>
                                <div class="feedback-item__image">
                                    <img src="http://placehold.it/170" alt="">
                                </div>

                            </div>
          </swiper-slide>
          <swiper-slide >
             <div class="feedback-item">
                                <div class="feedback-item__inner">
                                    <p class="feedback-item__text">“Стримфест — это прекрасная возможность
                                        познакомиться с культурой стриминга,
                                        популярными кастерами и научиться новому.
                                        Я рад, что мы можем делиться опытом и
                                        развиваться.”</p>
                                    <p class="feedback-item__from">Денис Welovegames Коробков,</p>
                                    <p class="feedback-item__who">стример</p>
                                </div>
                                <div class="feedback-item__image">
                                    <img src="http://placehold.it/170" alt="">
                                </div>

                            </div>
          </swiper-slide>
          <swiper-slide >
             <div class="feedback-item">
                                <div class="feedback-item__inner">
                                    <p class="feedback-item__text">“Стримфест — это прекрасная возможность
                                        познакомиться с культурой стриминга,
                                        популярными кастерами и научиться новому.
                                        Я рад, что мы можем делиться опытом и
                                        развиваться.”</p>
                                    <p class="feedback-item__from">Денис Welovegames Коробков,</p>
                                    <p class="feedback-item__who">стример</p>
                                </div>
                                <div class="feedback-item__image">
                                    <img src="http://placehold.it/170" alt="">
                                </div>

                            </div>
          </swiper-slide>
        </swiper>

      </client-only>


        </div>
    </section>
    <section class="awards">
        <div class="container">
            <h3 class="section-header">STREAMFEST AWARDS</h3>
            <p class="section-subheader">Яркое эфирное шоу, где популярные стримеры, эксперты рынка<br>
                и журналисты развлекательных медиа выбрали лучших из лучших в 13 номинациях. <span>Вот как это было.</span></p>
            <div class="awards-img">
                <el-image src="/awards.png" lazy></el-image>
            </div>

        </div>
    </section>
    <div class="separator crown"></div>
    <section class="partners">
        <div class="container">
            <h3 class="section-header">ГЕНЕРАЛЬНЫЙ ПАРТНЕР</h3>
            <div class="partners-img general">
                <img src="http://placehold.it/400x200" alt="">
            </div>
            <h3 class="section-header">СТРАТЕГИЧЕСКИЕ ПАРТНЕРЫ</h3>
            <div class="partners-img strategy">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
            </div>
            <h3 class="section-header">ОФИЦИАЛЬНЫЕ ПАРТНЕРЫ</h3>
            <div class="partners-img official">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
            </div>
            <h3 class="section-header">ПАРТНЕРЫ ТЕМАТИЧЕСКИХ ЗОН</h3>
            <div class="partners-img tematic">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">

            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">

            </div>
            <h3 class="section-header">ИНФОРМАЦИОННАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic information">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
                <img src="http://placehold.it/400x200" alt="">
            </div>
            <div class="partners-btn">
                <a href="" class="btn red">ХОЧУ СТАТЬ ПАРТНЕРОМ</a>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import StreamerCard from '@/components/StreamerCard'
export default {
  // async fetch({store}){
  //   await store.dispatch('cart/fetchCart')
  // },
  components:{
    StreamerCard
  },
  async asyncData({$axios}){
    const get_streamers = await $axios.get(`/api/get_streamers?at_home=show`)
    const get_tickets = await $axios.get(`/api/get_tickets`)
    const streamers = get_streamers.data
    const tickets = get_tickets.data
    return {streamers,tickets}
  },
  data() {
    return {
        swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        //centeredSlides: true,

        // breakpoints: {
        //   // when window width is >= 320px
        //   320: {
        //     centeredSlides: true,
        //     slidesPerView: 1,
        //     spaceBetween: 20
        //   },
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 1,
        //     spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 5,
        //     spaceBetween: 40
        //   }
        // }
      },
    }
  },
  mounted() {

  },
  methods: {
    notify(title,message,type){
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
   async addItem(id){
     await this.$axios.post('/api/add_item',{
       session_id:this.$auth.$storage.getCookie('session_id'),
       item_id:id,
       streamer_id:0
     })
     this.notify('Успешно','Билет добавлен в корзину', 'success')
     await this.$store.dispatch('cart/fetchCart')
   }


  }
}
</script>
