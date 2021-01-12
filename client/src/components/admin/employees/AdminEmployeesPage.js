import {React, useState, useEffect} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './adminEmployees.css'

import AddEmployee from './AddEmployeeModal'
import ViewEmployeesTable from './ViewEmployeesTable'

// import EditEmployee from './EditEmployeeModal'

export function Route(props){
  return(<AppLayout employees/>);
}

export function Layout(props) {

  const classes = useStyles();

  //add employee
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)


  return( <div id="adminEmployees-page">

   

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

        <h1>{addEmployeeModalOpen}</h1>

        <h1>Employees</h1>
        
        
        <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddNum={setAddNum}/>
            

          </MatUI.Grid>
          
          {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
          <MatUI.Grid item xs={12}>
            <MatUI.Paper className={classes.paper}>   


              <ViewEmployeesTable/>


            </MatUI.Paper>
          </MatUI.Grid>

        </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>

  </div>)
}