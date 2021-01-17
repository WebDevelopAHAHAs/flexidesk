import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'

import CalendarSelector from './CalendarSelector'
import DeskSelector from './DeskSelector'
// import AddBooking from './AddBooking'
import './userBooking.css'

export function Route(props){
  return(<AppLayout userNewBookings/>);
}

export function Layout(props) {

  const classes = useStyles();

  const [date, setDate] = useState(null)
  // const [desk_id, setDeskID] = useState(null)

  // const [newBookingOpen, setNewBookingOpen] = useState(false);
  // const [addNewBookingsModalOpen, setAddNewBookingsModalOpen] = useState(false);

  return(
  <div id="userBookings-page">    
    <MatUI.Container maxWidth="lg" className={classes.container} id="userBookings-container">
      <MatUI.Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <MatUI.Grid item xs={12} md={8} lg={4}>
        <h1>New Booking</h1>
          <MatUI.Paper className="user-calendar">

            <CalendarSelector setDate={setDate}/>

          </MatUI.Paper>
        </MatUI.Grid>

        {/* Desk Selector */}
        <MatUI.Grid item xs={12}>
          <MatUI.Paper className={classes.paper}>   

          <DeskSelector date={date}/> {/* open={newBookingsModalOpen} setOpen={setNewBookingsModalOpen} deskNum={deskNum} setDeskNum={setDeskNum} */}
  
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