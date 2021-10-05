<template>
  <section class="home-summary">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <v-container>
      <v-row class="home-summary__contents">
        <v-col md="5" class="home-summary__contents-img">
          <img src="../assets/about.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="home-summary__contents-text">
          <p>不動産×金融の自社パッケージ開発を行う企業にて、<br>
          バックエンドエンジニアとして就業中。</p>
          <p>猫と花を愛しており、<br>掲載している写真はいずれも自身で撮影したものです。<br>イラスト製作も趣味で、LINEスタンプなども作成しています。</p>
          <a href="https://github.com/4door" target="_blank" rel="noopener noreferrer"><i class="fa fa-github" style="color: white;"></i> </a>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.home-summary{
  background-color: rgb(26, 26, 26);
}
.section__title {
  padding-top: 120px;
  text-align: center;
  // background-color: rgb(26, 26, 26);
 
  &-text {
    font-weight: 700;
    font-size: 40px;
    // color: rgba(255, 255, 255, 0.72);
    color: whitesmoke;
  }
}
.home-summary__contents {
  margin-top: 20px;
  justify-content: center;
 
  &-img {
    text-align: right;
  }
 
  &-text {
    word-wrap: break-word;
    color: whitesmoke;
  }
}
.img-fluid {
  max-width: 70%;
}
</style>
<script>
import AppButton from './AppButton.vue'
 
export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/biography'
    }
  },
  components: {
    AppButton
  }
}
</script>