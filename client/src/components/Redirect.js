// import { useHistory } from "react-router-dom";

export default function Route(props){
  // let history = useHistory();

  if(props.history.loggedInUser == null) {
    props.history.push('/login')
    return props.login;
  }
  else
  {
    props.history.push('/admin/dashboard')
    return props.dashboard;
  }

}