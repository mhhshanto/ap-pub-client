import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import Banner2 from './Banner2'

function Careers2() {

  const data = useLoaderData()
    
  
  return (
    <div>
      <div className='xl:h-[60vh] md:h-[80vh] h-[70vh] relative flex justify-center items-center'>
        <div className='overflow-hidden h-full  absolute top-0 w-full'>
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.822269378!2d87.70368743885115!3d23.48944462361664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1715704408898!5m2!1sen!2sbd" width="600" height="450" style={{ border: '1px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Banner2 data={data} />
    </div>
  )
}

export default Careers2