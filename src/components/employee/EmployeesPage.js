import React, {useState, useEffect} from "react";
// import {BrowserRouter, Route} from 'react-router-dom'
import Users from './Users'
//.. admin .. components .. src
import userData from '../../data/user_data'

export default function EmployeesPage()
{
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(userData)
  },[])

  return( <div class="page">

    <h1>Employees</h1>
    <Users userData={users} />

  </div> )
}