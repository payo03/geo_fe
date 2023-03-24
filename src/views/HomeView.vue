<template>
  <div id="wrapper">
    <HeaderVue />
    <LeftVue />
        <div class="main">
            <div class="main-content">
                <div class="container-fluid">
                    <div class="panel panel-headline">

                      <img alt="Vue logo" src="../assets/images/logo.png">
                      <HelloWorld msg="Welcome to Your Vue.js App"/>   

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
import HelloWorld from '../views/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeaderVue,
    FooterVue,
    LeftVue,
  }
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