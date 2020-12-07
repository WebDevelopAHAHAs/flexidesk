import React, {useState, useEffect} from "react";
// import {BrowserRouter, Route} from 'react-router-dom'
import DisplayUsers from './DisplayUsers'
//.. users .. components .. src
import userData from '../../../data/user_data'

export default function ViewEmployeesPage()
{
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(userData)
  },[])

  return( <div class="page">

    <h1>Employees</h1>
    <DisplayUsers userData={users} />

  </div> )
}