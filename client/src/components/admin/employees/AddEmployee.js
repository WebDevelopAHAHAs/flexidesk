
import React, {useState} from 'react'
import {createUser} from '../../../services/userServices'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'

export default function Wrapper(props) {
  return(<ModalWrap dataType="user" formType="add" header="Add Employee"/>)
}

export function Button(props) {
  return ( <button id="AddEmployee" onClick={props.handleOpen}><span>Add Employee</span></button> )
}

export function Layout(props) {
  const classes = useStyles();
  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)

  const initialFormState = {first_name: "", email: "", password: ""}
  const [userDetails, setUserDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setUserDetails({ ...userDetails, [name]: value })
  }

  function handleSubmit(event) {
      // console.log(userDetails)
      event.preventDefault()
      createUser(userDetails).then(() => {
        dispatch({ type: "createUser", data: userDetails });
        props.handleClose(true);

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Registration failed.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }

  return(
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
    
    <MatUI.Button type="submit" value="createUser">Register Employee</MatUI.Button>

    <p>{errorMessage}</p>

  </form>
  )
}
