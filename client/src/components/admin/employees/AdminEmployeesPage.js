import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './adminEmployees.css'

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

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

         

            <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddNum={setAddNum}/>
            

          </MatUI.Grid>
          
          {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
          <MatUI.Grid item xs={12}>
            <MatUI.Paper className={classes.paper}>   

            <div className='row'>
                <div className='col-12'>
                    <table className="employee-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile</th>
                                <th>Access</th>
                                <th>Email</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          {/* {data.map(employee =>
                            <tr key={employee.id}> */}
                            <tr>
                                {/* <td>{employee.first_name}</td>
                                <td>{employee.last_name}</td>
                                <td>edit</td>
                                <td>delete</td> */}
                                <td>Rachel</td>
                                <td>Williams</td>
                                <td>0417139641</td>
                                <td>1</td>
                                <td>rachel.williams@leapdev.io</td>
                                <td><EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditNum={setEditNum}/></td>
                                
                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            </MatUI.Paper>
          </MatUI.Grid>

        </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>

  </div>)
}