<template>
  <section class="biography">
    <v-container fluid fill-height class="biography__content">
        <h2>Biography</h2>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
.biography__content {
  background: url("../assets/top.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  @include display_pc {
    height: 100vh;
  }
 
  &-text {
    color: rgba(255, 255, 255, 0.72);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0px auto; 
    @include display_pc {
      font-size: 30px;
    }
  }
}
</style>