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
  return ( <button id="Edit" onClick={props.handleOpen}> <i className="far fa-edit"></i></button>)
}

export function Layout(props) {

  const initialFormState = {id: props.id, first_name: props.details[0], email: props.details[1]}

  const classes = useStyles();
  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)
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

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Updating user failed. Please check you've only entered string values and filled in every one.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }

  return(
  <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

    <MatUI.FormControl>
      <MatUI.InputLabel htmlFor="component-simple">Name</MatUI.InputLabel>
      <MatUI.Input id="standard-basic" defaultValue={initialFormState.first_name} name="first_name" required type="text" onChange={handleChange} />
    </MatUI.FormControl>

    <MatUI.FormControl>
      <MatUI.InputLabel htmlFor="component-simple">Email</MatUI.InputLabel>
      <MatUI.Input id="standard-basic" defaultValue={initialFormState.email} name="email" required type="email" onChange={handleChange}/>
    </MatUI.FormControl>

    <MatUI.Button type="submit" value="UpdateUser">Save Changes</MatUI.Button>

    <p>{errorMessage}</p>

  </form>
  )
}
