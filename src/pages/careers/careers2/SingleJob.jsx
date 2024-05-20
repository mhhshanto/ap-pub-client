import React, { useEffect } from 'react'
import { GoDotFill } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ApplyForm from './ApplyForm';

function SingleJob() {
    const [formOpen,setFormOpen] = useState(false)
    const data = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='container mx-auto 2xl:w-[60%] gap-10 px-3 mt-44 lg:grid lg:grid-cols-4'>
            <div className='col-span-3 text-gray-500'>
                <p>Submit your information for this opportunity</p>

                {
                    formOpen ? <ApplyForm/> : 
                    <button onClick={()=> setFormOpen(true)} className='bg-green-700 px-5 py-2 text-white hover:bg-green-800 transition duration-300 mt-5'>Apply Now</button>
                }

                <h1 className='text-3xl mt-6'>{data?.title}</h1>
                <p className='text-lg flex flex-wrap gap-3 text-gray-700 font-semibold my-7'>Location: {data?.location.map(item => <span key={item}>{item},</span>)}</p>

                <p className='text-base'>{data?.mission}</p>
                <h1 className='text-lg  text-gray-700 font-semibold my-5'>About the Role:</h1>
                <p>{data?.description}</p>
                <h1 className='text-lg  text-gray-700 font-semibold mt-5'>How you will make an impact:</h1>
                {
                    data?.responsibilities.map((item, index) => {
                        return (
                            <div key={index} className='flex  gap-5'>
                                <span className='mt-7'><GoDotFill /></span>
                                <p className='mt-5'>{item}</p>
                            </div>
                        )
                    })
                }
                <h1 className='text-lg  text-gray-700 font-semibold mt-12'>What we look for:</h1>
                {
                    data?.requirements.map((item, index) => {
                        return (
                            <div key={index} className='flex  gap-5'>
                                <span className='mt-7'><GoDotFill /></span>
                                <p className='mt-5'>{item}</p>
                            </div>
                        )
                    })
                }
                <h1 className='text-lg  text-gray-700 font-semibold mt-12'>Why should you join us?</h1>
                {
                    data?.benefits.map((item, index) => {
                        return (
                            <div key={index} className='flex  gap-5'>
                                <span className='mt-7'><GoDotFill /></span>
                                <p className='mt-5'>{item}</p>
                            </div>
                        )
                    })
                }

                <h1 className='text-lg  text-gray-700 font-semibold mt-20'>About Australia Pacific Publisher</h1>
                <p>{data?.companyDescription}</p>

                <div className='flex lg:w-[55%] gap-3 justify-between mt-16'>
                    <p>Location/Division:</p>
                    <p className='text-sm flex flex-wrap gap-2 '>{data?.location.map(item => <span key={item}>{item},</span>)}</p>
                </div>
                <div className='flex lg:w-[55%] gap-3 justify-between'>
                    <p>Job Requisition:</p>
                    <p>{data?.jobId}</p>
                </div>
                <div className='flex lg:w-[55%] gap-3 justify-between'>
                    <p>Remote Location:</p>
                    <p>{data.remoteAvailable ? 'Yes' : 'No'}</p>
                </div>
                <div className='flex lg:w-[55%] gap-3 justify-between mb-16'>
                    <p>Time Type:</p>
                    <p className=''>{data?.employmentType}</p>
                </div>


            </div>
            <div className='col-span-1 border-2 mb-20  rounded-[4px] border-gray-600 h-fit p-5 bg-gray-100'>
                <h1 className='text-lg  text-gray-700 font-semibold'>Share Opportunity:</h1>
                <div className='flex gap-1 text-2xl my-4 items-center'>
                    <FaFacebookSquare />
                    <FaLinkedin />
                    <FaSquareTwitter />
                    <IoMailOpenOutline />
                </div>
                <h1 className='text-lg  text-gray-700 font-semibold'>Share link:</h1>
                <p className='hover:underline text-blue-700 text-wrap'>https://careers.Australia Pacific Publisher.com/en/  <br />position/software-engineering-manager-curitiba-bra-2</p>
                <h1 className='text-lg  text-gray-700 font-semibold mt-4'>Similar Opportunities</h1>
                {
                    [...Array(3)].map((item) => <div key={item} className='flex justify-between mt-2'>
                        <div>
                            <h1>Digital Learning Executive</h1>
                            <p className='text-gray-400 text-sm'>Ontario, Canada</p>
                        </div>
                        <button className='bg-green-700 px-3 py-1 h-fit text-white hover:bg-green-800 transition duration-300'>View</button>
                    </div>)
                }
                <div className='flex justify-center items-center mt-2'>
                    <button className='bg-green-700  px-3 py-1 h-fit text-white hover:bg-green-800 transition duration-300'>See All Similar Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default SingleJob