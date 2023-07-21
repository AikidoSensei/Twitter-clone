import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'
import Trend from './Trend/Trend'
const SharedLayout = () => {
  return (
    <div className='sharedlayout'>
      <SideBar />
      <Outlet />
      <Trend />
    </div>
  )
}

export default SharedLayout
