<template lang="html">
  <div id="example">
    <!-- <ul class="switch-list">
      <li class="switch-item" v-for="item in propList">
        <span>{{ item.name }}: </span>
        <zk-switch v-model="props[item.name]"></zk-switch>
      </li>
    </ul> -->
    <!-- <zk-table
      ref="table"
      sum-text="sum"
      index-text="#"
      :data="data"
      :columns="columns"
      :stripe="props.stripe"
      :border="props.border"
      :show-header="props.showHeader"
      :show-summary="props.showSummary"
      :show-row-hover="props.showRowHover"
      :show-index="props.showIndex"
      :tree-type="props.treeType"
      :is-fold="props.isFold"
      :expand-type="props.expandType"
      :selection-type="props.selectionType">
      <template slot="$expand" scope="scope">
        {{ `My name is ${scope.row.name},
           this rowIndex is ${scope.rowIndex}.`
         }}
      </template>
      <template slot="likes" scope="scope">
        {{ scope.row.likes.join(',') }}
      </template>
    </zk-table> -->
    <!-- <el-button type="primary" size="medium">主要按钮</el-button> -->
    <!-- <el-select v-model="testStr" multiple size="small">
      <el-option :value="column.label" v-for="column in columns"></el-option>
    </el-select> -->
    <!-- <div style="text-align:left;margin:10px;">
      <h3>有无对象</h3>
    </div>
    <div style="overflow-x:auto;">
      <Table :columns="columns1" :width="tableWidth"></Table>
    </div> -->
    <!-- 自定义 iview table -->
    <!-- <div class="iview">
      <dimTable width="600" height="400" :columns="columns1" :verticalColumns="columns2" :data="data1"></dimTable>
    </div> -->
    <Button @click="handleClick">click me</Button>
    <DatePicker 
      :open="open"
      :value="value3"
      type="daterange"
      @on-change="changeClick"
      placement="bottom-start"
      placeholder="Select date"

      style="width: 200px">
      <template>&nbsp;</template>
    </DatePicker>
  </div>
</template>
<script>
import dimTable from '@/components/table/table.vue'
export default {
  name: 'example',
  data() {
    return {
      props: {
        stripe: false,
        border: false,
        showHeader: true,
        showSummary: false,
        showRowHover: true,
        showIndex: false,
        treeType: true,
        isFold: true,
        expandType: false,
        selectionType: false,
      },
      tableWidth: 0,
      data: [
        {
          name: 'Jack',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 10,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20,
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                  children: [
                    {
                      name: 'Ashley',
                      sex: 'female',
                      likes: ['football', 'basketball'],
                      score: 20,
                    },
                    {
                      name: 'Taki',
                      sex: 'male',
                      likes: ['football', 'basketball'],
                      score: 10,
                      children: [
                        {
                          name: 'Ashley',
                          sex: 'female',
                          likes: ['football', 'basketball'],
                          score: 20,
                        },
                        {
                          name: 'Taki',
                          sex: 'male',
                          likes: ['football', 'basketball'],
                          score: 10,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
            },
          ],
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20,
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                },
              ],
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20,
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                },
              ],
            },
          ],
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
            },
          ],
        },
      ],
      columns: [
        {
          label: 'name',
          prop: 'name',
          width: '400px',
        },
        {
          label: 'sex',
          prop: 'sex',
          minWidth: '50px',
        },
        {
          label: 'score',
          prop: 'score',
        },
        {
          label: 'likes',
          prop: 'likes',
          minWidth: '200px',
          type: 'template',
          template: 'likes',
        },
      ],
      columns1: [
        {
          title: '时间段',
          key: 'name',
        },
        {
          title: '18岁',
          key: 'age',
        },
        {
          title: '19岁',
          key: 'address',
        },
        {
          title: '20岁',
          key: 'address1',
        },
        {
          title: '21岁',
          key: 'address2',
        },
        {
          title: '22岁',
          key: 'address3',
        },
        {
          title: '23岁',
          key: 'address4',
        },
        {
          title: '24岁',
          key: 'address5',
        },
        // {
        //   title: '22岁',
        //   key: 'address3',
        //   width: '100'
        // },
      ],
      columns2: [
        {
          title: '维度1',
          key: 'name'
        },
        {
          title: '维度2',
          key: 'age'
        },
        {
          title: '维度3',
          key: 'address'
        },
        {
          title: '维度4',
          key: 'address4'
        }
      ],
      data1: [
        {
          name: '91年',
          age: '有',
          address: '无'
        },
        {
          name: '92年',
          age: '有',
          address: '无'
        },
        {
          name: '93年',
          age: '有',
          address: '无'
        },
        {
          name: '94年',
          age: '有',
          address: '无'
        }
      ],
      testStr: '',
      value3: '',
      open: false,
      options2: {
        shortcuts: [
          {
            text: 'A week',
            value () {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return ['week'];
            }
          },
          {
            text: 'A month',
            value () {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: '3 month',
            value () {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      }
    };
  },
  computed: {
    propList() {
      return Object.keys(this.props).map(item => ({
        name: item,
      }));
    },
  },
  methods: {
    chartResizedEvent () {
      // 获取到列宽
      let len = this.columns1 ? this.columns1.length : 0
      if (len) {
        this.tableWidth = len * 100
      }
    },
    handleClick () {
      this.open = !this.open
    },
    changeClick (ev) {
      console.log(ev)
      this.handleClick()
    },
    changeOpenClick (ev) {
      console.log(ev)
    }
  },
  mounted () {
    this.chartResizedEvent()
    // window.addEventListener('resize', this.chartResizedEvent, false)
  },
  components: {
    dimTable
  }
};
</script>

<style scoped lang="less">
// * {
//   margin: 0;
//   padding: 0;
// }

.switch-list {
  margin: 20px 0;
  list-style: none;
  overflow: hidden;
}

.switch-item {
  margin: 20px;
  float: left;
}
</style>
// 样式修改
<style lang="less">
.iview {
  margin-top: 20px;
  .ivu-table-header {
    background: #2e6888;
    table {
      thead {
        tr {
          th {
            background: #2e6888;
            color: #eee;
            border: 1px solid #fff;
          }
        }
      }
    }
  }
}
</style>

