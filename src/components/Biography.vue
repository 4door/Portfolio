<template>
  <section class="biography">
    <v-container fluid fill-height class="biography__content">
        <b-col>
          <b-row class="title">Biography</b-row>
          <b-row class="about">a</b-row>
        </b-col>
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
}
.title{
  font-size: 40px !important;
  text-align: center;
  margin: 0px auto; 
  color: rgba(255, 255, 255, 0.72);
  background-color: rgba(63, 63, 63, 0.638);
}
.about{
  font-size: 30px;
  text-align: center;
  margin: 0px auto; 
  color: rgba(255, 255, 255, 0.72);
  background-color: rgba(63, 63, 63, 0.638);
}
</style>