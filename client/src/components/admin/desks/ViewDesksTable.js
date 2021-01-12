import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {getDesks} from '../../../services/deskServices'

import EditDesk from './EditDeskModal'

export default function ViewDesksTable(props) {

  //edit desk
  const [editDeskModalOpen, setEditDeskModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const deskData = await getDesks();
    console.log(deskData)
    const table = document.getElementById("desk-table-id");

    deskData.forEach( desk => {    
      var rowNode = document.createElement("tr");

      var number_cell = document.createElement("td");
      var number_text = document.createTextNode(desk.first_name);
      number_cell.appendChild(number_text);
      rowNode.appendChild(number_cell);

      var edit_cell = document.createElement("td");
      
      ReactDOM.render(
        <EditDesk
          open={editDeskModalOpen}
          setOpen={setEditDeskModalOpen}
          setEditNum={setEditNum}
          deskID={desk._id}/>,
        edit_cell
      );

      rowNode.appendChild(edit_cell); 

      table.appendChild(rowNode);
    })
  }

  return( <div className='row'>
    <div className='col-12'>

      <table className="desk-table"  id="desk-table-id">
          <thead>
              <tr>
                <th>Desk No</th>
                <th>Desk Section</th>
                <th>Available</th>
                <th></th>
                <th></th>
              </tr>
          </thead>
          <tbody> </tbody>
      </table>

    </div>
  </div> )
}