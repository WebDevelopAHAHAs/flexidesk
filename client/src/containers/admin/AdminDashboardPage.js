import {React, useState} from 'react';

//Styling
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import StylingTypography from '../../styling/StylingTypography'

import AppLayout from '../AppLayout'
import NavBar from '../../components/NavBar'

export default function AdminDashboardPage(props)
{
  return( <div page="adminDashboard-page">

    <StylingTypography/>
    <AppLayout dashboard/>

    <h1>Admin Dashboard</h1>

    <NavBar/>

  </div> )
}

export function Layout(props) {

  const classes = useStyles();

  return( <div>
    <MatUI.Container maxWidth="lg" className={classes.container} id="dashboard-container">
      <MatUI.Grid container spacing={1}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>
          <MatUI.Paper className="box1">

          </MatUI.Paper>
        </MatUI.Grid>
      
      </MatUI.Grid>
      
      <MatUI.Box pt={4}></MatUI.Box>
      
    </MatUI.Container>
    </div>
  )
}