import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import StylingTypography from '../../styling/StylingTypography'

import CalendarSelector from '../../components/bookings/CalendarSelector'
import DeskSelector from '../../components/bookings/DeskSelector'

import AppLayout from '../AppLayout'
import NavBar from '../../components/NavBar'

export default function AdminBookingsPage(props){
    console.log(props)
  return(
  <div page="adminBookings-page">

    <StylingTypography/>
    <AppLayout bookings showdesk/>

    <h1>Bookings</h1>

    <NavBar/> 

  </div>
  )
}

export function Layout(props) {

  const classes = useStyles();
  const [deskNum, setDeskNum] = useState(null)

  const [newBookingsModalOpen, setNewBookingsModalOpen] = useState(false);

  return(
    <MatUI.Container maxWidth="lg" className={classes.container} id="bookings-container">
      <MatUI.Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <MatUI.Grid item xs={12} md={8} lg={4}>
          <MatUI.Paper className="admin-calendar">

            <CalendarSelector/>

          </MatUI.Paper>
        </MatUI.Grid>

        {/* Desk Selector */}
        <MatUI.Grid item xs={12} md={8} lg={4}>
          <MatUI.Paper className="available-seats">

            <DeskSelector open={newBookingsModalOpen} setOpen={setNewBookingsModalOpen} deskNum={deskNum} setDeskNum={setDeskNum}/>

          </MatUI.Paper>
        </MatUI.Grid>

        {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
        <MatUI.Grid item xs={12}>
          <MatUI.Paper className={classes.paper}>   

            BOTTOM BOX

          </MatUI.Paper>
        </MatUI.Grid>

      </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>
  );
}