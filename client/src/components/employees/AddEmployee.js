//Material UI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function AddEmployee(props) {

  const handleOpen = (event) => {
    console.log(event.target.id)
    props.setOpen(true);
    props.setAddEmployee(event.target.id)
  };

  const handleClose = () => {
      props.setOpen(false);
  };

  return(
   <div className='addEmployeeDiv'>
      <button id="Add" onClick={handleOpen}> Add Employee</button> {/* onClick > execute another function for form (look at react events - https://reactjs.org/docs/handling-events.html) content and logic seperated out (dont call twice) */}

     <Modal 
      aria-labelledby="transition-modal-title" 
      aria-describedby="transition-modal-description"
      className="modal-position"
      open={props.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }} >

      <Fade  className="modal-styling" in={props.open}>
       <div>
          {/* <div className={classes.paper}> */}
          <h2 id="transition-modal-title">{props.addNum} Employee</h2>
          <p id="transition-modal-description"> put component here</p>
          </div>
      </Fade>
    </Modal>
  </div>
  )
}