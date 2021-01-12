// import React from 'react'
import {Modal, Backdrop, Fade} from '@material-ui/core/';

import EditEmployeeForm from './EmployeeEditForm'

export default function EditEmployee(props) {

  const handleOpen = (event) => {
    console.log("Edit Employee Button Pressed.")
    // console.log(event.target.id)
    console.log(props.open)
    props.setOpen(true);
    console.log(props.open)
    props.setEditNum(event.target.id) //event.target.id)
  };

  const handleClose = (success) => {
      props.setOpen(false);
      if(success) window.location.reload()  
  };

  return(<div className='editEmployeeDiv'>
    
    <button id="Edit" onClick={handleOpen}> <i className="far fa-edit"></i></button>
    <h1>{props.open}</h1>
    <Modal className="modal-position"
      open={props.open} onClose={handleClose} closeAfterTransition
      aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
      BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >

      
      <Fade className="modal-styling" in={props.open}>
         <div>

            <h2 id="transition-modal-title">{props.editNum} Edit Employee</h2>
            <p id="transition-modal-description"> <EditEmployeeForm handleClose={handleClose}/> </p>
          
          </div>
      </Fade>

    </Modal>
  </div> )
}