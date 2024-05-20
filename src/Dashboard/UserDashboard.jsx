import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import axios from "axios"
import { useEffect } from 'react';
import { LuCircleDollarSign } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { IoMdBasket } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from 'react-router-dom';

function UserDashboard() {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://hasib-vai-backend.vercel.app/all-payment-data/${user.email}`)
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })

  }, [])


  return (
    <div className='overflow-auto'>
      {
        isLoading ? 'Loading...' :
          <div className="w-full p-5 bg-gray-50 min-h-screen">

            <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

            <div className='bg-white my-10 p-5  rounded-md overflow-auto'>
              <h1 className='text-3xl font-bold'>Latest Order</h1>

              <div className='mt-10 lg:w-[1500px] w-[900px] '>
                <div className=''>
                  {isLoading ? 'Loading..' :
                    data?.map((info, index) => {
                      const { name, email, shippingPrice, totalPrice, status, orderDate } = info?.payInfo;

                      return (
                        <div key={index} className='grid gap-5 grid-cols-12 text-xl text-gray-400 py-4 border-gray-200 border-b'>
                          <p className='whitespace-nowrap'>{index + 1}</p>
                          <p className='whitespace-nowrap text-gray-700 font-semibold col-span-3'>{name}</p>
                          <p className='col-span-3 whitespace-nowrap'>{email}</p>
                          <p>${totalPrice + shippingPrice}</p>
                          <p className={`text-sm px-3 py-1 w-fit rounded-full  ${status === 'processing' ? 'text-yellow-800 bg-yellow-100' : status === 'cancel' ? 'text-red-900 bg-red-200' : 'bg-green-100 text-green-800'} font-semibold`}>{status === 'processing' ? 'Pending' : status === 'cancel' ? 'Canceled' : 'Delivered'}</p>
                          <p className='col-span-2 text-center'>{orderDate}</p>
                          <Link to={`/admin/dashboard/user-dashboard-details/${info._id}`}>
                            <p className='cursor-pointer w-fit text-end p-1 hover:bg-gray-200 transition duration-200 rounded-full bg-gray-100'><HiDotsHorizontal /></p>
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

            </div>

          </div>

      }
    </div>
  )
}

export default UserDashboard