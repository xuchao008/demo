<template>
  <div id="app">
    <!-- <div>{{ $t('messages.hello') }}</div> -->
    <p>{{ $t("message.hello") }}</p>
    <Button type="default" @click="changeHandler">change 中英版本</Button>
    <div style="margin:20px;">
      <!-- <Button @click="goSurvey" type="default">goSurvey</Button>
      <Button @click="goWeixin" type="default">goWeixin</Button>    
      <Button @click="gotreegrid" type="default">goTreeGrid</Button> -->
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
    },
    changeHandler () {
      console.log(this.$i18n.locale)
      let current = this.$i18n.locale
      if (current === 'en') {
        this.$i18n.locale = 'ja'
      } else if (current === 'ja') {
        this.$i18n.locale = 'en'
      }
    }
  },
  created () {
    console.log(this.$t())
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
      padding-left: 20px;
      margin-right: 20px;
  }
</style>
