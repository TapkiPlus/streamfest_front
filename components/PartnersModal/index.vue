<template>
    <div v-if="$store.state.partnersModal.visibility" class="partners-modal">
      <button @click="$store.dispatch('partnersModal/close')" class="partners-modal__close">
        ✖
      </button>
      <iframe
        class="partners-modal__iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeMR_dy_vI2fTg89_Qf8ssprOwOFiwIaPRdzIrm9-MPr8yUdA/viewform?embedded=true"
        loading="lazy"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >
    </div>
</template>

<script>
export default {
    name: 'PartnersModal'
}
</script>