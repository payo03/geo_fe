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
                <p class="lead">Register account</p>
              </div>
              <form class="form-auth-small" @submit.prevent="registerView(registerData)">
                  <div class="form-group">
                      <label for="register-email" class="control-label sr-only">Email</label>
                      <input type="email" class="form-control" id="register-email" v-model="this.email" placeholder="Email">
                  </div>
                  <div class="form-group">
                      <label for="register-password" class="control-label sr-only">Password</label>
                      <input type="password" class="form-control" id="register-password" v-model="this.password" placeholder="Password">
                  </div>
                  <div class="form-group">
                      <label for="register-name" class="control-label sr-only">Name</label>
                      <input type="text" class="form-control" id="register-name" v-model="this.name" placeholder="Name">
                  </div>
                  <div class="form-group">
                      <label for="register-number" class="control-label sr-only">Name</label>
                      <input type="text" class="form-control" id="register-number" v-model="this.number" placeholder="Number" maxlength="11" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      number: ''
    }
  },
  methods: {
    registerView() {

      var map = {
        email: this.email,
        password: this.password,
        name: this.name,
        number: this.number
      }

      this.$store.commit('geoMain/register', map);
    }
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