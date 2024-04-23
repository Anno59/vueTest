import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  add: function(state){
    state.count++;
  },
  minus: function(state){
    state.count--;
  }
}

const actions = {
  add: function({ commit }){
    commit('add')
  },
  minus: function({ commit }){
    commit('minus')
  }
}

export default new Vuex.Store({state, mutations, actions})
