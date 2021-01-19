import React, {useState, useEffect} from 'react'
// import ReactDOM from 'react-dom';

import {getBookingsByDate} from '../../../services/bookingServices'
import {getUser} from '../../../services/userServices'
import {getDesk} from '../../../services/deskServices'
import convertDate from '../../ConvertDate'
// import EditBooking from './EditBooking'


export default function ViewBookingsToday(props) {

  const [bookings, setBookings] = useState([])

  // const [userID, setUserID] = useState()
  // const [deskID, setDeskID] = useState()

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const bookingData = await getBookingsByDate('day', convertDate(new Date()));
    for(let i = 0; i < bookingData.length; i++) {
      const user = await getUser(bookingData[i].user_id)
      const desk = await getDesk(bookingData[i].desk_id)
      bookingData[i].employeeName = `${user.first_name} ${user.last_name}`
      bookingData[i].deskNumber = `${desk.number}`
    }

    setBookings(bookingData);

  }

  const loadTable = () => {
    console.log("Loading Booking Table: ", bookings)
 
    return bookings.map(booking => (
      <tr key={booking._id}>
        <td>{booking.employeeName}</td>
        <td className='desk-no'>{booking.deskNumber}</td>
        <td>{booking.date}</td>
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
              <th>Desk</th>
              <th>Date</th>
              {/* <th>Edit</th> */}
              <th></th>
              
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