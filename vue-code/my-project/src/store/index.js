import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    data: {}
  },
  mutations: {
    increment (state, data) {
      state.count++
      state.data = data
    }
  },
  actions: {
    increment ({ commit }, obj) {
      commit('increment', obj)
    }
  }
})
