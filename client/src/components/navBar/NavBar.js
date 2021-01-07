import React from 'react'
import {logoutUser} from '../../services/authServices'
import {useGlobalState} from '../../config/store'
import * as MatUI from '@material-ui/core'

export default function NavBar() {
  const {store, dispatch} = useGlobalState()
  const {loggedInUser} = store

  function handleLogout() {
    logoutUser().then((response) => {
      console.log("Got back response on logout", response.status)
    }).catch ((error) => {
      console.log("The server may be down - caught an exception on logout:", error)
    })

    // Even if we catch an error, logout the user locally
    dispatch({
      type: "setLoggedInUser",
      data: null
    })
  }

  return (
    <MatUI.List>
    <h2 className="navbar-header">What would you like to do</h2>
    <div className="navbar-home">
      <ul className="navbar-button-list">

      <li><MatUI.Button color="primary" href="/admin/dashboard">Home</MatUI.Button></li>

      <li><MatUI.Button color="primary" href="/admin/bookings">Bookings</MatUI.Button></li>

      <li><MatUI.Button color="primary" href="/admin/employees">Employees</MatUI.Button></li>

      {/* <li><Button color="primary" href="/admin/desks">Desks</Button></li> */}

      <MatUI.Button color="secondary" onClick={handleLogout} to="/login" >Logout </MatUI.Button>

      </ul>
    </div>
  </MatUI.List>
    
  )
}
