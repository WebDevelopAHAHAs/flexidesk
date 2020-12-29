import React from "react";
import {StylingTypography, Layout} from '../styling/Layout'
import NavBar from '../NavBar'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function EmployeesPage(props){
  console.log(props)
  return(
  <div page="employeesPage">
    
    <StylingTypography/>
    <Layout employees edit/>
      <h1>Employees</h1>
    <NavBar/>    

  </div>
  )
}

function AddEmployee(props) {

  // if(props){
  //   console.log("props----", props)
  // }

  const handleOpen = (event) => {
    console.log(event.target.id)
    props.setOpen(true);
    props.setAddNum(event.target.id)
  };

  const handleClose = () => {
      props.setOpen(false);
  };

  return(
   <div>
  {/* renders desks available (connected to backend) */}
      <button id="Add" onClick={handleOpen}> Add Employee</button>

  {/* onClick > execute another function for form (look at react events - https://reactjs.org/docs/handling-events.html) content and logic seperated out (dont call twice) */}

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

function EditEmployee(props){
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

return(
 <div>
{/* renders desks available (connected to backend) */}
    <button id="Edit" onClick={handleOpen}> Edit Employee</button>
    
{/* onClick > execute another function for form (look at react events - https://reactjs.org/docs/handling-events.html) content and logic seperated out (dont call twice) */}

   <Modal 
    aria-labelledby="transition-modal-title" 
    aria-describedby="transition-modal-description"
    className="modal-position"
    open={props.open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
    timeout: 500,
}}
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
</div>
)
}

export {AddEmployee, EditEmployee};