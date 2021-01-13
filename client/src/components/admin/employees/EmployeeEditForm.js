import React, {useState} from 'react'
import { useHistory} from "react-router-dom"
import {updateUser} from '../../../services/userServices'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

const EditEmployee = (props) => {
  const classes = useStyles();
  // const errorStyles = { color: "red" }

  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)  

  const initialFormState = {    
    first_name: props.first_name,
    email: props.email
  }

  const [userDetails, setUserDetails] = useState(initialFormState)

  const handleClose = props.handleClose

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
      updateUser(userDetails).then(() => {
          dispatch({
              type: "setLoggedInUser",
              data: userDetails
          });
          handleClose(true);
          
      }).catch((error) => {
        if (error.response && error.response.status === 401)
            setErrorMessage("Updating user failed. Please check you've only entered string values and filled in every one.")
        else   
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
    })
  }

  return (

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <MatUI.FormControl>
        <MatUI.InputLabel htmlFor="component-simple">Name</MatUI.InputLabel>
        <MatUI.Input id="standard-basic" defaultValue={props.first_name} name="first_name" required type="text" onChange={handleChange} />
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.InputLabel htmlFor="component-simple">Email</MatUI.InputLabel>
        <MatUI.Input id="standard-basic" defaultValue={props.email} name="email" required type="email" onChange={handleChange}/>
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.InputLabel htmlFor="component-simple">Password</MatUI.InputLabel>
        <MatUI.Input id="standard-basic" name="password"required type="password" onChange={handleChange} />
      </MatUI.FormControl>

      <MatUI.Button type="submit" value="Update">Save Changes</MatUI.Button>

      <p>{errorMessage}</p>

  </form>
  )
}
export default EditEmployee
