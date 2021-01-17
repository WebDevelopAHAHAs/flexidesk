import api from '../config/api'

export async function getLoggedOnUser() {
  console.log('Requesting Logged On User')
  const response = await api.get("/auth/login")
  console.log("Got User back from server: ", response) 
  return response.data
}

// call to server to login user
// return user info if successful and error if not
export async function loginUser(userInfo) {
  console.log('Information sent', userInfo)
  const response = await api.post("/auth/login", userInfo)
  console.log("Got User back from server: ", response)
  return response.data
}

// call to server to logout user
export async function logoutUser() {
  return api.get("/auth/logout")
}
