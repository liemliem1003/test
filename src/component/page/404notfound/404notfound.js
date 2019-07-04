import React from 'react'
import './404notfound.css'
import {connect} from 'react-redux'
import actions from '../../../actions'

function Notfound(props){
  props.changePage("notfound")
  return(
    <div className="page">
      <h1>4  0  4</h1>
      <h1>NOT FOUND</h1>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => {
      dispatch(actions.changePage(page))
    },
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Notfound)
