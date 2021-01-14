import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'

import CalendarSelector from './CalendarSelector'
import DeskSelector from './DeskSelector'
// import AddBooking from './AddBooking'


export function Route(props){
  return(<AppLayout newBookings/>);
}

export function Layout(props) {

  const classes = useStyles();
  const [deskNum, setDeskNum] = useState(null)

  const [newBookingsModalOpen, setNewBookingsModalOpen] = useState(false);
  // const [addNewBookingsModalOpen, setAddNewBookingsModalOpen] = useState(false);

  return(
  <div id="adminBookings-page">    
    <MatUI.Container maxWidth="lg" className={classes.container} id="adminBookings-container">
      <MatUI.Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <MatUI.Grid item xs={12} md={8} lg={4}>
        <h1>New Booking</h1>
          <MatUI.Paper className="admin-calendar">

            <CalendarSelector/>

          </MatUI.Paper>
        </MatUI.Grid>

        {/* Desk Selector */}
        <MatUI.Grid item xs={12}>
          <MatUI.Paper className={classes.paper}>   

          <DeskSelector open={newBookingsModalOpen} setOpen={setNewBookingsModalOpen} deskNum={deskNum} setDeskNum={setDeskNum}/>
  
          {/* < NewBookingModal open={addNewBookingsModalOpen} setOpen={setAddNewBookingsModalOpen}>Edit Booking</ NewBookingModal> */}

          </MatUI.Paper>
        </MatUI.Grid>

      </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>
  </div>
  )
}