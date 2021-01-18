import {useEffect, useState} from 'react'
import * as MatUI from '@material-ui/core';
import UserAddBooking from './UserAddBooking'
import {getDesks, getUnbookedDesks} from '../../../services/deskServices'
import ViewFloorplan from './ViewFloorplan'
// import {getBookings} from '../../../services/bookingServices'


export default function DeskSelector(props){
       
  const [newBookingOpen, setNewBookingOpen] = useState(false);
  const [desks, setDesks] = useState([])
  const [deskID, setDeskID] = useState(null)
  const [bookings, setBookings] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const deskData = await getUnbookedDesks(props.date);
    setDesks(deskData)
  }
  
  const handleOpen = (event) => {
    const id = event.target.getAttribute("desk_id")
    console.log("Desk ID:", id)
    setDeskID(id)
    setNewBookingOpen(true); 
  };
  
  const handleClose = () => {
    setNewBookingOpen(false);
  };

  // const notEqualTo = (bookingsValue, deskValue) => bookingsValue != desk_id;

  const loadDesks = () => {
    console.log("Loading Desks: ", desks)
    return desks.map(desk => (
      <button key={desk._id} desk_id={desk._id} className='desks' onClick={handleOpen}><span desk_id={desk._id}>Desk {desk.number}</span></button>
      )
    )
    // if(bookings[i].desk_id != desk._id)


    // for(let booking in bookings) {
    //   setDesks(desks.map()(desk))
    // }
 
    // return desks.map(desk => (
    //   const compare = (a, b) => bookings.every((desk_id, i) => desk_id === bookings[i].desk_id);
    //   bookings.every(notEqualTo)

    //       <button key={desk._id} desk_id={desk._id} className='desks' onClick={handleOpen}><span desk_id={desk._id}>Desk {desk.number}</span></button>
 
  }
  
  return(
  <div className='showDesksDiv'>

    {loadDesks()}
    
    <MatUI.Modal className="modal-position"
      open={newBookingOpen} onClose={handleClose} closeAfterTransition
      aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
      BackdropComponent={MatUI.Backdrop} BackdropProps={{ timeout: 500, }}
    >

      <MatUI.Fade className="modal-styling" in={newBookingOpen}>
       <div>
          <h2 id="transition-modal-title">Reserve Desk</h2>
          <ViewFloorplan/>
          <div id="transition-modal-description"> <UserAddBooking handleClose={handleClose} date={props.date} desk_id={deskID} /></div>
        </div>
      </MatUI.Fade>
    </MatUI.Modal>
  </div>
  )
  }
