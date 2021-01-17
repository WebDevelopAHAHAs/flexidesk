import {React, useState} from 'react';
import './styling/style.css';
import clsx from 'clsx';
import * as MatUI from '@material-ui/core';
import * as MatIcon from '@material-ui/icons'

// Styling
import useStyles from './styling/useStyles';

import {getLoggedOnUser} from '../services/authServices'

import NavBar from './navBar/NavBar'
// Admin
import {Layout as AdminDashboard} from './admin/dashboard/AdminDashboardPage'

import {Layout as AdminNewBookings}  from './admin/bookings/AdminNewBookingsPage'
import {Layout as AdminViewBookings}  from './admin/bookings/AdminViewBookingsPage'

import {Layout as AdminEmployees} from './admin/employees/AdminEmployeesPage'
import {Layout as AdminDesks}     from './admin/desks/AdminDesksPage'
// User
import {Layout as UserDashboard}     from './user/dashboard/UserDashboardPage'
import {Layout as UserNewBookings}     from './user/bookings/UserNewBookingsPage'
import {Layout as UserViewBookings}  from './user/bookings/UserViewBookingsPage'
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function AppLayout(props)
{
  console.log("---props", props)

  const classes = useStyles();
  const [open, setOpen] = useState(false);


  async function redirect() {
    const sessionUser = await getLoggedOnUser();
    console.log("Session: ", sessionUser)
    // props.history.push("/login")
  }

  redirect();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return ( <div>  
  
    <div className={classes.root}>

    <MatUI.CssBaseline/>

    <MatUI.AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

      <MatUI.Toolbar className={classes.toolbar}>

        <MatUI.IconButton onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} edge="start" color="inherit" aria-label="open drawer">
          <MatIcon.Menu/>
        </MatUI.IconButton>

        <MatUI.Typography className={classes.title} noWrap>
          FlexiDesk
        </MatUI.Typography>

        <MatUI.IconButton color="inherit"> {/* <Badge badgeContent={1} color="secondary"> */} {/* <NotificationsIcon /> */} {/* HERE IS THE NOTIFICATIONS */} {/* </Badge> */}</MatUI.IconButton>

      </MatUI.Toolbar>

    </MatUI.AppBar>

    <MatUI.Drawer open={open} variant="permanent" classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }}>
      
      <div className={classes.toolbarIcon}>
        <h2>Welcome</h2> {/* HERE IS WTHE WELCOME NOTE FOR THE USER */}
        <MatUI.IconButton onClick={handleDrawerClose}>
          <MatIcon.ChevronLeft/>
        </MatUI.IconButton>
      </div>

      <MatUI.Divider/>
        <MatUI.List> </MatUI.List>
      <MatUI.Divider/>

      <NavBar/>
      
    </MatUI.Drawer>
    


    <main className={classes.content}>
      
      <div className={classes.appBarSpacer}/>
              
      {/* Admin         */}
      {props && props.newBookings && <AdminNewBookings/>}

      {props && props.viewbookings && <AdminViewBookings/>}

      {props && props.dashboard && <AdminDashboard/>}

      {props && props.employees && <AdminEmployees/>}

      {props && props.desks && <AdminDesks/>}

      {/* User */}
      {props && props.userdashboard && <UserDashboard/>}

      {props && props.userNewBookings && <UserNewBookings/>}
      
      {props && props.userViewbookings && <UserViewBookings/>}
    </main>
    
    </div>
   
  </div> );
}