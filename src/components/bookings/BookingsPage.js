import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TransitionsModal from './admin/NewBookingAdminForm';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function SelectedDesk(){
  console.log("here")
  return(
    <div>
      {/* Rendering Form */}
      <TransitionsModal/>
    </div>
  )
}

export function ShowDesk(day){
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [deskNum, setDeskNum] = useState(null)


  const handleOpen = (event) => {
    console.log(event.target.id)
    setOpen(true);
    setDeskNum(event.target.id)
  };

  const handleClose = () => {
    setOpen(false);
  };
return(
  <div>
      {/* renders desks available (connected to backend) */}
   <button id="desk1" onClick={handleOpen}> Desk 1</button>
   <button id="desk2" onClick={handleOpen}> Desk 2</button>
   <button id="desk3" onClick={handleOpen}> Desk 3</button>
   <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">You have clicked {deskNum}</h2>
            <p id="transition-modal-description"> put component here</p>
          </div>
        </Fade>
      </Modal>
   {/* onClick will render form to book w/covid questions */}
    {/* onClick > execute another function for form (look at react events - https://reactjs.org/docs/handling-events.html) content and logic seperated out (dont call twice) */}
  {/* <SelectedDesk/> */}
  </div>
)
}

export function Bookings() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        // passes argument 
        onClickDay={(day)=> ShowDesk(day)}
      />
      {/* renders ShowDesk function after a day is clicked */}
      {/* <ShowDesk/> */}

    </div>

  );
}

