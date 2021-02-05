<template>
  <section class="works-line">
    <div class="section__title">
      <div class="section__title-text">02. LINEスタンプ</div>
    </div>
    <v-container fluid fill-height class="works-line__content">
      <v-row justify="center" align-content="center">
        <b-card
          class="mb-2"
          style="max-width: 90%; width: 25rem;"
        > 
          <b-card-text>
            LINEスタンプです。<br>
            愛猫のきなこがモデルとなっております。<br>            
            <a href="https://store.line.me/stickershop/product/13815618">こちら</a>
            に販売しております。
          </b-card-text>
        </b-card>
        <img src="../assets/スタンプ.png" alt="" class="img-fluid">
      </v-row>   
    </v-container>
  </section>
</template>
<style lang="scss" scope>
.works-line {
  background-color: rgb(26, 26, 26);
  width: 100%;
  height: 100vh;
}
.works-line__content {
  max-height: 60px;
 
  &-img {
    text-align: left;
  }
 
  &-text {
    word-wrap: break-word;
    color: whitesmoke;
  }
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
.mb-2 {  
    margin-right: 20px;
}

element.style {
    height: 500px;
}
.v-carousel {
  width: 38% !important;
}
.img-fluid {
  min-width: 100px;
}
</style>
<script>
</script>