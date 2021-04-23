<template>
  <section class="faq faq--how-to">
    <div class="pattern-bg "></div>
    <div class="faq-banner">
      <img src="/SU.png" alt="" />
    </div>
    <div class="container">
      <div class="section-header">КАК СТАТЬ УЧАСТНИКОМ СТРИМФЕСТА 2021</div>
      <div class="faq-items">
        <button
          @click="toggleAccordion(1)"
          :class="{ 'faq-item-active': accordionIds.includes(1) }"
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
            <g clip-path="url(#clip2)">
              <path
                d="M8.54894 0.927052C8.8483 0.0057416 10.1517 0.00573945 10.4511 0.92705L11.6329 4.56434C11.7668 4.97636 12.1507 5.25532 12.5839 5.25532H16.4084C17.3771 5.25532 17.7799 6.49494 16.9962 7.06434L13.9021 9.31231C13.5516 9.56695 13.405 10.0183 13.5389 10.4303L14.7207 14.0676C15.02 14.9889 13.9656 15.7551 13.1818 15.1857L10.0878 12.9377C9.7373 12.6831 9.2627 12.6831 8.91222 12.9377L5.81815 15.1857C5.03444 15.7551 3.97996 14.9889 4.27931 14.0676L5.46114 10.4303C5.59501 10.0183 5.44835 9.56695 5.09787 9.31231L2.00381 7.06434C1.22009 6.49494 1.62287 5.25532 2.59159 5.25532H6.41606C6.84929 5.25532 7.23324 4.97636 7.36712 4.56434L8.54894 0.927052Z"
                fill="#0D6DD8"
              />
            </g>
            <defs>
              <clipPath id="clip2">
                <rect width="20" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Что дает статус участника фестиваля?
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
          :class="{ visible: accordionIds.includes(1) }"
          class="faq-item__inner"
        >
          <p>
            Каждый участник получает возможность продавать именные билеты на
            фестиваль и получать за это деньги: в этом году это 500&nbsp;рублей
            донатом с каждого проданного билета.
          </p>
          <p>
            Популярным стримерам и подкастерам, заинтересованным в общении с
            публикой, на фестивале предоставляются оборудованные стрим-позиции
            для выхода в эфир и комфортного интерактива с&nbsp;аудиторией в зале
            (в том числе в звукоизолированных зонах).
          </p>
          <p>
            Каждого участника мы представляем коммерческим партнерам фестиваля,
            которые могут предложить ему специальные активности на
            Стримфесте&nbsp;2021 за дополнительное вознаграждение.
          </p>
        </div>
        <button
          @click="toggleAccordion(2)"
          :class="{ 'faq-item-active': accordionIds.includes(2) }"
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
          Я стример или подкастер, как мне стать участником фестиваля?
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
          :class="{ visible: accordionIds.includes(2) }"
          class="faq-item__inner"
        >
          <p>
            Проверьте, соответствуете ли вы критериям участия (о них ниже), и
            напишите
            <a
              href="https://vk.com/mikhail_lisetskiy"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >организаторам в VK</a
            >
            или на&nbsp;<a href="mailto:mike@streamfest.ru" class="link"
              >mike@streamfest.ru</a
            >. Если вы не проходите по критериям, но активно занимаетесь стримингом или подкастингом, то можете получить от нас бесплатный билет на оба дня фестиваля. Подробности в разделе <nuxt-link class="link" to="/faq">FAQ</nuxt-link>.
          </p>
          <p>
            При формировании списка участников Стримфеста 2021 мы исходим из
            следующих принципов:
          </p>
          <ul>
            <li>
              <p>
                <b>Паритетность:</b> игровые стримы значительно популярнее
                других эфирных направлений, поэтому критерии участия для
                геймеров и не-геймеров разнятся. Если за последний год больше
                половины эфирного времени стримера было посвящена видеоиграм, то
                с точки зрения Стримфеста это игровой стример.
              </p>
            </li>
            <li>
              <p>
                <b>Разнообразие:</b> мы стремимся, чтобы на фестивале были
                представлены основные стримерские платформы и тематики. Важное
                следствие: если у нас получится переизбыток регистраций
                стримеров какого-либо эфирного направления, регистрация новых
                участников в данной тематике стримов будет закрыта. То же
                касается и стрим-платформ в целом. Регистрируйтесь заранее!
              </p>
            </li>
            <li>
              <p>
                <b>Инициатива на стороне стримеров:</b> Стримфест НЕ практикует
                активное приглашение участников. Даже&nbsp;самые популярные
                стримеры не должны дожидаться формального «приглашения на
                Стримфест». При этом мы активно принимаем заявки и отвечаем
                очень быстро.
              </p>
            </li>
            <li>
              <p>
                <b>Регулярность и опытность:</b> стрим-канал заявителя должен
                существовать дольше 6&nbsp;месяцев, а стримы на нем должны
                проходить не реже 3&nbsp;раз в неделю. Это общее требование для
                всех заявителей.
              </p>
            </li>
            <li>
              <p>
                <b>Отсутствие накруток:</b> заявитель не должен применять ботов
                для улучшения своей статистики. Мы&nbsp;выявляем «накрутчиков» с
                помощью различных web-сервисов и ручного контент-анализа, а
                также оцениваем спорных кандидатов совместно с менеджерами
                стрим-платформ и аналитиками сервиса
                <a
                  href="https://streamscharts.com/"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Streams Charts</a
                >. Если участник использует ботов и это доказано, это может
                стать основанием для исключения из списка уже
                зарегистрированного участника.
              </p>
            </li>
            <li>
              <p>
                <b>Закрытый список платформ:</b> в этом году участниками
                фестиваля могут стать стримеры следующих платформ: Twitch.tv,
                YouTube, TikTok, VK, OK, WASD, Goodgame, Instagram. Заявитель
                должен выбрать один канал, с которым он заявляется на Стримфест.
                Показатели каналов с разных платформ не суммируются.
              </p>
            </li>
            <li>
              <p>
                <b>Специальные гости:</b> организаторы оставляют за собой право
                аккредитовать участниками фестиваля несколько специальных гостей
                Стримфеста, не обязательно соответствующих общим требованиям.
              </p>
            </li>
          </ul>
        </div>
        <button
          @click="toggleAccordion(3)"
          :class="{ 'faq-item-active': accordionIds.includes(3) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2.78333V13.9127H5.83267V16H7.92533L10.0147 13.912H13.1513L17.334 9.74V0H3.04467L2 2.78333ZM4.43867 1.39H15.94V9.04267L13.5 11.4773H9.666L7.57667 13.562V11.4773H4.43867V1.39Z"
              fill="#0D6DD8"
            />
            <path
              d="M8.27344 4.17468H9.66677V8.34802H8.27344V4.17468Z"
              fill="#0D6DD8"
            />
            <path
              d="M12.1052 4.17468H13.4992V8.34802H12.1052V4.17468Z"
              fill="#0D6DD8"
            />
          </svg>

          Условия регистрации стримеров <span>Twitch.tv </span>
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
          :class="{ visible: accordionIds.includes(3) }"
          class="faq-item__inner"
        >
          <p>
            Вы можете стать участником Стримфеста, продавать именные билеты и
            получать с них доход, если на момент подачи заявки:
          </p>
          <p>Для стримеров <b>игровой</b> тематики:</p>
          <ul>
            <li>
              <p>
                На вашем канале больше 20&nbsp;000&nbsp;фолловеров, а средний
                онлайн ваших стримов за последний год превышает 100&nbsp;человек
                (по данным независимого сервиса
                <a
                  href="https://sullygnome.com/"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >SullyGnome</a
                >).
              </p>
            </li>
            <li>
              <p>
                На вашем канале больше 12&nbsp;000&nbsp;фолловеров, а средний
                онлайн ваших стримов за последний год превышает 250&nbsp;человек
                (по данным независимого сервиса SullyGnome).
              </p>
            </li>
          </ul>
          <p>
            Для стримеров <b>разговорной</b> тематики (IRL, Just Chatting,
            ASMR):
          </p>
          <ul>
            <li>
              <p>
                На вашем канале больше 12&nbsp;000 фолловеров, а средний онлайн
                ваших стримов за последний год превышает 80&nbsp;человек (по
                данным независимого сервиса SullyGnome).
              </p>
            </li>
            <li>
              <p>
                На вашем канале больше 8000&nbsp;фолловеров, а средний онлайн
                ваших стримов за последний год превышает 200&nbsp;человек (по
                данным независимого сервиса SullyGnome).
              </p>
            </li>
          </ul>
          <p>
            Для стримеров <b>творческой</b> тематики (музыкальные стримы,
            рисование, крафт, фитнес, шахматы и т.д.):
          </p>
          <ul>
            <li>
              <p>
                На вашем канале больше 3000&nbsp;фолловеров, а средний онлайн
                ваших стримов за последний год превышает 30&nbsp;человек (по
                данным независимого сервиса SullyGnome).
              </p>
            </li>
          </ul>
        </div>
        <button
          @click="toggleAccordion(4)"
          :class="{ 'faq-item-active': accordionIds.includes(4) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6909 4.72124C16.5181 4.04818 16.0114 3.51762 15.3689 3.33638C14.1951 3 9.49983 3 9.49983 3C9.49983 3 4.80472 3 3.63092 3.32363C3.00076 3.50467 2.48175 4.04828 2.3089 4.72124C2 5.95056 2 8.5 2 8.5C2 8.5 2 11.0623 2.3089 12.2788C2.48193 12.9517 2.98841 13.4823 3.63102 13.6635C4.81708 14 9.50001 14 9.50001 14C9.50001 14 14.1951 14 15.3689 13.6764C16.0115 13.4952 16.5181 12.9647 16.6911 12.2917C16.9999 11.0623 16.9999 8.51295 16.9999 8.51295C16.9999 8.51295 17.0123 5.95056 16.6909 4.72124ZM8.00496 10.8553V6.14473L11.9093 8.5L8.00496 10.8553Z"
              fill="black"
            />
            <path
              d="M16.6909 4.72124C16.5181 4.04818 16.0114 3.51762 15.3689 3.33638C14.1951 3 9.49983 3 9.49983 3C9.49983 3 4.80472 3 3.63092 3.32363C3.00076 3.50467 2.48175 4.04828 2.3089 4.72124C2 5.95056 2 8.5 2 8.5C2 8.5 2 11.0623 2.3089 12.2788C2.48193 12.9517 2.98841 13.4823 3.63102 13.6635C4.81708 14 9.50001 14 9.50001 14C9.50001 14 14.1951 14 15.3689 13.6764C16.0115 13.4952 16.5181 12.9647 16.6911 12.2917C16.9999 11.0623 16.9999 8.51295 16.9999 8.51295C16.9999 8.51295 17.0123 5.95056 16.6909 4.72124ZM8.00496 10.8553V6.14473L11.9093 8.5L8.00496 10.8553Z"
              fill="#0D6DD8"
            />
          </svg>

          Условия регистрации стримеров <span>YouTube </span>
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
          :class="{ visible: accordionIds.includes(4) }"
          class="faq-item__inner"
        >
          <p>
            Ключевое условие: ваш канал на YouTube должен использоваться в
            первую очередь для стримов, а не для выкладки записанных видео, и
            позиционироваться таковым на аудиторию. Если у вас на канале нет
            записей стримов в открытом доступе, это может стать основанием для
            отказа в регистрации.
          </p>
          <p>
            Вы можете стать участником Стримфеста, продавать именные билеты и
            получать с них доход, если на момент подачи заявки:
          </p>
          <p>Для стримеров <b>игровой</b> тематики:</p>
          <ul>
            <li>
              <p>
                На вашем канале больше 50&nbsp;000 подписчиков, а среднее
                количество просмотров канала за последний месяц — от 1700
                человек в эфирный день (по данным независимого сервиса
                <a
                  href="https://socialblade.com/"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Socialblade</a
                >).
              </p>
            </li>
          </ul>
          <p>
            Для стримеров <b>разговорной</b> тематики (IRL, Just Chatting,
            ASMR):
          </p>
          <ul>
            <li>
              <p>
                На вашем канале больше 35&nbsp;000&nbsp;подписчиков, а среднее
                количество просмотров канала за последний месяц — от
                1200&nbsp;человек в эфирный день (по данным независимого сервиса
                Socialblade).
              </p>
            </li>
          </ul>
          <p>
            Для стримеров <b>творческой</b> тематики (музыкальные стримы,
            рисование, крафт, фитнес, шахматы и т.д.):
          </p>
          <ul>
            <li>
              <p>
                На вашем канале больше 20&nbsp;000&nbsp;подписчиков, а среднее
                количество просмотров канала за последний месяц — от
                600&nbsp;человек в эфирный день (по данным независимого сервиса
                Socialblade).
              </p>
            </li>
          </ul>
        </div>
        <button
          @click="toggleAccordion(5)"
          :class="{ 'faq-item-active': accordionIds.includes(5) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.993 4.50541C15.1473 4.50541 14.3669 4.24031 13.7403 3.7931C13.0216 3.28043 12.5052 2.52841 12.3229 1.66165C12.2777 1.44749 12.2534 1.22648 12.2511 1H9.83512V7.2462L9.83222 10.6675C9.83222 11.5822 9.20269 12.3578 8.33002 12.6306C8.07675 12.7097 7.80323 12.7472 7.51842 12.7324C7.15488 12.7135 6.8142 12.6097 6.5181 12.4421C5.88798 12.0856 5.46077 11.4387 5.44919 10.6988C5.43095 9.54224 6.41911 8.59934 7.64056 8.59934C7.88167 8.59934 8.11322 8.63659 8.33002 8.70423V6.99699V6.38327C8.10136 6.35123 7.86864 6.33452 7.63333 6.33452C6.29639 6.33452 5.04599 6.86033 4.15219 7.80761C3.47663 8.52348 3.07141 9.43681 3.00889 10.3945C2.92698 11.6526 3.41354 12.8486 4.35712 13.7309C4.49576 13.8605 4.64135 13.9807 4.7936 14.0916C5.60259 14.6807 6.59162 15 7.63333 15C7.86864 15 8.10136 14.9836 8.33002 14.9515C9.30312 14.8151 10.201 14.3937 10.9095 13.7309C11.7802 12.9167 12.2612 11.8358 12.2664 10.6853L12.254 5.5762C12.6693 5.87936 13.1235 6.13022 13.6109 6.32493C14.369 6.62755 15.1727 6.78091 16 6.78064V5.12077V4.50486C16.0005 4.50541 15.9936 4.50541 15.993 4.50541Z"
              fill="#0D6DD8"
            />
          </svg>
          Условия регистрации стримеров <span>TikTok </span>
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
          :class="{ visible: accordionIds.includes(5) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a
              href="https://www.tiktok.com/ru-RU/"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >TikTok</a
            >.
          </p>

          <p>
            Организаторы Стримфеста совместно с TikTok отберут из числа
            заявителей до 20 самых популярных стримеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(6)"
          :class="{ 'faq-item-active': accordionIds.includes(6) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8485 11.9194C17.8028 11.8405 17.5201 11.2073 16.16 9.90591C14.7362 8.54315 14.9274 8.76443 16.6424 6.40809C17.687 4.97303 18.1046 4.09665 17.9739 3.722C17.8495 3.36488 17.0813 3.45909 17.0813 3.45909L14.5269 3.47443C14.5269 3.47443 14.3377 3.44814 14.1964 3.53468C14.0593 3.62013 13.9711 3.81731 13.9711 3.81731C13.9711 3.81731 13.5663 4.92811 13.0265 5.8724C11.8885 7.86505 11.4326 7.97022 11.2467 7.84643C10.8142 7.55832 10.9226 6.68743 10.9226 6.06959C10.9226 4.13828 11.2063 3.33311 10.369 3.12498C10.0906 3.05596 9.88658 3.00995 9.17571 3.00228C8.26402 2.99242 7.49153 3.00557 7.05481 3.22576C6.76366 3.37255 6.53946 3.7001 6.67653 3.71872C6.84548 3.74172 7.22801 3.82498 7.43096 4.1098C7.69342 4.47678 7.68385 5.30276 7.68385 5.30276C7.68385 5.30276 7.83474 7.57585 7.33214 7.85848C6.9868 8.05238 6.51395 7.65692 5.49919 5.8483C4.97959 4.92263 4.58644 3.89837 4.58644 3.89837C4.58644 3.89837 4.511 3.70776 4.37605 3.60589C4.21241 3.4821 3.98289 3.44266 3.98289 3.44266L1.55384 3.458C1.55384 3.458 1.18938 3.46895 1.05549 3.63218C0.936483 3.77787 1.04593 4.07803 1.04593 4.07803C1.04593 4.07803 2.94794 8.66474 5.10073 10.9773C7.07606 13.097 9.3181 12.9579 9.3181 12.9579H10.3339C10.3339 12.9579 10.641 12.9228 10.7972 12.7486C10.9417 12.5887 10.9364 12.2885 10.9364 12.2885C10.9364 12.2885 10.9162 10.8831 11.5495 10.676C12.1732 10.4723 12.9744 12.0344 13.8234 12.6358C14.4652 13.0904 14.953 12.9907 14.953 12.9907L17.2237 12.9579C17.2237 12.9579 18.4116 12.8823 17.8485 11.9194Z"
              fill="#0D6DD8"
            />
          </svg>
          Условия регистрации стримеров <span>VK </span>
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
          :class="{ visible: accordionIds.includes(6) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a
              href="https://vk.com/"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >VK</a
            >.
          </p>
          <p>
            Организаторы Стримфеста совместно с VK отберут из числа заявителей
            до 10&nbsp;самых популярных стримеров и подкастеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(7)"
          :class="{ 'faq-item-active': accordionIds.includes(7) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g clip-path="url(#clip0)">
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="5"
                y="0"
                width="10"
                height="16"
              >
                <rect
                  x="14.6401"
                  width="16"
                  height="9.28"
                  transform="rotate(90 14.6401 0)"
                  fill="url(#pattern0)"
                />
              </mask>
              <g mask="url(#mask0)">
                <rect
                  x="14.6401"
                  width="16"
                  height="9.28"
                  transform="rotate(90 14.6401 0)"
                  fill="#0D6DD8"
                />
              </g>
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="translate(0 -0.00198354) scale(0.00176991 0.00305157)"
                />
              </pattern>
              <clipPath id="clip0">
                <rect width="19" height="16" fill="white" />
              </clipPath>
              <image
                id="image0"
                width="565"
                height="329"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          Условия регистрации стримеров <span>OK </span>
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
          :class="{ visible: accordionIds.includes(7) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a
              href="https://ok.ru/"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >OK</a
            >.
          </p>
          <p>
            Организаторы Стримфеста совместно с OK отберут из числа заявителей
            до 10&nbsp;самых популярных стримеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(8)"
          :class="{ 'faq-item-active': accordionIds.includes(8) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect x="1" y="1" width="17" height="14" fill="url(#pattern2)" />
            <defs>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image2"
                  transform="scale(0.0588235 0.0714286)"
                />
              </pattern>
              <image
                id="image2"
                width="17"
                height="14"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAABeklEQVQ4EZ1TzytFQRg9r7DBwoKiSFkoG8naj2ysZONHyTXfXGVhQVlLL/4CslSyUSwkdjaS7TXf3KdXj2SllwUrNui9qzt3uvfd9zae2czMOd853/SdBnD8Djh+M/6zQu1qvgUgfgHxVd0eK15jpFUXgOBLEJdA3FuXkeRpEAcQageQasZetuoyIT4HcRnC6wNm800gfgPxMxBkUkZSDYD0ARZybSk8nAXxN4hvEpz0nnkN8XgCIpzXqcFdvz+N6w1bTwm+pIcMKPkoBl3VBcE/6W6WJZWD4I8omVhhumoQf8IttBqY9LYxFnqusgzibti+4jCFRyJej0Rq2c6pCOIiwijlfTekP2Hr9m3daK2JVO0g/oLgW0g9b7tlK4RluGoQxO8gfqoJIXaUfGZiI34001/0Og0n9aQ1LZhd6s1YU3Mgf8oWB5B8kvBBBsQPlivB8XoSrvqUvW4A8WvUTY2laKHWrMkfvggxQerdlEF4CVMTfAzyR6q5X4ZqxVhTU+wZAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>

          Условия регистрации стримеров <span>WASD </span>
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
          :class="{ visible: accordionIds.includes(8) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a
              href="https://wasd.tv/"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >WASD</a>.
          </p>
          <p>
            Организаторы Стримфеста совместно с WASD отберут из числа заявителей
            до 10&nbsp;самых популярных стримеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(9)"
          :class="{ 'faq-item-active': accordionIds.includes(9) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="4"
              width="19"
              height="9"
            >
              <rect y="4" width="19" height="9" fill="url(#pattern1)" />
            </mask>
            <g mask="url(#mask1)">
              <rect y="4" width="19" height="9" fill="#0D6DD8" />
            </g>
            <defs>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image1"
                  transform="translate(0 -0.00240525) scale(0.00255102 0.00568513)"
                />
              </pattern>
              <image
                id="image1"
                width="392"
                height="227"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          Условия регистрации стримеров <span>Goodgame </span>
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
          :class="{ visible: accordionIds.includes(9) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит на основе внутреннего
            <a
              href="https://goodgame.ru/channels/rating/premiums"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              >рейтинга популярности Goodgame.ru</a
            >.
          </p>
          <p>
            Вы можете стать участником Стримфеста, продавать именные билеты и
            получать с них доход, если на момент подачи заявки:
          </p>
          <p>Для стримеров <b>игровой</b> тематики:</p>
          <ul>
            <li>
              <p>
                Вы входите в топ-20 рейтинга популярности.
              </p>
            </li>
          </ul>
          <p>
            Для стримеров <b>разговорной</b> тематики (IRL, Just Chatting,
            ASMR):
          </p>
          <ul>
            <li><p>вы входите в топ-30 рейтинга популярности.</p></li>
          </ul>
          <p>
            Для стримеров <b>творческой</b> тематики (музыкальные стримы,
            рисование, крафт, фитнес, шахматы и т.д.):
          </p>
          <ul>
            <li><p>вы входите в топ-60 рейтинга популярности.</p></li>
          </ul>
        </div>
        <button
          @click="toggleAccordion(10)"
          :class="{ 'faq-item-active': accordionIds.includes(10) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.4632 5.11605C16.4304 4.37217 16.3101 3.86077 16.1378 3.41762C15.96 2.94724 15.6865 2.52611 15.3282 2.17601C14.9781 1.82048 14.5542 1.54421 14.0893 1.36921C13.6436 1.19689 13.1348 1.0766 12.391 1.0438C11.6415 1.00823 11.4036 1 9.50284 1C7.60208 1 7.36416 1.00823 6.61751 1.04102C5.87364 1.07382 5.36223 1.19422 4.91919 1.36644C4.4487 1.54421 4.02757 1.8177 3.67748 2.17601C3.32194 2.52611 3.04578 2.95002 2.87068 3.41495C2.69836 3.86077 2.57806 4.3694 2.54527 5.11327C2.50969 5.8627 2.50146 6.10062 2.50146 8.00139C2.50146 9.90216 2.50969 10.1401 2.54249 10.8867C2.57529 11.6306 2.69569 12.142 2.86801 12.5852C3.04578 13.0555 3.32194 13.4767 3.67748 13.8268C4.02757 14.1823 4.45148 14.4586 4.91642 14.6336C5.36223 14.8059 5.87086 14.9262 6.61484 14.959C7.36139 14.9919 7.59941 15 9.50017 15C11.4009 15 11.6389 14.9919 12.3855 14.959C13.1294 14.9262 13.6408 14.8059 14.0838 14.6336C15.0247 14.2698 15.7686 13.5259 16.1323 12.5852C16.3046 12.1393 16.425 11.6306 16.4578 10.8867C16.4906 10.1401 16.4988 9.90216 16.4988 8.00139C16.4988 6.10062 16.496 5.8627 16.4632 5.11605ZM15.2025 10.832C15.1723 11.5158 15.0575 11.885 14.9618 12.1311C14.7265 12.741 14.2425 13.2251 13.6326 13.4603C13.3864 13.556 13.0145 13.6709 12.3335 13.7009C11.5951 13.7338 11.3736 13.7419 9.50562 13.7419C7.63765 13.7419 7.41341 13.7338 6.67766 13.7009C5.99393 13.6709 5.62472 13.556 5.37857 13.4603C5.07506 13.3482 4.79879 13.1704 4.57455 12.9379C4.34208 12.7109 4.16431 12.4374 4.05214 12.1339C3.95642 11.8877 3.84157 11.5158 3.81155 10.8348C3.77865 10.0964 3.77053 9.87481 3.77053 8.00684C3.77053 6.13887 3.77865 5.91463 3.81155 5.17898C3.84157 4.49525 3.95642 4.12603 4.05214 3.87989C4.16431 3.57627 4.34208 3.30011 4.57733 3.07576C4.80424 2.84329 5.07773 2.66552 5.38135 2.55345C5.62749 2.45773 5.99948 2.34289 6.68043 2.31276C7.41886 2.27996 7.64043 2.27174 9.50829 2.27174C11.379 2.27174 11.6005 2.27996 12.3363 2.31276C13.02 2.34289 13.3892 2.45773 13.6353 2.55345C13.9389 2.66552 14.2151 2.84329 14.4394 3.07576C14.6718 3.30278 14.8496 3.57627 14.9618 3.87989C15.0575 4.12603 15.1723 4.49792 15.2025 5.17898C15.2353 5.9174 15.2435 6.13887 15.2435 8.00684C15.2435 9.87481 15.2353 10.0936 15.2025 10.832ZM9.50274 4.40492C7.51726 4.40492 5.90633 6.01574 5.90633 8.00133C5.90633 9.98693 7.51726 11.5977 9.50274 11.5977C11.4883 11.5977 13.0992 9.98693 13.0992 8.00133C13.0992 6.01574 11.4883 4.40492 9.50274 4.40492ZM9.50274 10.3342C8.21466 10.3342 7.16984 9.28952 7.16984 8.00133C7.16984 6.71315 8.21466 5.66843 9.50274 5.66843C10.7909 5.66843 11.8356 6.71315 11.8356 8.00133C11.8356 9.28952 10.7909 10.3342 9.50274 10.3342ZM13.2414 5.10243C13.7052 5.10243 14.0811 4.72649 14.0811 4.26283C14.0811 3.79907 13.7052 3.42323 13.2414 3.42323C12.7778 3.42323 12.4018 3.79907 12.4018 4.26283C12.4018 4.72649 12.7778 5.10243 13.2414 5.10243Z"
              fill="#0D6DD8"
            />
          </svg>
          Условия регистрации стримеров <span>Instagram </span>
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
          :class="{ visible: accordionIds.includes(10) }"
          class="faq-item__inner"
        >
          <p>
            Ключевое условие: на вашем канале в Instagram должен регулярно
            выходить live-контент, востребованный вашей аудиторией.
          </p>
          <p>
            Регистрация участников происходит на основе контент-анализа
            аккаунтов: организаторы Стримфеста отберут до 20&nbsp;самых
            популярных стримеров в Instagram из числа поданных заявок.
          </p>
        </div>
        <button
          @click="toggleAccordion(11)"
          :class="{ 'faq-item-active': accordionIds.includes(11) }"
          class="faq-item"
        >
          <svg
            class="faq-icon"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2419 2.67874C12.2419 1.19977 11.2746 0 9.50002 0C7.72351 0 6.82031 1.19977 6.82031 2.67874V3.31769H12.2415V2.67874H12.2419Z"
              fill="#0D6DD8"
            />
            <path
              d="M9.50002 9.64299C11.2746 9.64299 12.2419 8.44419 12.2419 6.96521V3.78592H6.82031V6.96473C6.82031 8.44419 7.72351 9.64299 9.50002 9.64299Z"
              fill="#0D6DD8"
            />
            <path
              d="M13.2502 3.21448V6.9652C13.2502 9.03297 11.8629 10.715 9.49997 10.715C7.13708 10.715 5.74973 9.03297 5.74973 6.9652V3.21448C5.15225 2.61701 4.67871 3.21448 4.67871 3.21448V6.95508C4.67871 6.95845 4.67871 6.96135 4.67871 6.9652C4.67871 9.44624 6.55407 11.4884 8.96422 11.7551V13.4193L6.82894 13.4241L6.28451 15H12.5389L12.0061 13.4178L10.0352 13.4183V11.7542C12.4463 11.487 14.3207 9.44527 14.3207 6.96424H14.3217V3.21448C13.664 2.55818 13.2502 3.21448 13.2502 3.21448Z"
              fill="#0D6DD8"
            />
          </svg>

          Я веду интересный подкаст, как мне стать участником фестиваля?
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
          :class="{ visible: accordionIds.includes(11) }"
          class="faq-item__inner"
        >
          <p>
            <a href="mailto:mike@streamfest.ru" class="link">Напишите нам!</a> В
            этом году мы впервые приглашаем на фестиваль не только стримеров, но
            и подкастеров. Лучшие подкаст-команды смогут вживую встретиться с
            преданной аудиторией, провести конкурсы и записать новые выпуски
            своих шоу с участием публики и при техническом содействии
            Стримфеста.
          </p>
          <p>
            Организаторы Стримфеста отберут в участники до 25&nbsp;самых
            популярных подкаст-проектов из числа поданных заявок. Все остальные
            заявители получат бесплатные билеты на оба дня фестиваля.
            Подкастеры,&nbsp;вливайтесь в Стримфест!
          </p>
        </div>
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
            ><span class="split">Задайте их в личку </span
            ><svg
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
  components: {
    Subscribe
  },
  scrollToTop: true,
  data() {
    return {
      accordionIds: [1, 2]
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
