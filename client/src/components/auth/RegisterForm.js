import React, {useState} from 'react'
import {useGlobalState} from '../../config/store'

const Register = (props) => {

    console.log(props)

    const {history} = props

    const initialFormState = {
        first_name: "",
        email: "",
        password: ""
    }

    const [userDetails,setUserDetails] = useState(initialFormState)
    const {dispatch} = useGlobalState()

    function handleChange(event)
    {
      const name = event.target.name
      const value = event.target.value

      setUserDetails({
          ...userDetails,
          [name]: value
      })
    }

    function handleSubmit(event)
    {
      event.preventDefault()

      dispatch({
          type: "setLoggedInUser",
          data: userDetails
      })

      history.push("/")
    }

    return (
      <form onSubmit={handleSubmit}>

        <div>
          <label>First Name</label>
          <input required type="text" name="first_name" placeholder="Enter a first name" onChange={handleChange}></input>
        </div>

        <div>
          <label>Email</label>
          <input required type="email" name="email" placeholder="Enter an email" onChange={handleChange}></input>
        </div>

        <div>
          <label>Password</label>
          <input required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></input>
        </div>
        
        <input type="submit" value="Register"></input>
        
      </form>
    )
}
export default Register