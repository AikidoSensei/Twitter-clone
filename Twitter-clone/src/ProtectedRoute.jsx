import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './components/LoginSignUp/Login'
const ProtectedRoutes = () => {
 const {isLoggedIn} = useSelector((state)=>state.loginUser)

  return (
    <div>
     {isLoggedIn ? <Outlet/> : <Login/>}
    </div>
  )
}

export default ProtectedRoutes