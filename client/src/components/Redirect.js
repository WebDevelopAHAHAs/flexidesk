// import { useHistory } from "react-router-dom";

export default function Route({history}){
  // let history = useHistory();

  if(history.loggedInUser == null) {
    history.push('/login')
  }
  else
  {
    history.push('/admin/dashboard')
  }

}