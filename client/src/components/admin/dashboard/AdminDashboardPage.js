import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'

export function Route(props) {
  return( <AppLayout dashboard/>);
}

export function Layout(props) {

  const classes = useStyles();

  return( <div id="adminDashboard-page">

  

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminDashboard-container">
      <MatUI.Grid container spacing={1}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>
        <h1>Dashboard</h1>
          <MatUI.Paper className="box1">
          text here
          </MatUI.Paper>
        </MatUI.Grid>
      
      </MatUI.Grid>
      
      <MatUI.Box pt={4}></MatUI.Box>
      
    </MatUI.Container>

  </div>)
}