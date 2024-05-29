import axios from 'axios';
import { Button, Checkbox, Label, Radio, ToggleSwitch } from 'flowbite-react';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaLinkedin } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";

function ApplyForm() {

    const [eyeOpen, setEyeOpen] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)



    const handleSubmit = e => {
        setIsLoading(true)
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const phoneNumber2 = form.phoneNumber2.value;
        const address = form.address.value;
        const city = form.city.value;
        const state = form.state.value;
        const zipCode = form.zipCode.value;
        const country = form.country.value;
        const password = form.password.value;
        const pdfFile = form.pdfFile.value;
        const aboutUs = form.aboutUs.value;
        const aboutUs2 = form.aboutUs2.value;
        const communication = form.communication.value;
        const countries = form.countries.value;
        const services = form.services.value;
        const services2 = form.services2.value;
        const formData = {firstName,lastName,email,phoneNumber,phoneNumber2,address,city,state,zipCode,country,password,pdfFile,aboutUs,aboutUs2,communication,countries,services,services2};
        console.log(formData); 
        axios.post('https://hasib-vai-backend.vercel.app/career/form', {formData})
        .then(res=> {
            if(res.data.acknowledged){
                 setIsLoading(false)
                 toast.success('Form Submitted')
            }
        })
        .catch(e=> {
            console.log(e.message)
        })

    }



    return (
        <div className='border sm:p-10 p-2 my-8 border-gray-400'>

            <div className='flex flex-col md:flex-row justify-between gap-20'>

                <div className='text-gray-900 md:w-[40%]'>
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

                <div className='md:w-[60%]'>
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

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 my-10 md:w-[75%]'>
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" name='firstName' required placeholder='First Name *' />
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" name='lastName' placeholder='Last Name ' />
                    <input name='email' required className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="email" placeholder='Email *' />
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <LiaFlagUsaSolid className='text-xl cursor-pointer' />
                        <input type='text' className='border-none w-full outline-none bg-[#f5f5f5] p-3' required name="phoneNumber" placeholder='Phone Number' id="" />

                    </div>
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <LiaFlagUsaSolid className='text-xl cursor-pointer' />
                        <input type='text' className='border-none w-full outline-none bg-[#f5f5f5] p-3' required name="phoneNumber2" placeholder='Alternative Phone' id="" />
                    </div>
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" name='address' placeholder='Address' />
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" name='city' required placeholder='City *' />
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <select className='border-none w-full outline-none bg-[#f5f5f5] p-3' name="state" id="">
                            <option selected value="State">State</option>
                            <option value="india">India</option>
                            <option value="pakistan">Pakistan</option>
                        </select>
                    </div>
                    <input className='w-full text-gray-600 bg-[#f5f5f5] p-3  border-gray-300' type="text" required name='zipCode' placeholder='Zip or postal code *' />
                    <div className='border flex gap-x-2 px-3 items-center border-gray-300 w-full  bg-[#f5f5f5]'>
                        <select className='border-none w-full outline-none bg-[#f5f5f5] p-3' name="country" id="">
                            <option selected value="united state">United State</option>
                            <option value="india">India</option>
                            <option value="pakistan">Pakistan</option>
                        </select>

                    </div>
                    <div className='mt-16'>
                        <h1 className='text-lg font-bold mb-5 text-gray-900'>Create Profile</h1>
                        <div className='flex bg-[#f5f5f5] border-gray-300 border justify-between items-center'>
                            <input className='w-full text-gray-600 border-none bg-[#f5f5f5] p-3  ' type={eyeOpen ? 'text' : 'password'} placeholder='Password' name='password' />
                            {
                                eyeOpen ? <button onClick={() => setEyeOpen(!eyeOpen)} className='text-xl px-2'><FaEye /></button> :
                                    <button onClick={() => setEyeOpen(!eyeOpen)} className='text-xl px-2'><FaEyeSlash /></button>
                            }


                        </div>
                    </div>
                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Additional Documents Link</h1>
                    <p className='text-sm text-gray-600'>(Optional) Upload a cover letter, portfolio of your work, transcripts or other supporting documents.</p>
                    <input type='text' name="pdfFile" id="" className='uppercase py-1 w-full md:w-[35%] bg-[#f5f5f5] flex justify-end gap-x-12 my-5 px-10 border border-gray-300 items-center' placeholder='Upload a file Link' />

                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Additional Information</h1>
                    <p className='text-sm text-gray-600'>How did you hear about us? *</p>
                    <input type='text' className='border-none w-full md:w-[35%] mt-3 outline-none bg-[#f5f5f5] p-3' name="aboutUs" id="" />
                        

                    <p className='text-sm mt-10 text-gray-600'>Did someone at Wiley refer you? If so, let us know who we should thank. *</p>
                    <input type='text' className='border-none w-full md:w-[35%] mt-3 outline-none bg-[#f5f5f5] p-3' name="aboutUs2" id="" />

                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Communication Preferences</h1>
                    <p className='text-sm text-gray-600'>How do you prefer we contact you? *</p>
                    <select className='border-none w-full md:w-[35%] mt-3 outline-none bg-[#f5f5f5] p-3' name="communication" id="">
                        <option selected value="Email">Email</option>
                        <option value="Text sms">Text sms</option>
                    </select>
                </div>

                <div className='mt-16'>
                    <p className='text-sm text-gray-700'>Direct Messages</p>
                    <p className='text-[13px] mt-2 w-[70%] text-gray-700'>Select how you are willing to receive direct messages from our hiring team including recruiters and hiring managers about opportunities. Note that for your security, messages about your account, which include resetting your password and confirmations as you apply to jobs cannot be disabled. You may also remove your account profile at any time.</p>

                    <div className='mt-14'>
                        <div className='flex justify-between px-10 md:w-[70%] w-full mx-auto border-b border-gray-400 py-4'>
                            <p>Email</p>
                            <ToggleSwitch checked={toggle1} label={toggle1 ? "ON" : "OFF"} onChange={setToggle1} />
                        </div>

                        <div className='flex justify-between px-10 md:w-[70%] w-full mx-auto border-b border-gray-400 py-4'>
                            <p>Text/SMS Messages</p>
                            <ToggleSwitch checked={toggle2} label={toggle2 ? "ON" : "OFF"} onChange={setToggle2} />
                        </div>

                        <div className='flex justify-between px-10 md:w-[70%] w-full mx-auto border-b border-gray-400 py-4'>
                            <p>Phone Calls</p>
                            <ToggleSwitch checked={toggle3} label={toggle3 ? "ON" : "OFF"} onChange={setToggle3} />
                        </div>
                    </div>
                </div>

                <div className='mt-16 '>
                    <h1 className='text-lg font-bold mb-3 text-gray-900'>Profile Information</h1>
                    <p className='text-sm text-gray-600'>Are you willing to relocate?</p>
                    <div className="flex items-center mt-3 gap-2">
                        <Radio id="Yes" name="countries" value="Yes" />
                        <Label htmlFor="Yes">Yes</Label>
                    </div>
                    <div className="flex items-center mt-3 gap-2">
                        <Radio id="No" name="countries" value="No" />
                        <Label htmlFor="No">No</Label>
                    </div>
                </div>

                <div className='mt-16 '>
                    <p className='text-sm text-gray-600'>Have you ever provided services to Wiley while working at PwC? *</p>
                    <select className='border-none md:w-[35%] w-full mt-3 outline-none bg-[#f5f5f5] p-3' name="services" id="">
                        <option selected value="Yes">Yes</option>
                        <option value="No">No</option>
                        
                    </select>

                    <p className='text-sm mt-10 text-gray-600'>
                        If Yes, were the services at PwC in support of Wiley Corporation's consolidated audit? *</p>
                    <select className='border-none md:w-[35%] w-full mt-3 outline-none bg-[#f5f5f5] p-3' name="services2" id="">
                    <option selected value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not Applicable">Not Applicable</option>
                    </select>

                </div>

                <div className='mt-16'>
                    <h1 className='text-lg font-bold mb-5 border-b border-gray-500 pb-4 text-gray-900'>Privacy Settings</h1>
                    <p className='text-[15px] mt-2 w-full pb-5 border-b border-gray-500 pr-10 text-gray-700'>By joining the community, you are consenting to Wiley and our affiliates collecting your personal data and contacting you by e-mail, phone or SMS about news, information, events, and job opportunities at Wiley that may be of interest. By using this service, you agree that we can place cookies on your device and you acknowledge that your information may be transferred to other countries.</p>
                </div>


                <div className="flex  mt-20 gap-3">
                    <Checkbox required className='mt-1' id="promotion" />
                    <Label className='text-base font-normal' htmlFor="promotion">I agree to the use of my personal information and to being contacted by email and text/SMS as described in our privacy notice and terms of service.</Label>
                </div>

                {
                    loading ? <Button isProcessing className='px-5 py-1 bg-green-800 text-white mt-20' type='submit'>SUBMIT</Button>:
                    <Button className='px-5 py-1 bg-green-800 text-white mt-20' type='submit'>SUBMIT</Button>
                }
                

                <p className='mt-10 text-sm'>*Indicates a required answer.

                    <br /> Have questions? <span className=' underline'>View answers to Frequently Asked Questions.</span></p>

            </form>
        </div>
    )
}

export default ApplyForm