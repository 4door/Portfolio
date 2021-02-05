<template>
  <section class="works-top">
    <v-container fluid fill-height class="works-top__content">
      <v-row>
        <v-col class="works-top__content-text">
          Works
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.works-top__content {
  background: url("../assets/top.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 10vh;
 
  &-text {
    color: whitesmoke;
    text-align: left;
    font-size: 28px;
    font-weight: bold;
    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>