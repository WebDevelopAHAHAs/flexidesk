import api from '../config/api'


export async function createDesk(deskInfo) {
  console.log("Request Desk Creation: ", deskInfo)
  const response = await api.post("/desk/new", deskInfo)
  console.log("Created Desk: ", response) 
  return response.data
}

export async function getDesks() {
  console.log('Requesting All Desks')
  const response = await api.get("/desk/all")
  console.log("Retrieved Desks: ", response) 
  return response.data
}

export async function getDesk(id) {
  console.log("Requesting Desk: ", id)
  const response = await api.get(`/desk/${id}`)
  console.log("Retrieved Desk: ", response) 
  return response.data
}

export async function getUnbookedDesks(date) {
  console.log('Requesting all unbooked Desks by Date', date)
  const response = await api.get(`/desk/all/${date}`)
  console.log("Retrieved all unbooked Desks by Date: ", response)
  return response.data
}

export async function getAvailableUnbookedDesks(available, date) {
  console.log('Requesting all available Desks by Date', available)
  const response = await api.get(`/desk/all/${date}/available`)
  console.log("Retrieved all available Desks by Date: ", response)
  return response.data
}

export async function updateDesk(deskInfo) {
  console.log("Requesting Desk Update: ", deskInfo)
  const response = await api.post(`/desk/${deskInfo.id}`, deskInfo)
  console.log("Updated Desk: ", response) 
}

export async function deleteDesk(id) {
  console.log("Requesting Desk Delete: ", id)
  const response = await api.get(`/desk/${id}/delete`)
  console.log("Deleted Desk: ", id) 
}