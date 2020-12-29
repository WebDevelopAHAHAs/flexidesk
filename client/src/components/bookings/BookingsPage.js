// import React, { useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';

import StylingTypography from '../styling/StylingTypography'
import Layout from '../styling/Layout'
import NavBar from '../NavBar'

export function BookingsPage(props){
    console.log(props)
  return(
  <div page="dashboardAdmin">

    <StylingTypography/>
    <Layout bookings showdesk/>

    <h1>Bookings</h1>

    <NavBar/> 

  </div>
  )
}

// const modalStyles = makeStyles((theme) => ({
//     modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
//     paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     },
//     }));
//     const classes = modalStyles();