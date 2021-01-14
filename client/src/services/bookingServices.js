import api from '../config/api'

export async function createBooking(bookingInfo) {
  console.log("Request Booking Creation: ", bookingInfo)
  const response = await api.post("/booking/new", bookingInfo)
  console.log("Created Booking: ", response) 
  return response.data
}

export async function deleteBooking(bookingInfo) {
  console.log("Requesting Booking Delete: ", bookingInfo)
  const response = await api.delete(`/booking/${bookingInfo.id}`)
  console.log("Deleted Booking: ", bookingInfo.id) 
}

export async function updateBooking(bookingInfo) {
  console.log("Requesting Booking Update: ", bookingInfo)
  const response = await api.post(`/booking/${bookingInfo.id}`, bookingInfo)
  console.log("Updated Booking: ", response) 
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