import React, {useState, useEffect} from 'react'
// import ReactDOM from 'react-dom';

import {getUserBookingsByDate} from '../../../services/bookingServices'
import {getDesk} from '../../../services/deskServices'
import convertDate from '../../ConvertDate'


export default function ViewBookingsMonth(props) {

  const [bookings, setBookings] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const bookingData = await getUserBookingsByDate(props.user_id, 'month', convertDate(new Date()));
    for(let i = 0; i < bookingData.length; i++) {
      if(props.user_id === bookingData[i].user_id) {
        const desk = await getDesk(bookingData[i].desk_id)
        bookingData[i].deskNumber = `${desk.number}`
      }
    }

    setBookings(bookingData);
  }


  const loadTable = () => {
    console.log("Loading Booking Table: ", bookings)
 
    return bookings.map(booking => (
      <tr key={booking._id}>
        
        <td className='desk-no'>{booking.deskNumber}</td>
        {/* {fetchEmployeeName(booking.user_id)}
        {fetchDeskNumber(booking.desk_id)} */}
        {/* <td>{booking.desk_id}</td> */}
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
             
              <th>Desk No.</th>
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