<template>
  <section class="works">
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
            結果としては業務でも使っていて書きなれているJavaの方が知識があるので早く作れたかもしれませんが、知識ゼロから作ったと考えるとかなり早く作ることができました。<br>
            学ぶほどに早く開発できると感じられたので作ってみてよかったです。<br><br>
            Web上に
            <a href="https://todolist4door.herokuapp.com/">公開</a>
            しております。
          </b-card-text>
        </b-card>
        <img src="../assets/1.png" alt="" class="img-fluid">
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
  width: 50% !important;
}
</style>
<script>
</script>