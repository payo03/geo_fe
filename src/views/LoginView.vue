<template>
  <div id="wrapper">
    <div class="vertical-align-wrap">
      <div class="vertical-align-middle">
        <div class="auth-box ">
          <div class="left">
            <div class="content">
              <div class="header">
                <div class="logo text-center">
                  <img src="../assets/images/logo-dark.png" alt="Klorofil Logo">
                </div>
                <p class="lead">Login to your account</p>
                <p class="lead">{{ this.sampleData }}</p>
              </div>
              <form class="form-auth-small" @submit.prevent="loginView(loginData)">
                  <div class="form-group">
                      <label for="signin-email" class="control-label sr-only">Email</label>
                      <input type="email" class="form-control" id="signin-email" v-model="this.id" placeholder="Email">
                  </div>
                  <div class="form-group">
                      <label for="signin-password" class="control-label sr-only">Password</label>
                      <input type="password" class="form-control" id="signin-password" v-model="this.password" placeholder="Password">
                  </div>
                  <div class="form-group clearfix">
                      <label class="fancy-checkbox element-left">
                          <input type="checkbox" v-model="this.remember">
                              <span>Remember me</span>
                          </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg btn-block">LOGIN</button>
                  <div class="bottom">
                      <span class="helper-text">
                          <i class="fa fa-lock"></i>
                          <a href="#">Forgot password?</a>
                      </span>
                  </div>
              </form>
              </div>
          </div>
          <div class="right">
            <div class="overlay"></div>
            <div class="content text">
                <h1 class="heading">Free Bootstrap dashboard template</h1>
                <p>by The Develovers</p>
          </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      id: '',
      password: '',
      remember: false
    }
  },
  methods: {
    ...mapActions('geoMain', ['login']),
    loginView() {

      var map = {
        memberId: this.id,
        memberPassword: this.password,
        remember: this.remember
      }

      this.login(map);
    }
  },
  computed: {
    ...mapState('geoMain', ['sampleData'])
  }
};
</script>

<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5 rem;
}

</style>