import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import App                    from '../components/App'
import { loginUser, logoutUser }  from '../redux/actions/authActions'

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapStateToProps = (state) => {
  return {
    message: state.userfeedback.message,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(loginUser, dispatch),
    logout: bindActionCreators(logoutUser, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, mapDispatchToProps)(App)