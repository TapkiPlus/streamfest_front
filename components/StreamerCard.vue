<template>
  <nuxt-link :to="`/${name_slug}`">
    <div class="streamers-item">
      <img :src="image" loading="lazy" />
      <p class="streamers-item__nick">{{ nickname }}</p>
      <p class="streamers-item__fio">{{ name }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["image", "nickname", "name", "name_slug"]
};
</script>
