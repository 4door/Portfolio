
<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex v-for="item in items" v-bind:key="item.id" xs12 sm6 md4>
            <Card v-bind:title="item.title" v-bind:content="item.content"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  <!-- 後略 -->
  </v-app>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  },
  data () {
    return {
      items: [
      { title: 'このサイトについて', content: 'ソフトウェアエンジニア"4door"のポートフォリオサイトです。\n技術的には、Vue.js＋Vuetifyで作成し、GitHubで管理して、Netlifyにホスティングして公開しています。' },
      { title: 'カード02', content: 'カード02の内容です' },
      { title: 'カード03', content: 'カード03の内容です' },
      ]
    }
  }
}
</script>