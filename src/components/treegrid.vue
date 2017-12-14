<template>
  <div class="grid">
    <grid :items='data' :columns='columns'></grid>
  </div>
</template>
<script>
import grid from '@/components/grid'
// import fetch from 'fetch'
// import fetchJsonp from 'fetch-jsonp'
export default {
  data () {
    return {
      columns: [
        {
          type: 'selection'
        }, {
          title: '编码',
          key: 'code',
          sortable: true
        }, {
          title: '名称',
          key: 'name'
        }, {
          title: '状态',
          key: 'status'
        }, {
          title: '备注',
          key: 'remark'
        }, {
          title: '操作',
          type: 'action',
          actions: [{
            type: 'primary',
            text: '编辑'
          }]
        }
      ],
      data: [{
        id: '1',
        code: '0001',
        name: '测试数据1',
        status: '启用',
        remark: '测试数据测试数据'
      }, {
        id: '2',
        code: '0002',
        name: '测试数据2',
        status: '启用',
        remark: '测试数据测试数据',
        children: [{
          id: '01',
          code: '00001',
          name: '测试数据01',
          status: '启用',
          remark: '测试数据测试数据'
        }, {
          id: '02',
          code: '00002',
          name: '测试数据02',
          status: '启用',
          remark: '测试数据测试数据'
        }]
      }, {
        id: '3',
        code: '0003',
        name: '测试数据3',
        status: '启用',
        remark: '测试数据测试数据'
      }, {
        id: '4',
        code: '0004',
        name: '测试数据4',
        status: '启用',
        remark: '测试数据测试数据'
      }],
      data1: [],
      columns1: []
    }
  },
  created () {
    this.$http.patch('/api/bi/chart/modify/59c4e4596a4fb223a882c353/', {ttype: 'table'}).then((response) => {
      let data = response.data.data.option_str
      console.log(data)
      this.data1 = data.data
      this.columns1 = data.columns
    })
  },
  components: {
    grid
  }
}
</script>
<style>

</style>
