import Vue from 'vue'
import Vuex from 'vuex'
import hotels from '@/store/hotels'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridView: false,
  },
  mutations: {
    setGridView: (state, value) => {
      state.gridView = value
    }
  },
  getters: {
    getGridView: state => state.gridView
  },
  actions: {
  },
  modules: {
    hotels
  }
})
