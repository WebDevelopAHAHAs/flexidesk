import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout';
import { useHistory } from "react-router-dom";
// import CalendarSelector from './CalendarSelector'
// import DeskSelector from './DeskSelector'
import ViewBookingsTable from './UserBookingsTable'
import './userBooking.css'


export function Route(props){
  return(<AppLayout userViewbookings/>);
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
    <div id="userBookings-page">

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

          <h1>Bookings</h1>
          
            
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