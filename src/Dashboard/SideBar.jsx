import axios from 'axios'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import img from '../../src/assets/profile.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import MobileDashboard from './MobileDashboard';
import { useEffect } from 'react';

const SideBar = () => {
  const { user } = useContext(AuthContext)
  const navigator = useNavigate()
  const [role, setRole] = useState()


  const handleDashboard = () => {
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
  }

  useEffect(() => {
    if (user) {
      axios.get(`https://hasib-vai-backend.vercel.app/user-role/${user?.email}`)
        .then(res => {
          setRole(res.data.role)
        })
    }

  }, [])



  return (
    <div className=''>
      <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block'>
        <Sidebar.Logo
        >
          <Link to={'/'}>
            {user?.displayName || "Demo User"}
          </Link>
        </Sidebar.Logo>
        <Sidebar.Items>
          {
            role === 'admin' ?
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  icon={HiChartPie}>

                  <Link onClick={handleDashboard} className='w-full text-start'>
                    Dashboard
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  icon={HiOutlineCloudUpload}
                >
                  <Link to={'/admin/dashboard/upload'}>
                    Upload Book
                  </Link>
                </Sidebar.Item>

                <Sidebar.Item
                  icon={HiInbox}
                >
                  <Link to={'/admin/dashboard/manage'}>
                    ManageBooks
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiUser}
                >
                  <Link>
                    Users
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiShoppingBag}
                >
                  <Link>
                    Products
                  </Link>
                </Sidebar.Item>
                <Link to={'/login'}>
                  <Sidebar.Item
                    icon={HiArrowSmRight}
                  >
                    Sign In
                  </Sidebar.Item>
                </Link>


                <Link to='/logout'>
                  <Sidebar.Item
                    icon={HiTable}
                  >
                    Log out
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup> :

              <Sidebar.ItemGroup>


                <Link onClick={handleDashboard} className='w-full text-start'>
                  <Sidebar.Item
                    icon={HiChartPie}>
                    Dashboard
                  </Sidebar.Item>
                </Link>


                <Link to={'/login'}>
                  <Sidebar.Item
                    icon={HiArrowSmRight}
                  >
                    Sign In
                  </Sidebar.Item>
                </Link>


                <Link to='/logout'>
                  <Sidebar.Item
                    icon={HiTable}
                  >
                    Log out
                  </Sidebar.Item>
                </Link>

              </Sidebar.ItemGroup>
          }
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              <p>
                Upgrade to Pro
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
            >
              <p>
                Documentation
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiSupport}
            >
              <p>
                Help
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className='md:hidden'>
        <MobileDashboard />
      </div>
    </div>
  )
}

export default SideBar