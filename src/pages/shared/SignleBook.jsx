import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Card, Button } from 'flowbite-react';
import { HiArrowLeft, HiShoppingCart } from 'react-icons/hi';
import { FaCartPlus } from 'react-icons/fa';

const SingleBook = () => {
  const data = useLoaderData();
  const { bookTitle, authorName, bookDescription, imageURL, publishedDate, pageCount, rating, genre, price } = data;

  const handleBuyNow = () => {
    // Implement buy now functionality
    console.log('Buy Now clicked');
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Add to Cart clicked');
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <Link to="/" className="mb-4">
        <Button color="gray" pill={true}>
          <HiArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </Link>

      <Card className="max-w-3xl">
        <div className="flex flex-col md:flex-row">
          <img
            className="h-96 w-full md:w-1/3 object-cover rounded-l-lg"
            src={imageURL}
            alt={bookTitle}
          />
          <div className="p-6 md:p-8 flex flex-col justify-start">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {bookTitle}
            </h5>
            <p className="font-normal text-gray-700 mt-2">
              By {authorName}
            </p>
            <p className="font-normal text-gray-700 mt-4">
              {bookDescription}
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                {genre}
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Rating: {rating}
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Pages: {pageCount}
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Published: {publishedDate}
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Price: ${price}
              </span>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button color="success" onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Button color="gray" onClick={handleAddToCart}>
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleBook;