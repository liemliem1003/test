import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../actions'
import './register.css'
import {Link} from 'react-router-dom'

function login(){return(<Link to="/register"/>)}

function Register(props){
  props.changePage("register")
  const user={name:"", pass:""}
  return(
    <div className="page">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <h1>Register</h1>
      <div className="login-frame">
        <div>Account:  <input type="text" placeholder="Account" onChange={(i) => user.name=i.target.value}/></div>
        <div>Password: <input type="password" placeholder="Password" onChange={(i) => user.pass=i.target.value}/></div>
        <button className="login-btn" onClick={()=>props.register({name:user.name,pass:user.pass,login:login()})}>Register</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => {
      dispatch(actions._register(user))
    },
    changePage: page => {
      dispatch(actions.changePage(page))
    },
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Register)
