import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../utils/filter'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  let isPrivate = getToken('token')
  
  return (
    <Route
      {...rest}
      render={props =>
        isPrivate ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
