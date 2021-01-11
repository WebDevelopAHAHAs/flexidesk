//Material UI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RegisterForm from '../employees/RegisterForm'

export default function AddEmployee(props) {

  const handleOpen = (event) => {
    console.log(event.target.id)
    props.setOpen(true);
    props.setAddNum(event.target.id)
  };

  const handleClose = () => {
      props.setOpen(false);
  };

  return(
   <div className='addEmployeeDiv'>
      <button id="AddEmployee" onClick={handleOpen}><span>Add Employee</span></button>

      <Modal className="modal-position" open={props.open} onClose={handleClose} closeAfterTransition
        aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"        
        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >

        <Fade  className="modal-styling" in={props.open}>
          <div>
            {/* <div className={classes.paper}> */}
            <h2 id="transition-modal-title">{props.addNum} Employee</h2>

            <p id="transition-modal-description"> <RegisterForm handleClose={handleClose}/></p>

          </div>
        </Fade>
      </Modal>
      
  </div>
  )
}