export default function RootRedirect(props){
    props.history.push('/login')
    return( <div>{props.login}</div> );
}