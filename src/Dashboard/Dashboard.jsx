import React from 'react'
import './dasboard.css'
import { LuCircleDollarSign } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { IoMdBasket } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import useGetPaymetData from '../hooks/useGetPaymetData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [data, isLoading] = useGetPaymetData();

  console.log(data)



  return (
    <div className="w-full p-5 bg-gray-50 overflow-auto">

      <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

      <div className='flex flex-wrap items-center gap-10'>
        <div className='px-8 py-5 flex justify-center items-center gap-x-5 bg-white rounded-md'>
          <div className='bg-orange-100 p-2 text-4xl rounded-full'><span className='bg-orange-300 block p-1 rounded-full'><LuCircleDollarSign /></span></div>
          <div>
            <h1 className='text-xl font-semibold text-gray-400'>Total Sales</h1>
            <p className='text-2xl font-semibold'>$10787978</p>
          </div>
        </div>
        <div className='px-8 py-5 flex justify-center items-center gap-x-5 bg-white rounded-md'>
          <div className='bg-green-100 p-2 text-4xl rounded-full'><span className='bg-green-300 block p-1 rounded-full'><IoMdCart /></span></div>
          <div>
            <h1 className='text-xl font-semibold text-gray-400'>Total Orders</h1>
            <p className='text-2xl font-semibold'>7879</p>
          </div>
        </div>
        <div className='px-8 py-5 flex justify-center items-center gap-x-5 bg-white rounded-md'>
          <div className='bg-blue-100 p-2 text-4xl rounded-full'><span className='bg-blue-300 block p-1 rounded-full'><IoMdBasket /></span></div>
          <div>
            <h1 className='text-xl font-semibold text-gray-400'>Total Products</h1>
            <p className='text-2xl font-semibold'>879</p>
          </div>
        </div>
      </div>


      <div className='bg-white my-10 p-5  rounded-md overflow-auto'>
        <h1 className='text-3xl font-bold'>Latest Order</h1>

        <div className='mt-10 lg:w-[1500px] w-[1250px] '>
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
                    <Link to={`/admin/dashboard/dashboard-details/${info._id}`}>
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
  )
}

export default Dashboard