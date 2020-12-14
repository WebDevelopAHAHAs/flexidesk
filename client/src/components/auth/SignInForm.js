import React, {useState} from 'react'
import {useGlobalState} from '../../config/store'
import { loginUser } from '../../services/auth_services'

const SignInForm = ({history}) => {
    const initialFormState = {
        email: "",
        password: ""
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const {dispatch} = useGlobalState()

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
      loginUser(userDetails).then(() => {
          dispatch({
              type: "setLoggedInUser",
              data: userDetails
          })
          history.push("/")
          
      }).catch((error) => {
          console.log(`An error occurred authenticating: ${error}`)
      })		
  }

    // // Login user
    // function loginUser() {
    //   dispatch({
    //     type: "setLoggedInUser",
    //     data: userDetails
    //   })
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label >Email</label>
                <input  required type="text" name="email" placeholder="Enter an email" onChange={handleChange}></input>
            </div>

            <div >
                <label >Password</label>
                <input  required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></input>
            </div>
            
            <input type="submit" value="Login"></input>
            
        </form>
    )
}

export default SignInForm;