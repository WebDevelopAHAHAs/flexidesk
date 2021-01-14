export default function RootRedirect(props){
  console.log("User Logged in: ", props.loggedIn)
  if(props.loggedIn == null) {
    props.history.push('/login')
    return( <div>{props.login}</div> );
  }
  else
  {
    props.history.push('/admin/dashboard');
    return( <div>{props.dashboard}</div> );
  }
}