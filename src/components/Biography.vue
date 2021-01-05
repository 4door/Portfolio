<template>
  <section class="biography">
    <v-container fluid fill-height class="biography__content">
        <b-col class="text">
          <b-col class="title"><u>Biography</u>
            <b-row class="about">
              1996年生まれ。<br>
              東京都八王子市出身。<br>
              東京工業高等専門学校物質工学科卒業後。<br>
              ITと関係のない業務をについていたものの、<br>
              とんでもなく面倒くさがりなため<br>
              Excel VBAやコマンドプロンプトを用いて業務を効率化。<br>
              ロジックを考えてコードを書くのが楽しくなり、<br>
              開発を仕事にしたいと思い転職を決意。<br>
              2020年にIT業界へ足を踏み入れました。<br>
              <br>現在業務では主にJavaを使用しており、<br>
              プライベートではRuby、Kotrinを勉強しています。<br>
              また、このサイトはVue.js + Vuetifyを使用しております。<br><br>
            </b-row>
          </b-col>
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