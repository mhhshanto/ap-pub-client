import { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

const EditBooks = () => {
  const { bookTitle, authorName, imageURL, category, bookDescription, price, rating, _id } = useLoaderData();
  const navigate = useNavigate()

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


  const handleUpdate = (event) => {
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
      id: _id,
      price,
      rating
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.patch('https://hasib-vai-backend.vercel.app/update-book', { bookObj })
          .then(res => {
            if (res.data.modifiedCount > 0) {

              Swal.fire({
                title: "Updated!",
                text: "Your file has been Updated.",
                icon: "success"
              });
              navigate('/admin/dashboard/manage')

            }

          })
          .catch(err => {
            console.log(err.message);
          })



      }
    });




  };

  return (
    <div className='px-4 my-12 w-full'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book!</h2>
      <form className="flex flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageURL}
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
              defaultValue={category}
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
            defaultValue={bookDescription}
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
              defaultValue={price}
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
              defaultValue={rating}
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

export default EditBooks