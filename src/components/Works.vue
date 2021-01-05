<template>
  <section class="works">
    <v-container fluid fill-height class="works__content">
      <h2 h2>Works</h2>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
.work__content {
  background: url("../assets/top.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  @include display_pc {
    height: 100vh;
  }
}
</style>