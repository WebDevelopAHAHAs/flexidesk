
import React from "react";

class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: 'email@email.com',
      password: 'password'
    }

  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
    
  handleSubmit(event) {
    alert('Signing in...');
    event.preventDefault();
  }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>

                <label>Email</label>
                <input type="text" onChange={this.onEmailChange} />

                <label>Password</label>
                <input type="password" onChange={this.onPasswordChange} />

                <input type="submit" value="Register" />

            </form>
        )
    }
}

export default Register;

// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
//   );