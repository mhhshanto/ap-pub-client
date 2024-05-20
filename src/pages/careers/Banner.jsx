import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import {Link} from 'react-router-dom'

function Banner() {

  const [searchData, setSearchData] = useState('all');


// console.log(searchData)



  return (
    <div className='xl:h-[77vh] md:h-[80vh] h-[70vh] relative flex justify-center items-center'>

      <div className='overflow-hidden h-full z-[-1] brightness-50 absolute top-0 w-full'>
        <video
          class=" w-full lg:block hidden"
          autoPlay={true}
          loop
          muted
          src='https://careers.wiley.com/img/team/home/wiley-careers-website-video.mp4'
        >
        </video>
        <img className='w-full h-full object-cover object-center lg:hidden block ' src="https://careers.wiley.com/img/team/home/home-hero.jpg" alt="" />
      </div>

      <div className='2xl:w-[40%] lg:w-[60%] sm:w-[80%] w-[90%] flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-8 text-white'>Join Australia Pacific Publisher Today</h1>

        <form className='w-full flex flex-col gap-8 justify-center items-center'>

          <div className='flex justify-center items-center w-full relative'>
            <input onChange={(e)=> setSearchData(e.target.value)} className='sm:text-xl sm:p-4 p-3 text-base w-full outline-none' type="text" name='searchCareer' placeholder='Search our open roles by title and keywords' />
            <div className='sm:text-xl sm:p-4 p-3 text-base absolute right-[2px] bg-white w-fit'><CiSearch /></div>
          </div>

          <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-6'>

            <div className='flex justify-center items-center  w-full relative'>
              <select className='sm:text-xl sm:p-4 p-3 text-base w-full outline-none' name="" id="">
                <option selected>Filter by Team</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

            </div>

            <div className='flex justify-center items-center w-full '>
              <input className='sm:text-xl sm:p-4 p-3 text-base w-full outline-none' placeholder='Search by state or region' type="text" />
            </div>

            <Link to={`/career/search/${searchData}`}>
              <div className='flex justify-center items-center w-full'>
                <button type='submit' className='sm:text-xl sm:py-4  text-base w-full font-bold  py-3 px-10 lg:w-full bg-[#115C36] text-white rounded-md hover:bg-[#2b7550] transition-colors duration-300'>Go</button>
              </div>
            </Link>


          </div>
        </form>

      </div>


    </div>
  )
}

export default Banner;