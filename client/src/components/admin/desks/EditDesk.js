import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import '../../styling/modal.css'
import ModalWrap from '../../ModalWrap'
import {updateDesk} from '../../../services/deskServices'

export default function Wrapper(props) {
  let details = [props.number, props.section, props.available]
  return(<ModalWrap dataType="desk" formType="edit" header="Edit Desk" data_id={props.data_id} details={details}/>)
}

export function Button(props) {
  return(
  <button id="Edit" onClick={props.handleOpen}>
    <i className="far fa-edit"></i>
  </button>
  )
}

export function Layout(props) {
  const classes = useStyles();
  const {dispatch} = useGlobalState();
  const [errorMessage, setErrorMessage] = useState(null)

  const formState = {
    id: props.data_id,
    number: props.details[0],
    section: props.details[1],
    available: props.details[2]
  }
  const [deskDetails, setDeskDetails] = useState(formState);

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if(name === "available")
      value = event.target.checked
    setDeskDetails({ ...deskDetails, [name]: value })
  }

  function handleSubmit(event) {
      event.preventDefault()
      updateDesk(deskDetails).then(() => {
        dispatch({ type: "updateDesk", data: deskDetails });
        props.handleClose(true);

      }).catch((error) => setErrorMessage(props.errorGen(error)))
  }

  return(
    <MatUI.FormControl component="form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      
      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel htmlFor="component-simple">Desk No.</MatUI.FormLabel>
        <MatUI.Input id="desk-no" defaultValue={deskDetails.number} name="number"required type="text" onChange={handleChange} />
        </div>
      </MatUI.FormControl>

      <MatUI.FormControl>
      <div className="container-spacing">
        <MatUI.FormLabel id="section" htmlFor="component-simple">Section</MatUI.FormLabel>
      <MatUI.Input defaultValue={deskDetails.section} name="section"required type="text" onChange={handleChange} />
      </div>
      </MatUI.FormControl>

      
      <MatUI.FormControl>
      <div className="available-container-spacing">
      <MatUI.FormLabel id="available" htmlFor="component-simple">Available</MatUI.FormLabel>
      <MatUI.Checkbox defaultValue={deskDetails.available} name="availabile" required type="checkbox" onChange={handleChange} />
      </div>
      </MatUI.FormControl>

     
      <MatUI.FormControl>
      <div className="button-wrapper">
        <button className='save-btn' variant="contained" type="submit" value="Save Changes">Save Changes</button>
        </div>
      </MatUI.FormControl>

      <p> {errorMessage} </p>

    </MatUI.FormControl>
  )
}
