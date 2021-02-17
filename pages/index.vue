<template>
  <div class="">
    <section class="offer">
      <video class="offer-video" loop="loop" autoplay="" muted="">
        <source
          src="https://streamfest.ru/wp-content/uploads/2020/03/Стримфест-2019.-20-секунд-на-сайт_new.mp4"
          type="video/mp4"
        />
      </video>
      <div class="container offer-wrapper">
        <h3 class="offer__title">СТРИМФЕСТ 2021</h3>
        <p class="offer__subtitle">Главный фестиваль весны!</p>
        <p class="offer__subtitle subtitle-last">
          17–18 апреля<br />Москва, Сколково
        </p>
        <p class="offer__22px">до начала</p>
        <p class="offer__36px">{{ currentTime }}</p>
      </div>
    </section>
    <section class="video-block">
      <div class="container">
        <h3 class="section-header mb-20">ВСЕ ЗВЁЗДЫ И ЖАНРЫ СТРИМИНГА</h3>
        <p class="section-subheader">
          Стримфест — это крупнейший фестиваль в СНГ фестиваль стрим-культуры.
          Здесь известные стримеры и подкастеры встречаются со своими зрителями.
          Балдёж-кутёж, живое общение, море развлечений, мастер-классы — без
          сомнения, лучшие выходные года!
        </p>
        <video class="video-video" controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
        <div class="video-wrapper">
          <div class="video-item">
            <img src="/cats/img_1.png" alt="" />
            <p class="video-item__title">Встречи со звездами</p>
            <p>
              Топы всех платформ: Twitch.tv, YouTube, TikTok, WASD, Goodgame, VK
              и OK
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/img_4.png" alt="" />
            <p class="video-item__title">Игровые зоны и конкурсы</p>
            <p>
              Развлечения по полной: видеоигры, роботы, танцы, фотозоны и призы
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/img_2.png" alt="" />
            <p class="video-item__title">Турниры и шоу-матчи</p>
            <p>
              MOBA, шутеры и батл рояли — участвуй сам и смотри, как жарят
              киберкотлеты!
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/img_5.png" alt="" />
            <p class="video-item__title">Настолки и застолья</p>
            <p>
              Тащи друзей в партию или в кафешки, там всё вкусно и по карману
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/img_3.png" alt="" />
            <p class="video-item__title">Дефиле косплееров</p>
            <p>
              Самый демократичный конкурс фанатского костюма — портал
              открывается!
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/img_6.png" alt="" />
            <p class="video-item__title">Лекции и мастер-классы</p>
            <p>
              Два дня интенсива: прокачаем скиллы, научим зарабатывать на
              стримах.
            </p>
          </div>
        </div>
        <div class="video-buttons">
          <a class="btn-disable btn">РАСПИСАНИЕ</a>
          <a class="btn-disable btn">И ДРУГИЕ АКТИВНОСТИ</a>
          <a class="btn-disable btn">КАРТА ФЕСТИВАЛЯ</a>
        </div>
      </div>
    </section>
    <div class="separator star"></div>
    <section class="streamers">
      <div class="container">
        <h3 class="section-header">ОЧЕНЬ ПРОСТО ПОВСТРЕЧАТЬ</h3>
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
        <div class="streamers-btn">
          <nuxt-link class="btn btn-w-icon w-img" to="/streamers"
            >КТО ТОЛЬКО НЕ ПРИДЕТ <img src="/btn-img.png" alt=""
          /></nuxt-link>
        </div>
      </div>
    </section>
    <section id="tickets" class="tickets">
      <h3 class="section-header">ЦЕНЫ ВЫРАСТУТ — БЕРИ БИЛЕТ СЕЙЧАС!</h3>
      <div class="tickets-wrapper">
        <div class="tickets-item" v-for="ticket in tickets" :key="ticket.id">
          <div class="tickets-item__wrapper">
            <p v-if="ticket.is_one_day" class="tickets-item__days">
              Билет на один из дней<br />17 или 18 апреля
            </p>
            <p v-else class="tickets-item__days">
              Билет на оба дня<br />17 и 18 апреля
            </p>
            <ul v-if="ticket.is_one_day" class="tickets-item__list">
              <li class="tickets-item__list--item checked">
                Хайп, веселье, конкурсы
              </li>
              <li class="tickets-item__list--item checked">
                Все стенды и развлечения
              </li>
              <li class="tickets-item__list--item ">
                Все стримеры и подкастеры
              </li>
              <li class="tickets-item__list--item ">
                Все лекции и мастер-классы
              </li>
              <li class="tickets-item__list--item ">Два дня праздника</li>
            </ul>
            <ul v-else class="tickets-item__list">
              <li class="tickets-item__list--item checked">
                Хайп, веселье, конкурсы
              </li>
              <li class="tickets-item__list--item checked">
                Все стенды и развлечения
              </li>
              <li class="tickets-item__list--item checked">
                Все стримеры и подкастеры
              </li>
              <li class="tickets-item__list--item checked">
                Все лекции и мастер-классы
              </li>
              <li class="tickets-item__list--item checked">
                Два дня праздника
              </li>
            </ul>
          </div>
          <div class="tickets-item__bottom">
            <p class="tickets-item__price">{{ ticket.price }} ₽</p>
            <a v-if="ticket.is_one_day" class="tickets-item__button"
              >СКОРО - БИЛЕТ НА 1 ДЕНЬ</a
            >
            <a v-else class="tickets-item__button">СКОРО - БИЛЕТ НА 2 ДНЯ</a>
          </div>
        </div>
      </div>
      <div class="tickets-form">
        <p>Новости и плюшки Стримфеста</p>
        <form @submit="subscribe" action="">
          <input v-model="subscribeEmail" type="text" placeholder="Ваш Email" />
          <button type="submit">подписаться</button>
        </form>
      </div>
    </section>
    <section class="how-it-was" id="how-it-was">
      <div class="container">
        <h3 class="section-header">КАК ЭТО БЫЛО В 2019</h3>
        <p class="section-subheader">
          Два дня в Сколково, 170 топовых стримеров, 7000 посетителей<br />
          и больше 2 млн зрителей онлайн — это было легендарно!
        </p>
        <video class="video-video" controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>

        <div class="separator gamepad"></div>
        <div class="how-it-was-photos">
          <client-only>
            <CoolLightBox
              :items="lightbox.images"
              :index="lightbox.index"
              @close="lightbox.index = null"
            >
            </CoolLightBox>
          </client-only>
          <el-image
            class="how-it-was-photo"
            v-for="(image, index) in lightbox.images"
            :key="index"
            @click="lightbox.index = index"
            :src="image"
            lazy
          ></el-image>
        </div>
        <div class="streamers-btn">
          <a class="btn btn-w-icon btn-disable">
            больше фото
          </a>
        </div>
      </div>
    </section>
    <section class="feedbacks">
      <div class="container">
        <client-only>
          <swiper class="slider-streams__wrapper" :options="swiperOption">
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-pagination" slot="pagination"></div>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Стримфест — это прекрасная возможность познакомиться с
                    культурой стриминга, популярными кастерами и научиться
                    новому. Я рад, что мы можем делиться опытом и развиваться.”
                  </p>
                  <p class="feedback-item__from">Денис Welovegames Коробков</p>
                  <p class="feedback-item__who">Стример</p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/1_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Это невероятно круто — вживую видеть свое комьюнити, такие
                    встречи всегда делают вас ближе. Стримфест — отличный повод
                    встретится со своей аудиторией из разных уголков планеты.”
                  </p>
                  <p class="feedback-item__from">Вика Картер</p>
                  <p class="feedback-item__who">Стример и видеоблогер</p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/2_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Подкастинг, в плане фидбека, это как подводная лодка.
                    Плывешь по приборам, ничего не видишь. По этому возможность
                    встретится с подписчиками, записать подкаст у них на глазах
                    это потрясающе.”
                  </p>
                  <p class="feedback-item__from">Павел Пивоваров</p>
                  <p class="feedback-item__who">
                    Соведущий подкаста «Не занесли»
                  </p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/3_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Я вообще боюсь большого скопления людей, но в этот раз я не
                    чувствовала дискомфорта. Мы были на таком мероприятии в
                    первый раз, но нам безумно понравилось.”
                  </p>
                  <p class="feedback-item__from">Людмила Морозова</p>
                  <p class="feedback-item__who">
                    Посетитель
                  </p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/4_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Невероятно эмоциональное событие, которое с нетерпением
                    ждешь каждый год. Беспрерывный поток совместного творчества,
                    который дает тебе уникальный буст. Это нужно пережить.”
                  </p>
                  <p class="feedback-item__from">Дмитрий dayzru Нардов</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/5_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Посетитель Стримфеста, начинающий стример Лекторий
                    несомненно интересная задумка. У стримеров есть возможность
                    доносить свои знания не только с виртуальной трибуны, но и с
                    реальной. Я остался доволен, что тут говорить :-)”
                  </p>
                  <p class="feedback-item__from">Евгений Мелёхин</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/6_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Фестиваль очень помог в развитии канала, и новые знакомства
                    приобрести. К тому же еще и партнерку одобрили, и все
                    благодаря ВАААМ 🙂”
                  </p>
                  <p class="feedback-item__from">Лилия Lily_Mint Аюпова</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/7_s.jpg"></el-image>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    “Приходя на Стримфест, понимаешь, что хейтеров на самом деле
                    не существует. В жизни все зрители доброжелательные. Просят
                    тебя расписаться, сфоткаться с ними.”
                  </p>
                  <p class="feedback-item__from">Алексей Stery_RJV Рыженков</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <el-image src="/reviews/8_s.jpg"></el-image>
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
        <p class="section-subheader">
          Яркое эфирное шоу, где популярные стримеры, эксперты рынка<br />
          и журналисты развлекательных медиа выбрали лучших из лучших в 13
          номинациях.
          <a href="https://streamscharts.com/streamfestawards2020"
            >Вот как это было.</a
          >
        </p>
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
          <el-image src="/partners/lisetskiy.png" lazy></el-image>
        </div>
        <h3 class="section-header">СТРАТЕГИЧЕСКИЕ ПАРТНЕРЫ</h3>
        <div class="partners-img strategy">
          <el-image src="/partners/lg.png" lazy></el-image>
          <el-image src="/partners/wasd.png" lazy></el-image>
          <el-image src="/partners/asus.png" lazy></el-image>
        </div>
        <h3 class="section-header">ОФИЦИАЛЬНЫЕ ПАРТНЕРЫ</h3>
        <div class="partners-img official">
          <el-image src="/partners/logitech.png" lazy></el-image>
          <el-image src="/partners/red-square.png" lazy></el-image>
          <el-image src="/partners/amd.png" lazy></el-image>
          <el-image src="/partners/vk.jpg" lazy></el-image>
          <el-image src="/partners/qiwi.png" lazy></el-image>
          <el-image src="/partners/good-game.png" lazy></el-image>
          <el-image src="/partners/cyberbuild.png" lazy></el-image>
          <el-image src="/partners/red-bull.png" lazy></el-image>
          <el-image src="/partners/t-force.png" lazy></el-image>
        </div>
        <h3 class="section-header">ПАРТНЕРЫ ТЕМАТИЧЕСКИХ ЗОН</h3>
        <div class="partners-img tematic">
          <el-image src="/partners/restream.png" lazy></el-image>
          <el-image src="/partners/mega-drive.png" lazy></el-image>
          <el-image src="/partners/ss.png" lazy></el-image>
          <el-image src="/partners/gift-life.jpg" lazy></el-image>
          <el-image src="/partners/aver-media.png" lazy></el-image>
        </div>
        <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
        <div class="partners-img tematic">
          <el-image src="/partners/warp.jpg" lazy></el-image>
          <el-image src="/partners/razer.png" lazy></el-image>
          <el-image src="/partners/hyper-pc.png" lazy></el-image>
          <el-image src="/partners/blue.png" lazy></el-image>
          <el-image src="/partners/wd.png" lazy></el-image>
          <el-image src="/partners/dmitry-live.png" lazy></el-image>
        </div>
        <h3 class="section-header">ИНФОРМАЦИОННАЯ ПОДДЕРЖКА</h3>
        <div class="partners-img tematic information">
          <el-image src="/partners/igromania.jpg" lazy></el-image>
          <el-image src="/partners/moskva24.png" lazy></el-image>
          <el-image src="/partners/afisha.png" lazy></el-image>
          <el-image src="/partners/cybersport.png" lazy></el-image>
          <el-image src="/partners/mirf.png" lazy></el-image>
        </div>
        <div class="partners-btn">
          <button @click="partnersIframe = true" class="btn red">
            ХОЧУ СТАТЬ ПАРТНЕРОМ
          </button>
        </div>
        <iframe
          class="partners-iframe"
          v-if="partnersIframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeMR_dy_vI2fTg89_Qf8ssprOwOFiwIaPRdzIrm9-MPr8yUdA/viewform?embedded=true"
          width="640"
          height="860"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
      </div>
    </section>
  </div>
