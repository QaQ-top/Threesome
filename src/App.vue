<template>
  <div id="app">
    <router-view />
     <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    song
    123
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
    this.axios.get('www',{fa:0})
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
*{
  margin: 0;
  padding: 0;
}
</style>
