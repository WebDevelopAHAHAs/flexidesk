import React, {useState, useEffect} from 'react'
import {getUsers} from '../../../services/userServices'

import EditEmployee from './EditEmployeeModal'

// http://localhost:3000/admin/employees

export default function ViewEmployeesTable(props) {

  //edit employee
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    // console.log("lifeCycleCalled")
    const userData = await getUsers();
    // console.log(userData)
    const table = document.getElementById("employee-table-id");

    userData.forEach( user => {
      // console.log(user)     
      var rowNode = document.createElement("tr");

      var first_name_cell = document.createElement("td");
      var first_name_text = document.createTextNode(user.first_name);
      first_name_cell.appendChild(first_name_text);
      rowNode.appendChild(first_name_cell);

      var email_cell = document.createElement("td");
      var email_text = document.createTextNode(user.email);
      email_cell.appendChild(email_text);
      rowNode.appendChild(email_cell); 

      
      // var edit_cell = <td><EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditNum={setEditNum} userID={user._id}/></td>;

      // var edit_cell = document.createElement("td");
      // var edit_node = <td><EditEmployee open={editEmployeeModalOpen} setOpen={setEditEmployeeModalOpen} setEditNum={setEditNum} userID={user._id}/></td>;
      // edit_cell = 
      // edit_cell.appendChild(edit_node);

      
      // rowNode.appendChild(edit_cell); 

      table.appendChild(rowNode);
    })
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
          <tbody> </tbody>
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