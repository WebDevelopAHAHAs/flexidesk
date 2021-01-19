import api from '../config/api'

export async function createBooking(bookingInfo) {
  console.log("Request Booking Creation: ", bookingInfo)
  const response = await api.post("/booking/new", bookingInfo)
  console.log("Created Booking: ", response) 
  return response.data
}

export async function getBookings() {
  console.log('Requesting All Bookings')
  const response = await api.get("/booking/all")
  console.log("Retrieved Bookings: ", response) 
  return response.data
}

export async function getBooking(id) {
  console.log("Requesting Booking: ", id)
  const response = await api.get(`/booking/${id}`)
  console.log("Retrieved Booking: ", response) 
  return response.data
}

export async function getBookingsByDate(type, value) {
  console.log('Requesting All Bookings by ', type)
  const response = await api.get("/booking/all")
  console.log("Retrieved Bookings: ", response)
  let sliceStart = 0        
  const bookings = response.data;
  if(bookings.length !== 0) {
    switch(type) {
      case "month":
        sliceStart = 4
        break;
      case "year":
        sliceStart = 7        
        break;
      default:
      break;
    }
  }
  const filteredBookings = bookings.filter((booking) =>
  booking.date.slice(sliceStart, 9) === value.slice(sliceStart, 9))
  return filteredBookings;
}

  
export async function updateBooking(bookingInfo) {
  console.log("Requesting Booking Update: ", bookingInfo)
  const response = await api.post(`/booking/${bookingInfo.id}`, bookingInfo)
  console.log("Updated Booking: ", response) 
}

export async function deleteBooking(id) {
  console.log("Requesting Booking Delete: ", id)
  const response = await api.get(`/booking/${id}/delete`)
  console.log("Deleted Booking: ", id) 
}
