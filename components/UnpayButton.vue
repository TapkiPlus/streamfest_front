<template>
    <div class="unpay-button" :class="{'unpay-button--long': day === 1}">
        <script src="https://unpay.club/external/button.js" async
                  :data-event_id="day"
                  data-width="211px"
                  :data-text="day === 1 ? 'Получить билет бесплатно от Альфа Банка' : 'Получить скидку - 1300р от Альфа Банка'"
                  data-color="inherit"
                  data-background="transparent"
                  data-border="none"
                  data-padding="0"
                  data-font_family="inherit"
                  data-font_size="inherit"
                  data-font_style="inherit">
              </script>
    </div>
</template>

<script>
export default {
    name: 'UnpayButton',
    props: {
        day: {
            type: Number,
            required: true
        }
    }
}
</script>