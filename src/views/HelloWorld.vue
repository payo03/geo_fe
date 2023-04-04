<template>
  <div v-if="checkLogin()" class="hello">

    <p>{{ this.member.memberName }}</p><br>
    <router-link to="/samplevue">Sample</router-link><br>
  </div>
  <div v-else>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a><br>
      <router-link to="/samplevue">Sample</router-link><br>
    </p>

    <router-link to="/loginView">login</router-link><br>
    <router-link to="/registerView">register</router-link>
    <br>    
    <br>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    checkLogin() {
      var authToken = localStorage.getItem("authToken");
      
      if(authToken) 
        return true;
      else 
        return false;
    }
  },
  computed: {
    ...mapState('geoMain', ['member']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
