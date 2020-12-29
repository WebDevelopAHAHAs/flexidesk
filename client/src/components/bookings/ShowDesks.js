
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function ShowDesks(props){
       
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
      <button id="desk1" onClick={handleOpen}> Desk 1</button>
      <button id="desk2" onClick={handleOpen}> Desk 2</button>
      <button id="desk3" onClick={handleOpen}> Desk 3</button>
    
     <Modal 
      aria-labelledby="transition-modal-title" 
      aria-describedby="transition-modal-description"
      className="modal-position"
      open={props.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500, }}>

      <Fade className="modal-styling" in={props.open}>
       <div>
          {/* <div className={classes.paper}> */}
          <h2 id="transition-modal-title">You have clicked {props.deskNum} </h2>
          <p id="transition-modal-description"> put component here</p>
        </div>
      </Fade>
    </Modal>
  </div>
  )
  }
