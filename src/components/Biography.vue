<template>
  <section class="biography">
    <v-container fluid fill-height class="biography__content">
      <v-row  justify="center" align-content="center">
        <b-card
          title="Biography"
          class="mb-2"
          style="max-width: 560rem; font-size: 1.2rem"
        >
          <b-card-text>
              1996年生まれ。<br>
              東京都八王子市出身。<br>
              東京工業高等専門学校物質工学科卒業。<br>
              <br>当初ITと関係のない業務についていたものの、<br>
              とんでもなく面倒くさがりなため<br>
              Excel VBAやコマンドプロンプトを用いて業務を効率化。<br>
              ロジックを考えてコードを書くのが楽しくなり、<br>
              開発を仕事にしたいと思い転職を決意。<br>
              2020年にIT業界へ。<br>
              技術を通じて世の中に存在する煩雑で手間のかかるものを、<br>
              少しでも減らしていけたらと考えています。<br>
              他業界に勤め、業務改善を行っていたことから<br>
              DX推進の遅れている業界のDX化については特に強い関心があります。<br>
              <br>現在業務では主にJavaを使用しており、<br>
              プライベートではRuby、Kotrinを勉強しています。<br>
              また、このサイトはVue.js + Vuetifyを使用しております。<br><br>
          </b-card-text>
        </b-card>
      </v-row>
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
  height: 130vh;
  @include display_pc {
    height: 100vh;
  }
}
</style>