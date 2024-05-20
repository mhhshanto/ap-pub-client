import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card } from 'flowbite-react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchTitle() {

    const param = useParams()

    const { data: books, isLoading } = useQuery({
        queryKey: ['search-data'],
        queryFn: async () => {
            const result = await axios.get(`https://hasib-vai-backend.vercel.app/search-book?title=${param.title}`)
            return result.data;
        }
    })

    const BookCardPlaceholder = () => (
        <Card>
            <div className="h-96 bg-gray-200 animate-pulse"></div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="h-6 bg-gray-200 animate-pulse w-3/4 mt-4"></div>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <div className="h-4 bg-gray-200 animate-pulse w-full mt-4"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-3/4 mt-2"></div>
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
                <div className="h-5 bg-gray-200 animate-pulse w-24"></div>
            </button>
        </Card>
    );

    const truncateDescription = (description) => {
        const words = description.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + "...";
        } else {
            return description;
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='mb-10'>
            <div className='flex mt-40 mb-16 justify-center items-center'>
                <h1 className='sm:text-3xl text-xl '>Searching title is <span className='text-blue-600 font-semibold'>{param.title}</span></h1>
            </div>
            <div className={`grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto`}>
                {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <BookCardPlaceholder key={index} />
                    ))
                    : books?.map((book) => (
                        <Card key={book?._id}>
                            <img src={book?.imageURL} alt="" className="h-96" />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>{book?.bookTitle}</p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    {truncateDescription(book?.bookDescription)}
                                </p>
                            </p>
                            <Link to={`/book/${book?._id}`}>
                                <button className="px-4 py-2 w-full bg-blue-600 text-white rounded">
                                    View
                                </button>
                            </Link>
                        </Card>
                    ))}
            </div>
            {
                books?.length === 0 ? <div>
                    <div className='flex justify-center items-center px-3'>
                        <div className='sm:py-10 p-5 rounded-md sm:px-20 border text-xl border-gray-200'>
                            Could Not Find Book with <span className='text-blue-600'>{param.title}</span> title
                        </div>
                    </div>

                </div> : ''
            }
        </div>
    )
}

export default SearchTitle