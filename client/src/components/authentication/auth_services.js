import api from '../../config/api'

export async function registerUser(userInfo) {
  const response = await api.post("/auth/register", userInfo)
  console.log("got user back from server", response) 
  return response.data
}

  // call to server to login user
  // return user info if successful and error if not
export async function loginUser(userInfo) {
  const response = await api.post("/auth/login", userInfo)
  console.log("got user back from server", response) 
  return response.data
}

  // call to server to logout user
export async function logoutUser() {
  return api.get("/auth/logout")
}

export async function getUser() {
  const response = await api.get("/auth/get")
  console.log("got user back from server", response) 
  return response.data
}