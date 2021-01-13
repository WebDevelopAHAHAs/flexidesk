import {useState} from 'react'
import * as MatUI from '@material-ui/core';

import * as AddEmployee from './admin/employees/AddEmployee';
import * as EditEmployee from './admin/employees/EditEmployee'
import * as AddDesk from './admin/desks/AddDesk';
import * as EditDesk from './admin/desks/EditDesk'

export default function ModalWrap(props) {

  const {dataType, formType, header} = props;

  const [open, setOpen] = useState(false);

  const defaultError = "There may be a problem with the server. Please try again after a few moments."

  const errorGen = (error) => {
    if (error.response && error.response.status === 401)
      return (`${formType} ${dataType} failed.`);
    else
      return defaultError;
  }

  const handleOpen = (event) => {
    console.log("Modal Form Opened: ", formType)
    setOpen(true);
  };

  const handleClose = (formSuccess) => {
      setOpen(false);
      if(formSuccess === true)
        window.location.reload()  
  };

  function setForm() {
    switch(dataType)
    {
      case "user":
        switch(formType) {
          case "add": return AddEmployee;
          case "edit": return EditEmployee;
          default: break;
        }
        break;

      case "desk":
        switch(formType) {
          case "add": return AddDesk;
          case "edit": return EditDesk;
          default: break;
        }
        break;

      default: break;
    }
  }

  const Form = setForm();

  return(<div className='formModal'>
    
    {<Form.Button handleOpen={handleOpen}/>}

    <MatUI.Modal className="modal-position"
      open={open} onClose={handleClose} closeAfterTransition
      aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
      BackdropComponent={MatUI.Backdrop} BackdropProps={{ timeout: 500 }} >

      <MatUI.Fade className="modal-styling" in={open}>
        <div>

          <h2 id="transition-modal-title">

            {header}

          </h2>

          <div id="transition-modal-description">
            
          <Form.Layout handleClose={handleClose}  id={props.id}details={props.details} errorGen={errorGen} defaultError={defaultError} />
              
          </div>
        
        </div>
      </MatUI.Fade>

    </MatUI.Modal>
  </div> )
}