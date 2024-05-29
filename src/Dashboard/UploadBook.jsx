import React, { useState } from 'react'

import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UploadBook = () => {
  
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


  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      price,
      rating
    };
    axios.post('https://hasib-vai-backend.vercel.app/add-book', { bookObj })
      .then(res => {
        if (res.data) {
          toast.success('Added a new book!')
        }

      })
      .catch(err => console.log(err.message))

  };


  return (
    <div className='px-4 my-12 lg:w-[80%] w-full'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book!</h2>
      <form className="flex w-full flex-col flex-wrap gap-4" onSubmit={handleSubmit}>

        {/* first row */}
        <div className='flex gap-8'>

          {/* book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              name='bookTitle'
              className='w-full'
            />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name='authorName'
              className='w-full'
            />
          </div>

        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* book url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
            />
          </div>

          {/* book category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* full width div for book description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description"
            />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            type="text"
            name='bookDescription'
            className='w-full'
            rows={4}
          />
        </div>


        <div className='flex justify-between gap-5'>
          {/* book pdf url */}
          <div className='flex-1'>
            <div className="mb-2 block">
              <Label
                htmlFor="price"
                value="Book Price"
              />
            </div>
            <TextInput
              id="price"
              placeholder="Paste Book PDF URL here"
              required
              type="number"
              name='price'
              className='w-full'

            />
          </div>
          {/* book pdf url */}
          <div className='flex-1'>
            <div className="mb-2 block">
              <Label
                htmlFor="rating"
                value="Book Rating"
              />
            </div>
            <TextInput
              id="rating"
              placeholder="Paste Book PDF URL here"
              required
              type="number"
              name='rating'
              className='w-full'

            />
          </div>
        </div>


        {/* Submit btn */}
        <Button type="submit" className='mt-5'>
          Upload book
        </Button>

      </form>
    </div>
  )
}

export default UploadBook