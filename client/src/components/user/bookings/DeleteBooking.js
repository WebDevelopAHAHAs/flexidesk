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

  const deleteButton = () => {
    deleteBooking(props.data_id);
    handleClose()
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
      >
        <MatUI.DialogTitle id="alert-dialog-title">{"Are you sure you would like to delete this booking?"}</MatUI.DialogTitle>
        <MatUI.DialogContent>
          <MatUI.DialogContentText id="alert-dialog-description">
            Once a booking has been deleted, it cannot be undone.
          </MatUI.DialogContentText>
        </MatUI.DialogContent>
        <MatUI.DialogActions>
          <MatUI.Button onClick={handleClose} color="primary">
            ABORT
          </MatUI.Button>
          <MatUI.Button onClick={deleteButton} color="primary" autoFocus>
            DELETE
          </MatUI.Button>
        </MatUI.DialogActions>
      </MatUI.Dialog>
    </div>
  );
}
