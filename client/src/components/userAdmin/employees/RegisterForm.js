import React, {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import {registerUser} from '../../authentication/auth_services'

const Register = ({history}) => {
  const initialFormState = {
    first_name: "",
    email: "",
    password: ""
  } 

  //User Related
  const [userDetails,setUserDetails] = useState(initialFormState)
  const {dispatch} = useGlobalState()

  //Error Related
  const [errorMessage, setErrorMessage] = useState(null)

  //Compartmentalise
  const errorStyles = {
    color: "red"
  }

  function handleChange(event) {
      const name = event.target.name
      const value = event.target.value
      setUserDetails({
          ...userDetails,
          [name]: value
      })
  }

  function handleSubmit(event) {
      event.preventDefault()
      // Attempt register with server
      registerUser(userDetails).then(() => {
          dispatch({
              type: "setLoggedInUser",
              data: userDetails
          })
          // history.push("/")
          
      }).catch((error) => {
        if (error.response && error.response.status === 401)
            setErrorMessage("Registration failed. Please check you've only entered string values and filled in every one.")
        else   
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
    })
  }


  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>First Name</label>
        <input required type="text" name="first_name"
          placeholder="Enter a first name" onChange={handleChange}>
        </input>
      </div>

      <div>
        <label>Email</label>
        <input required type="email" name="email"
          placeholder="Enter an email" onChange={handleChange}>
        </input>
      </div>

      <div>
        <label>Password</label>
        <input required type="password" name="password"
          placeholder="Enter a password" onChange={handleChange}>
        </input>
      </div>
      
      <input type="submit" value="Register"></input>
      
    </form>
  )
}
export default Register