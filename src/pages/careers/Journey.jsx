


function Journey() {
    return (
        <div className="container mx-auto">
            <div className='w-full grid sm:my-20 my-12  md:grid-cols-2 grid-cols-1 xl:px-16 px-5'>

                <div className='bg-[#115C36] text-white md:p-10 p-5 h-full flex justify-center items-start flex-col gap-10'>
                    <h1 className='sm:text-4xl text-2xl font-semibold text-[#18C76F]'>Start your journey with Australia Pacific Publisher today.</h1>
                    <button className=" px-16 hover:bg-[#555759] transition-colors duration-300 hover:text-gray-100 py-3 text-gray-800 bg-gray-100">join us</button>
                </div>
                <img className='h-full w-full' src="https://careers.wiley.com/img/team/home/join-us-home.jpg" alt="" />
            </div>

            <div className="xl:px-16 px-5 w-full  sm:my-24 my-14 ">
                <div className=" bg-[#F7F7F7]  sm:p-12 p-8">
                    <p className="sm:text-xl font-[300] text-center">Recently, we've noticed an increase in fraudulent job scams. These may be ads or job alerts that carry the Australia Pacific Publisher logo and appear to be authorized communications. View our latest fraud update to learn what to look out for.</p>
                </div>
            </div>

        </div>
    )
}

export default Journey