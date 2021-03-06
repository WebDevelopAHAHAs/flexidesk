import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout';
import { useHistory } from "react-router-dom";
// import CalendarSelector from './CalendarSelector'
// import DeskSelector from './DeskSelector'
import ViewBookingsTable from './UserBookingsTable'
import './userBooking.css'
import { Link } from 'react-router-dom';


export function Route(props){
  return(<AppLayout access="employee" history={props.history} userViewbookings/>);
}

export function Layout(props) {
  const classes = useStyles();

  return(
    <div id="userBookings-page">

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

          <h1>Your Bookings</h1>    

          <div className="new-btn-wrapper">
        <Link to="/user/newBookings">
          <button className="new-bookings">
            New Booking
          </button>
              </Link>
           </div>      
            
        </MatUI.Grid>

          <MatUI.Grid item xs={12}>

            <MatUI.Paper className={classes.paper}>

            <ViewBookingsTable user_id={props.user_id}/>

            </MatUI.Paper>
          </MatUI.Grid>

      </MatUI.Grid>
      
      <MatUI.Box pt={4}> </MatUI.Box>
      
    </MatUI.Container>

  </div>)
}