import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {updateDesk} from '../../../services/deskServices'

export default function Wrapper(props) {
  let details = [props.number, props.section, props.available]
  return(<ModalWrap dataType="desk" formType="edit" header="Edit Desk" id={props.userID} details={details}/>)
}

export function Button(props) {
  return (
  <button id="Edit" onClick={props.handleOpen}>
    <i className="far fa-edit"></i>
  </button>
  )
}

export function Layout(props) {

  const initialFormState = {
    number: props.details[0],
    section: props.details[1],
    available: props.details[2]
  }

  const classes = useStyles();
  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)
  const [deskDetails, setDeskDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setDeskDetails({
        ...deskDetails,
        [name]: value
    })
  }

  function handleSubmit(event) {
      console.log(deskDetails)
      event.preventDefault()
      updateDesk(deskDetails).then(() => {
        dispatch({ type: "updateDesk", data: deskDetails });
        props.handleClose(true);

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Updating user failed. Please check you've only entered string values and filled in every one.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }

  return(<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

  <MatUI.FormControl>
          <MatUI.FormLabel htmlFor="component-simple">Desk Number</MatUI.FormLabel>
          <MatUI.Input id="standard-basic" name="number"required type="number" onChange={handleChange} />
        </MatUI.FormControl>
        <MatUI.FormControl>
          <MatUI.FormLabel htmlFor="component-simple">Section</MatUI.FormLabel>
          <MatUI.Input id="standard-basic" name="section"required type="text" onChange={handleChange} />
        </MatUI.FormControl>
        <MatUI.FormControl>
          <MatUI.FormLabel htmlFor="component-simple">Available</MatUI.FormLabel>
          <MatUI.Radio id="standard-basic" name="available"required type="radio" onChange={handleChange} />
        </MatUI.FormControl>
        <MatUI.Button variant="contained" type="submit" value="New">Create Desk</MatUI.Button>
    <p>{errorMessage}</p>

    </form>)
}
