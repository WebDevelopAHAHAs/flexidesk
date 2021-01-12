/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {getUsers} from '../../../services/userServices'

import EditEmployee from './EditEmployeeModal'


export default function ViewEmployeesTable(props) {

  //edit employee
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [users, setUsers] = useState([])
  const [editNum, setEditNum,] = useState(null)

  useEffect( () => {
    fetchData();
  }, [])


  function createRow(user) {
    return (<tr>
      <td>
        <p>{user.first_name}</p>
      </td>

      <td>
        <p>{user.email}</p>
      </td>

      <td>
        <EditEmployee open={editEmployeeModalOpen}
          setOpen={setEditEmployeeModalOpen}
          setEditNum={setEditNum}
          userID={user._id}/>
      </td>
    </tr>)
  }

  async function fetchData() {
    const userData = await getUsers();
    setUsers(userData);
  }

  const loadTable = () => {
    return users.map(user => (
      <tr key={user._id}>
        <td>{user.first_name} </td>

        <td>{user.email}</td>

        <td><EditEmployee
            open={editEmployeeModalOpen}
            setOpen={setEditEmployeeModalOpen}
            setEditNum={setEditNum}
            userID={user._id}/>
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

// export default function ViewEmployeesTable(props) {
//   return( <div className='row'>
//     <div className='col-12'>
//         <table className="employee-table">
//             <thead>
//                 <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Mobile</th>
//                     <th>Access</th>
//                     <th>Email</th>
//                     <th></th>
                    
//                 </tr>
//             </thead>
//             <tbody>
//               {/* {data.map(employee =>
//                 <tr key={employee.id}> */}
//                 <tr>
//                     {/* <td>{employee.first_name}</td>
//                     <td>{employee.last_name}</td>
//                     <td>edit</td>
//                     <td>delete</td> */}
//                     <td>Rachel</td>
//                     <td>Williams</td>
//                     <td>0417139641</td>
//                     <td>1</td>
//                     <td>rachel.williams@leapdev.io</td>
//                     <td><EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditNum={setEditNum}/></td>


                    
                  
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//   </div> )
// }