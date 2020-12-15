import React from 'react'
import {logoutUser} from './auth/auth_services'
import {useGlobalState} from '../config/store'
import Button from '@material-ui/core/Button'

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
    <div>
      <ul className="navbar-button-list">

      <li><Button color="primary" href="/admin/dashboard">Home</Button></li>

      <li><Button color="primary" href="/admin/bookings">Bookings</Button></li>

      <li><Button color="primary" href="/admin/employees">Employees</Button></li>

      {/* <li><Button color="primary" href="/admin/desks">Desks</Button></li> */}

      <li><Button color="secondary" onClick={handleLogout} href="/login" >Logout </Button></li>

      </ul>
    </div>
  )
}
