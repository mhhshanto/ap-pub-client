import BookCards from '../shared/BookCards';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from "flowbite-react";

const BestSeller = () => {

    const { data: books, isLoading } = useQuery({
        queryKey: ['best-sell-books'],
        queryFn: async () => {
            const data = await axios.get("https://hasib-vai-backend.vercel.app/all-books?count=5")
            return data.data;
        }
    })




    console.log(books)

    return (
        <> {
            isLoading ? <div className="text-center h-[80vh] flex justify-center items-center">
                <Spinner aria-label=" Extra large spinner example" size='xl' />
            </div> :
                <BookCards books={books} headline={"Best Seller Books"} />
        }

        </>
    )
}

export default BestSeller