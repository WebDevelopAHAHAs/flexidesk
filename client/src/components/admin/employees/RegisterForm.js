import React, {useState} from 'react'
import { useHistory} from "react-router-dom"
import {registerUser} from '../../../services/userServices'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

const Register = (props) => {
  const initialFormState = {
    first_name: "",
    email: "",
    password: ""
  } 
  const handleClose = props.handleClose

  const classes = useStyles();

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
          });
          handleClose();
          
      }).catch((error) => {
        if (error.response && error.response.status === 401)
            setErrorMessage("Registration failed. Please check you've only entered string values and filled in every one.")
        else   
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
    })
    
  }


  return (

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <MatUI.FormControl>
        <MatUI.InputLabel htmlFor="component-simple">Name</MatUI.InputLabel>
        <MatUI.Input id="standard-basic" name="first_name"required type="text" onChange={handleChange} />
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.InputLabel htmlFor="component-simple">Email</MatUI.InputLabel>
        <MatUI.Input id="standard-basic" name="email" required type="email" onChange={handleChange}/>
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.InputLabel htmlFor="component-simple">Password</MatUI.InputLabel>
        <MatUI.Input id="standard-basic" name="password"required type="password" onChange={handleChange} />
      </MatUI.FormControl>
      
    <MatUI.Button type="submit" value="Register"></MatUI.Button>
  </form>
    // <form onSubmit={handleSubmit}>
      
    //   <div>
    //     <label>First Name</label>
    //     <input required type="text" name="first_name"
    //       placeholder="Enter a first name" onChange={handleChange}>
    //     </input>
    //   </div>

    //   <div>
    //     <label>Email</label>
    //     <input required type="email" name="email"
    //       placeholder="Enter an email" onChange={handleChange}>
    //     </input>
    //   </div>

    //   <div>
    //     <label>Password</label>
    //     <input required type="password" name="password"
    //       placeholder="Enter a password" onChange={handleChange}>
    //     </input>
    //   </div>
      
      
      
    // </form>
  )
}
export default Register