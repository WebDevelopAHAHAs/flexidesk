import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {updateUser} from '../../../services/userServices'

export default function Wrapper(props) {
  let details = [props.first_name, props.email]
  return(<ModalWrap dataType="user" formType="edit" header="Edit Employee" id={props.userID} details={details}/>)
}

export function Button(props) {
  return ( <button id="Edit" onClick={props.handleOpen}> <i className="far fa-edit"></i></button> )
}

export function Layout(props) {
  const classes = useStyles();
  console.log(useGlobalState)
  const {dispatch} = useGlobalState();
  const [errorMessage, setErrorMessage] = useState(null)

  const initialFormState = {id: props.id, first_name: props.details[0], email: props.details[1]}
  const [userDetails, setUserDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setUserDetails({
        ...userDetails,
        [name]: value
    })
  }

  function handleSubmit(event) {
    console.log(userDetails)
    event.preventDefault()
    updateUser(userDetails).then(() => {
      dispatch({ type: "updateUser", data: userDetails });
      props.handleClose(true);

    }).catch((error) => setErrorMessage(props.errorGen(error)))

    // ).catch((error) => {
    //     if (error.response && error.response.status === 401)
    //       setErrorMessage("Updating user failed. Please check you've only entered string values and filled in every one.")
    //     else   
    //       setErrorMessage(props.errorMessage)
    // })
  }

  return(
    <MatUI.FormControl component="form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">First Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="first-name"required type="text" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Last Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="last-name"required type="text" onChange={handleChange} />
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
        <MatUI.Button type="submit" variant="contained" value="Register">Save Changes</MatUI.Button>
      </MatUI.FormControl>
    </MatUI.FormControl>
  )
}
