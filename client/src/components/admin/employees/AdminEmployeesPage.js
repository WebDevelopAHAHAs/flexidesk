import {React, useState, useEffect} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './adminEmployees.css'

import AddEmployee from './AddEmployee'
import ViewEmployeesTable from './ViewEmployeesTable'

// import EditEmployee from './EditEmployeeModal'

export function Route(props){
  return(<AppLayout history={props.history} employees/>);
}

export function Layout(props) {

  const classes = useStyles();

  return( <div id="adminEmployees-page">

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={12} lg={12}>

          <h1>Employees</h1>
          <AddEmployee/>
            
        </MatUI.Grid>

          <MatUI.Grid item xs={12}>
            <MatUI.Paper className={classes.paper}>

              <ViewEmployeesTable/>

            </MatUI.Paper>
          </MatUI.Grid>

      </MatUI.Grid>
      
      <MatUI.Box pt={4}> </MatUI.Box>
      
    </MatUI.Container>

  </div>)
}