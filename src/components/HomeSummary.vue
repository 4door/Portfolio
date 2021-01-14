<template>
  <section class="home-summary">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <v-container>
      <v-row class="home-summary__contents">
        <v-col md="5" class="home-summary__contents-img">
          <a href='/biography'><img src="../assets/about.jpg" alt="" class="img-fluid"></a>
        </v-col>
        <v-col md="5" class="home-summary__contents-text">
          <p>東京でSES企業にてプログラマとして就業中。</p>
          <p>業務でのメインはJavaですが、プライベートではRuby、Kotlinを学んでいます。</p>
          <p>最近は身の回りの「メンドクサイ」を解決すべく、IoTで住環境を整備するのに凝っていて、その際のメインはGAS。</p>
          <p>猫と花を愛しており、掲載している写真はいずれも自身で撮影したものです。イラスト製作も趣味で、LINEスタンプなども作成しています。</p>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.section__title {
  padding-top: 120px;
  text-align: center;
  // background-color: rgb(63, 63, 63);
 
  &-text {
    font-weight: 700;
    font-size: 40px;
    // color: rgba(255, 255, 255, 0.72);
    color: rgb(63, 63, 63);
  }
}
.home-summary__contents {
  margin-top: 20px;
  justify-content: center;
 
  &-img {
    text-align: center;
  }
 
  &-text {
    word-wrap: break-word;
  }
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