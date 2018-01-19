<template>
  <div id="main">
    <!-- <Button></Button> -->
    <h3>测试ele table</h3>
    <br />
    <el-button @click="clickFn">click me</el-button>
    <el-table ref="table" :data="tableData3" border style="width: 100%" height="550">
      <el-table-column prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
    </el-table>
    <img ref="table" src="static/images/testimage.jpg" style="width:'100%'" />
  </div>
</template>
<script>
import html2canvas from 'Static/html2canvas'
const jSPDF = require('Static/jspdf.min.js')
// import html2canvans2 from 'html2canvas.hertzen.com/dist/html2canvas.min.js'
import {getPixelRatio} from 'Static/utils'
export default {
  data () {
    return {
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    clickFn () {
      let vm = this
      let table = this.$refs.table
      setTimeout(function () {
        // let width = table.offsetWidth
        // let height = table.offsetHeight
        // let offsetTop = table.offsetTop
        // let canvas = document.createElement('canvas')
        // let context = canvas.getContext('2d')
        // let scaleBy = getPixelRatio(context)
        // canvas.width = width * scaleBy
        // canvas.height = (height + offsetTop) * scaleBy
        // context.scale(scaleBy, scaleBy)
        /* 这部分代码用来解决生成的图片不清晰的问题 */
        let tableWidth = table.offsetWidth
        let tableHeight = table.offsetHeight
        let canvas = document.createElement('canvas')
        canvas.width = tableWidth * 2
        canvas.height = tableHeight * 2
        canvas.style.width = tableWidth + 'px'
        canvas.style.height = tableHeight + 'px'
        document.body.appendChild(canvas)
        var context = canvas.getContext('2d')
        context.scale(2, 2)
        /* 这部分代码用来解决生成的图片不清晰的问题 */
        html2canvas(table, {
          onrendered (image) {
            let url = image.toDataURL()
            let doc = new jSPDF('p', 'mm', 'a4') // eslint-disable-line
            // 这里设置的是a4纸张尺寸
            doc.addImage(url, 'JPEG', 0, 0, 210, 297)
            // 输出保存命名为content的pdf
            doc.save('content.pdf')
            // let a = document.createElement('a')
            // a.href = url
            // a.download = vm.imageName ? vm.imageName : '未命名'
            // document.body.appendChild(a)
            // a.click()
            // document.body.removeChild(a)
          }
        })
      })
    }
  }
}
</script>
<style scoped lang="less">
  #main {
    width: 100%;
  }
</style>
