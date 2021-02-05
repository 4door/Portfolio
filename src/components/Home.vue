<template>
  <section class="home">
    <HomeHero/>
    <HomeSummary/>
    <HomeContact/>
  </section>
</template>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
  background-color: rgb(26, 26, 26);
}
</style>
<script>
import HomeHero from './HomeHero.vue';
import HomeSummary from './HomeSummary.vue';
import HomeContact from './HomeContact.vue';
export default {
  components: {
    HomeHero,
    HomeSummary,
    HomeContact
  }
}
</script>