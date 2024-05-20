import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { FaBlog } from "react-icons/fa6";
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';
import { useState } from 'react';

const MobileDashboard = () => {

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
    <div className='px-4'>
      <Navbar
        fluid
        rounded
      >
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block" />Books
          </span>
        </Navbar.Brand>
        <div className="flex gap-10">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <p>
              Dashboard
            </p>
            <p>
              Settings
            </p>
            <p>
              Earnings
            </p>
            <Dropdown.Divider />
            <p>
              Sign out
            </p>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        {
          role === 'admin' ?
            <Navbar.Collapse>
              <Navbar.Link
                active
                href="/"
              >
                <p>
                  Home
                </p>
              </Navbar.Link>
              <Navbar.Link >
                <button onClick={handleDashboard}>
                  Dashboard
                </button>
              </Navbar.Link>
              <Link to={'/admin/dashboard/upload'}>
                <Navbar.Link >
                  Upload Book
                </Navbar.Link>
              </Link>
              <Link to={'/admin/dashboard/manage'}>
              <Navbar.Link>
                Manage Books
              </Navbar.Link>
              </Link>
              <Navbar.Link href="/logout">
                Signout
              </Navbar.Link>
            </Navbar.Collapse> :
            <Navbar.Collapse>
              <Navbar.Link
                active
                href="/"
              >
                <p>
                  Home
                </p>
              </Navbar.Link>
              <Navbar.Link >
                <button onClick={handleDashboard}>
                  Dashboard
                </button>
              </Navbar.Link>
              <Navbar.Link href="/logout">
                Signout
              </Navbar.Link>
            </Navbar.Collapse>
        }
      </Navbar>
    </div>
  )
}

export default MobileDashboard