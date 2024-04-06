import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"
import p1 from "../../assets/profiles/p1.jpeg"
import p2 from "../../assets/profiles/p2.jpeg"
import p3 from "../../assets/profiles/p3.jpeg"
import p4 from "../../assets/profiles/p4.jpeg"
import p5 from "../../assets/profiles/p5.jpeg"
import ReviewCard from '../shared/ReviewCard';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            {/* reviews card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>Australiapacificpublisher.com has been an invaluable resource for Sydney University Press. The platform's intuitive interface and robust features have streamlined our publishing process, allowing us to disseminate academic research effectively. Highly recommended for university presses!</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Professor Emily Johnson</h5>
                            <p className='text-sm'>Sydney University Press</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>As a publisher specializing in academic and scholarly works, Australiapacificpublisher.com has been a game-changer for us. The platform's seamless integration with academic libraries and citation management tools has simplified our workflow and enhanced our reach. A must-have for academic publishers</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={p1}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Dr. Benjamin Adams</h5>
                            <p className='text-sm'> Queensland Book Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>Melbourne University Publishing has greatly benefited from Australiapacificpublisher.com. The platform's user-friendly interface and comprehensive features have made the publishing process efficient and hassle-free. It's an indispensable tool for academic publishers seeking quality and reliability.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={p2}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Professor Mia Thompson</h5>
                            <p className='text-sm'>Melbourne University Publishing</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>Australiapacificpublisher.com has been instrumental in our mission to disseminate scholarly works. The platform's robust features, coupled with its excellent customer support, have significantly improved our publishing workflow. Highly recommended for academic publishers seeking a reliable partner.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={p3}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Dr. Liam Nguyen</h5>
                            <p className='text-sm'> Monash University Press</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>University of Western Australia Press has found Australiapacificpublisher.com to be an essential tool for our publishing endeavors. The platform's intuitive design and efficient features have empowered us to publish high-quality academic works with ease. A fantastic resource for academic presses!</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={p4}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Professor Isabella Taylor</h5>
                            <p className='text-sm'>University of Western Australia Press</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>Australiapacificpublisher.com has revolutionized our publishing process at Australian National University Press. The platform's robust suite of tools, including manuscript management and digital publishing capabilities, has enhanced our productivity and output quality. </p>
                            <Avatar
                                alt="avatar of Jese"
                                img={p5}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-sm'> CEO, CK Press</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review