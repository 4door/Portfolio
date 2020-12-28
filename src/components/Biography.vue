<template>
  <section class="biography">
    <v-container fluid fill-height class="biography__content">
        <b-col class="text">
          <b-row>Biography</b-row>
          <b-row class="about">
            1996年生まれ。
            東京都八王子市出身。
            東京工業高等専門学校物質工学科卒業後、
          </b-row>
          <b-row>Career</b-row>
          <b-row class="about">
            2017年
          </b-row>
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
.text{
  text-align: center;
  margin: 0px auto; 
  color: rgba(255, 255, 255, 0.72);
  background-color: rgba(63, 63, 63, 0.638);
  font-size: 25px;
}
.about{
  text-align: center;
  margin: 0px auto; 
  font-size: 20px;
}
</style>