// 测试 mock
<template>
  <div>
    <h2>测试 mock</h2>
    <div id="chart" style="width:300px;height:300px;"></div>
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
      series: []
    }
  },
  created () {
    // let data = Mock.mock({
    //   'list|1-10': [{
    //     'id|+1': 0
    //   }]
    // })
    let data = [333, 11, 213, 323, 23]
    let ttype = 'bar'
    this.option = getOptionChart.getOption(ttype)
    this.option.xAxis = {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    }
    this.series = getOptionSerie.get_base_serie_option(ttype)
    this.series.data = data
    this.option.series = this.series
    console.log(this.option)
  },
  mounted () {
    let dom = document.getElementById('chart')
    let myChart = echarts.init(dom, 'shine')
    myChart.setOption(this.option)
  }
}
</script>
<style lang="less">

</style>
