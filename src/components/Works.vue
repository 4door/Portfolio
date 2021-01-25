<template>
  <section class="works">
    <v-container fluid fill-height class="works__content">
      <b-row style="margin: 0 0 auto;">
        <b-card
          title="Task List"
          class="mb-2"
        > 
          <b-card-text>
            タスク管理アプリです。<br>
            Rubyの学習に作成しました。<br>
            リンクは
            <a href="https://todolist4door.herokuapp.com/">こちら</a>
            です。
          </b-card-text>
        </b-card>
        <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          indicators
          img-width="1024"
          img-height="480"
        >
        
          <img src="../assets/1.png" alt="" class="img-fluid">
          <!-- <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide> -->
        </b-carousel>
      </b-row>      
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
  height: 100vh;
}
.mb-2 {  
    margin-right: 20px;
    width: 25rem;
}

element.style {
    height: 500px;
}
.v-carousel {
  width: 50% !important;
}
</style>