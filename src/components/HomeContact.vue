<template>
  <section class="home-contact">
    <div class="section__title">
      <div class="section__title-text">02. Contact</div>
    </div>
    <v-container>
      <v-row class="home-contact__contents">
        <v-col md="5" class="home-contact__contents-text">
          <p>ご連絡はメールフォームからお願いします</p>
          <a href="/contact"><img src="../assets/contact.png" alt="" class="img-fluid"></a>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.home-contact{
  background-color: rgb(26, 26, 26);
}
.section__title {
  padding-top: 120px;
  text-align: center;
 
  &-text {
    font-weight: 700;
    font-size: 40px;
    color: whitesmoke;
  }
}
.home-contact__contents {
  margin-top: 20px;
  justify-content: center;
  &-text {
    word-wrap: break-word;
    text-align: center;
    color: whitesmoke;
  }
 
  &-img {
    text-align: right;
  }
}
.img-fluid {
  max-width: 30%;
}
</style>
<script>
import AppButton from './AppButton.vue'
 
export default {
  data () {
    return {
      buttonText: '連絡を取る',
      url: '/contact'
    }
  },
  components: {
    AppButton
  }
}
</script>