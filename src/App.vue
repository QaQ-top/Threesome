<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "App",
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      sTest:'test'
    }),
    ...mapGetters({
      gTest:'getTest'
    })
  },
  components: {
    
  },
  methods: {
    
  },
  created() {
    console.log(this.sTest,this.gTest)
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
