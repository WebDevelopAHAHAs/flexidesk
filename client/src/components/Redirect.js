export default function Route(props){
  if(props.history.loggedInUser == null) {
    props.history.push('/login')
    return( <div>{props.login}</div> );
  }
  else
  {
    props.history.push('/admin/dashboard');
    return( <div>{props.dashboard}</div> );
  }

}