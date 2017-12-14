import Vue from 'vue'
import Vuex from 'vuex'

// 引入 mutation
import {SOME_MUTATION} from './mutation.js'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state) {
    state.count ++
  },
  reduce (state) {
    state.count --
  },
  [SOME_MUTATION] (state) {
    state.count = state.count - 10
  }
}

const getters = {
  count: function (state) {
    return state.count + 100
  }
}

const actions = {
  addAction (context) {
    context.commit('add', 10)
    let that = this
    window.setTimeout(() => {
      // context.commit('reduce')
      that.dispatch('reduceAction')
    }, 3000)
    console.log('我比reduce提前执行')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
