<template>
  <div>
    <h2>slot</h2>
    <child1>
    </child1>
  </div>
</template>
<script>
  import {child1, child2} from '@/components/slot'
  export default {
    components: {
      child1,
      child2
    }
  }
</script>
<style lang="less">

</style>
