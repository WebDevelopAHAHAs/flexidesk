import {React, useState} from 'react';
import { Paper, Grid, Container, Box } from '@material-ui/core';
import useStyles from './useStyles';

import AddEmployee from '../userAdmin/employees/AddEmployee'
import EditEmployee from '../userAdmin/employees/EditEmployee'

export default function AdminEmployeesLayout(props) {

  const classes = useStyles();

  //add employee
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)

  //edit employee
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  return(
    <Container maxWidth="lg" className={classes.container} id="employees-container">
      <Grid container spacing={1}>
      
        <Grid item xs={12} md={8} lg={4}>
          <Paper className="box1">

            <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddNum={setAddNum}/>
            <EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditNum={setEditNum}/>

          </Paper>
        </Grid>
      
      </Grid>
      
      <Box pt={4}></Box>
      
    </Container>
  )
}