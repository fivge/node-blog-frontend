<template>
  <div id="app">
    <headerDiv></headerDiv>
    <router-view></router-view>
    <footerDiv></footerDiv>
  </div>
</template>


<script>
  import headerDiv from "../components/header";
  import footerDiv from "../components/footer";

  export default {
    name: "app",
    components: {
      headerDiv,
      footerDiv
    }
  };
</script>

<style>
  /* 全局样式 */
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    font-size: 30px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 16px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }
</style>