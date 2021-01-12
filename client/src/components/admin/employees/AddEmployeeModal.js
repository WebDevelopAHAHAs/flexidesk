//Material UI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddEmployeeForm from './AddEmployeeForm';

export default function AddEmployee(props) {

  const handleOpen = (event) => {
    console.log("Add Employee Button Pressed.")
    // console.log(event.target.id)
    props.setOpen(true);
    props.setAddNum(event.target.id)
  };

  const handleClose = (success) => {
      props.setOpen(false);
      if(success) window.location.reload()  
  };

  return(
   <div className='addEmployeeDiv'>
      <button id="AddEmployee" onClick={handleOpen}><span>Add Employee</span></button>

      <Modal className="modal-position"
        open={props.open} onClose={handleClose} closeAfterTransition
        aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"        
        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >

        <Fade  className="modal-styling" in={props.open}>
          <div>

            <h2 id="transition-modal-title">{props.addNum} Add Employee</h2>
            <p id="transition-modal-description"> <AddEmployeeForm handleClose={handleClose}/></p>

          </div>
        </Fade>
      </Modal>
      
  </div>
  )
}