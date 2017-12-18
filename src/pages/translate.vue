<template>
  <div class="container">
    <p>{{ $t("message.hello") }}</p>
    <el-button type="default" @click="changeHandler">change中英版本</el-button>
    <el-select v-model="value1" placeholder="请输入">
      <el-option v-for="(item,index) in options" :key="index" :value="item.value">{{item.label}}</el-option>
    </el-select>
    <button v-tap="change">change</button>
    <!-- <el-input type="default" v-focus></el-input> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      options: [{
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }, {
        value: 'Dalian',
        label: '大连'
      }],
      dom: null
    }
  },
  directives: {
    tap: {
      fn: null,
      update (el, fn) {
        console.log(123123123)
        this.fn = fn
        el.addEventListener('click', this.fn)
      },
      unbind (el, fn) {
        el.removeEventListener('click', this.fn)
      }
    }
  },
  methods: {
    changeHandler () {
      console.log(this.$i18n.locale)
      let current = this.$i18n.locale
      if (current === 'en') {
        this.$i18n.locale = 'ja'
      } else if (current === 'ja') {
        this.$i18n.locale = 'en'
      }
    },
    change () {
      console.log(1)
    }
  }
}
</script>
<style lang="less">
  .container {
    text-align: center;
  }
</style>
