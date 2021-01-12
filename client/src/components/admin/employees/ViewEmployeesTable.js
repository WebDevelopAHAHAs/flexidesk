/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {getUser, getUsers} from '../../../services/userServices'

import EditEmployee from './EditEmployeeModal'


export default function ViewEmployeesTable(props) {

  const [users, setUsers] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const userData = await getUsers();
    setUsers(userData);
  }

  const loadTable = () => {
    console.log("Loading Users Table: ", users)
 
    return users.map(user => (
      <tr key={user._id}>
        <td>{user.first_name} </td>
        <td>{user.email}</td>
        <td><EditEmployee
            key={user._id}
            first_name={user.first_name}
            email={user.email}/>
        </td>
      </tr>
    ))
  }

  return( <div className='row'>
    <div className='col-12'>

      <table className="employee-table"  id="employee-table-id">
          <thead>
              <tr>
                <th>First Name</th>
                {/* <th>Last Name</th> */}
                {/* <th>Mobile</th> */}
                {/* <th>Access</th> */}
                <th>Email</th>
                <th>Edit</th>
              </tr>
          </thead>
          
          <tbody>
           {loadTable()}
          </tbody>
      </table>
        
    </div>
  </div> )
}