import React, {useEffect} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar/SideBar'
import Trend from './Trend/Trend'
import MobileNavBar from './smallcomponents/MobileNavBar'
import { useSelector } from 'react-redux'
import HomeCenter from './Center/HomeCenter'
const SharedComponent = () => {
 const { isLoggedIn } = useSelector((state) => state.loginUser)
  const navigate = useNavigate()

  return (
    <div>
      <SideBar />
      <Outlet />
      <Trend />
      <MobileNavBar/>
    </div>
  )
}

export default SharedComponent
