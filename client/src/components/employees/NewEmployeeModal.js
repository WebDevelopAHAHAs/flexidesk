import React from "react";
import RegisterForm from './RegisterForm'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function NewEmployeeModal(props)
{

  const handleClose = () => {
    props.setOpen(false);
  };

  return(
  <div>
      
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
            <h1 id="transition-modal-title">New Employee</h1>
            <RegisterForm history={props.history}/>
            {/* <p id="transition-modal-description"> put component here</p> */}
          </div>
        </Fade>
      </Modal>
    
    
  </div>
  )
}
