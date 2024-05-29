import {useLoaderData} from 'react-router-dom'


function SingleFormData() {
   const item = useLoaderData()
 
    // console.log(item)

      return (
        <div className='w-[90%] mx-auto'>
                {  item ?
                            <div className=' my-3 rounded-md flex sm:flex-row flex-col justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:py-7 sm:pr-10 py-3 gap-3 px-3 w-full'>
                                
                                    <div className='flex flex-1 flex-col  gap-1'>
                                        <h1 className='child-border'><span className='font-semibold'>FirstName:</span> {item?.firstName}</h1>
                                        <p className='child-border'><span className='font-semibold'>Email:</span> {item?.email}</p>
                                        <p className='child-border'><span className='font-semibold'>Alternative Phone:</span> {item?.phoneNumber2}</p>
                                        <p className='child-border'><span className='font-semibold'>City:</span> {item?.city}</p>
                                        <p className='child-border'><span className='font-semibold'>Zip Code:</span> {item?.zipCode}</p>
                                        <p className='child-border'><span className='font-semibold'>Country:</span> <span className=''>{item?.country}</span></p>
                                        <p className='child-border'><span className='font-semibold'>Password:</span> {item?.password}</p>
                                        <p className='child-border'><span className='font-semibold'>Pdf File Link:</span> {item?.pdfFile}</p>
                                        <p className='child-border'><span className='font-semibold'>More Services:</span> {item?.services2}</p>
                                    </div>
                                    <div className='flex flex-1 flex-col  gap-1'>
                                        <h1 className='child-border'><span className='font-semibold'>LastName:</span> {item?.lastName}</h1>
                                        <p className='child-border'><span className='font-semibold'>Phone Number:</span> {item?.phoneNumber}</p>
                                        <p className='child-border'><span className='font-semibold'>Address:</span> {item?.address}</p>
                                        <p className='child-border'><span className='font-semibold'>State:</span> {item?.state}</p>
                                        <p className='child-border'><span className='font-semibold'>About Us:</span> {item?.aboutUs}</p>
                                        <p className='child-border'><span className='font-semibold'>More About Us:</span> <span>{item?.aboutUs2}</span></p>
                                        <p className='child-border'><span className='font-semibold'>Communication System:</span> {item?.communication}</p>
                                        <p className='child-border'><span className='font-semibold'>Countries:</span> {item?.countries}</p>
                                        <p className='child-border'><span className='font-semibold'>Services:</span> {item?.services}</p>
                                    </div>
                                
                            </div>
                       :
                        <div className='h-screen flex justify-center items-center'>
                            <p className='px-5 py-3 border rounded-lg bg-gray-100 text-xl font-semibold'>You have no Apply data</p>
                        </div>
                }
    
            </div>
      )
}

export default SingleFormData