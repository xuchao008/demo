<template>
  <div class="select-container">
    <h1>select</h1>
    <el-select style="width:400px;" v-model="value3" type="default" multiple size="medium" placeholder="请输入" @change="optionChangeHandler">
      <el-option v-for="(item,index) in options5" :value="item.value" :key="index" :label="item.label"></el-option>
    </el-select>
    <el-button @click="changeData">click me</el-button>
  </div>
</template>
<script>
const Mock = require('mockjs')
import DimSelect from '@/components/eleCom/select'
import DimOption from '@/components/eleCom/option'
export default {
  name: 'testSelect',
  data () {
    return {
      options5: [{
        value: 'HTML',
        label: 'HTML1'
      }, {
        value: 'CSS',
        label: 'CSS1'
      }, {
        value: 'JavaScript',
        label: 'JavaScript1'
      }],
      data: {},
      list: [],
      value3: ['HTML'],
      value6: ['HTML'],
      flag: 0
    }
  },
  directives: {
    tap: {
    //   fn: null,
    //   update (el, fn) {
    //     console.log(123123123)
    //     this.fn = fn
    //     el.addEventListener('click', this.fn)
    //   },
    //   unbind (el, fn) {
    //     el.removeEventListener('click', this.fn)
    //   }
    }
  },
  methods: {
    optionChangeHandler (event) {
      console.log(event)
    },
    // _prevClass :: "el-select-dropdown__item" @53277
    changeData () {
      this.list = []
      // let len = this.list.length
      // for (let i = 0; i < len; i++) {
      //   this.list.pop()
      // }
      // console.log(this.list)
      setTimeout(() => {
        if (this.flag === 0) {
          this.flag = 1
          this.list = this.data.list2
        } else {
          this.flag = 0
          this.list = this.data.list
        }
        console.log(this.list)
      }, 0)
    },
    currentValuesHandler (event) {
      // console.log(event)
    }
  },
  created () {
    let data = Mock.mock({
      'list|500': [
        {value: '@name()' + '@cname()', label: '@cname()' + '@name()'}
      ],
      'list1|500': [
        {value: '@name()', label: '@name()'}
      ],
      'list2|500': [
        {value: '@name()', label: '@name()'}
      ]
    })
    console.log(data)
    this.data = data
    this.list = data.list
  },
  components: {
    DimSelect,
    DimOption
  }
}
</script>
<style lang="less">
  .select-container {
    width: 1000px;
  }
</style>
