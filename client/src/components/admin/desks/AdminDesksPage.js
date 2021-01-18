import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './adminDesks.css'

import AddDesk from './AddDesk'
import ViewDesksTable from './ViewDesksTable'

export function Route(props){
  return(<AppLayout desks/>);
}

export function Layout(props) {

  const classes = useStyles();

  return( <div id="adminDesk-page">

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminDesks-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={12} lg={12}>

          <h1>Desks</h1>
          <AddDesk/>

        </MatUI.Grid>

        <MatUI.Grid item xs={12}>
          <MatUI.Paper className={classes.paper}>   

          <ViewDesksTable/>

          </MatUI.Paper>
        </MatUI.Grid>

      </MatUI.Grid>

      <MatUI.Box pt={4}> </MatUI.Box>

    </MatUI.Container>

  </div>)
}