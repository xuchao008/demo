<template>
  <div id="app">
    <div style="margin:20px;" class="headBar">
      <el-button @click="$router.push('/en')" type="default">中英版本测试</el-button>
      <el-button @click="goSurvey" type="default">goSurvey</el-button>
      <el-button @click="goWeixin" type="default">goWeixin</el-button>    
      <el-button @click="gotreegrid" type="default">goTreeGrid</el-button>
      <el-button @click="goTestMock" type="default">test mock</el-button>
      <el-button @click="goTestJsx">test jsx</el-button>
      <el-button @click="goTestSelect">test select</el-button>
      <el-button @click="goTestSlot">test slot</el-button>
      <el-button @click="goTestPdf">test js2pdf</el-button>
    </div>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
const debug = process.env.NODE_ENV
const Mock = require('mockjs')
// import DimSelect from '@/components/eleCom/select'
// import DimOption from '@/components/eleCom/option'

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
    },
    goTestMock () {
      this.$router.push('/mock')
    },
    goTestJsx () {
      this.$router.push('/jsx')
    },
    goTestSelect () {
      this.$router.push('/select')
    },
    goTestSlot () {
      this.$router.push('/slot')
    },
    goTestPdf () {
      this.$router.push('/home')
    }
  },
  created () {
    console.log(debug)
  },
  components: {
    // DimSelect,
    // DimOption
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
    .headBar {
      justify-content:center;
    }
    &>div {
      width: 120px;
      display: flex;
      flex-direction: column;
      padding: 20px;
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
