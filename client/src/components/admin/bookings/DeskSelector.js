import {useEffect, useState} from 'react'
import * as MatUI from '@material-ui/core';
import AddBooking from './AddBooking'

export default function DeskSelector(props){
       
  const [newBookingOpen, setNewBookingOpen] = useState(false);
  const [deskID, setDeskID] = useState(null)
  const [deskNodes, setDeskNodes] = useState(null);

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
    console.log("Loading Desks: ", props.desks)
    
    // if(deskNodes != null) {
    //   deskNodes.forEach(element => {
    //     element.parentNode.removeChild(element);
    //   });
    // }

    const deskButtons = (props.desks.map(desk => (      
      <button className='desks' key={desk._id} desk_id={desk._id} onClick={handleOpen}><span desk_id={desk._id}>Desk {desk.number}</span></button>
    )))

    // setDeskNodes(document.getElementsByClassName("desks"))
    // console.log(deskNodes)

    return deskButtons
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
          {/* <h2 id="transition-modal-title">Reserving for:</h2> */}
          <div id="transition-modal-description"> <AddBooking handleClose={handleClose} date={props.date} desk_id={deskID} /></div>
        </div>
      </MatUI.Fade>
    </MatUI.Modal>
  </div>
  )
  }
