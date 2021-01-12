import {Modal, Backdrop, Fade} from '@material-ui/core';

import AddDeskForm from './AddDeskForm'

export default function AddDesk(props) {

  const handleOpen = (event) => {
    console.log("Add Desk Button Pressed.")
    console.log(event.target.id)
    props.setOpen(true);
    props.setAddNum(event.target.id)
  };

  const handleClose = (success) => {
      props.setOpen(false);
      if(success) window.location.reload()  
  };

  return(
   <div className='addDeskDiv'>
      <button id="AddDesk" onClick={handleOpen}><span>Add Desk</span></button>

      <Modal className="modal-position"
        open={props.open} onClose={handleClose} closeAfterTransition
        aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"        
        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >
      
        <Fade  className="modal-styling" in={props.open}>
          <div>
            <h2 id="transition-modal-title">{props.addNum} Add Desk</h2>
            <p id="transition-modal-description"> <AddDeskForm/></p>
          </div>
        </Fade>
        
      </Modal>
      
  </div>
  )
}