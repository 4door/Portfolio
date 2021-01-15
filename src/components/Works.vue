<template>
  <section class="skills">
    <v-container fluid fill-height class="skills__content">
      <b-row style="margin: 0 0 auto;">
        <b-card
          title="制作物"
          class="mb-2"
        >
          <b-card-text>
            ただいま準備中
          </b-card-text>
        </b-card>
      </b-row>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
.skills__content {
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
</style>