import { useContext, useEffect, useState } from 'react';
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Shop() {
  const { loading: authLoading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);



  // pagination 
  const [currentPage, setCurrentPage] = useState(0)
  const [result, setResult] = useState(15);
  const [perPage, setParPage] = useState(6);
  const numberOfPages = Math.ceil(result / perPage);
  const [category, setCategory] = useState('all-books');
  const arrOFPages = [...Array(numberOfPages).keys()]


  useEffect(() => {
    axios.get(`https://hasib-vai-backend.vercel.app/all-books-data?category=${category}&page=${currentPage}&size=${perPage}`)
      .then(res => {

        setBooks(res.data)
        setIsLoading(false);

      })

  }, [currentPage, perPage, category])


  // console.log(books)



  useEffect(() => {
    fetch(`https://hasib-vai-backend.vercel.app/all-books-count?category=${category}`)
      .then(res => res.json())
      .then(data => setResult(data.result))

  }, [category])

  // loader
  if (authLoading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  // placeholder component
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



  const handleSelectCategory = e => {
    setIsLoading(false)
    setCategory(e.target.value)
    setCurrentPage(0)
  }



  const handleSelectPage = (page) => {
    setIsLoading(false)
    setParPage(parseInt(page.target.value))
    setCurrentPage(0)

  }


  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsLoading(false)
      setCurrentPage(currentPage - 1)
    }
  }


  const handleNextPage = () => {
    if ((numberOfPages - 1) > currentPage) {
      setIsLoading(false)
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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


  return (
    <div className="my-28 px-4 lg:px-24">
      <h2
        style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#4c4ce9',
        }}
      >
        SOCIAL DEVELOPMENT BOOKS
      </h2>

      <div className='container mx-auto flex justify-center items-center mb-10'>
        <select onChange={handleSelectCategory} className='text-center border-none shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md outline-none' name="" id="">
          <option selected value="all-books">All Books</option>
          
          {
            bookCategories.map((item,index)=> <option key={index} value={item}>{item}</option>)
          }
        </select>
      </div>

      <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto`}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
            <BookCardPlaceholder key={index} />
          ))
          : books.map((book) => (
            <Card key={book?._id}>
              <img src={book?.imageURL} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book?.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className='line-clamp-3'>
                  {book?.bookDescription}
                </p>
                <p className='font-semibold mt-2'>Price: ${book?.price}</p>
              </p>
              <Link to={`/book/${book._id}`}>
                <button className="px-4 py-2 w-full bg-blue-600 text-white rounded">
                  View
                </button>
              </Link>
            </Card>
          ))}
      </div>

      <div className='flex justify-center mt-10 items-center'>
        <button className="btn-circle text-2xl" onClick={handlePrevPage}><IoIosArrowBack /></button>
        {
          arrOFPages.map(page => <button className={`border px-3 py-2 rounded-md mx-2 ${page === currentPage ? 'bg-blue-600 text-gray-50' : ''}`}
            onClick={() => setCurrentPage(page)}
            key={page}>{page + 1}</button>)
        }
        <select className="border border-gray-300 px-3 rounded-md ml-5" value={perPage} onChange={handleSelectPage} id="">
          <option value="6">6</option>
          <option value="9">9</option>

        </select>
        <button className="btn-circle mx-3 text-2xl" onClick={handleNextPage}><IoIosArrowForward /></button>
      </div>


    </div>
  );
}