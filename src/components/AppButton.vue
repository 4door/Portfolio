<template>
  <v-row class="button">
    <v-col>
      <v-btn
        large
        color="secondary"
        min-width="300"
        :to="url"
      >
        ＞＞{{buttonText}}
      </v-btn>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.button {
  text-align: center;
}
</style>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>