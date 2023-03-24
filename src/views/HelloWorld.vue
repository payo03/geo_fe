<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a><br>
      <router-link to="/samplevue" v-if="checkTrue()">Sample</router-link><br>
    </p>

    <router-link to="/loginView">login</router-link><br>
    <router-link to="/register">register</router-link><br>
    
    <br>
    <button @click="callSampleLink">Vue-Spring 테스트</button><br>
    <p>{{ this.sampleData }}</p><br>
    
    <textarea v-model="getSampleData.header" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    checkTrue() {

      return true;
    },
    ...mapMutations('geoMain', ['callSampleLink'])
  },
  computed: {
    ...mapState('geoMain', ['sampleData']),
    ...mapGetters('geoMain', ['getSampleData'])
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
