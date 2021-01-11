import api from '../config/api'

export async function registerUser(userInfo) {
  const response = await api.post("/user/register", userInfo)
  console.log("new user posted to server", response) 
  return response.data
}

export async function getUsers() {
  const response = await api.get("/user/all")
  console.log("got all users back from server", response) 
  return response.data
}

export async function getUserByID(id) {
  const response = await api.get(`/user/${id}`)
  console.log("Retrieved a user from the database: ", response) 
  return response.data
}

export async function deleteUserByID(id) {
  const response = await api.delete(`/user/${id}`)
  console.log("Deleted user from database: ", response) 
}

export async function updateUserByID(id) {
  const response = await api.update(`/user/${id}`)
  console.log("Updated user in database: ", response) 
}