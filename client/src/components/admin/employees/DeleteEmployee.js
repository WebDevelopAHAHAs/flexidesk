import React from 'react';
import * as MatUI from '@material-ui/core';

import {deleteUser} from '../../../services/userServices'

export default function DeleteEmployee(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteButton = () => {
    deleteUser(props.data_id);
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
        <MatUI.DialogTitle id="alert-dialog-title">{"Are you sure you would like to delete this user?"}</MatUI.DialogTitle>
        <MatUI.DialogContent>
          <MatUI.DialogContentText id="alert-dialog-description">
            Once a user has been deleted, it cannot be undone.
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
