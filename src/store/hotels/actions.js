import Vue from 'vue'
import API from '@/api'

export default {
  async fetchHotels ({ commit }) {
    const { data: { data: hotels } } = await API.hotels.fetchHotels()
    commit('setHotels', hotels)
  },
}
