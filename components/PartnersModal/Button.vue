<template>
 <div class="partners-btn">
          <button @click="$store.dispatch('partnersModal/open')" class="btn btn--red btn--big">
            Хочу стать партнером
          </button>
        </div>
</template>

<script>
export default {
name: 'PartnersModalButton'
}
</script>