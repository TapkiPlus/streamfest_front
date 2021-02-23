<template>
    <nuxt-link :to="`/streamers/${name_slug}`">
  <div  class="streamers-item">
    <el-image :src="image" lazy></el-image>
    <p class="streamers-item__nick">{{ nickname }}</p>
    <p class="streamers-item__fio">{{ name }}</p>
  </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["image", "nickname", "name", "name_slug"],
  data() {
    return {};
  },
};
</script>
