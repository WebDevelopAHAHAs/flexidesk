import api from '../config/api'

//Create
export async function createUser(userInfo) {
  console.log("Request User Creation: ", userInfo)
  const response = await api.post("/user/new", userInfo)
  console.log("Created User: ", response) 
  return response.data
}

// Retrieve
export async function getUsers() {
  console.log('Requesting All Users')
  const response = await api.get("/user/all")
  console.log("Retrieved Users: ", response) 
  return response.data
}

export async function getUser(id) {
  console.log("Requesting User: ", id)
  const response = await api.get(`/user/${id}`)
  console.log("Retrieved User: ", response) 
  return response.data
}

//Update
export async function updateUser(userInfo) {
  console.log("Requesting User Update: ", userInfo)
  const response = await api.post(`/user/${userInfo.id}`, userInfo)
  console.log("Updated User: ", response) 
}

//Delete
export async function deleteUser(id) {
  console.log("Requesting User Delete: ", id)
  await api.get(`/user/${id}/delete`)
  console.log("Deleted User: ", id) 
}
