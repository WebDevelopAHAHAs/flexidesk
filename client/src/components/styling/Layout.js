import {React, useState} from 'react';
import './layout.css';
import clsx from 'clsx';
import { Typography, Drawer, Divider, List,
  Toolbar, AppBar, CssBaseline } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


// Our Files
import useStyles from './useStyles';
import Navbar from '../NavBar'
import AdminBookingsLayout from './AdminBookingsLayout'
import AdminEmployeesLayout from './AdminEmployeesLayout'

export default function Layout(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // // modal content hooks defined at top level component - and passed as props to follow hook rules
  // const [modalOpen, setModalOpen] = useState(false);
  // const [deskNum, setDeskNum] = useState(null)
  // const [addNum, setAddNum] = useState(null)
  // const [editNum, setEditNum,] = useState(null)
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={1} color="secondary"> */}
              {/* <NotificationsIcon /> */}
              {/* HERE IS THE NOTIFICATIONS */}
            {/* </Badge> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        
        <div className={classes.toolbarIcon}>
          {/* HERE IS WHERE WE WILL WRITE THE WELCOME NOTE TO THE USER */}
          <h2>Welcome Admin</h2>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider/>

        <List></List>

        <Divider/>

        <List>
          <h2 className="navbar-header">What would you like to do</h2>
          {/* Here is the NavBar */}
          <Navbar className="navbar-home"/>
        </List>
      </Drawer>

      <main className={classes.content}>
        
        <div className={classes.appBarSpacer} />

        {props && props.bookings && <AdminBookingsLayout/>}

        {props && props.employees && <AdminEmployeesLayout/>}
        
      </main>
    </div>
  );
}

