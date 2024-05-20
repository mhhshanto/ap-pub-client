import { useQuery } from "@tanstack/react-query"
import axios from "axios"


function useGetPaymetData(email) {
    const {data, isLoading} = useQuery({
        queryKey:['all-payment-data'],
        queryFn:async ()=> {
            const paymentData = await axios.get('https://hasib-vai-backend.vercel.app/all-payment-data?',{email: email})
            return paymentData.data;
            
        }
    })
    return [data, isLoading];
}

export default useGetPaymetData