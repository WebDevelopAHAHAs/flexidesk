import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {updateBooking} from '../../../services/bookingServices'

export default function Wrapper(props) {
  let details = [props.number, props.section, props.available]
  return(<ModalWrap dataType="booking" formType="edit" header="Edit Booking" dataID={props.dataID} details={details}/>)
}

export function Button(props) {
  return (
  <button id="Edit" onClick={props.handleOpen}>
    <i className="far fa-edit"></i>
  </button>
  )
}

export function Layout(props) {
  const classes = useStyles();
  console.log(useGlobalState);
  const {dispatch} = useGlobalState();
  const [errorMessage, setErrorMessage] = useState(null)

  const data = props.details;
  const initialFormState = {id: props.id, number: data[0], section: data[1], available: data[2] }
  const [bookingDetails, setBookingDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    setBookingDetails({ ...bookingDetails, [name]: value })
  }

  function handleSubmit(event) {
      event.preventDefault()
      updateBooking(bookingDetails).then(() => {
        dispatch({ type: "updateBooking", data: bookingDetails });
        props.handleClose(true);

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Updating booking failed. Please check you've only entered string values and filled in every one.")
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
   <MatUI.Button onClick={handleClose} color="primary">Cancel//FIX THE ON CLOSE
  </MatUI.Button>
  </MatUI.FormControl>
  )
}
