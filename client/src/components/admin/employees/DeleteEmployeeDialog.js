import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {deleteUser} from '../../../services/userServices'

export default function DeleteDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteButton = (dialogSuccess) => {
    deleteUser(props.data_id);
    if(dialogSuccess === true)
      window.location.reload()  
  }

  return (
    <div>
           
    <button id='Delete' onClick={handleClickOpen}> <i className="far fa-trash-alt"></i></button>    
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you would like to delete this user?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once a user has been deleted, it cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ABORT
          </Button>
          <Button onClick={deleteButton} color="primary" autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
