import React from "react";
import {Link} from 'react-router-dom'
import {useGlobalState} from '../../../config/store'
import {logoutUser} from '../../../services/auth_services'

export default function DashboardAdminPage(props)
{
  const {store, dispatch} = useGlobalState()
  // const {loggedInUser} = store

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

  return( <div class="page">

    <h1>Admin Dashboard</h1>
    {/* <a href="/auth/register">Register</a>
    <a href="/auth/login">Login</a> */}
    <Link to="/auth/register">Register</Link>
    <Link to="/auth/login">login</Link>
    <Link onClick={handleLogout} to="/">Logout</Link>

  </div> )
}

