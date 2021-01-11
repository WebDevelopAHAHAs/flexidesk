import * as MatUI from '@material-ui/core';
import AddNewBookingForm from './AddNewBookingForm'

export default function DeskSelector(props){
       
  if(props){
      console.log("props----", props)
  }
  
  const handleOpen = (event) => {
      console.log(event.target.id)
      props.setOpen(true);
      props.setDeskNum(event.target.id)
  };
  
  const handleClose = () => {
      props.setOpen(false);
  };
  
  return(
   <div className='showDesksDiv'>
  {/* renders desks available (connected to backend) */}
      <button id="Desk 1" onClick={handleOpen}> Desk 1</button>
      <button id="Desk 2" onClick={handleOpen}> Desk 2</button>
      <button id="Desk 3" onClick={handleOpen}> Desk 3</button>
    
     <MatUI.Modal 
      aria-labelledby="transition-modal-title" 
      aria-describedby="transition-modal-description"
      className="modal-position"
      open={props.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={MatUI.Backdrop}
      BackdropProps={{ timeout: 500, }}>

      <MatUI.Fade className="modal-styling" in={props.open}>
       <div>
          {/* <div className={classes.paper}> */}
          <h2 id="transition-modal-title">You have clicked {props.deskNum} </h2>
          <p id="transition-modal-description"> <AddNewBookingForm/></p>
        </div>
      </MatUI.Fade>
    </MatUI.Modal>
  </div>
  )
  }
