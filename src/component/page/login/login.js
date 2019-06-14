import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../actions'
import './login.css'

function Login(props){
  return(
    <div className="page">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <h1>Login</h1>
      <div className="login-frame">
        <div>Account:  <input type="text" placeholder="Account"/></div>
        <div>Password: <input type="text" placeholder="Password"/></div>
        <div className="group-btn-login">
          <a href="#">forget password?</a>
        </div>
        <button className="login-btn">Login</button>
        <div>Or</div>
        <div>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
        </div>
        <button className="register-btn">You don't have any account</button>
      </div>
    </div>
  )
}


export default connect(
  null,
  null
)(Login)
