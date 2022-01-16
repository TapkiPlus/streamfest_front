<template>
  <div>
    <section class="about">
      <div class="container">
        <div class="section-header">ГЛАВНЫЙ ФЕСТИВАЛЬ СТРИМЕРОВ</div>
        <div class="section-descr">Стримфест  - курпнейший в СНГ фестиваль стрим-культуры.
          Здесь известные стримеры и подкастеры встречаются со своими зрителями. Событие гибридное: посетители офлайн на площадке + зрители онлайн.</div>
        <div class="tabs-slider">
          <client-only>
            <swiper :options="yearsOptions" @slideChange="changeSwiperIndex" ref="yearsSlider">
              <swiper-slide v-for="(year, index) in years" :key="index" class="year-slide">
                <div class="year-item">
                  {{ year }}
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
          <div
            class="years-button-next swiper-button-next"
            slot="button-next"
          >
            <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5501 14.9999C17.5501 14.4623 17.3448 13.9247 16.9351 13.5147L4.0356 0.615424C3.21503 -0.205142 1.88463 -0.205141 1.06439 0.615424C0.24416 1.43566 0.244161 2.7658 1.06439 3.58643L12.4785 14.9999L1.06479 26.4135C0.24456 27.234 0.24456 28.5641 1.06479 29.3842C1.88503 30.2052 3.21543 30.2052 4.036 29.3842L16.9355 16.4851C17.3452 16.075 17.5501 15.5374 17.5501 14.9999Z" fill="#0D6DD8"/>
            </svg>
          </div>
          <div
            class="years-button-prev swiper-button-prev"
            slot="button-prev"
          >
            <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5501 14.9999C17.5501 14.4623 17.3448 13.9247 16.9351 13.5147L4.0356 0.615424C3.21503 -0.205142 1.88463 -0.205141 1.06439 0.615424C0.24416 1.43566 0.244161 2.7658 1.06439 3.58643L12.4785 14.9999L1.06479 26.4135C0.24456 27.234 0.24456 28.5641 1.06479 29.3842C1.88503 30.2052 3.21543 30.2052 4.036 29.3842L16.9355 16.4851C17.3452 16.075 17.5501 15.5374 17.5501 14.9999Z" fill="#0D6DD8"/>
            </svg>
          </div>
        </div>
        <div class="about-tabs__content" v-show="activeYear === 0">
          <div class="about-counter">
            <ul class="about-counter__list">
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/users.svg" alt="">
                </div>
                <div class="about-counter__descr">участников</div>
                <div class="about-counter__count">100</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/visitors.svg" alt="">
                </div>
                <div class="about-counter__descr">посетителей</div>
                <div class="about-counter__count">7200</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/like.svg" alt="">
                </div>
                <div class="about-counter__descr">упоминаний</div>
                <div class="about-counter__count">23 млн</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/microphone.svg" alt="">
                </div>
                <div class="about-counter__descr">растущих стримеров</div>
                <div class="about-counter__count">280</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/cup.svg" alt="">
                </div>
                <div class="about-counter__descr">зрителей онлайн</div>
                <div class="about-counter__count">2,1 млн</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/heart.svg" alt="">
                </div>
                <div class="about-counter__descr">шоколада раздали</div>
                <div class="about-counter__count">1 тонну</div>
                <div class="about-counter__percent"><img src="/about/loop.svg" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="video-block">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/530958754?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

            </div>
            <div class="about__descr">
              <p>В 2019 году Стримфест впервые проходил 2 дня и впервые — на главной хайтек-площадке Москвы, в Технопарке «Сколково». Мы построили 40 стрим-позиций и вновь побили цифры предыдущего года — звездных участников, посетителей и зрителей онлайн стало еще больше.</p>
              <p>WASD, новый стрим-сервис от МТС, грандиозно заявил о себе именно у нас. В зоне ASUS RoG отгремел турнир по самой хайповой игре сезона — Apex Legends. На музыкальной сцене прошел благотворительный марафон в поддержку фонда «Подари жизнь». Мы провели свой первый конкурс косплея и гонялись в стримерских креслах наперегонки. Это было бомбически! 😉 </p>

            </div>

          </div>
          <div class="partners">
            <h3 class="section-header">Коммерческие  партнеры</h3>
            <div class="partners-img commercial">
              <a
                href="https://www.lg.com/ru/monitors/lg-34UC79G-B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/lg.png" lazy></el-image>
              </a>
              <a
                href="https://www.asus.com/Microsite/powered-by-asus/RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/asus.png" lazy></el-image>
              </a>
              <a href="https://wasd.tv/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/wasd.png" lazy></el-image>
              </a>
              <a
                class="part-1"
                href="https://www.logitech.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/logitech.png" lazy></el-image>
              </a>
              <a
                class="part-2"
                href="http://red-square.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/red-square.png" lazy></el-image>
              </a>
              <a
                class="part-5"
                href="https://donate.qiwi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/qiwi.png" lazy></el-image>
              </a>
              <a
                class="part-7"
                href="https://goodgame.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/gg.png" lazy></el-image>
              </a>
              <a
                class="part-4"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/vk.png" lazy></el-image>
              </a>
              <a
                class="part-3"
                href="https://www.amd.com/ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/amd.png" lazy></el-image>
              </a>
              <a
                href="https://www.uniconf.ru/about/news/2018/7027/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/mega-drive.png" lazy></el-image>
              </a>
              <a
                href="https://restream.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/restream.png" lazy></el-image>
              </a>
            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
              <a href="https://warp.wtf/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/warp.png" lazy></el-image>
              </a>
              <a
                href="https://www.razerzone.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/razer.png" lazy></el-image>
              </a>
              <a
                href="https://hyperpc.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/hyper-pc.png" lazy></el-image>
              </a>
              <a
                href="https://www.bluemics.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/blue.png" lazy></el-image>
              </a>
              <a
                href="https://www.wd.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/western_digital.png" lazy></el-image>
              </a>
              <a
                href="https://www.dmitrylive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/dmitry_live.png" lazy></el-image>
              </a>
              <a
                href="https://streamscharts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/stream-charts.png" lazy></el-image>
              </a>
            </div>
            <PartnersModalButton/>
          </div>
          <div class="about-gallery">
            <masonry
              :cols="2"
              :gutter="5">
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/1-b.png" alt="">
                </div>

              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/5-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/6-s.png" alt="">
                </div>
              </div>

              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/7-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery-img">
                <img src="/about/gallery/7-b.png" alt="">
              </div>
            </masonry>
          </div>
        </div>
        <div class="about-tabs__content" v-show="activeYear === 1">
          <div class="about-counter">
            <ul class="about-counter__list">
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/users.svg" alt="">
                </div>
                <div class="about-counter__descr">участников</div>
                <div class="about-counter__count">155</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/visitors.svg" alt="">
                </div>
                <div class="about-counter__descr">посетителей</div>
                <div class="about-counter__count">7200</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/like.svg" alt="">
                </div>
                <div class="about-counter__descr">упоминаний</div>
                <div class="about-counter__count">23 млн</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/microphone.svg" alt="">
                </div>
                <div class="about-counter__descr">растущих стримеров</div>
                <div class="about-counter__count">280</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/cup.svg" alt="">
                </div>
                <div class="about-counter__descr">зрителей онлайн</div>
                <div class="about-counter__count">2,1 млн</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/heart.svg" alt="">
                </div>
                <div class="about-counter__descr">шоколада раздали</div>
                <div class="about-counter__count">1 тонну</div>
                <div class="about-counter__percent"><img src="/about/loop.svg" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="video-block">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/530958754?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

            </div>
            <div class="about__descr">
              <p>В 2019 году Стримфест впервые проходил 2 дня и впервые — на главной хайтек-площадке Москвы, в Технопарке «Сколково». Мы построили 40 стрим-позиций и вновь побили цифры предыдущего года — звездных участников, посетителей и зрителей онлайн стало еще больше.</p>
              <p>WASD, новый стрим-сервис от МТС, грандиозно заявил о себе именно у нас. В зоне ASUS RoG отгремел турнир по самой хайповой игре сезона — Apex Legends. На музыкальной сцене прошел благотворительный марафон в поддержку фонда «Подари жизнь». Мы провели свой первый конкурс косплея и гонялись в стримерских креслах наперегонки. Это было бомбически! 😉 </p>

            </div>

          </div>
          <div class="partners">
            <h3 class="section-header">Коммерческие  партнеры</h3>
            <div class="partners-img commercial">
              <a
                href="https://www.lg.com/ru/monitors/lg-34UC79G-B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/lg.png" lazy></el-image>
              </a>
              <a
                href="https://www.asus.com/Microsite/powered-by-asus/RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/asus.png" lazy></el-image>
              </a>
              <a href="https://wasd.tv/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/wasd.png" lazy></el-image>
              </a>
              <a
                class="part-1"
                href="https://www.logitech.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/logitech.png" lazy></el-image>
              </a>
              <a
                class="part-2"
                href="http://red-square.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/red-square.png" lazy></el-image>
              </a>
              <a
                class="part-5"
                href="https://donate.qiwi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/qiwi.png" lazy></el-image>
              </a>
              <a
                class="part-7"
                href="https://goodgame.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/gg.png" lazy></el-image>
              </a>
              <a
                class="part-4"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/vk.png" lazy></el-image>
              </a>
              <a
                class="part-3"
                href="https://www.amd.com/ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/amd.png" lazy></el-image>
              </a>
              <a
                href="https://www.uniconf.ru/about/news/2018/7027/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/mega-drive.png" lazy></el-image>
              </a>
              <a
                href="https://restream.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/restream.png" lazy></el-image>
              </a>
            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
              <a href="https://warp.wtf/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/warp.png" lazy></el-image>
              </a>
              <a
                href="https://www.razerzone.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/razer.png" lazy></el-image>
              </a>
              <a
                href="https://hyperpc.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/hyper-pc.png" lazy></el-image>
              </a>
              <a
                href="https://www.bluemics.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/blue.png" lazy></el-image>
              </a>
              <a
                href="https://www.wd.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/western_digital.png" lazy></el-image>
              </a>
              <a
                href="https://www.dmitrylive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/dmitry_live.png" lazy></el-image>
              </a>
              <a
                href="https://streamscharts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/stream-charts.png" lazy></el-image>
              </a>
            </div>
            <PartnersModalButton/>
          </div>
          <div class="about-gallery">
            <masonry
              :cols="2"
              :gutter="5">
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/1-b.png" alt="">
                </div>

              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/5-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/6-s.png" alt="">
                </div>
              </div>

              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/7-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery-img">
                <img src="/about/gallery/7-b.png" alt="">
              </div>
            </masonry>
          </div>
        </div>
        <div class="about-tabs__content" v-show="activeYear === 2">
          <div class="about-counter">
            <ul class="about-counter__list">
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/users.svg" alt="">
                </div>
                <div class="about-counter__descr">участников</div>
                <div class="about-counter__count">185</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/visitors.svg" alt="">
                </div>
                <div class="about-counter__descr">посетителей</div>
                <div class="about-counter__count">7200</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/like.svg" alt="">
                </div>
                <div class="about-counter__descr">упоминаний</div>
                <div class="about-counter__count">23 млн</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/microphone.svg" alt="">
                </div>
                <div class="about-counter__descr">растущих стримеров</div>
                <div class="about-counter__count">280</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/cup.svg" alt="">
                </div>
                <div class="about-counter__descr">зрителей онлайн</div>
                <div class="about-counter__count">2,1 млн</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/heart.svg" alt="">
                </div>
                <div class="about-counter__descr">шоколада раздали</div>
                <div class="about-counter__count">1 тонну</div>
                <div class="about-counter__percent"><img src="/about/loop.svg" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="video-block">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/530958754?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

            </div>
            <div class="about__descr">
              <p>В 2019 году Стримфест впервые проходил 2 дня и впервые — на главной хайтек-площадке Москвы, в Технопарке «Сколково». Мы построили 40 стрим-позиций и вновь побили цифры предыдущего года — звездных участников, посетителей и зрителей онлайн стало еще больше.</p>
              <p>WASD, новый стрим-сервис от МТС, грандиозно заявил о себе именно у нас. В зоне ASUS RoG отгремел турнир по самой хайповой игре сезона — Apex Legends. На музыкальной сцене прошел благотворительный марафон в поддержку фонда «Подари жизнь». Мы провели свой первый конкурс косплея и гонялись в стримерских креслах наперегонки. Это было бомбически! 😉 </p>

            </div>

          </div>
          <div class="partners">
            <h3 class="section-header">Коммерческие  партнеры</h3>
            <div class="partners-img commercial">
              <a
                href="https://www.lg.com/ru/monitors/lg-34UC79G-B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/lg.png" lazy></el-image>
              </a>
              <a
                href="https://www.asus.com/Microsite/powered-by-asus/RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/asus.png" lazy></el-image>
              </a>
              <a href="https://wasd.tv/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/wasd.png" lazy></el-image>
              </a>
              <a
                class="part-1"
                href="https://www.logitech.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/logitech.png" lazy></el-image>
              </a>
              <a
                class="part-2"
                href="http://red-square.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/red-square.png" lazy></el-image>
              </a>
              <a
                class="part-5"
                href="https://donate.qiwi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/qiwi.png" lazy></el-image>
              </a>
              <a
                class="part-7"
                href="https://goodgame.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/gg.png" lazy></el-image>
              </a>
              <a
                class="part-4"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/vk.png" lazy></el-image>
              </a>
              <a
                class="part-3"
                href="https://www.amd.com/ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/amd.png" lazy></el-image>
              </a>
              <a
                href="https://www.uniconf.ru/about/news/2018/7027/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/mega-drive.png" lazy></el-image>
              </a>
              <a
                href="https://restream.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/restream.png" lazy></el-image>
              </a>
            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
              <a href="https://warp.wtf/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/warp.png" lazy></el-image>
              </a>
              <a
                href="https://www.razerzone.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/razer.png" lazy></el-image>
              </a>
              <a
                href="https://hyperpc.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/hyper-pc.png" lazy></el-image>
              </a>
              <a
                href="https://www.bluemics.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/blue.png" lazy></el-image>
              </a>
              <a
                href="https://www.wd.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/western_digital.png" lazy></el-image>
              </a>
              <a
                href="https://www.dmitrylive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/dmitry_live.png" lazy></el-image>
              </a>
              <a
                href="https://streamscharts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/stream-charts.png" lazy></el-image>
              </a>
            </div>
            <PartnersModalButton/>
          </div>
          <div class="about-gallery">
            <masonry
              :cols="2"
              :gutter="5">
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/1-b.png" alt="">
                </div>

              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/5-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/6-s.png" alt="">
                </div>
              </div>

              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/7-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery-img">
                <img src="/about/gallery/7-b.png" alt="">
              </div>
            </masonry>
          </div>
        </div>
        <div class="about-tabs__content" v-show="activeYear === 3">
          <div class="about-counter">
            <ul class="about-counter__list">
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/users.svg" alt="">
                </div>
                <div class="about-counter__descr">участников</div>
                <div class="about-counter__count">185</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/visitors.svg" alt="">
                </div>
                <div class="about-counter__descr">посетителей</div>
                <div class="about-counter__count">7200</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/like.svg" alt="">
                </div>
                <div class="about-counter__descr">упоминаний</div>
                <div class="about-counter__count">23 млн</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/microphone.svg" alt="">
                </div>
                <div class="about-counter__descr">растущих стримеров</div>
                <div class="about-counter__count">280</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/cup.svg" alt="">
                </div>
                <div class="about-counter__descr">зрителей онлайн</div>
                <div class="about-counter__count">2,1 млн</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/heart.svg" alt="">
                </div>
                <div class="about-counter__descr">шоколада раздали</div>
                <div class="about-counter__count">1 тонну</div>
                <div class="about-counter__percent"><img src="/about/loop.svg" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="video-block">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/530958754?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

            </div>
            <div class="about__descr">
              <p>В 2019 году Стримфест впервые проходил 2 дня и впервые — на главной хайтек-площадке Москвы, в Технопарке «Сколково». Мы построили 40 стрим-позиций и вновь побили цифры предыдущего года — звездных участников, посетителей и зрителей онлайн стало еще больше.</p>
              <p>WASD, новый стрим-сервис от МТС, грандиозно заявил о себе именно у нас. В зоне ASUS RoG отгремел турнир по самой хайповой игре сезона — Apex Legends. На музыкальной сцене прошел благотворительный марафон в поддержку фонда «Подари жизнь». Мы провели свой первый конкурс косплея и гонялись в стримерских креслах наперегонки. Это было бомбически! 😉 </p>

            </div>

          </div>
          <div class="partners">
            <h3 class="section-header">Коммерческие  партнеры</h3>
            <div class="partners-img commercial">
              <a
                href="https://www.lg.com/ru/monitors/lg-34UC79G-B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/lg.png" lazy></el-image>
              </a>
              <a
                href="https://www.asus.com/Microsite/powered-by-asus/RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/asus.png" lazy></el-image>
              </a>
              <a href="https://wasd.tv/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/wasd.png" lazy></el-image>
              </a>
              <a
                class="part-1"
                href="https://www.logitech.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/logitech.png" lazy></el-image>
              </a>
              <a
                class="part-2"
                href="http://red-square.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/red-square.png" lazy></el-image>
              </a>
              <a
                class="part-5"
                href="https://donate.qiwi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/qiwi.png" lazy></el-image>
              </a>
              <a
                class="part-7"
                href="https://goodgame.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/gg.png" lazy></el-image>
              </a>
              <a
                class="part-4"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/vk.png" lazy></el-image>
              </a>
              <a
                class="part-3"
                href="https://www.amd.com/ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/amd.png" lazy></el-image>
              </a>
              <a
                href="https://www.uniconf.ru/about/news/2018/7027/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/mega-drive.png" lazy></el-image>
              </a>
              <a
                href="https://restream.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/restream.png" lazy></el-image>
              </a>
            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
              <a href="https://warp.wtf/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/warp.png" lazy></el-image>
              </a>
              <a
                href="https://www.razerzone.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/razer.png" lazy></el-image>
              </a>
              <a
                href="https://hyperpc.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/hyper-pc.png" lazy></el-image>
              </a>
              <a
                href="https://www.bluemics.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/blue.png" lazy></el-image>
              </a>
              <a
                href="https://www.wd.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/western_digital.png" lazy></el-image>
              </a>
              <a
                href="https://www.dmitrylive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/dmitry_live.png" lazy></el-image>
              </a>
              <a
                href="https://streamscharts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/stream-charts.png" lazy></el-image>
              </a>
            </div>
            <PartnersModalButton/>
          </div>
          <div class="about-gallery">
            <masonry
              :cols="2"
              :gutter="5">
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/1-b.png" alt="">
                </div>

              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/5-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/6-s.png" alt="">
                </div>
              </div>

              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/7-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery-img">
                <img src="/about/gallery/7-b.png" alt="">
              </div>
            </masonry>
          </div>
        </div>
        <div class="about-tabs__content" v-show="activeYear === 4">
          <div class="about-counter">
            <ul class="about-counter__list">
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/users.svg" alt="">
                </div>
                <div class="about-counter__descr">участников</div>
                <div class="about-counter__count">195</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/visitors.svg" alt="">
                </div>
                <div class="about-counter__descr">посетителей</div>
                <div class="about-counter__count">7200</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/like.svg" alt="">
                </div>
                <div class="about-counter__descr">упоминаний</div>
                <div class="about-counter__count">23 млн</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/microphone.svg" alt="">
                </div>
                <div class="about-counter__descr">растущих стримеров</div>
                <div class="about-counter__count">280</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/cup.svg" alt="">
                </div>
                <div class="about-counter__descr">зрителей онлайн</div>
                <div class="about-counter__count">2,1 млн</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/heart.svg" alt="">
                </div>
                <div class="about-counter__descr">шоколада раздали</div>
                <div class="about-counter__count">1 тонну</div>
                <div class="about-counter__percent"><img src="/about/loop.svg" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="video-block">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/530958754?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

            </div>
            <div class="about__descr">
              <p>В 2019 году Стримфест впервые проходил 2 дня и впервые — на главной хайтек-площадке Москвы, в Технопарке «Сколково». Мы построили 40 стрим-позиций и вновь побили цифры предыдущего года — звездных участников, посетителей и зрителей онлайн стало еще больше.</p>
              <p>WASD, новый стрим-сервис от МТС, грандиозно заявил о себе именно у нас. В зоне ASUS RoG отгремел турнир по самой хайповой игре сезона — Apex Legends. На музыкальной сцене прошел благотворительный марафон в поддержку фонда «Подари жизнь». Мы провели свой первый конкурс косплея и гонялись в стримерских креслах наперегонки. Это было бомбически! 😉 </p>

            </div>

          </div>
          <div class="partners">
            <h3 class="section-header">Коммерческие  партнеры</h3>
            <div class="partners-img commercial">
              <a
                href="https://www.lg.com/ru/monitors/lg-34UC79G-B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/lg.png" lazy></el-image>
              </a>
              <a
                href="https://www.asus.com/Microsite/powered-by-asus/RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/asus.png" lazy></el-image>
              </a>
              <a href="https://wasd.tv/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/wasd.png" lazy></el-image>
              </a>
              <a
                class="part-1"
                href="https://www.logitech.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/logitech.png" lazy></el-image>
              </a>
              <a
                class="part-2"
                href="http://red-square.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/red-square.png" lazy></el-image>
              </a>
              <a
                class="part-5"
                href="https://donate.qiwi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/qiwi.png" lazy></el-image>
              </a>
              <a
                class="part-7"
                href="https://goodgame.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/gg.png" lazy></el-image>
              </a>
              <a
                class="part-4"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/vk.png" lazy></el-image>
              </a>
              <a
                class="part-3"
                href="https://www.amd.com/ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/amd.png" lazy></el-image>
              </a>
              <a
                href="https://www.uniconf.ru/about/news/2018/7027/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/mega-drive.png" lazy></el-image>
              </a>
              <a
                href="https://restream.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/restream.png" lazy></el-image>
              </a>
            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
              <a href="https://warp.wtf/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/warp.png" lazy></el-image>
              </a>
              <a
                href="https://www.razerzone.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/razer.png" lazy></el-image>
              </a>
              <a
                href="https://hyperpc.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/hyper-pc.png" lazy></el-image>
              </a>
              <a
                href="https://www.bluemics.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/blue.png" lazy></el-image>
              </a>
              <a
                href="https://www.wd.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/western_digital.png" lazy></el-image>
              </a>
              <a
                href="https://www.dmitrylive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/dmitry_live.png" lazy></el-image>
              </a>
              <a
                href="https://streamscharts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/stream-charts.png" lazy></el-image>
              </a>
            </div>
           <PartnersModalButton/>
          </div>
          <div class="about-gallery">
            <masonry
              :cols="2"
              :gutter="5">
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/1-b.png" alt="">
                </div>

              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/5-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/6-s.png" alt="">
                </div>
              </div>

              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/7-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery-img">
                <img src="/about/gallery/7-b.png" alt="">
              </div>
            </masonry>
          </div>
        </div>
        <div class="about-tabs__content" v-show="activeYear === 5">
          <div class="about-counter">
            <ul class="about-counter__list">
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/users.svg" alt="">
                </div>
                <div class="about-counter__descr">участников</div>
                <div class="about-counter__count">225</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/visitors.svg" alt="">
                </div>
                <div class="about-counter__descr">посетителей</div>
                <div class="about-counter__count">7200</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/like.svg" alt="">
                </div>
                <div class="about-counter__descr">упоминаний</div>
                <div class="about-counter__count">23 млн</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/microphone.svg" alt="">
                </div>
                <div class="about-counter__descr">растущих стримеров</div>
                <div class="about-counter__count">280</div>
                <div class="about-counter__percent">18%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/cup.svg" alt="">
                </div>
                <div class="about-counter__descr">зрителей онлайн</div>
                <div class="about-counter__count">2,1 млн</div>
                <div class="about-counter__percent">68%</div>
              </li>
              <li class="about-counter__item">
                <div class="about-counter__icon">
                  <img src="/about/heart.svg" alt="">
                </div>
                <div class="about-counter__descr">шоколада раздали</div>
                <div class="about-counter__count">1 тонну</div>
                <div class="about-counter__percent"><img src="/about/loop.svg" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="video-block">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/530958754?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

            </div>
            <div class="about__descr">
              <p>В 2019 году Стримфест впервые проходил 2 дня и впервые — на главной хайтек-площадке Москвы, в Технопарке «Сколково». Мы построили 40 стрим-позиций и вновь побили цифры предыдущего года — звездных участников, посетителей и зрителей онлайн стало еще больше.</p>
              <p>WASD, новый стрим-сервис от МТС, грандиозно заявил о себе именно у нас. В зоне ASUS RoG отгремел турнир по самой хайповой игре сезона — Apex Legends. На музыкальной сцене прошел благотворительный марафон в поддержку фонда «Подари жизнь». Мы провели свой первый конкурс косплея и гонялись в стримерских креслах наперегонки. Это было бомбически! 😉 </p>

            </div>

          </div>
          <div class="partners">
            <h3 class="section-header">Коммерческие  партнеры</h3>
            <div class="partners-img commercial">
              <a
                href="https://www.lg.com/ru/monitors/lg-34UC79G-B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/lg.png" lazy></el-image>
              </a>
              <a
                href="https://www.asus.com/Microsite/powered-by-asus/RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/asus.png" lazy></el-image>
              </a>
              <a href="https://wasd.tv/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/wasd.png" lazy></el-image>
              </a>
              <a
                class="part-1"
                href="https://www.logitech.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/logitech.png" lazy></el-image>
              </a>
              <a
                class="part-2"
                href="http://red-square.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/red-square.png" lazy></el-image>
              </a>
              <a
                class="part-5"
                href="https://donate.qiwi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/qiwi.png" lazy></el-image>
              </a>
              <a
                class="part-7"
                href="https://goodgame.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/gg.png" lazy></el-image>
              </a>
              <a
                class="part-4"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/vk.png" lazy></el-image>
              </a>
              <a
                class="part-3"
                href="https://www.amd.com/ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/amd.png" lazy></el-image>
              </a>
              <a
                href="https://www.uniconf.ru/about/news/2018/7027/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/mega-drive.png" lazy></el-image>
              </a>
              <a
                href="https://restream.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/restream.png" lazy></el-image>
              </a>
            </div>
            <h3 class="section-header">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
            <div class="partners-img tematic">
              <a href="https://warp.wtf/" target="_blank" rel="noopener noreferrer">
                <el-image src="/partners/warp.png" lazy></el-image>
              </a>
              <a
                href="https://www.razerzone.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/razer.png" lazy></el-image>
              </a>
              <a
                href="https://hyperpc.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/hyper-pc.png" lazy></el-image>
              </a>
              <a
                href="https://www.bluemics.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/blue.png" lazy></el-image>
              </a>
              <a
                href="https://www.wd.com/ru-ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/western_digital.png" lazy></el-image>
              </a>
              <a
                href="https://www.dmitrylive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/dmitry_live.png" lazy></el-image>
              </a>
              <a
                href="https://streamscharts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <el-image src="/partners/stream-charts.png" lazy></el-image>
              </a>
            </div>
            <PartnersModalButton/>
          </div>
          <div class="about-gallery">
            <masonry
              :cols="2"
              :gutter="5">
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/1-b.png" alt="">
                </div>

              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/5-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/6-s.png" alt="">
                </div>
              </div>

              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/7-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item">
                <div class="gallery-img">
                  <img src="/about/gallery/4-b.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
              </div>
              <div class="gallery__item gallery__item--double">
                <div class="gallery-img">
                  <img src="/about/gallery/2-s.png" alt="">
                </div>
                <div class="gallery-img">
                  <img src="/about/gallery/3-s.png" alt="">
                </div>
              </div>
              <div class="gallery-img">
                <img src="/about/gallery/7-b.png" alt="">
              </div>
            </masonry>
          </div>
        </div>
      </div>
    </section>
    <PartnersModal/>
  </div>


</template>

<script>
import PartnersModal from "@/components/PartnersModal/"
import PartnersModalButton from "@/components/PartnersModal/Button"
	export default {
		name: "about",
    components: {
      PartnersModal,
      PartnersModalButton
    },
    data() {
		  return {
        activeYear: 2,
		    years: ["2017", "2018", "2019", "2020", "2022", "2022"],
        yearsOptions: {
          spaceBetween: 0,
          slidesPerView: 3,
          initialSlide: 2,
          centeredSlides: true,
          slideToClickedSlide: true,
          navigation: {
            nextEl: ".years-button-next",
            prevEl: ".years-button-prev"
          },
        }
      } 
    },
    methods: {
      changeSwiperIndex() {
        this.activeYear = this.$refs["yearsSlider"].$swiper.activeIndex;
      }
    }
	}
</script>


