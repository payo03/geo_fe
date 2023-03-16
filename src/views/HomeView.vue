<template>
  <GeoMap />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import GeoMap from '@/views/GeoMap.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    GeoMap
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>