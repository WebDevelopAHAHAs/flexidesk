function handleSubmit(event) {
  event.preventDefault()
  // Attempt login on server
  loginUser(userDetails).then(() => {
      dispatch({
          type: "setLoggedInUser",
          data: userDetails.username
      })
      history.push("/")
      
  }).catch((error) => {
      console.log(`An error occurred authenticating: ${error}`)
  })		
}