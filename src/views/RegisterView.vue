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
import {mapMutations, mapActions} from "vuex";

export default {
    data() {
        return {
          email: null, 
          password: null, 
          name: null, 
          number: null,
          pMemberList: []
        }
    },
    methods: {
        ...mapMutations('geoMain', ['register']),
        ...mapActions('geoMain', ['memberList']),
        registerView() {

            var memberIdList = this.pMemberList.map(row => row.memberId);
            if (memberIdList.includes(this.email)) {
                console.log(this.eamil + " is duplicate");
            } else {

                var map = {
                    memberId: this.email,
                    memberPassword: this.password,
                    memberName: this.name,
                    memberNumber: this.number
                }

                this.register(map);
            }
        }
    },
    created() {
        var result = this.memberList();
        result.then((value) => {
            this.pMemberList = value;
        })
    }
};
</script>

<style scoped="scoped">
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5 rem;
}
</style>