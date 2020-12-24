export default {
  hotels: state => state.hotels,
  hotelByIdFunc: state => (id) => {
    return state.hotels.find(hotel => hotel.id = id)
  }
}
