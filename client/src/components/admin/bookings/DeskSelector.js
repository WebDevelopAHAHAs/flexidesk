import {useEffect, useState} from 'react'
import * as MatUI from '@material-ui/core';
import AddBooking from './AddBooking'
import {getDesks} from '../../../services/deskServices'

export default function DeskSelector(props){
       
  const [newBookingOpen, setNewBookingOpen] = useState(false);
  const [desks, setDesks] = useState([])
  const [deskID, setDeskID] = useState(null)


  useEffect( () => {
    // if(desks === [null]) { 
      fetchData();
    // }
  }, [])

  async function fetchData() {
    const deskData = await getDesks();
    setDesks(deskData);
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

  const loadDesks = () => {
    console.log("Loading Desks: ", desks)
 
    return desks.map(desk => (      
      <button key={desk._id} desk_id={desk._id} className='desks' onClick={handleOpen}><span desk_id={desk._id}>Desk {desk.number}</span></button>
    ))
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
          <h2 id="transition-modal-title">Reserving for:</h2>
          <div id="transition-modal-description"> <AddBooking handleClose={handleClose} date={props.date} desk_id={deskID} /></div>
        </div>
      </MatUI.Fade>
    </MatUI.Modal>
  </div>
  )
  }
