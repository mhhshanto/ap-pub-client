import React, { useContext, useEffect } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';

export const DashboardLayout = () => {
  const navigator = useNavigate()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user) {
      axios.get(`https://hasib-vai-backend.vercel.app/user-role/${user?.email}`)
        .then(res => {
          if (res?.data?.role === 'user') {
            navigator(`/admin/dashboard/user`)
          }
          if (res?.data?.role === 'admin') {
            navigator('/admin/dashboard/admin')
          }
        })
    }

  }, [])

  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <div>
      <SideBar/>
      </div>
      <Outlet/>
      {/* <div className='w-full h-screen overflow-y-hidden'>
        <div className='h-screen bg-blue-500 w-full' id='user'></div>
        <div className='h-screen bg-slate-300' id='inbox'>inbox</div>
      </div> */}
    </div>
  )
}
