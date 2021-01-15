<template>
  <section class="works">
    <v-container fluid fill-height class="works__content">
      <b-row>
        <b-card
          title="back-end"
          class="mb-2"
        >
          <b-card-text>
            Java SE 8<br>
            -&nbsp;Spring Framework<br>
            -&nbsp;Doma2<br>
          </b-card-text>
        </b-card>
        <b-card
          title="front-end"
          class="mb-2"
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
          title="others"
          class="mb-2"
        >
          <b-card-text>
            PostgreSQL 10<br>
            SVN<br>
            Git<br>
              - Git Lab<br>
          </b-card-text>
        </b-card>
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
  height: 50vh;
  @include display_pc {
    height: 100vh;
  }
}
.mb-2 {  
    margin-right: 20px;
    max-width: 50rem;
}
</style>