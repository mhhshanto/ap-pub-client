import React, { useContext, useEffect, useState } from 'react'
import { HiArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Spinner } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import useGetCartData from '../../hooks/useGetCartData';



function Cart() {

    const [idsArr, setIdsArr] = useState([]);
    const [enable, setEnable] = useState(false);
    const { setCartDataState, setTotalPrice, totalPrice, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [shippingPrice, setShippingPrice] = useState(20);
    const [data] = useGetCartData(enable, idsArr);



    useEffect(() => {
        const cartDataIds = JSON.parse(localStorage.getItem('bookListId'))
        setIdsArr(cartDataIds);
        setEnable(true)

        return () => {
            return setIdsArr(cartDataIds)
        }
    }, [])





    useEffect(() => {

        let allPrice = 0;

        if (data) {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.price) {
                    const number = parseInt(element.price)
                    allPrice += number;

                }

            }
        }

        setTotalPrice(allPrice)

    }, [data])


    const handleDeleteBook = (id) => {
        const idsArr1 = JSON.parse(localStorage.getItem('bookListId'));

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const removeID = idsArr1.filter(item => item !== id);
                localStorage.setItem('bookListId', JSON.stringify(removeID))
                setCartDataState(removeID.length)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                window.location.reload()
            }
        });


    }
   
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const contactNo = form.contactNo.value;
        const address = form.address.value;
        const dateObj = new Date();
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; 
        const year = dateObj.getFullYear();

        const paymentInfo = {
            name,
            contactNo,
            email: user?.email,
            address,
            orderDate:`${day}-${month}-${year}`,
            status:'processing',
            totalPrice,
            shippingPrice
        }
        if (!user) {
            return navigate('/login')
        }

        if (paymentInfo) {
            localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo))
            const localPayInfo = localStorage.getItem('paymentInfo')
            if (localPayInfo) {
                navigate('/payment-confirm')
            }
        }


    }



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {
                data ?
                    <div className='border-t border-gray-200 my-28'>
                        <h1 className='text-4xl text-center flex justify-center items-center gap-x-4 font-bold mt-10'><span><HiOutlineShoppingBag /></span> My Cart</h1>

                        <div className='container mx-auto flex px-3 lg:flex-row flex-col lg:items-start items-center  justify-between xl:gap-28 gap-16 my-14'>
                            <div className='lg:w-[55%] w-[100%]'>
                                {
                                    data.map((item, index) => {


                                        return <div key={index} className='border-t flex sm:flex-row flex-col justify-between border-gray-200 sm:py-7 sm:pr-10 py-3 px-3 md:h-[300px] w-full'>
                                            <div className='flex justify-between gap-3 h-full sm:w-[55%]'>
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
                                                <div>
                                                    <button onClick={() => handleDeleteBook(item._id)} className='text-xl hover:bg-gray-100 transition duration-200 text-red-800 border rounded-full p-2'><RiDeleteBin5Line /></button>

                                                </div>
                                            </div>
                                        </div>

                                    }
                                    )
                                }

                                <div className='border-t border-gray-300'>
                                    <div>
                                        <p className='text-xl font-semibold text-right my-3'>Total Price: ${totalPrice}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:w-[45%] w-[100%] flex flex-col justify-center items-center'>
                                <div className='w-[82%] flex flex-col gap-y-7 rounded-t-md p-5 bg-gray-50'>
                                    <h1 className='sm:text-xl uppercase font-semibold mb-2'>Summary</h1>
                                    <div className='flex justify-between items-center sm:text-xl'><p>Total Order</p> <p>$ {totalPrice}</p></div>
                                    <div className='flex justify-between items-center sm:text-xl mt-2'><p>Shipping</p> <p>$ {shippingPrice}</p></div>
                                </div>

                                <div className='flex bg-pink-50 rounded-b-md w-[82%] justify-between items-center border-t-[6px] border-dashed border-white font-semibold sm:text-2xl text-xl p-5 mb-10'><p>Estimated Total</p> <p>$ {totalPrice + parseInt(shippingPrice)}</p></div>


                                <form onSubmit={handleSubmit} className="flex max-w-lg border p-3 rounded-md flex-col gap-4 mb-5 w-full">
                                    <h1 className='sm:text-xl uppercase font-semibold mb-2'>Enter Your Information</h1>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="name" value="Your Name" />
                                        </div>
                                        <TextInput id="name" name='name' type="text" placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="contactNo" value="Contact Number" />
                                        </div>
                                        <TextInput id="contactNo" name='contactNo' type="text" placeholder="contact No." required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="address" value="Your address" />
                                        </div>
                                        <TextInput id="address" name="address" type="text" placeholder="Your address" required />
                                    </div>

                                    <Button type="submit">Go to Check out Page</Button>
                                </form>

                                {/* <div className='flex justify-center items-center'>
                                    <button className='uppercase text-xl font-semibold py-2 px-20 transition-colors duration-300 hover:bg-yellow-400 bg-yellow-300 text-gray-600'>Check Out</button>
                                </div> */}
                            </div>
                        </div>
                    </div> : idsArr === null || idsArr.length === 0 ?
                        <div className='flex justify-center items-center h-[80vh] flex-col'>
                            <Link to="/shop" className="mb-4 mt-11">
                                <Button color="gray" pill={true}>
                                    <HiArrowLeft className="mr-2 h-5 w-5" />
                                    Back to Shop
                                </Button>
                            </Link>
                            <div className='py-8 px-12 border rounded-md'>
                                <p className='text-center text-xl uppercase font-semibold'>Oops !!</p>
                                <h1>Your Cart is Empty</h1>
                            </div>
                        </div> :
                        <div className="text-center h-[80vh] flex justify-center items-center">
                            <Spinner aria-label=" Extra large spinner example" size='xl' />
                        </div>
            }
        </>
    )
}

export default Cart