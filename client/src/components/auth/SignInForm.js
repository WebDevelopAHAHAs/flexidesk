import React, {useState} from 'react'
import {useGlobalState} from '../../config/store'
import {loginUser} from './auth_services'

const SignInForm = ({history}) => {
    const initialFormState = {
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
      // Attempt login on server
      loginUser(userDetails).then((response) => {

          console.log("response success:", response)
          dispatch({
              type: "setLoggedInUser",
              data: userDetails
          })

          history.push("/admin/dashboard") //successful redirect
          
      }).catch((error) => {
        console.log('error:', error)

        if (error.response && error.response.status === 401)
            setErrorMessage("Authentication failed. Please check your username and password.")
        else   
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p style={errorStyles}>{errorMessage}</p>}

      <div>
        <label>Email</label>
        <input required type="text" name="email" placeholder="Enter an email" onChange={handleChange}></input>
      </div>

      <div>
        <label>Password</label>
        <input required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></input>
      </div>
      
      <input type="submit" value="Login"></input>
        
    </form>
  )
}

export default SignInForm;