import React, {useState, useEffect} from 'react'
import {logoutUser, getLoggedOnUser} from '../../services/authServices'
import {useGlobalState} from '../../config/store'
import * as MatUI from '@material-ui/core'

export default function NavBar(props) {
  const {store, dispatch} = useGlobalState()
  // const {loggedInUser} = store

  const [loggedOnUser, setLoggedOnUser] = useState(null)

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const user = await getLoggedOnUser();
    setLoggedOnUser(user);
  }

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
    props.history.push('/login')
  }

  function employeeNavBar() {
    return( <MatUI.List>
      <h2 className="navbar-header"></h2>
      <div className="navbar-home">
        <ul className="navbar-button-list">
      
        <li><MatUI.Button className="nav-btn" href="/user/dashboard">Dashboard</MatUI.Button></li>
      
        <li><MatUI.Button className="nav-btn" href="/user/newbookings">New Booking</MatUI.Button></li>
      
        <MatUI.Button id="nav-btn" onClick={handleLogout} to="/login" >Logout </MatUI.Button>
      
        </ul>
      </div>
    </MatUI.List>)
  }

  function adminNavBar() {
    return( <MatUI.List>
      <h2 className="navbar-header">Admin</h2>
      <div className="navbar-home">
        <ul className="navbar-button-list">

        <li><MatUI.Button className="nav-btn" href="/admin/dashboard">Dashboard</MatUI.Button></li>

        <li><MatUI.Button className="nav-btn" href="/admin/newBookings">New Booking</MatUI.Button></li>

        <li><MatUI.Button className="nav-btn" href="/admin/viewBookings">View Bookings</MatUI.Button></li>

        <li><MatUI.Button className="nav-btn" href="/admin/employees">Employees</MatUI.Button></li>

        <li><MatUI.Button className="nav-btn" href="/admin/desks">Desks</MatUI.Button></li>

        <MatUI.Button id="nav-btn" onClick={handleLogout} to="/login" >Logout </MatUI.Button>

        </ul>
      </div>
    </MatUI.List>)
  }

  const navBar = () => {
    console.log("Logged On User: ", loggedOnUser)
    if(loggedOnUser) {
      if(loggedOnUser.access === "admin")
        return adminNavBar()

      if(loggedOnUser.access === "employee")
        return employeeNavBar()
    }

    return null;
  }


  return (
//   <MatUI.List>
//     <h2 className="navbar-header">User</h2>
//     <div className="navbar-home">
//       <ul className="navbar-button-list">

//       <li><MatUI.Button className="nav-btn" href="/admin/dashboard">Dashboard</MatUI.Button></li>

//       <li><MatUI.Button className="nav-btn" href="/admin/newBookings">New Booking</MatUI.Button></li>

//       <li><MatUI.Button className="nav-btn" href="/admin/viewBookings">View Bookings</MatUI.Button></li>

//       <li><MatUI.Button className="nav-btn" href="/admin/employees">Employees</MatUI.Button></li>

//       <li><MatUI.Button className="nav-btn" href="/admin/desks">Desks</MatUI.Button></li>

//       <MatUI.Button id="nav-btn" onClick={handleLogout} to="/login" >Logout </MatUI.Button>

//       </ul>
//     </div>
//   </MatUI.List>

//   )
  
// }

  <div> {navBar()} </div>
  )
  
}
