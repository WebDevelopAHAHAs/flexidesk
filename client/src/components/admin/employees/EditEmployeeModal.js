//Material UI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function EditEmployee(props) {
  if(props){
    console.log("props----", props)
  }

  const handleOpen = (event) => {
    console.log(event.target.id)
    props.setOpen(true);
    props.setEditNum(event.target.id)
  };

  const handleClose = () => {
      props.setOpen(false);
  };

  return(<div className='editEmployeeDiv'>
    <button id="Edit" onClick={handleOpen}> <i class="far fa-edit"></i></button>
    <Modal 
      aria-labelledby="transition-modal-title" 
      aria-describedby="transition-modal-description"
      className="modal-position"
      open={props.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >

      <Fade 
        className="modal-styling"
        in={props.open}>
         <div>
            {/* <div className={classes.paper}> */}
            <h2 id="transition-modal-title">{props.editNum} employee</h2>
            <p id="transition-modal-description"> put component here</p>
            </div>
      </Fade>

    </Modal>
  </div> )
}