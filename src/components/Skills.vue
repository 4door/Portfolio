<template>
  <section class="skills">
    <v-container fluid fill-height class="skills__content">
      <v-row  justify="center">
        <b-card
          title="バックエンド"
          class="mb-2"
          style="width: 30rem; height: 20rem;  font-size: 1.2rem"
        >
          <b-card-text>
            Java SE 8<br>
            -&nbsp;Spring Framework<br>
            -&nbsp;Doma2<br>
          </b-card-text>
        </b-card>
        <b-card
          title="フロントエンド"
          class="mb-2"
          style="width: 30rem; height: 20rem;  font-size: 1.2rem"
        >
          <b-card-text>
            JavaScript<br>
            -&nbsp;JQuery<br>
            -&nbsp;Handsontable<br>
            -&nbsp;Vue.js<br>
            -&nbsp;Bootstrap Vue<br>
          </b-card-text>
        </b-card>
        <b-card
          title="その他"
          class="mb-2"
          style="width: 30rem; height: 20rem;  font-size: 1.2rem"
        >
          <b-card-text>
            PostgreSQL 10<br>
            SVN<br>
            Git<br>
              - Git Lab<br>
          </b-card-text>
        </b-card>
        <b-card
          title="業務知識"
          class="mb-2"
          style="width: 30rem; height: 20rem;  font-size: 1.2rem"
        >
          <b-card-text>
            ・通信建設業界の業務知識<br/>
          </b-card-text>
        </b-card>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
.skills {
  background: url("../assets/top.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200vh;
  @include display_pc {
    height: 100vh;
  }
}
</style>