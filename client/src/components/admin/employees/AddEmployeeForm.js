import React, {useState} from 'react'
import { useHistory} from "react-router-dom"
import {registerUser} from '../../../services/userServices'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

const AddEmployeeForm = (props) => {
  const initialFormState = {
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    password: "",
    company: "",
    user_permissions: "",
    team: ""
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
          handleClose(true);
          
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
        <MatUI.FormLabel htmlFor="component-simple">First Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="first_name"required type="text" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Last Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="last_name"required type="text" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Contact Number</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="contact-number"required type="text" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Email</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="email"required type="email" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Password</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="password"required type="password" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Company</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="company"required type="text" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Permissions</MatUI.FormLabel>
        <MatUI.Select id="demo-simple-select-helper" value={""} onChange={handleChange}>
          <MatUI.MenuItem value=""><em>None</em></MatUI.MenuItem>
            <MatUI.MenuItem value={""}>Employee Access</MatUI.MenuItem>
            <MatUI.MenuItem value={""}>Manager Access</MatUI.MenuItem>
            <MatUI.MenuItem value={""}>Admin Access</MatUI.MenuItem>
        </MatUI.Select>
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Team</MatUI.FormLabel>
        <MatUI.Select id="demo-simple-select-helper" value={""} onChange={handleChange}>
          <MatUI.MenuItem value=""><em>None</em></MatUI.MenuItem>
            <MatUI.MenuItem value={""}>Team 1</MatUI.MenuItem>
            <MatUI.MenuItem value={""}>Team 2</MatUI.MenuItem>
        </MatUI.Select>
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.Button type="submit" variant="contained" value="Register">Register</MatUI.Button>
      </MatUI.FormControl>
      {/* <MatUI.Button type="submit" value="Register">Register Employee</MatUI.Button> */}
  </form>
  )
}
export default AddEmployeeForm