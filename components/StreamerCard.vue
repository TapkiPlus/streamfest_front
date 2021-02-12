<template>
  <div @click="$router.push(`/streamers/${name_slug}`)" class="streamers-item">
    <el-image :src="image" lazy></el-image>
    <p class="streamers-item__nick" >{{nickname}}</p>
    <p class="streamers-item__fio">{{name}}</p>
  </div>
</template>

<script>
export default {
  props:['image','nickname','name','name_slug'],
  data() {
    return {}
  },

}
</script>


