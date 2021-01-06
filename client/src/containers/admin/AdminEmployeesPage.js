import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';

//Styling
import useStyles from '../../styling/useStyles';
import StylingTypography from '../../styling/StylingTypography'

import AppLayout from '../AppLayout'
import NavBar from '../../components/NavBar'

import AddEmployee from '../../components/employees/AddEmployee'
import EditEmployee from '../../components/employees/EditEmployee'

export default function AdminEmployeesPage(props){
  console.log(props)
  return(
  <div page="adminEmployees-page">
    
    <StylingTypography/>
    <AppLayout employees/>

      <h1>Employees</h1>
      
    <NavBar/>    

  </div>
  )
}

export function Layout(props) {

  const classes = useStyles();

  //add employee
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)

  //edit employee
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  return( <div>
    <MatUI.Container maxWidth="lg" className={classes.container} id="employees-container">

      <MatUI.Grid container spacing={1}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

          <MatUI.Paper className="box1">

            <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddNum={setAddNum}/>
            <EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditNum={setEditNum}/>

          </MatUI.Paper>

        </MatUI.Grid>
      
      </MatUI.Grid>
      
      <MatUI.Box pt={4}></MatUI.Box>
      
    </MatUI.Container>    
    </div>)
}