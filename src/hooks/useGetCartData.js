import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function useGetCartData(enable,idsArr) {
    const { data, refetch } = useQuery({
        queryKey: ['cart-books-data'],
        enabled: enable,
        queryFn: async () => {
            if (idsArr.length > 0) {
                const cartData = await axios.get('https://hasib-vai-backend.vercel.app/cart-books-data', { params: { ids: idsArr.join(',') } })
                return cartData.data;
            }

        }
    })

    return [data,refetch]
}

export default useGetCartData