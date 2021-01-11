//Material UI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default function AddDesk(props) {

  const handleOpen = (event) => {
    console.log(event.target.id)
    props.setOpen(true);
    props.setAddNum(event.target.id)
  };

  const handleClose = () => {
      props.setOpen(false);
  };

  return(
   <div className='addDeskDiv'>
      <button id="AddDesk" onClick={handleOpen}><span>Add Desk</span></button>

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

        <Fade  className="modal-styling" in={props.open}>
         <div>
            {/* <div className={classes.paper}> */}
            <h2 id="transition-modal-title">{props.addNum} Add Desk</h2>

            <p id="transition-modal-description"> Form Component Here</p>

            </div>
        </Fade>
      </Modal>
      
  </div>
  )
}