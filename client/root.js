import React                    from 'react'
import { render }               from 'react-dom'
import { Provider }             from 'react-redux'
import { Router, hashHistory }  from 'react-router'
import Firebase                 from 'firebase'
import store                    from '../src/redux/store/store'
import routes                   from './routes'

//render the main component and mount to the root DOM elements
//Subscribe and make store available to all nested components using Provider
//Making all childrens of the app component
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('react-mount')
)