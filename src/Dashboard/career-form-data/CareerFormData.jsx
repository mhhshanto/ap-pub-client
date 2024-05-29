import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from 'react-router-dom';

function CareerFormData() {

const {data, isLoading} = useQuery({
    queryKey:['career-form-apply-data'],
    queryFn: async ()=> {
        const result = await axios.get('https://hasib-vai-backend.vercel.app/all-apply-job')
        return result.data;
    }
})

console.log(data);

  return (
    <div className='w-[90%] mx-auto'>
            {isLoading ? ' loading' :
                data ? data?.map((item, index) => {
                    return (
                        <div key={index} className=' my-3 rounded-md gap-y-3 flex sm:flex-row flex-col justify-between border border-gray-300 sm:py-7 sm:pr-10 py-3 gap-x-3 px-3 w-full'>
                             
                                        <h1 className='w-[30%]'><span className='font-semibold'>FirstName:</span> {item?.firstName}</h1>
                                        <p className='w-[60%]'><span className='font-semibold'>Email:</span> {item?.email}</p> 
                                        <Link to={`/admin/dashboard/admin/careerFormData/${item._id}`}><p className='w-fit cursor-pointer hover:scale-95 transition duration-100 text-semibold p-2 bg-gray-200 rounded-full'><HiDotsHorizontal/></p></Link>       
                        </div>
                    )
                }) :
                    <div className='h-screen flex justify-center items-center'>
                        <p className='px-5 py-3 border rounded-lg bg-gray-100 text-xl font-semibold'>You have no Apply data</p>
                    </div>
            }

        </div>
  )
}

export default CareerFormData