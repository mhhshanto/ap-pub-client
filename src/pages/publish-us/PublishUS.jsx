import React from 'react'
import { Button, Select, Label, TextInput, Textarea } from "flowbite-react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

function PublishUS() {
   const [isLoading,setIsLoading] = useState(false);
   const {user} = useContext(AuthContext);

    const bookCategories = [
        "Social-Development",
        "Economics Textbook",
        "Nursing Books",
        "Social Work and Social Behavior",
        "History of Social Science",
        "Climate Change",
        "Indigenous Australia",
        "Sustainable Development Goals",
        "Colonialism and Social Anthropology",
        "Gender Studies",
        "Psychology",
        "Medical Sciences"
    ];

    const handleSubmit = e => {
        setIsLoading(true)

        e.preventDefault()
        const form = e.target;
        const authorName = form.authorName.value;
        const bookTitle = form.bookTitle.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;
        const price = form.price.value;
        const bookData = {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL,price, email: user?.email}
        // console.log(bookData)

        axios.post('https://hasib-vai-backend.vercel.app/add-publish-book', {bookData})
        .then(res=> {
            if(res.data.acknowledged){
                toast.success('Book added successfully!')
                setIsLoading(false)
                e.target.reset()
                
            }
        })
        .catch(err=> toast.error(err.message))

    }


    return (
        <div className='min-h-screen mt-24 mb-20 flex justify-center items-center'>
            <div className='lg:w-[45%] md:w-[70%] sm:w-[90%] w-full px-2 mx-auto'>
                <h1 className='text-center text-3xl font-semibold text-gray-700 my-5'>Add New Book</h1>
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Book Title" />
                        </div>
                        <TextInput id="password1" type="text" placeholder='bookTitle' name='bookTitle' required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder='Author Name' name='authorName' required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Image URL" />
                        </div>
                        <TextInput id="imageURL" type="text" placeholder='Image URL' name='imageURL' required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Category" />
                        </div>
                        <TextInput id="category" type="text" placeholder='Category' name='category' required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bookDescription" value="Book Description" />
                        </div>
                        <Textarea name='bookDescription' id="bookDescription" placeholder="Book Description" required rows={2} />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                        </div>
                        <TextInput id="bookPDFURL" type="text" placeholder='Book PDF URL' name='bookPDFURL' required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Book Price" />
                        </div>
                        <TextInput id="price" type="number" placeholder='Book Price' name='price' required />
                    </div>

                    {
                        isLoading ? <Button isProcessing >Submit</Button>:
                        <Button  type="submit">Submit</Button>
                    }
                </form>
            </div>
        </div>
    )
}

export default PublishUS