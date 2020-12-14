import api from '../config/api'

  // call to server to login user
  // return user info if successful and error if not
export async function loginUser(userInfo) {
  const response = await api.post("/auth/login", userInfo)
  console.log("got user back from server", response) 
  return response.data
}

// export async function logoutUser() {

// }
