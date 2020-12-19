<template>
  <section class="home">
    <HomeHero/>
    <HomeSummary/>
  </section>
</template>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
<script>
import HomeHero from './HomeHero.vue';
import HomeSummary from './HomeSummary.vue';
export default {
  components: {
    HomeHero,
    HomeSummary
  }
}
</script>