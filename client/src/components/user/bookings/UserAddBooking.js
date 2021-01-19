import {useState, useEffect} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import {createBooking} from '../../../services/bookingServices'
import {getUsers} from '../../../services/userServices'



export default function UserAddBooking(props) {
  const classes = useStyles();
  const {dispatch} = useGlobalState();
  const [errorMessage, setErrorMessage] = useState(null);

  // console.log("USER ID: ", props.user_id)
  const formState = {user_id: props.user_id, desk_id: props.desk_id, date: props.date}
  console.log("Form State: ", formState)
  const [bookingDetails, setBookingDetails] = useState(formState);

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    setBookingDetails({ ...bookingDetails, [name]: value })
  }

  function handleSubmit(event) {
    console.log('creating booking')
      event.preventDefault()
      createBooking(bookingDetails).then(() => {
        dispatch({ type: "createBooking", data: bookingDetails });
        props.handleClose(true);
        window.location.reload()  

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Creating a new booking failed.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }


  return(
  <MatUI.FormControl component="form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div className={classes.paper}>
      <p id="simple-modal-description">
        {/* covid form */}
        I hereby declare that I:<br></br>
        <br></br>
        Have not been travelling within the past 14 days <br></br>
        <br></br>
        Have no flu like symptoms <br></br>
        <br></br>
        Have not come into contact with anyone with Covid-19<br></br>
        <br></br>
        <MatUI.Checkbox id="standard-basic" name="i_agree" required type="checkbox" onChange={handleChange} />
    </p>

    </div>
    <div className="button-wrapper">
    <button className="reserve" type="submit" value="CreateBooking">
      Book Now
    </button>
    </div>

    <p> {errorMessage} </p>

  </MatUI.FormControl>
  
  )
}
