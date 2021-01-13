import api from '../config/api'

export async function createDesk(deskInfo) {
  console.log("Request Desk Creation: ", deskInfo)
  const response = await api.post("/desk/new", deskInfo)
  console.log("Created Desk: ", response) 
  return response.data
}

export async function deleteDesk(deskInfo) {
  console.log("Requesting Desk Delete: ", deskInfo)
  const response = await api.delete(`/desk/${deskInfo.id}`)
  console.log("Deleted Desk: ", deskInfo.id) 
}

export async function updateDesk(deskInfo) {
  console.log("Requesting Desk Update: ", deskInfo)
  const response = await api.post(`/desk/${deskInfo.id}`, deskInfo)
  console.log("Updated Desk: ", response) 
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