import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useLoaderData } from 'react-router-dom'
import useGetSinglePay from '../hooks/useGetSinglePay';
import { Spinner } from "flowbite-react";



function UserDashDeti() {

  const data = useLoaderData();
  const [singleData, isLoading] = useGetSinglePay(data?.booksIds)


  return (
    <div className='w-full p-5'>
      {
        isLoading ?
          <div className="text-center h-[80vh] flex justify-center items-center">
            <Spinner aria-label=" Extra large spinner example" size='xl' />
          </div> :
          <div className='w-full'>
            <h1 className='text-4xl text-center flex justify-center items-center gap-x-4 font-bold mt-10'><span><HiOutlineShoppingBag /></span>Details Payment Info</h1>

            <div className='w-full grid px-3 xl:grid-cols-12   gap-16 my-14'>

              <div className='2xl:col-span-4 lg:col-span-6'>
                {
                  singleData?.map((item, index) => {


                    return <div key={index} className='border-t flex sm:flex-row flex-col justify-between border-gray-200 sm:py-7 sm:pr-10 py-3 px-3 md:h-[250px] w-full'>
                      <div className='flex justify-between gap-3 h-full w-full sm:w-[55%]'>
                        <img className='h-[90%] w-[40%]' src={item?.imageURL} alt="" />
                        <div className='flex flex-col gap-1'>
                          <h1 className='sm:text-xl'>{item?.bookTitle}</h1>
                          <p><span className='font-semibold'>Category:</span> {item?.category}</p>
                          <p><span className='font-semibold'>Author:</span> {item?.authorName}</p>
                        </div>
                      </div>
                      <div className='flex justify-between items-center sm:flex-col flex-row'>
                        <div>
                          <h1 className='text-xl font-semibold text-end'>Price</h1>
                          <p className='font-semibold text-end'>$ {item?.price}</p>
                        </div>
                      </div>
                    </div>

                  }
                  )
                }
              </div>

              <div className='2xl:col-span-3 lg:col-span-6  flex  h-fit flex-col justify-center items-center'>
                <div className='w-full flex flex-col gap-y-7 rounded-t-md p-5 bg-gray-50'>
                  <h1 className='sm:text-xl uppercase font-semibold mb-2'>Summary</h1>
                  <div className='flex justify-between items-center sm:text-xl'><p>Total Order</p> <p>$ {data?.payInfo?.totalPrice}</p></div>
                  <div className='flex justify-between items-center sm:text-xl mt-2'><p>Shipping</p> <p>$ {data?.payInfo?.shippingPrice}</p></div>
                </div>

                <div className='flex bg-pink-50 flex-wrap rounded-b-md w-full justify-between items-center border-t-[6px] border-dashed border-white font-semibold sm:text-2xl text-xl p-5 mb-10'><p>Estimated Total</p> <p>$ {data?.payInfo?.shippingPrice + data?.payInfo?.totalPrice}</p></div>



              </div>

              <div className="2xl:col-span-4 lg:col-span-6 h-fit flex max-w-lg border p-3 rounded-md flex-col gap-1 mb-5 w-full">
                <h1 className='sm:text-xl uppercase font-semibold mb-2'>User Information</h1>
                <div>
                  <div className=" block">
                    <span className='font-semibold'>Name:</span> {data?.payInfo?.name}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <span className='font-semibold'>Email:</span> {data?.payInfo?.email}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <span className='font-semibold'>Contact No:</span> {data?.payInfo?.contactNo}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <span className='font-semibold'>Address:</span> {data?.payInfo?.address}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <span className='font-semibold'>Ordered on:</span> {data?.payInfo?.orderDate}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <span className='font-semibold'>Status:</span> {data?.payInfo?.status}
                  </div>
                </div>

              </div>

            </div>
          </div>
      }
    </div>
  )
}

export default UserDashDeti