<template>
  <section class="contact">
    <v-container fluid fill-height class="contact__content">
      <form name="contact" l class="contact__content-text" method="POST" netlify>
        <b-col>
          <label class="label">Your Name</label>   
          <b-form-input v-model="form.name" class="textbox" type="text" name="name" />
          <label class="label">Your Email</label>
          <b-form-input v-model="form.mail" class="textbox" type="email" name="email" />
          <label class="label">Message</label>
          <b-form-textarea v-model="form.message" class="textbox" name="message"></b-form-textarea>
          <v-btn large dark class="button"  @click="sendBtnClick">Send</v-btn>
        </b-col>
      </form>
    </v-container>
  </section>
</template>
<style  lang="scss" scoped>
@import '../styles/common/common.scss';
.contact__content {
  background: url("../assets/top.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  @include display_pc {
    height: 100vh;
  }
 
  &-text {
    color: rgba(255, 255, 255, 0.72);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0px auto; 
    @include display_pc {
      font-size: 30px;
    }
  }
}
.label{
  text-align: center; 
  display: block;
}
.textbox{
  background-color: rgba(63, 63, 63, 0.638) !important;
  color: rgba(255, 255, 255, 0.72);
}

</style>
<script>
export default {
  data: function(){
    return{
      form:{
        name: null,
        mail: null,
        message: null
      }
    }
  },
  methods: {
    sendBtnClick(){
      this.showToast('メッセージを送信しました');
      this.clearForm();
    },
    clearForm(){
      this.form.name = null;
      this.form.mail = null;
      this.form.message = null;
    },
    showToast(msg){
      this.$bvToast.toast(msg);
    }
  }
}

</script>