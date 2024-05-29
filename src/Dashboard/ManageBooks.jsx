import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2'


const ManageBooks = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-books-manage'],
        queryFn: async () => {
                const cartData = await axios.get(`https://hasib-vai-backend.vercel.app/all-books-manage?page=${currentPage}`)
                return cartData.data;
        }
    })


    useEffect(() => {
        fetch(`https://hasib-vai-backend.vercel.app/all-books-count?category=all-books`)
          .then(res => res.json())
          .then(data => setCount(data.result))
    
      }, [])

    

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://hasib-vai-backend.vercel.app/delete-book/${id}`)
                .then(res=> {
                    if(res.data.acknowledged){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        refetch()
                    }
                })
                .catch(err=> {
                    console.log(err.message);
                })      
            }
          });
        
     
        
    };


    

    return (
        <div className='px-4 my-12 w-full overflow-auto'>
            <h2 className='mb-8 text-3xl font-bold'>Manager Your Books Inventory!</h2>

            {/* table */}

            <Table className=' min-w-[1250px]'>
                <Table.Head>
                    <Table.HeadCell>
                        No.
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Book name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Edit or Manage
                    </Table.HeadCell>
                </Table.Head>

                { isLoading ? 'loading' :
                    data.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book?.bookTitle}
                            </Table.Cell>
                            <Table.Cell>
                                {book?.authorName}
                            </Table.Cell>
                            <Table.Cell>
                                {book?.category}
                            </Table.Cell>
                            <Table.Cell>
                                ${book?.price}
                            </Table.Cell>
                            <Table.Cell>
                                <Link
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                                    to={`/admin/dashboard/edit-books/${book._id}`}
                                >
                                    Edit
                                </Link>
                                <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' onClick={() => handleDelete(book._id)}>Delete</button>

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>

            {/* pagination */}
            <div className="flex items-center justify-center text-center mt-8">
                <Pagination
                    currentPage={currentPage}
                    layout="pagination"
                    nextLabel="Go forward"
                    onPageChange={page => { 
                    setCurrentPage(page)
                    refetch()
                    }}
                    previousLabel="Go back"
                    showIcons
                    totalPages={Math.ceil(parseInt(count) / 10)}
                />
            </div>
        </div>
    )
}

export default ManageBooks