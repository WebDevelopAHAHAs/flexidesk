import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import {getBookings} from '../../../services/bookingServices'
import EditBooking from './EditBooking'

export default function ViewBookingsTable(props) {

  const [bookings, setBookings] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const bookingData = await getBookings();
    setBookings(bookingData);

  }

  const loadTable = () => {
    console.log("Loading Users Table: ", bookings)
 
    return bookings.map(booking => (
      <tr key={booking._id}>
        <td>{booking.user_id}</td>
        <td>{booking.desk_id}</td>
        <td>{booking.date}</td>
        {/* <td><EditBooking dataID={booking._id} user_id={booking.user_id} desk_id={booking.desk_id} date={booking.date}/></td> */}
      </tr>
    ))
  }

  return(
  <div className='row'>
    <div className='col-12'>
      <table className="booking-table"  id="booking-table-id">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Desk No.</th>
              <th>Date</th>
              {/* <th>Edit</th> */}
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          
          <tbody>
            {loadTable()}
          </tbody>
      </table>        
    </div>
  </div>
  )
}