</template>

<script>
import StreamerCard from "@/components/StreamerCard";
export default {
  // async fetch({store}){
  //   await store.dispatch('cart/fetchCart')
  // },
  components: {
    StreamerCard,
  },
  async asyncData({ $axios }) {
    const get_streamers = await $axios.get(
      `/api/get_streamers?at_home=show`
    );
    const get_tickets = await $axios.get(
      `/api/get_tickets`
    );
    const streamers = get_streamers.data;
    const tickets = get_tickets.data;
    return { streamers, tickets };
  },
  data() {
    return {
      currentTime: null,
      timer: null,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
      lightbox: {
        images: [
          "/home_gall/1_s.png",
          "/home_gall/2_s.png",
          "/home_gall/3_s.png",
          "/home_gall/4_s.png",
          "/home_gall/5_s.png",
          "/home_gall/6_s.png",
        ],
        index: null,
      },
      partnersIframe: false,
      subscribeEmail: null,
    };
  },
  mounted() {
    this.starTimer();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    starTimer() {
      const countDownDate = new Date("Jul 17, 2021 11:00:00").getTime();
      this.timer = setInterval(() => {
        const distance = countDownDate - new Date().getTime();
        const days = Math.floor(distance / 86400000);
        const hours = Math.floor((distance % 86400000) / 3600000);
        const minutes = Math.floor((distance % 3600000) / 60000);
        this.currentTime = `${days} дней ${hours} часов ${minutes} минут`;
        distance < 1 && clearInterval(this.timer);
      }, 1000);
    },
    notify(title, message, type) {
      this.$notify({
        title: title,
        message: message,
        type: type,
      });
    },
    async addItem(id) {
      await this.$axios.post("/api/add_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: id,
        streamer_id: 0,
      });
      this.notify("Успешно", "Билет добавлен в корзину", "success");
      await this.$store.dispatch("cart/fetchCart");
    },
    async subscribe(e) {
      e.preventDefault();
      if (this.subscribeEmail.trim())
        try {
          await this.$axios.post("http://127.0.0.1:8000/api/subscribe_email", {
            email: this.subscribeEmail,
          });
          this.notify(
            "Успешно",
            "Вы успешно подписались на рассылку",
            "success"
          );
        } catch (e) {
          this.notify("Ошибка", "Введенный email не валидный", "error");
        }
      else
        this.notify(
          "Ошибка",
          "Поле ввода email не должно быть пустым",
          "error"
        );
    },
  },
};
</script>
