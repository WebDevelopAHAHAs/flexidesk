import api from '../config/api'

export async function registerUser(userInfo) {
  const response = await api.post("/auth/register", userInfo)
  console.log("got user back from server", response) 
  return response.data
}

export async function getUser() {
  const response = await api.get("/auth/get")
  console.log("got user back from server", response) 
  return response.data
}