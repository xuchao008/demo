// 测试 mock
<template>
  <div>
    <h2>测试 mock</h2>
    <div id="chart" style="width:300px;height:300px;"></div>
    <ul>
      <!-- <li v-for="item in list.list">{{item.id}}</li> -->
    </ul>
  </div>
</template>
<script>
const Mock = require('mockjs')
const getOptionChart = require('@/assets/option_chart.js')
const getOptionSerie = require('@/assets/option_serie.js')
const echarts = require('echarts')
require('echarts/theme/shine')
export default {
  data () {
    return {
      option: {},
      series: [],
      list: []
    }
  },
  methods: {
    getInfo () {
      this.$http.get('/api/').then((response) => {
        console.log(response)
      }).catch()
    }
  },
  created () {
    // let data = Mock.mock({
    //   'obj|1': {
    //     a: 1,
    //     b: 2,
    //     c: 3,
    //     d: 4,
    //     e: 5
    //   },
    //   'list|2': ['aaa', 'bbb', 'ccc'],
    //   'bool|1-100': false,
    //   'rege': /[a-z][A-Z][0-9]/,
    //   'number5|123.3': 1,
    //   name: {
    //     first: '@FIRST',
    //     middle: '@FIRST',
    //     last: '@LAST',
    //     full: '@first @middle @last'
    //   }
    // })
    // console.log(Random.natural(1111, 2222))
    // Mock.Random.extend({
    //   constellation: function (date) {
    //     var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    //     console.log(this.pick(constellations))
    //     return this.pick(constellations)
    //   }
    // })
    // // // => "水瓶座"
    // console.log(Mock.mock('@constellation()'))
    // console.log(Mock.mock({
    //   constellation: '@constellation'
    // }))
    // // => { constellation: "射手座" }
    let data = Mock.mock('/api/', {
      'list|1-10': [
        '@natural(1111,2222)'
      ]
    })
    // this.list = data
    // console.log(data)
    // console.log(this.list._mocked['/api/'].template)
    // let data = [333, 11, 213, 323, 23]
    // let ttype = 'bar'
    // this.option = getOptionChart.getOption(ttype)
    // this.option.xAxis = {
    //   type: 'category',
    //   data: ['1月', '2月', '3月', '4月', '5月', '6月']
    // }
    // this.series = getOptionSerie.get_base_serie_option(ttype)
    // this.series.data = data
    // this.option.series = this.series
    // console.log(this.option)
  },
  mounted () {
    this.getInfo()
    // let dom = document.getElementById('chart')
    // let myChart = echarts.init(dom, 'shine')
    // myChart.setOption(this.option)
  }
}
</script>
<style lang="less">

</style>
