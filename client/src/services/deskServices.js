import api from '../config/api'

export async function createDesk(deskInfo) {
  const response = await api.post("/desk/new", deskInfo)
  console.log("New desk posted to server", response) 
  return response.data
}

export async function getDesks() {
  const response = await api.get("/desk/all")
  console.log("Got all desks back from server", response) 
  return response.data
}

export async function getDesk(deskInfo) {
  const response = await api.get(`/desk/${deskInfo.id}`)
  console.log("Retrieved a desk from the database: ", response) 
  return response.data
}

export async function deleteDesk(deskInfo) {
  const response = await api.delete(`/desk/${deskInfo.id}`)
  console.log("Deleted desk from database: ", response) 
}

export async function updateDesk(deskInfo) {
  const response = await api.update(`/desk/${deskInfo.id}`)
  console.log("Updated desk in database: ", response) 
}