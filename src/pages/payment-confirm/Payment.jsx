// import GooglePayButton from '@google-pay/button-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [payInfo, setPayInfo] = useState(null)
    const [booksIds, setBooksIds] = useState(null)
    const navigate = useNavigate();



    useEffect(() => {
        const payInfo = localStorage.getItem('paymentInfo');
        setPayInfo(JSON.parse(payInfo))
        const booksIds = localStorage.getItem('bookListId');
        setBooksIds(JSON.parse(booksIds))
    }, [])

    const handlePayDataSave = ()=> {
        axios.post('https://hasib-vai-backend.vercel.app/add-paymentData',{payInfo,booksIds})
        .then(result=> {
            if(result.data.acknowledged){
                toast.success('Payment Successfully!')
                localStorage.removeItem('paymentInfo')
                localStorage.removeItem('bookListId')               
                navigate('/')
                location.reload()
            }
        })
        .catch(error=> console.log(error))
    }


    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            {/* <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    shippingAddressRequired:true,
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
                buttonColor='black'
                existingPaymentMethodRequired='false'
                buttonSizeMode='fill'
            /> */}

            <button onClick={handlePayDataSave} className='px-8 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition duration-200'>Buy with Google Pay</button>
        </div>
    )
}

export default Payment