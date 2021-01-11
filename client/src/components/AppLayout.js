import {React, useState} from 'react';
import './styling/style.css';
import clsx from 'clsx';
import * as MatUI from '@material-ui/core';
import * as MatIcon from '@material-ui/icons'

// Styling
import useStyles from './styling/useStyles';
import StylingTypography from './styling/StylingTypography';

import NavBar from './navBar/NavBar'
import {Layout as AdminBookingsLayout}  from './admin/bookings/AdminBookingsPage'
import {Layout as AdminDashboardLayout} from './admin/dashboard/AdminDashboardPage'
import {Layout as AdminEmployeesLayout} from './admin/employees/AdminEmployeesPage'
import {Layout as AdminDesksLayout} from './admin/desks/AdminDesksPage'


export default function AppLayout(props)
{
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return ( <div>
    <StylingTypography/>
  
    <div className={classes.root}>

    <MatUI.CssBaseline/>

    <MatUI.AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

      <MatUI.Toolbar className={classes.toolbar}>

        <MatUI.IconButton onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} edge="start" color="inherit" aria-label="open drawer">
          <MatIcon.Menu/>
        </MatUI.IconButton>

        <MatUI.Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          FlexiDesk
        </MatUI.Typography>

        <MatUI.IconButton color="inherit">
          {/* <Badge badgeContent={1} color="secondary"> */}
            {/* <NotificationsIcon /> */}
            {/* HERE IS THE NOTIFICATIONS */}
          {/* </Badge> */}
        </MatUI.IconButton>

      </MatUI.Toolbar>

    </MatUI.AppBar>

    <MatUI.Drawer open={open} variant="permanent" classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }}>
      
      <div className={classes.toolbarIcon}>
        <h2>Welcome Admin</h2> {/* HERE IS WTHE WELCOME NOTE FOR THE USER */}
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
              
      {props && props.bookings && <AdminBookingsLayout/>}

      {props && props.dashboard && <AdminDashboardLayout/>}

      {props && props.employees && <AdminEmployeesLayout/>}

      {props && props.desks && <AdminDesksLayout/>}
      
    </main>

    </div>
  </div> );
}