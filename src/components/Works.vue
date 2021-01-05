<template>
  <section class="works">
    <v-container fluid fill-height class="works__content">
      <b-col class="text">
        <b-row class="title"><u>Works</u></b-row>
          <b-col class="about">&lt;Skills&gt;
          <b-row class="about">
            ＊back-end＊<br>
            Java SE 8<br>
            -&nbsp;Spring Framework<br>
            -&nbsp;Doma2<br>
            ＊front-end＊<br>
            JavaScript<br>
            -&nbsp;JQuery<br>
            -&nbsp;Handsontable<br>
            -&nbsp;Vue.js<br>
            -&nbsp;Bootstrap Vue<br>
            ＊others＊<br>
            - PostgreSQL 10<br>
            - SVN<br>
            - Git<br>
                - Git Lab<br>
          </b-row>
          </b-col>
      </b-col>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
.works__content {
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
  // text-align: center;
  // margin: 0px auto; 
  color: rgba(255, 255, 255, 0.72);
  background-color: rgba(63, 63, 63, 0.638);
  font-size: 25px;
}
.title{
  margin-left: 30px;
  font-size: 30px;
}
.about{
  margin-left: 10px;
  font-size: 20px;
}
</style>