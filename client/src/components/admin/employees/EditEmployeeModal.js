// import React from 'react'
import {useState} from 'react'
import {Modal, Backdrop, Fade} from '@material-ui/core/';

import EditEmployeeForm from './EmployeeEditForm'

export default function EditEmployee(props) {

  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {    
    console.log("Edit Employee Button Pressed.", props)
    setOpen(true);
  };

  const handleClose = (success) => {
      setOpen(false);
      if(success === true) window.location.reload()  
  };

  return(<div className='editEmployeeDiv'>
    
    <button id="Edit" onClick={handleOpen}> <i className="far fa-edit"></i></button>    

    <Modal className="modal-position"
      open={open} onClose={handleClose} closeAfterTransition
      aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
      BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >

      <Fade className="modal-styling" in={open}>
          <div>

            <h2 id="transition-modal-title">Edit Employee</h2>
            <div id="transition-modal-description">
              <EditEmployeeForm first_name={props.first_name} email={props.email} handleClose={handleClose}/>
            </div>
          
          </div>
      </Fade>

    </Modal>
  </div> )
}