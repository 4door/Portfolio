<template>
  <section class="about">
    <v-container fluid fill-height class="about__content">
        <h2>About</h2>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
.about__content {
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