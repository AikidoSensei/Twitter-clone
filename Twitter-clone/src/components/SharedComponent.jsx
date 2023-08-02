import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'
import Trend from './Trend/Trend'
import MobileNavBar from './smallcomponents/MobileNavBar'
const SharedComponent = () => {

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
