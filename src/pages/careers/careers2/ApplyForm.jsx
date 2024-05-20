import React from 'react'
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaLinkedin } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";

function ApplyForm() {

    const [eyeOpen, setEyeOpen] = useState(false)



    const handleSubmit = e => {
        e.preventDefault()
    }



    return (
        <div className='border p-10 my-8 border-gray-400'>

            <div className='flex justify-between gap-20'>

                <div className='text-gray-900 w-[40%]'>
                    <h1 className='text-2xl text-gray-900 mb-10'>Upload Your Resume</h1>
                    <p className='text-sm font-semibold'>Upload resume/CV from: *</p>

                    <input type='file' name="" id="" className='uppercase py-1 w-full bg-[#192b67] hover:bg-[#838383] transition duration-300 text-white flex justify-end gap-x-12 my-5 px-10 items-center' placeholder='Upload a file' />

                    <div className='flex justify-between items-center gap-4'>
                        <span className='border-t w-full'></span>
                        <span className='text-gray-400'>Or</span>
                        <span className='border-t w-full'></span>
                    </div>
                    <div className='flex justify-center'>
                        <button className='py-3 w-fit rounded-full bg-[#0a66c2] hover:bg-[#004182] transition duration-300 text-white flex gap-x-2 my-5 px-10 items-center'><FaLinkedin /> Apply with LinkedIn</button>
                    </div>
                </div>

                <div className='w-[60%]'>
                    <p className='text-end'>Already have an account? sign in</p>
                    <p className='text-xl text-gray-900 mt-16'>Interested in working for Wiley? Take the first step today by joining our talent community.</p>
                    <div className='flex  gap-5'>
                        <span className='mt-5'><GoDotFill /></span>
                        <p className='mt-4'>Apply for jobs easily using LinkedIn</p>
                    </div>
                    <div className='flex  gap-5'>
                        <span className='mt-5'><GoDotFill /></span>
                        <p className='mt-4'>Get notified about recently opened positions</p>
                    </div>
                    <div className='flex  gap-5'>
                        <span className='mt-5'><GoDotFill /></span>
                        <p className='mt-4'>Chat with current team members and hiring managers</p>
                    </div>
                    <p className='text-gray-950 mt-5 '>Interested in working for Wiley? Take the first step today by joining our talent community.</p>
                    <p className='text-gray-950 mt-5 text-lg font-semibold'>Internal colleagues should apply via the internal career site (this excludes contractors/temps/agency workers).</p>


                </div>
            </div>

            <form onSubmit={handleSubmit} className='mt-20 text-gray-600'>
                <p className='text-gray-950 mt-5 text-lg font-semibold'>Your Information</p>
                <p className='text-sm text-gray-600 mt-5'>Fill out the information below and please ensure your name is entered in a case sensitive format. Please note we use an international phone format. We will keep your information confidential.</p>

                <div className='grid grid-cols-2 gap-x-10 gap-y-8 my-10 w-[75%]'>
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" placeholder='First Name *' />
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" placeholder='Last Name ' />
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="email" placeholder='Email *' />
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <LiaFlagUsaSolid className='text-xl cursor-pointer' />
                        <select className='border-none w-full outline-none bg-[#f5f5f5] p-3' name="" id="">
                            <option value="bangladesh">Bangladesh</option>
                            <option value="india">India</option>
                            <option value="pakistan">Pakistan</option>
                        </select>
                    </div>
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <LiaFlagUsaSolid className='text-xl cursor-pointer' />
                        <select className='border-none w-full outline-none bg-[#f5f5f5] p-3' name="" id="">
                            <option value="bangladesh">Bangladesh</option>
                            <option value="india">India</option>
                            <option value="pakistan">Pakistan</option>
                        </select>
                    </div>
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="email" placeholder='Address' />
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="email" placeholder='City *' />
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <select className='border-none w-full outline-none bg-[#f5f5f5] p-3' name="" id="">
                            <option selected value="State">State</option>
                            <option value="india">India</option>
                            <option value="pakistan">Pakistan</option>
                        </select>
                    </div>
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="email" placeholder='Zip or postal code *' />
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <select className='border-none w-full outline-none bg-[#f5f5f5] p-3' name="" id="">
                            <option selected value="united state">United State</option>
                            <option value="india">India</option>
                            <option value="pakistan">Pakistan</option>
                        </select>

                    </div>
                    <div className='mt-16'>
                        <h1 className='text-lg font-bold mb-5 text-gray-900'>Create Profile</h1>
                        <div className='flex bg-[#f5f5f5] border-gray-300 border justify-between items-center'>
                            <input className='w-full text-gray-600 border-none bg-[#f5f5f5] p-3  ' type={eyeOpen ? 'text' : 'password'} placeholder='Password' />
                            {
                                eyeOpen ? <button onClick={() => setEyeOpen(!eyeOpen)} className='text-xl px-2'><FaEye /></button> :
                                    <button onClick={() => setEyeOpen(!eyeOpen)} className='text-xl px-2'><FaEyeSlash /></button>
                            }


                        </div>
                    </div>
                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Additional Documents</h1>
                    <p className='text-sm text-gray-600'>(Optional) Upload a cover letter, portfolio of your work, transcripts or other supporting documents.</p>
                    <input type='file' name="" id="" className='uppercase py-1 w-[35%] bg-[#f5f5f5] flex justify-end gap-x-12 my-5 px-10 border items-center' placeholder='Upload a file' />

                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Additional Information</h1>
                    <p className='text-sm text-gray-600'>How did you hear about us? *</p>
                    <select className='border-none w-[35%] mt-3 outline-none bg-[#f5f5f5] p-3' name="" id="">
                        <option selected value="united state">United State</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                    </select>

                    <p className='text-sm mt-10 text-gray-600'>Did someone at Wiley refer you? If so, let us know who we should thank. *</p>
                    <select className='border-none w-[35%] mt-3 outline-none bg-[#f5f5f5] p-3' name="" id="">
                        <option selected value="united state">United State</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                    </select>

                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Communication Preferences</h1>
                    <p className='text-sm text-gray-600'>How do you prefer we contact you? *</p>
                    <select className='border-none w-[35%] mt-3 outline-none bg-[#f5f5f5] p-3' name="" id="">
                        <option selected value="united state">United State</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                    </select>       
                </div>

                <div className='mt-16'>
                <p className='text-sm text-gray-700'>Direct Messages</p>
                <p className='text-[13px] mt-2 w-[70%] text-gray-700'>Select how you are willing to receive direct messages from our hiring team including recruiters and hiring managers about opportunities. Note that for your security, messages about your account, which include resetting your password and confirmations as you apply to jobs cannot be disabled. You may also remove your account profile at any time.</p>
                </div>

            </form>
        </div>
    )
}

export default ApplyForm