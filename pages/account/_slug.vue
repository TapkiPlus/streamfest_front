<template>
  <section class="account">
    <div class="container">
      <div class="section-header">Личный кабинет участника {{stats.streamer && stats.streamer.nickName}}</div>
    </div>
    <div class="container p0">
      <div class="report">
        <div class="report__header">
          <div class="report__title">Отчет о купленных билетах</div>
          <div class="report__filter">
            <label class="report__filter-custom" >

              <input type="radio" :value="0" name="period" :checked="periodInputChecked" @input="getPeriodStats">
              <span class="radio"></span>
              За промежуток
              <span class="report__filter-date--wrapper"> c
<!--                <span class="report__filter-date">-->
<!--                  {{ value1[0] }}-->
<!--                </span>-->
<!--                по-->
<!--                <span class="report__filter-date">{{ value1[1] }}</span>-->
                <date-picker
                  v-model="datePickerModel"
                  format="DD.MM.YY"
                  range-separator=" по "
                  range
                  type="date"
                  :disabled-date="disabledAfterToday"
                  :clearable="false"
                  @open="periodInputChecked = true"
                  @input="getPeriodStats"
                  >
                <template slot="icon-calendar">
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00002 3.75H5.05204C5.56985 3.75 5.98956 3.33033 5.98956 2.81248V2.5V0.937516C5.98956 0.419673 5.56985 0 5.05204 0H5.00002C4.48221 0 4.0625 0.419673 4.0625 0.937516V2.5V2.81248C4.0625 3.33033 4.48221 3.75 5.00002 3.75Z" fill="#0D6DD8"/>
                    <path d="M14.6875 3.75H14.7396C15.2574 3.75 15.6771 3.33033 15.6771 2.81248V2.5V0.937516C15.677 0.419673 15.2574 0 14.7395 0H14.6875C14.1697 0 13.75 0.419673 13.75 0.937516V2.5V2.81248C13.75 3.33033 14.1697 3.75 14.6875 3.75Z" fill="#0D6DD8"/>
                    <path d="M17.5 2.5H16.6145V2.81248C16.6145 3.84641 15.7734 4.68748 14.7395 4.68748H14.6875C13.6536 4.68748 12.8125 3.84641 12.8125 2.81248V2.5H6.92703V2.81248C6.92703 3.84641 6.08592 4.68748 5.05203 4.68748H5C3.96608 4.68748 3.125 3.84641 3.125 2.81248V2.5H2.5C1.11938 2.5 0 3.61938 0 5V17.5C0 18.8806 1.11938 20 2.5 20H17.5C18.8806 20 20 18.8806 20 17.5V5C20 3.61938 18.8806 2.5 17.5 2.5ZM18.75 17.5C18.75 18.1897 18.1897 18.75 17.5 18.75H2.5C1.81095 18.75 1.25 18.1897 1.25 17.5V7.5H18.75V17.5Z" fill="#0D6DD8"/>
                    <path d="M5.00141 12.1615C5.85004 12.1615 6.53798 11.4736 6.53798 10.6249C6.53798 9.77632 5.85004 9.08838 5.00141 9.08838C4.15279 9.08838 3.46484 9.77632 3.46484 10.6249C3.46484 11.4736 4.15279 12.1615 5.00141 12.1615Z" fill="#0D6DD8"/>
                    <path d="M10.0014 12.1615C10.85 12.1615 11.538 11.4736 11.538 10.6249C11.538 9.77632 10.85 9.08838 10.0014 9.08838C9.15279 9.08838 8.46484 9.77632 8.46484 10.6249C8.46484 11.4736 9.15279 12.1615 10.0014 12.1615Z" fill="#0D6DD8"/>
                    <path d="M15.0014 12.1615C15.85 12.1615 16.538 11.4736 16.538 10.6249C16.538 9.77632 15.85 9.08838 15.0014 9.08838C14.1528 9.08838 13.4648 9.77632 13.4648 10.6249C13.4648 11.4736 14.1528 12.1615 15.0014 12.1615Z" fill="#0D6DD8"/>
                    <path d="M5.00141 17.1615C5.85004 17.1615 6.53798 16.4736 6.53798 15.6249C6.53798 14.7763 5.85004 14.0884 5.00141 14.0884C4.15279 14.0884 3.46484 14.7763 3.46484 15.6249C3.46484 16.4736 4.15279 17.1615 5.00141 17.1615Z" fill="#0D6DD8"/>
                    <path d="M10.0014 17.1615C10.85 17.1615 11.538 16.4736 11.538 15.6249C11.538 14.7763 10.85 14.0884 10.0014 14.0884C9.15279 14.0884 8.46484 14.7763 8.46484 15.6249C8.46484 16.4736 9.15279 17.1615 10.0014 17.1615Z" fill="#0D6DD8"/>
                    <path d="M15.0014 17.1615C15.85 17.1615 16.538 16.4736 16.538 15.6249C16.538 14.7763 15.85 14.0884 15.0014 14.0884C14.1528 14.0884 13.4648 14.7763 13.4648 15.6249C13.4648 16.4736 14.1528 17.1615 15.0014 17.1615Z" fill="#0D6DD8"/>
                  </svg>
                </template>
              </date-picker>
              </span>

            </label>

            <label>
              <input type="radio" value="all" name="period" checked @input="getStats">
              <span class="radio"></span>
              За всё время
            </label>
          </div>
        </div>
        <div class="report__body">
          <div class="table table--report">
            <div class="table__header">
              <div class="table__row">
                <div class="table__cell">Тип билета</div>
                <div class="table__cell">Количество</div>
              </div>
            </div>
            <template v-if="stats.summary && stats.summary.length">
            <div class="table__body">
              <div v-for="({type, qty}, index) in stats.summary" :key="index" class="table__row">
                <div class="table__cell">
                  <img class="ticket-icon" :src="type === 1 ? '/oneday-star.svg' : '/twoday-star.svg'" alt=""/>
                  <div class="ticket-info">
                    Билет на Стримфест 2021 на {{type}} день от {{stats.streamer.nickName}}
                  </div>
                </div>
                <div class="table__cell">{{qty}}</div>
              </div>
            </div>
            <div class="table__footer">
              <div class="table__row">
                <div class="table__cell">
                  Итого
                </div>
                <div class="table__cell">{{getTotalPrice()}}</div>
              </div>
            </div>
            </template>
          </div>
        </div>
      </div>

      <div class="report">
        <div class="report__header">
          <div class="report__title">Информация о покупателях</div>

        </div>
        <div class="report--overlay">
          <div class="report__body">
            <div class="table table--buyers">
              <div class="table__header">
                <div class="table__row">
                  <div class="table__cell">№ заказа</div>
                  <div class="table__cell">Дата и время покупки</div>
                  <div class="table__cell">Билетов в заказе</div>
                  <div class="table__cell">Имя покупателя</div>
                  <div class="table__cell">Email покупателя</div>
                </div>
              </div>
              <div class="table__body">
                <template v-if="stats.items && stats.items.length">
