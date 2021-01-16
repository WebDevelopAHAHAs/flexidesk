import React from 'react';
import * as MatUI from '@material-ui/core';

import {deleteDesk} from '../../../services/deskServices'

export default function DeleteDesk(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteButton = (dialogSuccess) => {
    deleteDesk(props.data_id);
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
      >
        <MatUI.DialogTitle id="alert-dialog-title">{"Are you sure you would like to delete this desk?"}</MatUI.DialogTitle>
        <MatUI.DialogContent>
          <MatUI.DialogContentText id="alert-dialog-description">
            Once a desk has been deleted, it cannot be undone.
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
