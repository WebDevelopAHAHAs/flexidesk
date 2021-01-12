import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './AdminDesks.css'

import AddDeskButton from './AddDeskModal'
import ViewDesksTable from './ViewDesksTable'

export function Route(props){
  return(<AppLayout desks/>);
}

export function Layout(props) {

  const classes = useStyles();

  //add desk
  const [addDeskModalOpen, setAddDeskModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)


  return( <div id="adminDesk-page">

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminDesks-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

          <h1>Desks</h1>        
          <AddDeskButton open={addDeskModalOpen} setOpen={setAddDeskModalOpen} setAddNum={setAddNum}/>

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