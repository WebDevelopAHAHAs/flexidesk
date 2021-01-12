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

  

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminDesks-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

         

        <h1>Desks</h1><AddDesk open={addDeskModalOpen} setOpen={setAddDeskModalOpen} setAddNum={setAddNum}/>
            

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
                                <th>Desk Section</th>
                                <th>Available</th>
                                <th></th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                               
                                <td>4</td>
                                <td>Global Area</td>
                                <td>Yes</td>
                                <td>View Desk</td>
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
      <EditDesk open={editDeskModalOpen} setOpen={setEditDeskModalOpen} setAddNum={setAddNum}/>
      </MatUI.Box>
    </MatUI.Container>

  </div>)
}