import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../actions'
import './login.css'
import {Link} from 'react-router-dom'

function Login(props){
  const user={name:"", pass:""}
  return(
    <div className="page">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <h1>Login</h1>
      <div className="login-frame">
        <div>Account:  <input type="text" placeholder="Account" onChange={(i) => user.name=i.target.value}/></div>
        <div>Password: <input type="password" placeholder="Password" onChange={(i) => user.pass=i.target.value}/></div>
        <div className="group-btn-login">
          <a href="#">forget password?</a>
        </div>
        <button className="login-btn" onClick={()=>props.login({name:user.name,pass:user.pass})}><Link style={{color:"white"}} to="/shoppingCart">Login</Link></button>
        <div>Or</div>
        <div>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-google"></a>
        </div>
        <Link to="/register">You don't have an account?</Link>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(actions._login(user))
    },
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Login)
