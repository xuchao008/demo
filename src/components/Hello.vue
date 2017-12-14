<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="clickFn">click me</button>
    <!-- <Button type="text">goSurvey</Button> -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clickFn () {
      let url = 'https://cem-base.wenjuan.com/static/'
      // test wenxin
      let appid = 'wx9cfe7c96286e2b54'
      let redUrl = 'https%3a%2f%2fbaidu.com'
      let red2 = 'https%3a%2f%2fcem-base.wenjuan.com%2fstatic%2f'
      // console.log(redUrl)
      let url2 = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + red2 + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      // window.location.href = url2
      this.versions()
    },
    versions () {
      let userAgent = window.navigator.userAgent
      let app = window.navigator.appVersion
      alert(userAgent)
      alert(app)
      userAgent
      const arr = ['iPhone', 'Android', 'iPad']
      for (let i in arr) {
        if (userAgent.indexOf(arr[i]) > -1) {
          console.log(arr[i])
          return arr[i]
        }
      }
        // iPhone, Android
        // return {
        //     trident: u.indexOf('Trident') > -1, //IE内核
        //     presto: u.indexOf('Presto') > -1, //opera内核
        //     webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        //     gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
        //     mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        //     ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        //     android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
        //     iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
        //     iPad: u.indexOf('iPad') > -1, //是否iPad
        //     webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        //     weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
        //     qq: u.match(/\sQQ/i) == " qq" //是否QQ
        // };
    }
    // language:(navigator.browserLanguage || navigator.language).toLowerCase()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
button {
  width: 100px;
  height: 100px;
}
</style>
