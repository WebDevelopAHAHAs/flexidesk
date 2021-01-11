import React, {useState} from 'react'
import { useHistory} from "react-router-dom"
import {registerUser} from '../../../services/userServices'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

const AddNewDesk = (props) => {
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
      <MatUI.Input
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
        />
        <label htmlFor="raised-button-file">
        <MatUI.Button variant="contained" component="span" className={classes.button}>
            Upload
        </MatUI.Button>
        </label> 

      <MatUI.Button variant="contained" type="submit" value="Register">Create Desk</MatUI.Button>
  </form>
  )
}
export default AddNewDesk