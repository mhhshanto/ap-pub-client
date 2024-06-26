import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


// react icons
import { FaCartShopping } from "react-icons/fa6"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookCards = ({ headline, books }) => {
    const { setCartDataState, user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleAddToCart = (id) => {

        const localData = localStorage.getItem('bookListId');
        const parseLocalData = JSON.parse(localData);
        if(!user){
            return navigate('/login');
        }     

        if (!parseLocalData) {
            localStorage.setItem('bookListId', JSON.stringify([id]))
            const localData1 = localStorage.getItem('bookListId');
            const parseLocalData1 = JSON.parse(localData1);
            setCartDataState(parseLocalData1.length)
            toast.success('Book added successfully!')
        } else {
            if (!parseLocalData.includes(id)) {
                localStorage.setItem('bookListId', JSON.stringify([...parseLocalData, id]))
                const localData1 = localStorage.getItem('bookListId');
                const parseLocalData1 = JSON.parse(localData1);
                setCartDataState(parseLocalData1.length)
                toast.success('Book added successfully!')
            } else {
                toast.error('You have already added it')
            }
        }



    };





    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl my-5 font-bold text-center'>{headline}</h2>

            {/* cards */}
            <div className='mt-20'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className=" w-full h-full"
                >
                    {
                        books.map((book) => <SwiperSlide className='text-center flex items-center justify-center' key={book?._id}>
                            <div className='relative'>
                                <Link to={`/book/${book?._id}`} className='cursor-pointer'>
                                    <div className='bg-gray-100 p-8 rounded-lg relative'>
                                        <img src={book?.imageURL} alt="" className='w-full' />

                                    </div>

                                    <div className='mt-5 mb-8 text-left space-y-2 flex justify-between items-start'>
                                        <div>
                                            <h3 className='text-black font-semibold'>{book?.bookTitle}</h3>
                                            <p>{book?.authorName}</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-blue-700'>$10.00</p>
                                        </div>
                                    </div>
                                </Link>
                                <div onClick={() => handleAddToCart(book?._id)} className='absolute cursor-pointer top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded '>
                                    <FaCartShopping className='w-4 h-4 text-white' />
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </div>
    )
}

export default BookCards