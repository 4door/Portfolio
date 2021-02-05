<template>
  <section class="works-task">
    <div class="section__title">
      <div class="section__title-text">01. Task List</div>
    </div>
    <v-container fluid fill-height class="works-task__content">
      <v-row justify="center" align-content="center">
        <b-card
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
              v-for="(workItem, index) in workItems"
              :key="index"
            >
              <img :src="workItem.src" alt="" class="img-fluid">
            </v-carousel-item>
        </v-carousel>
      </v-row>   
    </v-container>
  </section>
</template>
<style lang="scss" scope>
.works-task {
  background-color: rgb(26, 26, 26);
  width: 100%;
  height: 75vh;
}
.works-task__content {
  max-height: 60px;
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
import constants from '../common/constants'
 
export default {
  data () {
    return {
      workItems: constants.taskItems
    }
  }
}
</script>