import React from 'react'
import { Outlet,Navigate } from 'react-router'

function Protected() {
    const checkAuth=window.sessionStorage.getItem('tokenValue');
  return checkAuth ? <Outlet />:<Navigate to='/login' />
}

export default Protected