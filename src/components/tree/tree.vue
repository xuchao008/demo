<template>
  <div :class="prefixCls">
    <tree-node :data="data"
    :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<script>
  import Emitter from '@/components/eleCom/mixins/emitter'
  import TreeNode from './node.vue'
  const prefixCls = 'ivu-tree'
  export default {
    name: 'Tree',
    mixins: [Emitter],
    props: {
      data: {
        type: Object,
        default: {}
      },
      showCheckbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefixCls: prefixCls
      }
    },
    components: {TreeNode}
  }
</script>
<style lang="less">

</style>
