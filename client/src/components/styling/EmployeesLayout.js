import {React, useState} from 'react';

import { Paper, Grid, Container, Box } from '@material-ui/core';

import useStyles from './useStyles';
import AddEmployee from '../employees/AddEmployee'
import EditEmployee from '../employees/EditEmployee'

export default function EmployeesLayout(props) {

  const classes = useStyles();

  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);

  const [setAddEmployee] = useState(null)
  const [setEditEmployee] = useState(null)

  return(
    <Container maxWidth="lg" className={classes.container} id="employees-container">
      <Grid container spacing={1}>
      
        <Grid item xs={12} md={8} lg={4}>
          <Paper className="box1">
            <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddEmployee={setAddEmployee}/>
            <EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditEmployee={setEditEmployee}/>
          </Paper>
        </Grid>
      
      </Grid>
      
      <Box pt={4}></Box>
      
    </Container>
  )
}