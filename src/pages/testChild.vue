<template>
  <div>
    <h3>父组件的值: {{first}}</h3>
    <Button @click="changeProps">click father</Button>
    <!-- <Child :propsList="propsList" :first="first" @onPropsChange="change"></Child> -->
    <!-- <Child :propsList="propsList" :first.sync="first"></Child> -->
    <Child :propsList="propsList" :first="first" @update:first="change2"></Child>
  </div>  
</template>
<script>
  import Child from '@/components/child/child.vue'
  export default {
    name: 'testChild',
    data () {
      return {
        first: false,
        propsList: {
          first: true
        }
      }
    },
    methods: {
      changeProps () {
        // this.propsList.first = !this.propsList.first
        this.first = !this.first
      },
      change2 (val) {
        this.first = val
      },
      change (propName, newVal, oldVal) {
        this[propName] = newVal
        console.log('组件tab的' + propName + '属性变更为' + newVal)
      }
    },
    components: {
      Child
    }
  }
</script>
<style lang="less">

</style>
