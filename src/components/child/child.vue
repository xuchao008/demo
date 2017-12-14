<template>
  <div>
    <!-- <h3>子组件的值: {{propsList.second}}</h3> -->
    <Button @click="changeProps">click child</Button>
  </div>  
</template>
<script>
  import propsync from '@/mixins/propsync.js'
  export default {
    name: 'child',
    mixins: [propsync], // 声明使用propsync的mixin
    data () {
      return {
      }
    },
    props: ['propsList', 'first'],
    methods: {
      changeProps () {
        // this.p_first = !this.p_first
        // this.first = !this.first
        console.log(this.first)
        this.$emit('update:first', !this.first)
      }
    },
    created () {
      this.propsList.second = false
    }
  }
</script>
<style lang="less">

</style>
