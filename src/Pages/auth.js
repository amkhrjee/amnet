import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../Actions/authActions';

class Auth extends Component {

  state ={
    email: '',
    password: ''
  }

  handleSubmit = e => {
    console.log(this.state);
    this.props.SignIn(this.state)
  }

  handleChange = e => {
   
    this.setState({
      [e.target.id]: e.target.value
    })
  }
    render(){
        return(
            <div className="auth-blue">
                <p className="auth-title">LOGIN AS ADMIN <span role="img" aria-label="emoji"> 🔐</span></p>
                <div className="auth-input-wrapper">
                    <input id="email" onChange={this.handleChange} className="auth-input" placeholder="Ex:your@domain.com" />
                    <input id="password" onChange={this.handleChange}  className="auth-input" placeholder="Password" />
                </div>
                <a onClick={this.handleSubmit}>
                  <div style={{width:"75vw"}} className="blu-button">
                          <p id="button-text-blu">LOGIN AS ADMIN <span role="img" aria-label="emoji"> 🔐</span></p>
                              <div className="blu-button-wrapper"></div>
                  </div>
                </a>
            </div>
        )
    }
}


// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   }
// }

const mapDispatchToProps = dispatch => {
  return{
    SignIn: creds => dispatch(SignIn(creds))
  }
}
 
export default connect(null, mapDispatchToProps)(Auth);