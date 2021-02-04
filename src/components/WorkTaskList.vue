<template>
  <section class="works-task">
    <v-container fluid fill-height class="works__content">
      <v-row justify="center" align-content="center">
        <b-card
          title="Task List"
          class="mb-2"
          style="max-width: 90%; width: 25rem;"
        > 
          <b-card-text>
            タスク管理アプリです。<br>
            Rubyの学習に作成しました。<br>
            Rubyを選んだ理由としては、やはりRuby on Railsは少ない記載量で実装できると聞いていたので、実際に自分でも作って試したくなったからです。<br><br>
            結果としては、とんでもなく早く作ることができました。<br><br>
            Web上に
            <a href="https://todolist4door.herokuapp.com/">公開</a>
            しております。
          </b-card-text>
        </b-card>
        <v-carousel>
          <v-carousel-item
            src="../assets/1.png"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
          <v-carousel-item
            src="../assets/2.png"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
          <v-carousel-item
            src="../assets/3.png"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-row>   
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
}

element.style {
    height: 500px;
}
.v-carousel {
  width: 38% !important;
  }
</style>
<script>
</script>