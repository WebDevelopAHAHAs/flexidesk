import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout';
import { useHistory } from "react-router-dom";
// import CalendarSelector from './CalendarSelector'
// import DeskSelector from './DeskSelector'
import ViewBookingsTable from './ViewBookingsTable'
import './adminBookings.css'
import { Link } from 'react-router-dom';

export function Route(props){
  return(<AppLayout history={props.history} viewbookings/>);
}

export function Layout(props) {
  const classes = useStyles();

  // const [editBookingsModalOpen, setEditBookingsModalOpen] = useState(false);

  // const history = useHistory();

  // const routeChange = () =>{ 
  //   let path = `/admin/newBookings`; 
  //   history.push(path);
  // }

  

  return(
    <div id="adminBookings-page">

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={12} lg={12}>

          <h1 className='booking-h1'>All Bookings</h1>
          <div className="new-btn-wrapper">
        <Link to="/admin/newBookings">
          <button className="new-bookings">
            New Booking
          </button>
              </Link>
           </div>
            
        </MatUI.Grid>

          <MatUI.Grid item xs={12}>
            <MatUI.Paper className={classes.paper}>

            <ViewBookingsTable/>

            </MatUI.Paper>
          </MatUI.Grid>

      </MatUI.Grid>
      
      <MatUI.Box pt={4}> </MatUI.Box>
      
    </MatUI.Container>

  </div>)
}