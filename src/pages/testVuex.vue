<template>
  <div class="container">
    <hr>
    <br>
    <h2>{{msg}}</h2>
    <br>
    <Button @click="addAction">click me ++</Button>
    <Button @click="reduceAction">click me --</Button>
    <Button @click="SOME_MUTATION">click me-10</Button>
    <br>
    <h3>count_1: {{count_1}}</h3>
    <h3>count_2: {{count_2}}</h3>
    <h3>count_3: {{count}}</h3>
  </div>
</template>

<script>
var mixin = {
  created () {
    console.log('12312312312313')
  }
}
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'vuex',
  mixins: [mixin],
  data () {
    return {
      msg: 'hello vuex',
      aaa: ''
    }
  },
  computed: {
    count_2 () {
      return this.$store.state.count
    },
    ...mapState({
      count_1: state => state.count
    }),
    ...mapGetters(['count'])
  },
  created () {
    this.aaa = this.$store.state.count
  },
  methods: {
    // add () {
    //   this.$store.commit('add')
    // },
    // reduce () {
    //   this.$store.commit('reduce')
    // }
    ...mapMutations([
      'add', 'reduce', 'SOME_MUTATION'
    ]),
    ...mapActions([
      'addAction', 'reduceAction'
    ])
  }
}
</script>

<style>

</style>
