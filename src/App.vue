<template>
  <div id="app">
    <div style="margin:20px;">
      <el-button @click="$router.push('/en')" type="default">中英版本测试</el-button>
      <el-button @click="goSurvey" type="default">goSurvey</el-button>
      <el-button @click="goWeixin" type="default">goWeixin</el-button>    
      <el-button @click="gotreegrid" type="default">goTreeGrid</el-button>
    </div>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
const debug = process.env.NODE_ENV
export default {
  name: 'app',
  data () {
    return {
      tem: 0
    }
  },
  methods: {
    goSurvey () {
      this.$router.push('/tree')
    },
    goWeixin () {
      this.$router.push('/hello')
    },
    gotreegrid () {
      this.$router.push('/example')
    }
  },
  created () {
    console.log(debug)
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    &>div {
      width: 120px;
      display: flex;
      flex-direction: column;
      button {
        margin-bottom: 15px;
        width: 140px;
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>

<style>
  .el-button+.el-button {
    margin-left: 0;
  }
</style>
