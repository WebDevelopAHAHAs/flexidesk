import {useEffect, useState} from 'react'
import * as MatUI from '@material-ui/core';
import UserAddBooking from './UserAddBooking'
import {getDesks, getUnbookedDesks} from '../../../services/deskServices'
import ViewFloorplan from './ViewFloorplan'
// import {getBookings} from '../../../services/bookingServices'


export default function DeskSelector(props){
  
  console.log("USER ID: ", props.user_id)

  const [newBookingOpen, setNewBookingOpen] = useState(false);
  const [deskID, setDeskID] = useState(null)
  const [deskNodes, setDeskNodes] = useState(null);

  // useEffect( () => {
  //   fetchData();
  // }, [])

  // async function fetchData() {
  //   const deskData = await getUnbookedDesks(props.date);
  //   setDesks(deskData)
  // }
  
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
    
    console.log("Loading Desks: ", props.desks)

    const deskButtons = (props.desks.map(desk => (      
      <button className='desks' key={desk._id} desk_id={desk._id} onClick={handleOpen}><span desk_id={desk._id}>Desk {desk.number}</span></button>
    )))

    return deskButtons
  }
  
  return(
  <div className='showDesksDiv'>

    {props.reloadDesks && loadDesks()}
    
    <MatUI.Modal className="modal-position"
      open={newBookingOpen} onClose={handleClose} closeAfterTransition
      aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
      BackdropComponent={MatUI.Backdrop} BackdropProps={{ timeout: 500, }}
    >

      <MatUI.Fade className="modal-styling" in={newBookingOpen}>
       <div>
          <h2 id="transition-modal-title">Reserve Desk</h2>
          <ViewFloorplan/>
          <div id="transition-modal-description"> <UserAddBooking user_id={props.user_id} handleClose={handleClose} date={props.date} desk_id={deskID} /></div>
        </div>
      </MatUI.Fade>
    </MatUI.Modal>
  </div>
  )
  }
