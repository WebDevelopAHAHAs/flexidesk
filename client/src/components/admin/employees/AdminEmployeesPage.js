import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'

import AddEmployee from './AddEmployeeModal'
import EditEmployee from './EditEmployeeModal'

export function Route(props){
  return(<AppLayout employees/>);
}

export function Layout(props) {

  const classes = useStyles();

  //add employee
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)

  //edit employee
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  return( <div id="adminEmployees-page">

    <h1>Employees</h1>

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

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