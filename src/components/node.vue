<template>
  <ul class="node">
    <li class="child">
      <!-- <span v-html="$options.filters.filt(model.level)"></span> -->
      <!-- <span v-if="!isChild" style="margin-left: 30px;"></span> -->

      <span :class="{opt: isChild, sty: isOpen&&isChild, noChild: isNoChild}" @click="toggleHandler">
        <strong v-html="$options.filters.filt(model.level)"></strong>
        {{model.name}}</span>
      <span class="classData" v-for="(item, index) in model.values" :key="index">{{item}}</span>
    </li>
    <li v-if="isOpen">
      <Node :model="model" v-for="(model, index) in model.children" :key="index"></Node>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'Node',
    data () {
      return {
        isOpen: false
      }
    },
    props: {
      model: {
        type: Object
      }
    },
    computed: {
      isChild () {
        return this.model.children && this.model.children.length
      },
      isNoChild () {
        return this.model && !this.model.children
      }
    },
    methods: {
      toggleHandler () {
        // console.log(this.isChild)
        if (this.isChild) {
          this.isOpen = !this.isOpen
        }
      }
    },
    filters: {
      filt (level) {
        let allStr = ''
        let str = '<i>&nbsp;</i>'
        for (let i = 1; i < level; i++) {
          allStr += (str + str)
        }
        return allStr
      }
    }
  }
</script>
<style lang="less" scoped>
  .node {
    font-size: 16px;
    text-align: left;
    span {
      font-size: 14px;
    }
    .classData {
      display: inline-block;
      width: 200px;
      text-align: left;
    }
    .child {
      border-bottom: 1px solid #ddd; 
    }
    .noChild {
      display: inline-block;
      width: 300px;
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
    }
    .opt {
      font-weight: bold;
      display: inline-block;
      width: 300px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      &::before {
        display: inline-block;
        margin-left: 5px;
        // margin-right: 5px;
        width: 20px;
        content: '+';
      }
    }
    .sty {
      &::before {
        display: inline-block;
        margin-left: 5px;
        // margin-right: 5px;
        width: 20px;
        content: '-';
      }
    }
  }
  li {
    list-style-type: none;
  }
</style>
