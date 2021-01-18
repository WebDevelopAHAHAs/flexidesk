import {useState, useEffect} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import {createBooking} from '../../../services/bookingServices'
import {getUsers} from '../../../services/userServices'
import './adminBookings.css'
import ViewFloorplan from './ViewFloorplan'

export default function AddBooking(props) {
  const classes = useStyles();
  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)

  const [users, setUsers] = useState([])

  const [employee, setEmployee] = useState("")
  
  const formState = {user_id: employee, desk_id: props.desk_id, date: props.date}
  console.log("Form State: ", formState)
  const [bookingDetails, setBookingDetails] = useState(formState);

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const userData = await getUsers();
    setUsers(userData);
  }

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    setBookingDetails({ ...bookingDetails, [name]: value })
  }

  function handleEmployeeSelectorChange (event) {
    setEmployee(event.target.value);
    console.log(event.target.value)
    setBookingDetails({ ...bookingDetails, user_id: event.target.value })
  }

  function handleSubmit(event) {
    console.log('creating booking')
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

  const loadUsers = () => {
    console.log("Loading Users for Selector: ", users)
 
    return users.map(user => (
      <MatUI.MenuItem key={user._id} value={user._id}>
        <em>{user.first_name} {user.last_name}</em>
      </MatUI.MenuItem>
    ))
  }

  return(
  <MatUI.FormControl component="form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
    
    <MatUI.FormControl>
    <div className="modal-spacing">
        <MatUI.FormLabel htmlFor="component-simple">Employee</MatUI.FormLabel>
        <MatUI.Select id="dropdown" value={employee} onChange={handleEmployeeSelectorChange}>
            <MatUI.MenuItem value={employee}><em>None</em></MatUI.MenuItem>
            {loadUsers()}
      </MatUI.Select>
      </div>
    </MatUI.FormControl>
    <div className='btn-wrapper'>
    <ViewFloorplan/>
    <button className='book-btn'type="submit" value="CreateBooking">
      Book Now
    </button>
    </div>
    <p> {errorMessage} </p>

  </MatUI.FormControl>
  
  )
}
