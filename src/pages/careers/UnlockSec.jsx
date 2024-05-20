import React from 'react'

function UnlockSec() {

const data = [
    {
        img:'https://careers.wiley.com/img/team/home/impact.svg',
        title:'Impact',
        des:'You want to learn and grow throughout your career. We give you access to a huge selection of resources, from journals and textbooks to online courses, because we firmly believe in the power of education to change lives.'
    },
    {
        img:'https://careers.wiley.com/img/team/home/grow.svg',
        title:'Grow',
        des:"Wherever you want to take your career, we'll help you get there. We love seeing our colleagues achieve their goals, so we'll always give you the skills and knowledge you need to grow and succeed in your role."
    },
    {
        img:'https://careers.wiley.com/img/team/home/community.svg',
        title:'Community',
        des:"Be a part of Australia Pacific Publisher's special community. With over 7,500 colleagues worldwide, you'll meet and connect with like-minded people every day. From social events to book clubs and more, there are always opportunities to get involved."
    },
    {
        img:'https://careers.wiley.com/img/team/home/impact.svg',
        title:'Impact',
        des:'You want to learn and grow throughout your career. We give you access to a huge selection of resources, from journals and textbooks to online courses, because we firmly believe in the power of education to change lives.'
    },
    {
        img:'https://careers.wiley.com/img/team/home/grow.svg',
        title:'Grow',
        des:"Wherever you want to take your career, we'll help you get there. We love seeing our colleagues achieve their goals, so we'll always give you the skills and knowledge you need to grow and succeed in your role."
    },
]



    return (
        <div className='container mx-auto my-14'>
            <div className='2xl:px-32 px-5  flex justify-center items-center flex-col gap-8'>
                <h1 className='sm:text-4xl text-3xl font-semibold text-black text-center'>Unlock your potential</h1>
                <p className='sm:text-xl font-[300] text-center'>We believe in lifelong learning. Our colleagues work together to help customers get where they want to be and make an impact. Work for us, and you'll be part of a very special global community where every colleague is valued and respected.</p>
            </div>

            <div className='2xl:px-52 px-5 my-14'>
                 <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14'>
                    {
                        data.map((item,index)=> <div key={index} className='md:p-8 p-4 rounded-md border hover:scale-[1.01] transition-transform duration-300 border-gray-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col md:gap-y-8 gap-y-4'>
                        <img className='w-[40%]' src={item.img} alt="" />
                        <h2 className='sm:text-4xl text-3xl font-semibold text-black'>{item.title}</h2>
                        <p className='sm:text-[18px] font-[300] '>{item.des}</p>
                  </div>)
                    }
                        
                 </div>
                 <div className='w-full grid sm:my-20 my-12  md:grid-cols-3 grid-cols-1'>
                         <img className='h-full w-full' src="https://careers.wiley.com/img/team/home/danielle-mcmahan.jpg" alt="" />
                         <div className='bg-[#115C36] col-span-2 text-white md:p-10 p-5 h-full'>
                            <p className='lg:text-3xl sm:text-xl text-base  italic'>"Australia Pacific Publisher is a Knowledge Company. We enable the creation of knowledge and its application in science, learning and innovation. Our colleagues enable us to fulfill this inspirational purpose. That is why our goal is to empower you to succeed at work and life through an inspired colleague experience that enables Purpose, Growth, Community and Care for you at Australia Pacific Publisher."</p>
                            <p className='lg:text-xl text-sm italic mt-2'>- Danielle McMahan, Chief People Officer</p>
                         </div>
                 </div>
            </div>
        </div>
    )
}

export default UnlockSec