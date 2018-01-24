<template>
  <transition name="fade">
    <ul :class="classes">
      <li>
        <span :class="arrowClasses" @click="handleExpand">
          <Icon v-if="showArrow" type="arrow-right-b"></Icon>
          <Icon v-if="showLoading" type="load-c" class="ivu-load-loop"></Icon>
        </span>
        <Checkbox
          v-if="showCheckbox"
          :value="data.checked"
          :disabled="data.disabled"
          @click.native.prevent="handleCheck">
        </Checkbox>
        <span :class="titleClasses" style="font-size:14px;">{{ data.title }}</span>
        <tree-node
          v-if="data.expand"
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        ></tree-node>
      </li>
    </ul>
  </transition>
</template>
<script>
  import Emitter from '@/components/eleCom/mixins/emitter'
  const prefixCls = 'ivu-tree'
  export default {
    name: 'TreeNode',
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
        isTrue: false
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}-children`
        ]
      },
      arrowClasses () {
        return [
          `${prefixCls}-arrow`,
          {
            [`${prefixCls}-arrow-open`]: this.data.expand
          }
        ]
      },
      titleClasses () {
        return [
          `${prefixCls}-title`
        ]
      },
      showArrow () {
        return (this.data.children) && (this.data.children.length)
      },
      showLoading () {
        return this.isTrue
      }
    },
    methods: {
      handleExpand () {
        if (this.data.disabled) return
        this.data.expand = !this.data.expand
      },
      handleCheck () {
        if (this.data.disabled) return
        this.data.checked = !this.data.checked
        // 遍历所有子节点，并将勾选项禁止
        if (this.data.children && this.data.children.length) {
          for (let i in this.data.children) {
            let item = this.data.children[i]
            this.disabledAllCheckbox(item)
          }
        }
      },
      /**
       * @param {Object}
       */
      disabledAllCheckbox (data) {
        data.checked = true
        data.disabled = true
        if (data.children && data.children.length) {
          for (let i in data.children) {
            let item = data.children[i]
            this.disabledAllCheckbox(item)
          }
        }
      }
    }
  }
</script>
<style lang="less">
  li {
    .ivu-text {
      font-size: 14px;
    }
  }
</style>
