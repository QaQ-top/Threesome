<template>
  <div id="app">
    <router-view />
     <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    song
    456
    ck
    <van-tabs>
        <van-tab title="标签 1" to='/home'>内容 1</van-tab>
        <van-tab title="标签 2" to='/mine'>内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
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