<div class="table__row"  v-for="({order_pk, when_paid, qty, name, email}, index) in stats.items" :key="index">
                  <div class="table__cell"> {{order_pk }}</div>
                  <div class="table__cell">{{ new Date(when_paid).toLocaleString() }}</div>
                  <div class="table__cell">{{ (qty).toLocaleString()}}</div>
                  <div class="table__cell">{{name}}</div>
                  <div class="table__cell">{{email }}</div>
                </div>
                </template>
<div class="table__row table-empty" v-else>
                  <div class="table__cell ">
                    Здесь будет список посетителей, которые купили ваш билет.
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/ru';
	export default {
		name: "account",
    head() {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    components: {
      DatePicker
    },
    data() {
		  return {
        stats: {},
        periodInputChecked: false,
        datePickerModel: [new Date(2021, 0, 1), new Date()],
      }
    },
    created() {
      this.getStats()
    },
    methods: {
      async getStats(obj = {}) {
            try {
              const {data} = await this.$axios.post('/api/get_streamer_stats',{
              streamer_uuid: this.$route.params.slug,
              ...obj
            })
            this.stats = data;
            } catch (err) {
              this.$nuxt.error({ statusCode: 404, message: 'Streamer no found' })
            }
      },
      getTotalPrice() {
       return (this.stats.summary[0].amt + this.stats.summary[1].amt).toLocaleString()
      },
      disabledAfterToday(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date > today;
      },
      getPeriodStats() {
        const from = new Date(this.datePickerModel[0]);
        const till = new Date(this.datePickerModel[1]);
        this.getStats({
                from: new Date(from.getFullYear(), from.getMonth(), from.getDate(), 4, 0, 0),
                till: new Date(till.getFullYear(), till.getMonth(), till.getDate() + 1, 4, 0, 0)
              })
      }
    }
	}
</script>
