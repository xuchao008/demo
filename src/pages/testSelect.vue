<template>
  <div class="select-container">
    <h1>select</h1>
    <!-- <dim-select v-model="value1" type="default" filterable multiple size="medium" placeholder="请输入" @change="optionChangeHandler($event)" @visible-change="currentValuesHandler($event)">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select> -->
    <!-- <dim-select v-model="value2" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>-->
    <dim-select v-model="value3" type="default" multiple size="medium" placeholder="请输入" @change="optionChangeHandler">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select> 
    <!-- <Select style="width:220px;" v-model="value4" filterable multiple>
      <Option style="width:220px;" :value="item.value" :key="index" v-for="(item,index) in list">{{item.value}}</Option>
    </Select>
    <Select style="width:220px;" v-model="value5" filterable multiple>
      <Option style="width:220px;" :value="item.value" :key="index" v-for="(item,index) in list">{{item.value}}</Option>
    </Select> -->
    <!-- <dim-select v-model="value4" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <dim-select v-model="value5" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <dim-select v-model="value6" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select> -->
    <!-- <Select v-model="value2" multiple filterable style="width:260px">
      <Option v-for="(item, index) in list" :value="item.value" :key="index">{{ item.label }}</Option>
    </Select> -->
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
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      data: {},
      list: [],
      value1: ['HTML'],
      value2: ['HTML'],
      value3: ['HTML'],
      value4: [],
      value5: [],
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
