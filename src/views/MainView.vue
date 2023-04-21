<template>
  <div id="wrapper">
    <HeaderVue />
    <LeftVue />
    <div class="main">
      <div class="main-content">
        <div class="container-fluid">

          <div class="panel panel-headline">
            <!-- This is the Vue logo image -->
            <img alt="Vue logo" src="../assets/images/logo.png">
            <h1>Welcome to Your Vue.js App</h1>
            <p>
              For a guide and recipes on how to configure / customize this project,<br>
              check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a><br>
            </p>
            <router-link to="/loginView">login</router-link><br>
            <router-link to="/registerView">register</router-link>
            <br>    
            <br>
          </div>

        </div>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
// import GeoMap from '@/views/GeoMap.vue';
import HeaderVue from '../components/Header.vue';
import LeftVue from '../components/Left.vue';
import FooterVue from '../components/Footer.vue';

import ProfileBase  from "./auth/ProfileBase.vue";
import ProfileRight from "./auth/ProfileRight.vue";
import ProfileChat  from "./auth/ProfileChat.vue";

import { mapState } from "vuex";

export default {
  name: 'MainView',
  data() {
    return {

      }
  },
  components: {
    HeaderVue,
    FooterVue,
    LeftVue,
    ProfileBase,
    ProfileRight,
    ProfileChat
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>