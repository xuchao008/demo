<template>
  <div style="width:600px;">
    <hr>
    <tree :data="value" showCheckbox></tree>
  </div>
</template>

<script>
import Tree from '@/components/tree/tree'
export default {
  data () {
    return {
      value: []
    }
  },
  computed: {
  },
  created () {
    this.value = {
      title: 'tree',
      expand: true,
      checked: false,
      children: [{
        title: 'leaf_1',
        expand: true,
        checked: false,
        disabled: false,
        children: []
      }, {
        title: 'leaf_2',
        expand: true,
        checked: false,
        disabled: false,
        children: []
      }, {
        title: 'leaf_3',
        expand: true,
        checked: false,
        disabled: false,
        children: []
      }]
    }
  },
  methods: {
  },
  components: {Tree}
}
</script>

<style>

</style>
