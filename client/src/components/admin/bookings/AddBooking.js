import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {createBooking} from '../../../services/bookingServices'

export default function Wrapper(props) {
  let details = null
  return(<ModalWrap dataType="desk" formType="add" header="Add Desk" id={props.deskID} details={details}/>)
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
  const [bookingDetails, setBookingDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if(name === "available")
      value = event.target.checked
    setBookingDetails({ ...bookingDetails, [name]: value })
  }

  function handleSubmit(event) {
      event.preventDefault()
      createBooking(bookingDetails).then(() => {
        dispatch({ type: "createBooking", data: bookingDetails });
        props.handleClose(true);

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Creating a new booking failed.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }

  return(
  <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
    
    <MatUI.FormControl>
      <MatUI.InputLabel htmlFor="component-simple">Employee Name</MatUI.InputLabel>
      <MatUI.Input id="standard-basic" name="first_name"required type="text" onChange={handleChange} />
    </MatUI.FormControl>

    <MatUI.FormControl>
      <MatUI.InputLabel htmlFor="component-simple">Recurring Booking</MatUI.InputLabel>
      <MatUI.Select id="standard-select" name="recurring-booking"required type="select" onChange={handleChange} />
    </MatUI.FormControl>

    <MatUI.Button type="submit" value="Register">
      Create New Booking
    </MatUI.Button>
    
    <MatUI.Button onClick={props.handleClose} variant="contained" color="primary">
      Cancel//FIX ME
    </MatUI.Button>

    <p>{errorMessage}</p>
  
  </form>
  )
}
