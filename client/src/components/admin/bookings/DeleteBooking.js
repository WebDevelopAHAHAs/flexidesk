import React from 'react';
import * as MatUI from '@material-ui/core';

import {deleteBooking} from '../../../services/bookingServices'

export default function DeleteBooking(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteButton = (dialogSuccess) => {
    deleteBooking(props.data_id);
    if(dialogSuccess === true)
      window.location.reload()  
  }

  return (
    <div>
           
    <button id='Delete' onClick={handleClickOpen}> <i className="far fa-trash-alt"></i></button>    
     
      <MatUI.Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      ><div className="delete-text">
        <MatUI.DialogTitle id="alert-dialog-title">{"Are you sure you would like to delete this booking?"}</MatUI.DialogTitle>
     
        <MatUI.DialogActions>
          <button className="abort-btn" onClick={handleClose} >
            ABORT
          </button>
          <button className="delete-btn" onClick={deleteButton} autoFocus>
            DELETE
          </button>
        </MatUI.DialogActions>
        </div>
      </MatUI.Dialog>
    </div>
  );
}
