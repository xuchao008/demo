<template>
  <div class="select-container">
    <h1>select</h1>
    <dim-select v-model="value1" type="default" size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <!-- <dim-select v-model="value2" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <dim-select v-model="value3" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <dim-select v-model="value4" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <dim-select v-model="value5" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select>
    <dim-select v-model="value6" type="default" filterable multiple size="medium" placeholder="请输入">
      <dim-option :value="item.value" :key="index" :label="item.label" v-for="(item,index) in list"></dim-option>
    </dim-select> -->
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
      list: [],
      value1: ''
      // value2: ['HTML'],
      // value3: ['HTML'],
      // value4: ['HTML'],
      // value5: ['HTML'],
      // value6: ['HTML']
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
  },
  created () {
    let data = Mock.mock({
      'list|2000': [
        {value: '@name()' + '@name()', label: '@cname()' + '@name()'}
      ],
      'list1|2000': [
        {value: '@name()'}
      ],
      'list2|2000': [
        {value: '@name()'}
      ]
    })
    console.log(data)
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
