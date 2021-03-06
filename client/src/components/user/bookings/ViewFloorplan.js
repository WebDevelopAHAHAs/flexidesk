import React from 'react';
import * as MatUI from '@material-ui/core';
import Zoom from 'react-img-zoom'


export default function ViewFloorplan(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
      
    <div>
           
    <button id='floorplan' onClick={handleClickOpen}><span>Floorplan</span></button>    
     
      <MatUI.Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width={650}
        maxWidth = {650}
      >
        <MatUI.DialogTitle id="alert-dialog-title">{"Level 8, Floorplan"}</MatUI.DialogTitle>
        <MatUI.DialogContent >
          <MatUI.DialogContentText id="alert-dialog-description">

          <Zoom
            img="/images/floorplanmap.jpg"
            zoomScale={6}
            width={600}
            height={600}
        />  
           
          </MatUI.DialogContentText>
          <div className="legend">
            <i id="green" className="fas fa-square"> </i> Available 
            
            <i id="red" className="fas fa-square"> </i> Covid Restricted<br></br>
            Hover to zoom in
            </div>
        </MatUI.DialogContent>
        <MatUI.DialogActions>
          <MatUI.Button onClick={handleClose} color="primary">
            Close
          </MatUI.Button>
         
        </MatUI.DialogActions>
      </MatUI.Dialog>
    </div>
  );
}
