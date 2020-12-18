<template>
  <div class="card pre-wrap">

    <v-card min-width="200px" height="100%" @click.stop="dialog = true">
      <v-card-title class="font-weight-bold">{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>{{ shortenedContent }}</v-card-text>
    </v-card>

    <v-dialog v-model="dialog" scrollable max-width="600px">
      <v-card>
        <v-card-title class="font-weight-bold">{{ title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text height="300px" class="pre-wrap">{{ content }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat small @click="dialog = false">CLOSE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'CardTest',
  props: {
    msg: String,
    title: String,
    content: String
  },
  data(){
    return {
      dialog: false
    }
  },
  computed: {
    shortenedContent: function(){
      let maxlength = 100;
      if(this.content.length <= maxlength){
        return this.content;
      }
      else{
        return this.content.substr(0,maxlength-10)+'...(続きを読む）'
      }
    }
  },
  methods: {
    alert: function(msg){
      alert(msg);
    }
  }
}
</script>

<style scoped>
.cardtest {
  margin: 10px;
  height: 90%;
}

.pre-wrap {
  white-space: pre-wrap;
}

.gradient {
  background: linear-gradient( white 0%, white 90%, rgb(89, 198, 248) 100%);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>