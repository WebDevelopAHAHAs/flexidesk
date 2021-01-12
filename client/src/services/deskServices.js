import api from '../config/api'

export async function newDesk(deskInfo) {
  const response = await api.post("/desk/new", deskInfo)
  console.log("new user posted to server", response) 
  return response.data
}

export async function getDesks() {
  console.log('request sent')
  const response = await api.get("/desk/all")
  console.log("got all users back from server", response) 
  return response.data
}

export async function getDesk(deskInfo) {
  const response = await api.get(`/desk/${deskInfo.id}`)
  console.log("Retrieved a user from the database: ", response) 
  return response.data
}

export async function deleteUser(deskInfo) {
  const response = await api.delete(`/desk/${deskInfo.id}`)
  console.log("Deleted user from database: ", response) 
}

export async function updateDesk(deskInfo) {
  const response = await api.update(`/desk/${deskInfo.id}`)
  console.log("Updated user in database: ", response) 
}