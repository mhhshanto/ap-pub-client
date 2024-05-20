import React, { useContext, useEffect } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'flowbite-react';
import { HiArrowLeft, HiShoppingCart } from 'react-icons/hi';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SingleBook = () => {
  const data = useLoaderData();
  const { setCartDataState , user} = useContext(AuthContext);
  const navigate = useNavigate()

  // Ensure that the data is fetched and passed correctly
  if (!data) {
    return <div>Loading...</div>; // Add loading indicator
  }

  const { bookTitle, authorName, bookDescription, imageURL, publishedDate, pageCount, rating, genre, price, _id } = data;



  const handleBuyNow = () => {
    // Implement buy now functionality
    console.log('Buy Now clicked');
  };

  const handleAddToCart = (id) => {

    const localData = localStorage.getItem('bookListId');
    const parseLocalData = JSON.parse(localData);
    if (!user) {
      return navigate('/login');
    }

    if (!parseLocalData) {
      localStorage.setItem('bookListId', JSON.stringify([id]))
      const localData1 = localStorage.getItem('bookListId');
      const parseLocalData1 = JSON.parse(localData1);
      setCartDataState(parseLocalData1.length)
      toast.success('Product added successfully!')
    } else {
      if (!parseLocalData.includes(id)) {
        localStorage.setItem('bookListId', JSON.stringify([...parseLocalData, id]))
        const localData1 = localStorage.getItem('bookListId');
        const parseLocalData1 = JSON.parse(localData1);
        setCartDataState(parseLocalData1.length)
        toast.success('Product added successfully!')
      } else {
        toast.error('You have already added it')
      }
    }


  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center mt-20">
      <Link to="/" className="mb-4 mt-11">
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

              <Button color="gray" onClick={() => handleAddToCart(_id)}>
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
