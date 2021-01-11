import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'

import CalendarSelector from './CalendarSelector'
import DeskSelector from './DeskSelector'
import EditBookingModal from './EditBookingModal'
import NewBookingModal from './AddNewBookingModal'


export function Route(props){
  return(<AppLayout bookings/>);
}

export function Layout(props) {

  const classes = useStyles();
  const [deskNum, setDeskNum] = useState(null)

  const [newBookingsModalOpen, setNewBookingsModalOpen] = useState(false);
  const [editBookingsModalOpen, setEditBookingsModalOpen] = useState(false);

  const [addNewBookingsModalOpen, setAddNewBookingsModalOpen] = useState(false);

  return( <div id="adminBookings-page">

    <h1>Bookings</h1>
    
    <MatUI.Container maxWidth="lg" className={classes.container} id="adminBookings-container">
      <MatUI.Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <MatUI.Grid item xs={12} md={8} lg={4}>
          <MatUI.Paper className="admin-calendar">

            <CalendarSelector/>

            {/* <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddNum={setAddNum}/> */}

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

  
          < NewBookingModal open={addNewBookingsModalOpen} setOpen={setAddNewBookingsModalOpen}>Edit Booking</ NewBookingModal>
          
            
          < EditBookingModal open={editBookingsModalOpen} setOpen={setEditBookingsModalOpen}>Edit Booking</ EditBookingModal>
          

          </MatUI.Paper>
        </MatUI.Grid>

      </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>

    </div>);
}