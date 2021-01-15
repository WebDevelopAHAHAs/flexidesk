import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {createBooking} from '../../../services/bookingServices'

export default function Wrapper(props) {
  return(<ModalWrap dataType="desk" formType="add" header="Add Desk"/>)
}

export function Button(props) {
  return(
  <button id="AddDesk" onClick={props.handleOpen}>
    <span>Add Desk</span>
  </button>)
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
  <MatUI.FormControl onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
  <MatUI.FormControl>
  <MatUI.FormLabel htmlFor="component-simple">Employee Name</MatUI.FormLabel>
  <MatUI.Input id="standard-basic" name="employee-name"required type="text" onChange={handleChange} />
  </MatUI.FormControl>
  <MatUI.FormControl>
  <MatUI.FormLabel htmlFor="component-simple">Recurring Booking</MatUI.FormLabel>
  <MatUI.Select id="standard-select" name="recurring-booking"required type="select" onChange={handleChange} />
  </MatUI.FormControl>
  <MatUI.Button type="submit" value="Register">Create New Booking</MatUI.Button>
  <MatUI.Button onClick={handleClose} color="primary">Cancel//FIX ONCLICK/CLOSE
  </MatUI.Button>
  </MatUI.FormControl>
  
  )
}
