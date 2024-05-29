import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

function RequestBookAdmin() {
    const {loading} = useContext(AuthContext);

    const { data } = useQuery({
        queryKey: ['publish-req-admin'],
        queryFn: async () => {
            const result = await axios.get('https://hasib-vai-backend.vercel.app/publish-request/admin')
            return result.data
        }
    })

    // console.log(data)

    return (
        <div className='w-[90%] mx-auto'>
            {loading ? ' loading' :
                data ? data?.map((item, index) => {
                    return (
                        <div key={index} className='border-t flex sm:flex-row flex-col justify-between border-gray-200 sm:py-7 sm:pr-10 py-3 px-3 h-[300px] w-full'>
                            <div className='flex lg:flex-row justify-between gap-8 h-full w-full'>
                                <img className='h-full sm:block hidden w-[25%]' src={item?.imageURL?.includes('http') ? item?.imageURL : 'https://i.ibb.co/DfhgTrf/images-1.png'} alt="" />
                                <div className='flex flex-1 flex-col  gap-1'>
                                    <h1><span className='font-semibold'>Name:</span> {item?.bookTitle}</h1>
                                    <p><span className='font-semibold'>Category:</span> {item?.category}</p>
                                    <p><span className='font-semibold'>Author:</span> {item?.authorName}</p>
                                    <p><span className='font-semibold'>Description:</span> {item?.bookDescription}</p>
                                    <p><span className='font-semibold'>PDF URL:</span> {item?.bookPDFURL}</p>
                                    <p><span className='font-semibold'>Img URL:</span> <span className='text-blue-700 underline'>{item?.imageURL}</span></p>
                                    <p><span className='font-semibold'>Price:</span> {item?.price}</p>
                                    <p><span className='font-semibold'>Email:</span> {item?.email}</p>
                                </div>
                            </div>
                        </div>
                    )
                }) :
                    <div className='h-screen flex justify-center items-center'>
                        <p className='px-5 py-3 border rounded-lg bg-gray-100 text-xl font-semibold'>You have not Publish book's data</p>
                    </div>
            }

        </div>
    )
}

export default RequestBookAdmin