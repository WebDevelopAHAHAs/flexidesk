import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {updateUser} from '../../../services/userServices'

export default function Wrapper(props) {
  let details = [props.access, props.first_name, props.last_name, props.contact_number, props.email]
  return(<ModalWrap dataType="user" formType="edit" header="Edit Employee" data_id={props.userID} details={details}/>)
}

export function Button(props) {
  return ( <button id="Edit" onClick={props.handleOpen}> <i className="far fa-edit"></i></button> )
}

export function Layout(props) {
  const classes = useStyles();
  console.log(useGlobalState)
  const {dispatch} = useGlobalState();
  const [errorMessage, setErrorMessage] = useState(null)
  const [access, setAccess] = useState("");

  const formState = {id: props.data_id, access: props.details[0],
    first_name: props.details[1], last_name: props.details[2],
    contact_number: props.details[3], email: props.details[4]
  }
  console.log("Form State:", formState)
  const [userDetails, setUserDetails] = useState(formState);

  function handleAccessChange (event) {
    console.log(event.target.value)
    setAccess(event.target.value);
    setUserDetails({ ...userDetails, access: event.target.value })
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
        <MatUI.Input id="standard-basic" defaultValue={userDetails.first_name} name="first_name" required type="text" onChange={handleChange} />
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Last Name</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" defaultValue={userDetails.last_name} name="last_name"required type="text" onChange={handleChange} />
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Contact Number</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" defaultValue={userDetails.contact_number} name="contact_number"required type="text" onChange={handleChange} />
      </MatUI.FormControl>

      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Email</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" defaultValue={userDetails.email} name="email"required type="email" onChange={handleChange} />
      </MatUI.FormControl>

      {/* <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Password</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="password" required type="password" onChange={handleChange} />
      </MatUI.FormControl> */}

      {/* <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Company</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" defaultValue={userDetails.first_name} name="company"required type="text" onChange={handleChange} />
      </MatUI.FormControl> */}

      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Permissions</MatUI.FormLabel>
        <MatUI.Select id="demo-simple-select-helper" required value={access} onChange={handleAccessChange}>
          <MatUI.MenuItem value={""}><em>None</em></MatUI.MenuItem>
          <MatUI.MenuItem value={"employee"}>Employee Access</MatUI.MenuItem>
          <MatUI.MenuItem value={"manager"}>Manager Access</MatUI.MenuItem>
          <MatUI.MenuItem value={"admin"}>Admin Access</MatUI.MenuItem>
        </MatUI.Select>
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
        <MatUI.Button type="submit" variant="contained" value="Register">Save Changes</MatUI.Button>
      </MatUI.FormControl>
    </MatUI.FormControl>
  )
}
