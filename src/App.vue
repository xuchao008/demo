<template>
  <div id="app">
    <div style="margin:20px;">
      <Button @click="$router.push('/en')" type="default">中英版本测试</Button>
      <Button @click="goSurvey" type="default">goSurvey</Button>
      <Button @click="goWeixin" type="default">goWeixin</Button>    
      <Button @click="gotreegrid" type="default">goTreeGrid</Button>
    </div>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

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
    console.log(this.$t())
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
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
