<template>
  <section class="work">
    <v-container fluid fill-height class="work__content">
      <h2 h2>Work</h2>
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