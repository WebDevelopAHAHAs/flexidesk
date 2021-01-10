import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './AdminDesks.css'

import AddDesk from './AddDeskModal'
import EditDesk from './EditDesksModal'

export function Route(props){
  return(<AppLayout desks/>);
}

export function Layout(props) {

  const classes = useStyles();

  //add desk
  const [addDeskModalOpen, setAddDeskModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)

  //edit desk
  const [editDeskModalOpen, setEditDeskModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  return( <div id="adminDesk-page">

    <h1>Desks</h1>

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminDesks-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

         

            <AddDesk open={addDeskModalOpen} setOpen={setAddDeskModalOpen} setAddNum={setAddNum}/>
            

          </MatUI.Grid>
          
          {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
          <MatUI.Grid item xs={12}>
            <MatUI.Paper className={classes.paper}>   

            <div className='row'>
                <div className='col-12'>
                    <table className="desk-table">
                        <thead>
                            <tr>
                                <th>Desk No</th>
                              
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
                                <td>4</td>
                                
                                <td><EditDesk open={editDeskModalOpen} setOpen={setEditDeskModalOpen} setEditNum={setEditNum}/></td>
                                
                              
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