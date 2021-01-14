<template>
  <section class="contact">
    <v-container fluid fill-height class="contact__content">
      <form name="contact" l class="contact__content-text" method="POST" netlify>
        <b-col>
          <label class="label">Your Name</label>   
          <b-form-input
            v-model="form.name"
            class="textbox"
            type="text"
            name="name" />
          <label class="label">Your Email</label>
          <b-form-input
            v-model="form.email"
            class="textbox"
            type="email"
            name="email" />
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
import axios from 'axios'
export default {
  data: function(){
    return{
      form:{
        'form-name': 'contact',
        name: null,
        email: null,
        message: null
      }
    }
  },
  methods: {
    sendBtnClick(){
      if(false === this.checkRequired())return;
      this.onSubmit();
      this.clearForm();
    },
    clearForm(){
      this.form.name = null;
      this.form.email = null;
      this.form.message = null;
    },
    showToast(msg){
      this.$bvToast.toast(msg);
    },
    errorToast(msg){
      this.$bvToast.toast(msg,{variant:'danger'});
    },
    checkRequired(){
      if(this.form.name == null){
        this.errorToast('お名前を入力してください。');
        return false;
      }else if(this.form.message == null){
        this.errorToast('メッセージのの入力は必須です。');
        return false;
      }
    },
    onSubmit () {
      let _self = this;
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post('/', 
          this.encode({
            ...this.form
          }),
          axiosConfig)
      .then(function(){
        _self.showToast('メッセージの送信が完了しました。');
      })
      .catch(function(d){
        console.log(d);
        _self.errorToast('メッセージの送信が失敗しました。');        
      })
    }
  }
}

</script>