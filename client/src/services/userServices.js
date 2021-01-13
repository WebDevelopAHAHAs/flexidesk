import api from '../config/api'

export async function createUser(userInfo) {
  const response = await api.post("/user/new", userInfo)
  console.log("new user posted to server", response) 
  return response.data
}

export async function getUsers() {
  console.log('request sent')
  const response = await api.get("/user/all")
  console.log("got all users back from server", response) 
  return response.data
}

export async function getUser(userInfo) {
  const response = await api.get(`/user/${userInfo.id}`)
  console.log("Retrieved a user from the database: ", response) 
  return response.data
}

export async function deleteUser(userInfo) {
  const response = await api.delete(`/user/${userInfo.id}`)
  console.log("Deleted user from database: ", response) 
}

export async function updateUser(userInfo) {
  const response = await api.update(`/user/${userInfo.id}`)
  console.log("Updated user in database: ", response) 
}