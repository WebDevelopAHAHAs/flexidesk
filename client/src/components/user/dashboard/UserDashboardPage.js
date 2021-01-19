import {React} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import TabPanel from './UserDashboardTabs'
import { Link } from 'react-router-dom';

export function Route(props) {
  return( <AppLayout access="employee" history={props.history} userdashboard/>);
}

export function Layout(props) {

  const classes = useStyles();

  return( <div id="userDashboard-page">  

    <MatUI.Container maxWidth="lg" className={classes.container} id="userDashboard-container">
      <MatUI.Grid container spacing={1}>
      
        <MatUI.Grid item xs={12} md={12} lg={12}>
        <h1 className="user-dashboard-h1">Dashboard</h1>
        <div className="edit-btn-wrapper">
        <Link to="/user/viewBookings">
          <button className="view-bookings">
            Edit Bookings
          </button>
              </Link>
           </div>
          <MatUI.Paper className="box1">
            <TabPanel user_id={props.user_id}/>
          </MatUI.Paper>
        </MatUI.Grid>
      
      </MatUI.Grid>
      
      <MatUI.Box pt={4}></MatUI.Box>
      
    </MatUI.Container>

  </div>)
}