import api from './api'
import Vue from 'vue'

const hotelsApi = config =>
  api({
    ...config,
  })

const fetchHotels = params =>
  hotelsApi({
    method: 'get',
    url: './api/fakeHotelsJson.json',
    params,
  })


export {
  fetchHotels,
}
