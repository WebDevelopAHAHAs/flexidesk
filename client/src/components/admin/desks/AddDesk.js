import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {createDesk} from '../../../services/deskServices'

export default function Wrapper(props) {
  return(<ModalWrap dataType="desk" formType="add" header="Add Desk"/>)
}

export function Button(props) {
  return (
  <button id="AddDesk" onClick={props.handleOpen}>
    <span>Add Desk</span>
  </button> )
}

export function Layout(props) {
  const classes = useStyles();
  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)

  const initialFormState = {number: "", section: "", available: false}
  const [deskDetails, setDeskDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if(name === "available")
      value = event.target.checked
    setDeskDetails({ ...deskDetails, [name]: value })
  }

  function handleSubmit(event) {
      event.preventDefault()
      createDesk(deskDetails).then(() => {
        dispatch({ type: "createDesk", data: deskDetails });
        props.handleClose(true);

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Creating a new desk failed. Please check you've only entered string values and filled in every one.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }

  return(
  <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

    <MatUI.FormControl>
      <MatUI.FormLabel htmlFor="component-simple">Desk Number</MatUI.FormLabel>
      <MatUI.Input id="standard-basic" name="number" required type="number" onChange={handleChange} />
    </MatUI.FormControl>

    <MatUI.FormControl>
      <MatUI.FormLabel htmlFor="component-simple">Section</MatUI.FormLabel>
      <MatUI.Input id="standard-basic" name="section" required type="text" onChange={handleChange} />
    </MatUI.FormControl>

    <MatUI.FormControl>
      <MatUI.FormLabel htmlFor="component-simple">Available</MatUI.FormLabel>
      <MatUI.Radio id="standard-basic" name="available" required type="radio" onChange={handleChange} />
    </MatUI.FormControl>

    <MatUI.Button variant="contained" type="submit" value="New">Create Desk</MatUI.Button>

    <p>{errorMessage}</p>
  
  </form>
  )
}
