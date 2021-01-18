
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

  const initialFormState = {first_name: "", last_name: "", contact_number: null, email: "", password: "", access: ""}
  const [userDetails, setUserDetails] = useState(initialFormState);
  const [access, setAccess] = useState("");

  function handleAccessChange (event) {
    console.log(event.target.value)
    setAccess(event.target.value);
    setUserDetails({ ...userDetails, access: event.target.value })
  }

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
    <MatUI.FormControl component="form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel htmlFor="component-simple">First Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="first_name" required type="text" onChange={handleChange} />
     </div>
      </MatUI.FormControl>

      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel htmlFor="component-simple">Last Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="last_name" required type="text" onChange={handleChange} />
    </div>
      </MatUI.FormControl>

      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel htmlFor="component-simple">Contact No</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="contact_number" required type="text" onChange={handleChange} />
      </div>
      </MatUI.FormControl>
    
      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel id="email" htmlFor="component-simple">Email</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="email" required type="email" onChange={handleChange} />
      </div>
      </MatUI.FormControl>

      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel id="password" htmlFor="component-simple">Password</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="password" required type="password" onChange={handleChange} />
     </div>
      </MatUI.FormControl>
      {/* <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Company</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="company"required type="text" onChange={handleChange} />
      </MatUI.FormControl> */}
      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel id="access" htmlFor="component-simple">Access</MatUI.FormLabel>
        <MatUI.Select id="demo-simple-select-helper" required value={access} onChange={handleAccessChange}>
          <MatUI.MenuItem value={""}><em>None</em></MatUI.MenuItem>
          <MatUI.MenuItem value={"employee"}>Employee Access</MatUI.MenuItem>
          <MatUI.MenuItem value={"manager"}>Manager Access</MatUI.MenuItem>
          <MatUI.MenuItem value={"admin"}>Admin Access</MatUI.MenuItem>
        </MatUI.Select>
        </div>
      </MatUI.FormControl>
      {/* <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Team</MatUI.FormLabel>
        <MatUI.Select id="demo-simple-select-helper" value={""} onChange={handleChange}>
          <MatUI.MenuItem value=""><em>None</em></MatUI.MenuItem>
          <MatUI.MenuItem value={""}>Team 1</MatUI.MenuItem>
          <MatUI.MenuItem value={""}>Team 2</MatUI.MenuItem>
        </MatUI.Select>
      </MatUI.FormControl> */}
      <MatUI.FormControl>
      <div className="button-wrapper">
        <button className="register-btn"type="submit" variant="contained" value="Register">Register</button>
        </div>
      </MatUI.FormControl>
      
      <p> {errorMessage} </p>

    </MatUI.FormControl>
  )
}
