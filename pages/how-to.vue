<template>
  <section class="faq faq--how-to">
    <div class="pattern-bg "></div>
    <div class="container">
      <div class="faq-banner">
        <img src="/SU.png" alt="" />
      </div>
      <div class="section-header">КАК СТАТЬ УЧАСТНИКОМ СТРИМФЕСТА 2021</div>
      <div class="faq-items">
        <button
          @click="toggleAccordion(1)"
          :class="{ 'faq-item-active': accordionIds.includes(1) }"
          class="faq-item"
        >
          <svg class="faq-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip2)">
              <path d="M8.54894 0.927052C8.8483 0.0057416 10.1517 0.00573945 10.4511 0.92705L11.6329 4.56434C11.7668 4.97636 12.1507 5.25532 12.5839 5.25532H16.4084C17.3771 5.25532 17.7799 6.49494 16.9962 7.06434L13.9021 9.31231C13.5516 9.56695 13.405 10.0183 13.5389 10.4303L14.7207 14.0676C15.02 14.9889 13.9656 15.7551 13.1818 15.1857L10.0878 12.9377C9.7373 12.6831 9.2627 12.6831 8.91222 12.9377L5.81815 15.1857C5.03444 15.7551 3.97996 14.9889 4.27931 14.0676L5.46114 10.4303C5.59501 10.0183 5.44835 9.56695 5.09787 9.31231L2.00381 7.06434C1.22009 6.49494 1.62287 5.25532 2.59159 5.25532H6.41606C6.84929 5.25532 7.23324 4.97636 7.36712 4.56434L8.54894 0.927052Z" fill="#0D6DD8"/>
            </g>
            <defs>
              <clipPath id="clip2">
                <rect width="20" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          Что дает статус участника фестиваля?
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
            которые могут предложить ему специальные активности на Стримфесте&nbsp;2021 за дополнительное вознаграждение.
          </p>
        </div>
        <button
          @click="toggleAccordion(2)"
          :class="{ 'faq-item-active': accordionIds.includes(2) }"
          class="faq-item"
        >
          <svg class="faq-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip1)">
              <path d="M8.54894 0.927052C8.8483 0.0057416 10.1517 0.00573945 10.4511 0.92705L11.6329 4.56434C11.7668 4.97636 12.1507 5.25532 12.5839 5.25532H16.4084C17.3771 5.25532 17.7799 6.49494 16.9962 7.06434L13.9021 9.31231C13.5516 9.56695 13.405 10.0183 13.5389 10.4303L14.7207 14.0676C15.02 14.9889 13.9656 15.7551 13.1818 15.1857L10.0878 12.9377C9.7373 12.6831 9.2627 12.6831 8.91222 12.9377L5.81815 15.1857C5.03444 15.7551 3.97996 14.9889 4.27931 14.0676L5.46114 10.4303C5.59501 10.0183 5.44835 9.56695 5.09787 9.31231L2.00381 7.06434C1.22009 6.49494 1.62287 5.25532 2.59159 5.25532H6.41606C6.84929 5.25532 7.23324 4.97636 7.36712 4.56434L8.54894 0.927052Z" fill="#0D6DD8"/>
            </g>
            <defs>
              <clipPath id="clip1">
                <rect width="20" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          Я стример или подкастер, как мне стать участником фестиваля?
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
            или на&nbsp;<a
              href="mailto:mike@streamfest.ru"
              class="link"
              >mike@streamfest.ru</a
            >.
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
                половины эфирного времени стримера была посвящена видеоиграм, то
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
                существовать дольше 6&nbsp;месяцев, а стримы на нем должны проходить
                не реже 3&nbsp;раз в неделю. Это общее требование для всех
                заявителей.
              </p>
            </li>
            <li>
              <p>
                <b>Отсутствие накруток:</b> заявитель не должен применять ботов
                для улучшения своей статистики. Мы&nbsp;выявляем «накрутчиков» с
                помощью различных web-сервисов и ручного контент-анализа, а
                также оцениваем спорных кандидатов совместно с менеджерами
                стрим-платформ и аналитиками сервиса
                <a href="https://streamscharts.com/" class="link" target="_blank"
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
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2.78333V13.9127H5.83267V16H7.92533L10.0147 13.912H13.1513L17.334 9.74V0H3.04467L2 2.78333ZM4.43867 1.39H15.94V9.04267L13.5 11.4773H9.666L7.57667 13.562V11.4773H4.43867V1.39Z" fill="#0D6DD8"/>
            <path d="M8.27344 4.17468H9.66677V8.34802H8.27344V4.17468Z" fill="#0D6DD8"/>
            <path d="M12.1052 4.17468H13.4992V8.34802H12.1052V4.17468Z" fill="#0D6DD8"/>
          </svg>

          Условия регистрации стримеров <span>Twitch.tv </span>
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
                На вашем канале больше 20&nbsp;000&nbsp;фолловеров, а средний онлайн ваших
                стримов за последний год превышает 100&nbsp;человек (по данным
                независимого сервиса
                <a href="https://sullygnome.com/" class="link" target="_blank"
            rel="noopener noreferrer">SullyGnome</a>).
              </p>
            </li>
            <li>
              <p>
                На вашем канале больше 12&nbsp;000&nbsp;фолловеров, а средний онлайн ваших
                стримов за последний год превышает 250&nbsp;человек (по данным
                независимого сервиса SullyGnome).
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
                На вашем канале больше 12&nbsp;000 фолловеров, а средний онлайн ваших
                стримов за последний год превышает 80&nbsp;человек (по данным
                независимого сервиса SullyGnome).
              </p>
            </li>
            <li>
              <p>
                На вашем канале больше 8000&nbsp;фолловеров, а средний онлайн ваших
                стримов за последний год превышает 200&nbsp;человек (по данным
                независимого сервиса SullyGnome).
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
                На вашем канале больше 3000&nbsp;фолловеров, а средний онлайн ваших
                стримов за последний год превышает 30&nbsp;человек (по данным
                независимого сервиса SullyGnome).
              </p>
            </li>
          </ul>
        </div>
        <button
          @click="toggleAccordion(4)"
          :class="{ 'faq-item-active': accordionIds.includes(4) }"
          class="faq-item"
        >
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6909 4.72124C16.5181 4.04818 16.0114 3.51762 15.3689 3.33638C14.1951 3 9.49983 3 9.49983 3C9.49983 3 4.80472 3 3.63092 3.32363C3.00076 3.50467 2.48175 4.04828 2.3089 4.72124C2 5.95056 2 8.5 2 8.5C2 8.5 2 11.0623 2.3089 12.2788C2.48193 12.9517 2.98841 13.4823 3.63102 13.6635C4.81708 14 9.50001 14 9.50001 14C9.50001 14 14.1951 14 15.3689 13.6764C16.0115 13.4952 16.5181 12.9647 16.6911 12.2917C16.9999 11.0623 16.9999 8.51295 16.9999 8.51295C16.9999 8.51295 17.0123 5.95056 16.6909 4.72124ZM8.00496 10.8553V6.14473L11.9093 8.5L8.00496 10.8553Z" fill="black"/>
            <path d="M16.6909 4.72124C16.5181 4.04818 16.0114 3.51762 15.3689 3.33638C14.1951 3 9.49983 3 9.49983 3C9.49983 3 4.80472 3 3.63092 3.32363C3.00076 3.50467 2.48175 4.04828 2.3089 4.72124C2 5.95056 2 8.5 2 8.5C2 8.5 2 11.0623 2.3089 12.2788C2.48193 12.9517 2.98841 13.4823 3.63102 13.6635C4.81708 14 9.50001 14 9.50001 14C9.50001 14 14.1951 14 15.3689 13.6764C16.0115 13.4952 16.5181 12.9647 16.6911 12.2917C16.9999 11.0623 16.9999 8.51295 16.9999 8.51295C16.9999 8.51295 17.0123 5.95056 16.6909 4.72124ZM8.00496 10.8553V6.14473L11.9093 8.5L8.00496 10.8553Z" fill="#0D6DD8"/>
          </svg>

          Условия регистрации стримеров <span>YouTube </span>
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
                На вашем канале больше 50&nbsp;000 подписчиков, а среднее количество
                просмотров канала за последний месяц — от 1700 человек в эфирный
                день (по данным независимого сервиса
                <a href="https://socialblade.com/" class="link" target="_blank"
            rel="noopener noreferrer">Socialblade</a>)
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
                На вашем канале больше 35&nbsp;000&nbsp;подписчиков, а среднее количество
                просмотров канала за последний месяц — от 1200&nbsp;человек в эфирный
                день (по данным независимого сервиса Socialblade).
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
                На вашем канале больше 20&nbsp;000&nbsp;подписчиков, а среднее количество
                просмотров канала за последний месяц — от 600&nbsp;человек в эфирный
                день (по данным независимого сервиса Socialblade).
              </p>
            </li>
          </ul>
        </div>
        <button
          @click="toggleAccordion(5)"
          :class="{ 'faq-item-active': accordionIds.includes(5) }"
          class="faq-item"
        >
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.993 4.50541C15.1473 4.50541 14.3669 4.24031 13.7403 3.7931C13.0216 3.28043 12.5052 2.52841 12.3229 1.66165C12.2777 1.44749 12.2534 1.22648 12.2511 1H9.83512V7.2462L9.83222 10.6675C9.83222 11.5822 9.20269 12.3578 8.33002 12.6306C8.07675 12.7097 7.80323 12.7472 7.51842 12.7324C7.15488 12.7135 6.8142 12.6097 6.5181 12.4421C5.88798 12.0856 5.46077 11.4387 5.44919 10.6988C5.43095 9.54224 6.41911 8.59934 7.64056 8.59934C7.88167 8.59934 8.11322 8.63659 8.33002 8.70423V6.99699V6.38327C8.10136 6.35123 7.86864 6.33452 7.63333 6.33452C6.29639 6.33452 5.04599 6.86033 4.15219 7.80761C3.47663 8.52348 3.07141 9.43681 3.00889 10.3945C2.92698 11.6526 3.41354 12.8486 4.35712 13.7309C4.49576 13.8605 4.64135 13.9807 4.7936 14.0916C5.60259 14.6807 6.59162 15 7.63333 15C7.86864 15 8.10136 14.9836 8.33002 14.9515C9.30312 14.8151 10.201 14.3937 10.9095 13.7309C11.7802 12.9167 12.2612 11.8358 12.2664 10.6853L12.254 5.5762C12.6693 5.87936 13.1235 6.13022 13.6109 6.32493C14.369 6.62755 15.1727 6.78091 16 6.78064V5.12077V4.50486C16.0005 4.50541 15.9936 4.50541 15.993 4.50541Z" fill="#0D6DD8"/>
          </svg>
          Условия регистрации стримеров <span>TikTok </span>
        </button>
        <div
          :class="{ visible: accordionIds.includes(5) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a href="https://www.tiktok.com/ru-RU/" class="link" target="_blank"
            rel="noopener noreferrer">TikTok</a>.
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
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8485 11.9194C17.8028 11.8405 17.5201 11.2073 16.16 9.90591C14.7362 8.54315 14.9274 8.76443 16.6424 6.40809C17.687 4.97303 18.1046 4.09665 17.9739 3.722C17.8495 3.36488 17.0813 3.45909 17.0813 3.45909L14.5269 3.47443C14.5269 3.47443 14.3377 3.44814 14.1964 3.53468C14.0593 3.62013 13.9711 3.81731 13.9711 3.81731C13.9711 3.81731 13.5663 4.92811 13.0265 5.8724C11.8885 7.86505 11.4326 7.97022 11.2467 7.84643C10.8142 7.55832 10.9226 6.68743 10.9226 6.06959C10.9226 4.13828 11.2063 3.33311 10.369 3.12498C10.0906 3.05596 9.88658 3.00995 9.17571 3.00228C8.26402 2.99242 7.49153 3.00557 7.05481 3.22576C6.76366 3.37255 6.53946 3.7001 6.67653 3.71872C6.84548 3.74172 7.22801 3.82498 7.43096 4.1098C7.69342 4.47678 7.68385 5.30276 7.68385 5.30276C7.68385 5.30276 7.83474 7.57585 7.33214 7.85848C6.9868 8.05238 6.51395 7.65692 5.49919 5.8483C4.97959 4.92263 4.58644 3.89837 4.58644 3.89837C4.58644 3.89837 4.511 3.70776 4.37605 3.60589C4.21241 3.4821 3.98289 3.44266 3.98289 3.44266L1.55384 3.458C1.55384 3.458 1.18938 3.46895 1.05549 3.63218C0.936483 3.77787 1.04593 4.07803 1.04593 4.07803C1.04593 4.07803 2.94794 8.66474 5.10073 10.9773C7.07606 13.097 9.3181 12.9579 9.3181 12.9579H10.3339C10.3339 12.9579 10.641 12.9228 10.7972 12.7486C10.9417 12.5887 10.9364 12.2885 10.9364 12.2885C10.9364 12.2885 10.9162 10.8831 11.5495 10.676C12.1732 10.4723 12.9744 12.0344 13.8234 12.6358C14.4652 13.0904 14.953 12.9907 14.953 12.9907L17.2237 12.9579C17.2237 12.9579 18.4116 12.8823 17.8485 11.9194Z" fill="#0D6DD8"/>
          </svg>
          Условия регистрации стримеров <span>VK </span>
        </button>
        <div
          :class="{ visible: accordionIds.includes(6) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a href="https://vk.com/" class="link" target="_blank"
            rel="noopener noreferrer">VK</a>.
          </p>
          <p>
            Организаторы Стримфеста совместно с VK отберут из числа заявителей
            до 30&nbsp;самых популярных стримеров и подкастеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(7)"
          :class="{ 'faq-item-active': accordionIds.includes(7) }"
          class="faq-item"
        >
          <img class="faq-item__img-5 faq-icon" src="/OK_ico.png" alt/>
          Условия регистрации стримеров <span>OK </span>
        </button>
        <div
          :class="{ visible: accordionIds.includes(7) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a href="https://ok.ru/" class="link" target="_blank"
            rel="noopener noreferrer">OK</a>.
          </p>
          <p>
            Организаторы Стримфеста совместно с OK отберут из числа заявителей
            до 20&nbsp;самых популярных стримеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(8)"
          :class="{ 'faq-item-active': accordionIds.includes(8) }"
          class="faq-item"
        >
          <img class="faq-item__img-2 faq-icon" src="/wasd_ico.png" alt/>
          Условия регистрации стримеров <span>WASD </span>
        </button>
        <div
          :class="{ visible: accordionIds.includes(8) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит по согласованию с менеджерами платформы
            <a href="https://wasd.tv/" class="link" target="_blank"
            rel="noopener noreferrer">WASD</a>.
          </p>
          <p>
            Организаторы Стримфеста совместно с WASD отберут из числа заявителей
            до 20&nbsp;самых популярных стримеров.
          </p>
        </div>
        <button
          @click="toggleAccordion(9)"
          :class="{ 'faq-item-active': accordionIds.includes(9) }"
          class="faq-item"
        >
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="4" width="19" height="9">
              <rect y="4" width="19" height="9" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0)">
              <rect y="4" width="19" height="9" fill="#0D6DD8"/>
            </g>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="translate(0 -0.00240525) scale(0.00255102 0.00568513)"/>
              </pattern>
              <image id="image0" width="392" height="227" xlink:href="data:image/png;base64,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"/>
            </defs>
          </svg>

          Условия регистрации стримеров <span>Goodgame </span>
        </button>
        <div
          :class="{ visible: accordionIds.includes(9) }"
          class="faq-item__inner"
        >
          <p>
            Регистрация происходит на основе внутреннего
            <a href="https://goodgame.ru/channels/rating/premiums" class="link" target="_blank"
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
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4632 5.11605C16.4304 4.37217 16.3101 3.86077 16.1378 3.41762C15.96 2.94724 15.6865 2.52611 15.3282 2.17601C14.9781 1.82048 14.5542 1.54421 14.0893 1.36921C13.6436 1.19689 13.1348 1.0766 12.391 1.0438C11.6415 1.00823 11.4036 1 9.50284 1C7.60208 1 7.36416 1.00823 6.61751 1.04102C5.87364 1.07382 5.36223 1.19422 4.91919 1.36644C4.4487 1.54421 4.02757 1.8177 3.67748 2.17601C3.32194 2.52611 3.04578 2.95002 2.87068 3.41495C2.69836 3.86077 2.57806 4.3694 2.54527 5.11327C2.50969 5.8627 2.50146 6.10062 2.50146 8.00139C2.50146 9.90216 2.50969 10.1401 2.54249 10.8867C2.57529 11.6306 2.69569 12.142 2.86801 12.5852C3.04578 13.0555 3.32194 13.4767 3.67748 13.8268C4.02757 14.1823 4.45148 14.4586 4.91642 14.6336C5.36223 14.8059 5.87086 14.9262 6.61484 14.959C7.36139 14.9919 7.59941 15 9.50017 15C11.4009 15 11.6389 14.9919 12.3855 14.959C13.1294 14.9262 13.6408 14.8059 14.0838 14.6336C15.0247 14.2698 15.7686 13.5259 16.1323 12.5852C16.3046 12.1393 16.425 11.6306 16.4578 10.8867C16.4906 10.1401 16.4988 9.90216 16.4988 8.00139C16.4988 6.10062 16.496 5.8627 16.4632 5.11605ZM15.2025 10.832C15.1723 11.5158 15.0575 11.885 14.9618 12.1311C14.7265 12.741 14.2425 13.2251 13.6326 13.4603C13.3864 13.556 13.0145 13.6709 12.3335 13.7009C11.5951 13.7338 11.3736 13.7419 9.50562 13.7419C7.63765 13.7419 7.41341 13.7338 6.67766 13.7009C5.99393 13.6709 5.62472 13.556 5.37857 13.4603C5.07506 13.3482 4.79879 13.1704 4.57455 12.9379C4.34208 12.7109 4.16431 12.4374 4.05214 12.1339C3.95642 11.8877 3.84157 11.5158 3.81155 10.8348C3.77865 10.0964 3.77053 9.87481 3.77053 8.00684C3.77053 6.13887 3.77865 5.91463 3.81155 5.17898C3.84157 4.49525 3.95642 4.12603 4.05214 3.87989C4.16431 3.57627 4.34208 3.30011 4.57733 3.07576C4.80424 2.84329 5.07773 2.66552 5.38135 2.55345C5.62749 2.45773 5.99948 2.34289 6.68043 2.31276C7.41886 2.27996 7.64043 2.27174 9.50829 2.27174C11.379 2.27174 11.6005 2.27996 12.3363 2.31276C13.02 2.34289 13.3892 2.45773 13.6353 2.55345C13.9389 2.66552 14.2151 2.84329 14.4394 3.07576C14.6718 3.30278 14.8496 3.57627 14.9618 3.87989C15.0575 4.12603 15.1723 4.49792 15.2025 5.17898C15.2353 5.9174 15.2435 6.13887 15.2435 8.00684C15.2435 9.87481 15.2353 10.0936 15.2025 10.832ZM9.50274 4.40492C7.51726 4.40492 5.90633 6.01574 5.90633 8.00133C5.90633 9.98693 7.51726 11.5977 9.50274 11.5977C11.4883 11.5977 13.0992 9.98693 13.0992 8.00133C13.0992 6.01574 11.4883 4.40492 9.50274 4.40492ZM9.50274 10.3342C8.21466 10.3342 7.16984 9.28952 7.16984 8.00133C7.16984 6.71315 8.21466 5.66843 9.50274 5.66843C10.7909 5.66843 11.8356 6.71315 11.8356 8.00133C11.8356 9.28952 10.7909 10.3342 9.50274 10.3342ZM13.2414 5.10243C13.7052 5.10243 14.0811 4.72649 14.0811 4.26283C14.0811 3.79907 13.7052 3.42323 13.2414 3.42323C12.7778 3.42323 12.4018 3.79907 12.4018 4.26283C12.4018 4.72649 12.7778 5.10243 13.2414 5.10243Z" fill="#0D6DD8"/>
          </svg>
          Условия регистрации стримеров <span>Instagram </span>
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
            аккаунтов: организаторы Стримфеста отберут до 20&nbsp;самых популярных
            стримеров в Instagram из числа поданных заявок.
          </p>
        </div>
        <button
          @click="toggleAccordion(11)"
          :class="{ 'faq-item-active': accordionIds.includes(11) }"
          class="faq-item"
        >
          <svg class="faq-icon" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2419 2.67874C12.2419 1.19977 11.2746 0 9.50002 0C7.72351 0 6.82031 1.19977 6.82031 2.67874V3.31769H12.2415V2.67874H12.2419Z" fill="#0D6DD8"/>
            <path d="M9.50002 9.64299C11.2746 9.64299 12.2419 8.44419 12.2419 6.96521V3.78592H6.82031V6.96473C6.82031 8.44419 7.72351 9.64299 9.50002 9.64299Z" fill="#0D6DD8"/>
            <path d="M13.2502 3.21448V6.9652C13.2502 9.03297 11.8629 10.715 9.49997 10.715C7.13708 10.715 5.74973 9.03297 5.74973 6.9652V3.21448C5.15225 2.61701 4.67871 3.21448 4.67871 3.21448V6.95508C4.67871 6.95845 4.67871 6.96135 4.67871 6.9652C4.67871 9.44624 6.55407 11.4884 8.96422 11.7551V13.4193L6.82894 13.4241L6.28451 15H12.5389L12.0061 13.4178L10.0352 13.4183V11.7542C12.4463 11.487 14.3207 9.44527 14.3207 6.96424H14.3217V3.21448C13.664 2.55818 13.2502 3.21448 13.2502 3.21448Z" fill="#0D6DD8"/>
          </svg>

          Я веду интересный подкаст, как мне стать участником фестиваля?
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
            Организаторы Стримфеста отберут в участники до 25&nbsp;самых популярных
            подкаст-проектов из числа поданных заявок. Все остальные заявители
            получат бесплатные билеты на оба дня фестиваля.
            Подкастеры,&nbsp;вливайтесь в Стримфест!
          </p>
        </div>
        <div class="faq-item-last">
          <h3 class="faq-item">У меня остались вопросы!</h3>
          <p class="mobile-hidden">
            Прекрасно, задайте их личным сообщением в нашей
            <a href="https://vk.com/streamfest" class="link" target="_blank"
            rel="noopener noreferrer">группе VK.</a>
          </p>
          <a href="https://vk.com/streamfest" class="btn btn--vk" target="_blank"
             rel="noopener noreferrer">Задайте их в личку <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.6791 25.8387C35.5824 25.681 34.9838 24.4146 32.1036 21.8118C29.0884 19.0863 29.4934 19.5289 33.1252 14.8162C35.3371 11.9461 36.2214 10.1933 35.9446 9.44401C35.6814 8.72977 34.0545 8.91819 34.0545 8.91819L28.6451 8.94886C28.6451 8.94886 28.2446 8.89628 27.9453 9.06936C27.655 9.24025 27.4683 9.63462 27.4683 9.63462C27.4683 9.63462 26.611 11.8562 25.4679 13.7448C23.0579 17.7301 22.0926 17.9404 21.6988 17.6929C20.783 17.1166 21.0125 15.3749 21.0125 14.1392C21.0125 10.2766 21.6133 8.66623 19.8402 8.24995C19.2507 8.11192 18.8186 8.0199 17.3133 8.00457C15.3826 7.98485 13.7468 8.01114 12.8219 8.45152C12.2054 8.7451 11.7306 9.40019 12.0209 9.43744C12.3787 9.48345 13.1887 9.64996 13.6185 10.2196C14.1743 10.9536 14.154 12.6055 14.154 12.6055C14.154 12.6055 14.4736 17.1517 13.4092 17.717C12.6779 18.1048 11.6766 17.3138 9.5277 13.6966C8.42737 11.8453 7.59481 9.79675 7.59481 9.79675C7.59481 9.79675 7.43505 9.41553 7.14928 9.21177C6.80275 8.9642 6.31672 8.88532 6.31672 8.88532L1.17284 8.91599C1.17284 8.91599 0.401032 8.9379 0.117511 9.26435C-0.134508 9.55575 0.0972595 10.1561 0.0972595 10.1561C0.0972595 10.1561 4.12506 19.3295 8.68389 23.9545C12.8669 28.194 17.6148 27.9157 17.6148 27.9157H19.766C19.766 27.9157 20.4163 27.8456 20.747 27.4973C21.053 27.1774 21.0418 26.5771 21.0418 26.5771C21.0418 26.5771 20.999 23.7661 22.3401 23.352C23.661 22.9445 25.3576 26.0688 27.1555 27.2716C28.5146 28.1808 29.5474 27.9815 29.5474 27.9815L34.356 27.9157C34.356 27.9157 36.8717 27.7646 35.6791 25.8387Z" fill="white"/>
          </svg>
          </a>
        </div>
      </div>
    </div>
<!--    <Subscribe />-->
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
