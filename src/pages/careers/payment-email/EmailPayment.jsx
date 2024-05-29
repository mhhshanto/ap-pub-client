import React from 'react'
import { useEffect } from 'react'

function EmailPayment() {

    useEffect(()=> {
        window.scrollTo(0,0);
    },[])
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <p className='text-center text-3xl font-semibold'>To purchase this book please contact</p>
                <p className='text-center text-blue-800 underline mt-5 cursor-pointer'>sales@australiapacificpublisher.com</p>
            </div>
        </div>
    )
}

export default EmailPayment