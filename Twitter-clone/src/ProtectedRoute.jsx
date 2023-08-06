import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './components/LoginSignUp/Login'
import Welcome from './components/Welcome/Welcome'
const ProtectedRoutes = () => {
 const {isLoggedIn} = useSelector((state)=>state.loginUser)

  return (
    <div>
     {isLoggedIn ? <Outlet/> : <Welcome/>}
    </div>
  )
}

export default ProtectedRoutes