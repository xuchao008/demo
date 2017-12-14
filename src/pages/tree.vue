<template>
  <ul class="par">
    <!-- header部分 -->
    <li class="header">
      <span v-for="(column, index) in columns" :key="index">{{column.title}}</span>
    </li>
    <li>
      <node :model="item" v-for="(item, index) in treedata" :key="index"></node>
    </li>
  </ul>
</template>
<script>
  import Node from '@/components/node'
  let list = [{
    name: 'My Tree',
    level: 1,
    children: [
      {
        name: 'child folder',
        level: 2,
        children: [
          {
            name: 'child folder',
            level: 3,
            children: [
              { name: 'hello', values: [111, 222], level: 4 },
              { name: 'wat', values: [111, 222], level: 4 }
            ],
            values: [111, 222]
          },
          { name: 'hello', values: [111, 222], level: 3 },
          { name: 'wat', values: [111, 222], level: 3 },
          {
            name: 'child folder',
            values: [111, 222],
            level: 3,
            children: [
              { name: 'hello', values: [111, 222], level: 4 },
              { name: 'wat', values: [111, 222], level: 4 }
            ]
          }
        ],
        values: [111, 222]
      }
    ],
    values: [111, 222]
  },
  {
    name: 'My Tree',
    level: 1,
    children: [
      {
        name: 'child folder',
        level: 2,
        children: [
          {
            name: 'child folder',
            level: 3,
            children: [
              { name: 'hello', values: [111, 222], level: 4 },
              { name: 'wat', values: [111, 222], level: 4 }
            ],
            values: [111, 222]
          },
          { name: 'hello', values: [111, 222], level: 3 },
          { name: 'wat', values: [111, 222], level: 3 },
          {
            name: 'child folder',
            values: [111, 222],
            level: 3,
            children: [
              { name: 'hello', values: [111, 222], level: 4 },
              { name: 'wat', values: [111, 222], level: 4 }
            ]
          }
        ],
        values: [111, 222]
      }
    ],
    values: [111, 222]
  }
  ]
  export default {
    data () {
      return {
        columns: [
          {
            key: 'key1',
            title: 'title1'
          },
          {
            key: 'key2',
            title: 'title2'
          },
          {
            key: 'key3',
            title: 'title3'
          }
        ],
        treedata: list
      }
    },
    props: {
      columns: {
        type: Array
      },
      treedata: {
        type: Array
      }
    },
    computed: {
    },
    mounted () {
    },
    components: {
      Node
    }
  }
</script>
<style lang="less">
  // * {
  //   margin: 0;
  //   padding: 0;
  // }
  ul li {
    list-style: none;
    font-size: 0;
  }
  ul.par {
    width: 100%;
    border: 1px solid #ddd;
    border-bottom: 0; 
    // padding-left: 10px; 
    li {
      width: 100%;
      &.header {
        border-bottom: 1px solid #ddd;
        text-align: left;
        background-color: #f8f8f9; 
        span {
          display: inline-block;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          width: 200px;
          text-align: left;
          font-weight: bold;
          &:first-child {
            width: 300px; 
          }
        }
      }
    }
  }
</style>
