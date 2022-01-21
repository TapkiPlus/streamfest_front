<template>
  <div>
    <Header v-if="!['account-slug', 'spasibodoctor'].includes($route.name)" />
    <Nuxt />
    <Footer v-if="$route.name !== 'spasibodoctor'" />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
