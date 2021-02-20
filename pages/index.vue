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
        <p class="offer__subtitle">Главный фестиваль стримеров!</p>
        <p class="offer__subtitle subtitle-last">
          17–18 июля<br />Москва, Сколково
        </p>
        <p class="offer__22px">до фестиваля</p>
        <p class="offer__36px">{{ lastDay }}</p>
      </div>
    </section>
    <section class="video-block">
      <div class="container">
        <h3 class="section-header mb-20">ВСЕ ЗВЁЗДЫ И ЖАНРЫ СТРИМИНГА</h3>
        <p class="section-subheader">
          Стримфест — это крупнейший фестиваль в СНГ фестиваль
          стрим-культуры.<br />Здесь известные стримеры и подкастеры встречаются
          со своими зрителями. Балдёж-кутёж,<br />живое общение, море
          развлечений, мастер-классы — без сомнения, лучшие выходные года!
        </p>
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/348364566?title=0&byline=0&portrait=0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-wrapper">
          <div class="video-item">
            <img src="/cats/s_1.png" alt="" />
            <p class="video-item__title">Встречи со звездами</p>
            <p>
              Топы всех платформ: Twitch.tv, YouTube, TikTok, WASD, Goodgame, VK
              и OK.
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/s_4.png" alt="" />
            <p class="video-item__title">Игровые зоны и конкурсы</p>
            <p>
              Развлечения по полной: видеоигры, роботы, танцы, фотозоны и призы.
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/s_2.png" alt="" />
            <p class="video-item__title">Турниры и шоу-матчи</p>
            <p>
              MOBA, шутеры и батл рояли — участвуй сам и смотри, как жарят
              киберкотлеты!
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/s_5.png" alt="" />
            <p class="video-item__title">Настолки и застолья</p>
            <p>
              Тащи друзей в партию или в кафешки,<br />там всё вкусно и по
              карману.
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/s_3.png" alt="" />
            <p class="video-item__title">Дефиле косплееров</p>
            <p>
              Самый демократичный конкурс фанатского костюма — портал
              открывается!
            </p>
          </div>
          <div class="video-item">
            <img src="/cats/s_6.png" alt="" />
            <p class="video-item__title">Лекции и мастер-классы</p>
            <p>
              Два дня интенсива: прокачаем скиллы, научим зарабатывать на
              стримах.
            </p>
          </div>
        </div>
        <div class="video-buttons">
          <a class="video-button btn-disable btn">РАСПИСАНИЕ</a>
          <a class="video-button video-button-long btn-disable btn"
            >И ДРУГИЕ АКТИВНОСТИ</a
          >
          <a class="video-button btn-disable btn">КАРТА ФЕСТИВАЛЯ</a>
        </div>
      </div>
      <div class="side-parts">
        <img src="/side-parts_1.png" />
        <img src="/side-parts_2.png" />
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
            >КТО ТОЛЬКО НЕ ПРИДЕТ <img src="/smile.png" alt=""
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
              Билет на один из дней<br />17 или 18 июля
            </p>
            <p v-else class="tickets-item__days">
              Билет на оба дня<br />17 и 18 июля
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
              >СКОРО — БИЛЕТ<br />НА 1 ДЕНЬ</a
            >
            <a v-else class="tickets-item__button tickets-item__button_red"
              >СКОРО — БИЛЕТ<br />НА 2 ДНЯ</a
            >
          </div>
        </div>
      </div>
      <div class="tickets-form">
        <p>Новости и плюшки Стримфеста</p>
        <form @submit="subscribe" id="subscribe">
          <input v-model="subscribeEmail" type="text" placeholder="Ваш email" />
          <button type="submit">подписаться</button>
        </form>
      </div>
    </section>
    <section class="how-it-was">
      <div class="container">
        <h3 class="section-header">КАК ЭТО БЫЛО В 2019</h3>
        <p class="section-subheader">
          Два дня в Сколково, 170 топовых стримеров, 7000 посетителей<br />
          и больше 2 млн зрителей онлайн — это было легендарно!
        </p>
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/348364566?title=0&byline=0&portrait=0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="separator gamepad"></div>
        <div class="how-it-was-photos">
          <client-only>
            <silent-box :gallery="silentbox"></silent-box>
          </client-only>
        </div>
        <div class="streamers-btn">
          <a class="btn btn-w-icon btn-disable">
            больше фото
          </a>
        </div>
      </div>
      <div class="side-parts">
        <img src="/side-parts_3.png" />
        <img src="/side-parts_4.png" />
      </div>
    </section>
    <section class="feedbacks">
      <div class="container">
        <client-only>
          <swiper class="slider-streams__wrapper" :options="swiperOptions">
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Стримфест&nbsp;&mdash; это прекрасная возможность
                    познакомиться с&nbsp;культурой стриминга, популярными
                    кастерами и&nbsp;научиться новому. Я&nbsp;рад, что
                    мы&nbsp;можем делиться опытом и&nbsp;развиваться.
                  </p>
                  <p class="feedback-item__from">Денис WELOVEGAMES Коробков</p>
                  <p class="feedback-item__who">Стример</p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/1_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Это невероятно круто&nbsp;&mdash; вживую видеть свое
                    комьюнити, такие встречи всегда делают вас ближе.
                    Стримфест&nbsp;&mdash; отличный повод встретиться
                    со&nbsp;своей аудиторией из&nbsp;разных уголков планеты.
                  </p>
                  <p class="feedback-item__from">Вика Картер</p>
                  <p class="feedback-item__who">Видеоблогер</p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/2_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Подкастинг в&nbsp;плане фидбека&nbsp;&mdash; как подводная
                    лодка. Идешь по&nbsp;приборам, ничего не&nbsp;видишь.
                    Поэтому возможность встретиться с&nbsp;подписчиками,
                    записать подкаст у&nbsp;них на&nbsp;глазах&nbsp;&mdash; это
                    потрясающе.
                  </p>
                  <p class="feedback-item__from">Павел Пивоваров</p>
                  <p class="feedback-item__who">
                    Подкастер
                  </p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/3_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Я&nbsp;вообще боюсь большого скопления людей,
                    но&nbsp;в&nbsp;этот раз я&nbsp;не&nbsp;чувствовала
                    дискомфорта. Мы&nbsp;были на&nbsp;таком мероприятии впервые,
                    но&nbsp;нам безумно понравилось.
                  </p>
                  <p class="feedback-item__from">Людмила Морозова</p>
                  <p class="feedback-item__who">
                    Посетитель
                  </p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/4_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Невероятно эмоциональное событие, которое с&nbsp;нетерпением
                    ждешь каждый год. Беспрерывный поток совместного творчества,
                    который дает тебе уникальный буст. Это нужно пережить.
                  </p>
                  <p class="feedback-item__from">Дмитрий dayzru Нардов</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/5_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Лекторий, несомненно, интересная задумка. У&nbsp;стримеров
                    есть возможность доносить свои знания не&nbsp;только
                    с&nbsp;виртуальной трибуны, но&nbsp;и&nbsp;с&nbsp;реальной.
                    Я&nbsp;остался доволен, что тут говорить!
                  </p>
                  <p class="feedback-item__from">Евгений Мелёхин</p>
                  <p class="feedback-item__who">
                    Посетитель
                  </p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/6_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Фестиваль очень помог и&nbsp;в&nbsp;развитии канала,
                    и&nbsp;новые знакомства приобрести. К&nbsp;тому&nbsp;же еще
                    и&nbsp;партнерку одобрили, и&nbsp;все благодаря ВАААМ!<br /><br />
                  </p>
                  <p class="feedback-item__from">Лилия Lily_Mint Аюпова</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/7_s.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="feedback-item">
                <div class="feedback-item__inner">
                  <p class="feedback-item__text">
                    Приходя на&nbsp;Стримфест, понимаешь, что хейтеров
                    на&nbsp;самом деле не&nbsp;существует. В&nbsp;жизни все
                    зрители доброжелательные. Просят тебя расписаться,
                    сфоткаться с&nbsp;ними.
                  </p>
                  <p class="feedback-item__from">Алексей Stery_RJV Рыженков</p>
                  <p class="feedback-item__who">
                    Стример
                  </p>
                </div>
                <div class="feedback-item__image">
                  <img src="/reviews/8_s.jpg" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </div>
    </section>
    <section class="awards">
      <div class="container">
        <h3 class="section-header">STREAMFEST AWARDS</h3>
        <p class="section-subheader">
          Яркое эфирное шоу, где популярные стримеры, эксперты рынка<br />
          и журналисты развлекательных медиа выбрали лучших из лучших в 13
          номинациях.
          <a class="link" href="https://streamscharts.com/streamfestawards2020"
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
          <el-image src="/partners/lisetskiy.jpg" lazy></el-image>
        </div>
        <h3 class="section-header">СТРАТЕГИЧЕСКИЕ ПАРТНЕРЫ</h3>
        <div class="partners-img strategy">
          <a href="http://www.lg.com/ru/monitors/lg-34UC79G-B" target="_blank">
            <el-image src="/partners/lg.jpg" lazy></el-image>
          </a>
          <a href="https://wasd.tv/" target="_blank">
            <el-image src="/partners/wasd.jpg" lazy></el-image>
          </a>
          <a
            href="https://www.asus.com/Microsite/powered-by-asus/RU/"
            target="_blank"
          >
            <el-image src="/partners/asus.jpg" lazy></el-image>
          </a>
        </div>
        <h3 class="section-header">ОФИЦИАЛЬНЫЕ ПАРТНЕРЫ</h3>
        <div class="partners-img official">
          <a
            href="https://www.logitech.com/ru-ru/product/c922-pro-stream-webcam"
            target="_blank"
          >
            <el-image src="/partners/logitech.jpg" lazy></el-image>
          </a>
          <a href="http://red-square.org/" target="_blank">
            <el-image src="/partners/red_square.jpg" lazy></el-image>
          </a>
          <a href="https://www.amd.com/ru" target="_blank">
            <el-image src="/partners/amd.jpg" lazy></el-image>
          </a>
          <a href="https://vk.com/" target="_blank">
            <el-image src="/partners/vk.jpg" lazy></el-image>
          </a>
          <a href="https://donate.qiwi.com/" target="_blank">
            <el-image src="/partners/qiwi.jpg" lazy></el-image>
          </a>
          <a href="http://goodgame.ru/" target="_blank">
            <el-image src="/partners/gg.jpg" lazy></el-image>
          </a>
          <a
            href="https://ru.siberianhealth.com/ru/shop/catalog/category/406/"
            target="_blank"
          >
            <el-image src="/partners/cyber_build.jpg" lazy></el-image>
          </a>
          <a href="https://flick.redbull.com/" target="_blank">
            <el-image src="/partners/redbull.jpg" lazy></el-image>
          </a>
          <a
            href="https://www.teamgroupinc.com/ru/products/t-force"
            target="_blank"
          >
            <el-image src="/partners/teamgroup.jpg" lazy></el-image>
          </a>
        </div>
        <h3 class="section-header">ПАРТНЕРЫ ТЕМАТИЧЕСКИХ ЗОН</h3>
        <div class="partners-img tematic">
          <a href="http://restream.io" target="_blank">
            <el-image src="/partners/restream_io.jpg" lazy></el-image>
          </a>
          <a
            href="https://www.uniconf.ru/about/news/2018/7027/"
            target="_blank"
          >
            <el-image src="/partners/mega_drive.jpg" lazy></el-image>
          </a>
          <a href="http://schoolskills.ru/" target="_blank">
            <el-image src="/partners/school_skills.jpg" lazy></el-image>
          </a>
          <a href="https://podari-zhizn.ru/main" target="_blank">
            <el-image src="/partners/podari_jizn.jpg" lazy></el-image>
          </a>
          <a href="https://store.avermedia.com/ru" target="_blank">
            <el-image src="/partners/avermedia.jpg" lazy></el-image>
          </a>
        </div>
        <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
        <div class="partners-img tematic">
          <a href="http://warp.wtf/" target="_blank">
            <el-image src="/partners/warp.jpg" lazy></el-image>
          </a>
          <a href="https://www.razerzone.ru/" target="_blank">
            <el-image src="/partners/razer.jpg" lazy></el-image>
          </a>
          <a href="https://hyperpc.ru/" target="_blank">
            <el-image src="/partners/hyper_pc.jpg" lazy></el-image>
          </a>
          <a href="https://www.bluemics.ru/" target="_blank">
            <el-image src="/partners/blue.jpg" lazy></el-image>
          </a>
          <a href="https://www.wd.com/ru-ru/" target="_blank">
            <el-image src="/partners/western_digital.jpg" lazy></el-image>
          </a>
          <a href="https://www.dmitrylive.com/" target="_blank">
            <el-image src="/partners/dmitry_live.jpg" lazy></el-image>
          </a>
        </div>
        <h3 class="section-header">ИНФОРМАЦИОННАЯ ПОДДЕРЖКА</h3>
        <div class="partners-img tematic information">
          <a href="https://www.igromania.ru/" target="_blank">
            <el-image src="/partners/mania.jpg" lazy></el-image>
          </a>
          <a href="https://tv.m24.ru/" target="_blank">
            <el-image src="/partners/moskva_24.jpg" lazy></el-image>
          </a>
          <a href="https://daily.afisha.ru/" target="_blank">
            <el-image src="/partners/afisha.jpg" lazy></el-image>
          </a>
          <a href="https://www.cybersport.ru/" target="_blank">
            <el-image src="/partners/cybersport.jpg" lazy></el-image>
          </a>
          <a href="https://www.mirf.ru/" target="_blank">
            <el-image src="/partners/mir_fntsk.jpg" lazy></el-image>
          </a>
        </div>
        <div class="partners-btn">
          <button @click="openPartnersModal" class="btn red">
            ХОЧУ СТАТЬ ПАРТНЕРОМ
          </button>
        </div>
      </div>
      <div class="side-parts">
        <img src="/side-parts_5.png" />
        <img src="/side-parts_6.png" />
      </div>
    </section>
    <div :class="{ visible: partnersIframe }" class="partners-modal">
      <button @click="closePartnersModal" class="partners-modal__close">
        ✖
      </button>
      <iframe
        class="partners-modal__iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeMR_dy_vI2fTg89_Qf8ssprOwOFiwIaPRdzIrm9-MPr8yUdA/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >
    </div>
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
      `http://185.119.57.46:8000/api/get_streamers?at_home=show`
    );
    const get_tickets = await $axios.get(
      `http://185.119.57.46:8000/api/get_tickets`
    );
    const streamers = get_streamers.data;
    const tickets = get_tickets.data;
    return { streamers, tickets };
  },
  data() {
    return {
      lastDay: null,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 8000,
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
      silentbox: [
        {
          src: "/home_gall/1.png",
          thumbnail: "/home_gall/1_s.png",
        },
        {
          src: "/home_gall/2.png",
          thumbnail: "/home_gall/2_s.png",
        },
        {
          src: "/home_gall/3.png",
          thumbnail: "/home_gall/3_s.png",
        },
        {
          src: "/home_gall/4.png",
          thumbnail: "/home_gall/4_s.png",
        },
        {
          src: "/home_gall/5.png",
          thumbnail: "/home_gall/5_s.png",
        },
        {
          src: "/home_gall/6.png",
          thumbnail: "/home_gall/6_s.png",
        },
      ],
      partnersIframe: false,
      subscribeEmail: null,
    };
  },
  mounted() {
    this.starTimer();
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    document.body.appendChild(script);
  },
  methods: {
    starTimer() {
      let days = Math.floor(
        (new Date("Jul 17, 2021 11:00:00").getTime() - new Date().getTime()) /
          86400000
      ).toString();
      switch (days.substr(-1)) {
        case 1:
          days += " день";
          break;
        case 2:
        case 3:
        case 4:
          days += " дня";
          break;
        default:
          days += " дней";
      }
      this.lastDay = days;
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
          await this.$axios.post("/api/subscribe_email", {
            email: this.subscribeEmail,
          });
          this.notify(
            "Успешно",
            "Вы подписаны на рассылку!",
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
    openPartnersModal() {
      document.querySelector("body").style.overflow = "hidden";
      this.partnersIframe = true;
    },
    closePartnersModal() {
      this.partnersIframe = false;
      document.querySelector("body").style.overflow = "visible";
    },
  },
};
</script>
