import React from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({ loggedIn, children , redirectPath = '/login'}) => {
    if (!loggedIn) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

export default ProtectedRoute;