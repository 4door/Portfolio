<template>
  <section class="contact">
    <v-container fluid fill-height class="contact__content">
      <form name="contact" l class="contact__content-text" method="POST" netlify>
        <p>
            <label class="label">Your Name</label>   
            <input class="textbox" type="text" name="name" />
        </p>
        <p>
            <label class="label">Your Email</label>
            <input class="textbox" type="email" name="email" />
        </p>
        <p>
            <label class="label">Message</label>
            <textarea class="textbox" name="message"></textarea>
        </p>
        <p>
            <v-btn large dark class="button" type="submit">Send</v-btn>
        </p>
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
}

</style>
<script>
export default {
  methods: {
      encode (data) {
      return Object.keys(data)
          .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&')
      },
      handleSubmit () {
      const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      this.axios
          .post(
          '/',
          this.encode({
              'form-name': 'contact',
              ...this.form
          }),
          axiosConfig
          )
      },
  }
}

</script>