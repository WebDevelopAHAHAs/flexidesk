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
    <h2 className="navbar-header"></h2>
    <div className="navbar-home">
      <ul className="navbar-button-list">

      <li><MatUI.Button color="primary" href="/admin/dashboard">Dashboard</MatUI.Button></li>

      <li><MatUI.Button color="primary" href="/admin/bookings">New Booking</MatUI.Button></li>

      <li><MatUI.Button color="primary" href="/admin/viewbookings">View Bookings</MatUI.Button></li>

      <li><MatUI.Button color="primary" href="/admin/employees">Employees</MatUI.Button></li>

      <li><MatUI.Button color="primary" href="/admin/desks">Desks</MatUI.Button></li>

      <MatUI.Button color="primary" onClick={handleLogout} to="/login" >Logout </MatUI.Button>

      </ul>
    </div>
  </MatUI.List>
    
  )
}
