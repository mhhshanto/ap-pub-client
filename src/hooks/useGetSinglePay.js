import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function useGetSinglePay(idsArr) {
    const {data : singleData, isLoading} = useQuery({
        queryKey:['single-payment-data'],
        queryFn: async () => {
            if (idsArr.length > 0) {
                const cartData = await axios.get('https://hasib-vai-backend.vercel.app/cart-books-data', { params: { ids: idsArr.join(',') } })
                return cartData.data;
            }

        }
    })
    return [singleData , isLoading];
}

export default useGetSinglePay