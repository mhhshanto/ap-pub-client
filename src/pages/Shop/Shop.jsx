import { useContext, useEffect, useState } from 'react';
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';

export default function Shop() {
  const { loading: authLoading } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  // fetching data
  useEffect(() => {
    setLoading(true);
    fetch('https://bookstore-api-pw4u.onrender.com/all-books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  // loader
  if (authLoading || loading) {
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

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2
        style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#4c4ce9',
        }}
      >
        SOCIAL DEVELOPMENT BOOKS
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <BookCardPlaceholder key={index} />
            ))
          : books.map((book) => (
              <Card key={book.id}>
                <img src={book.imageURL} alt="" className="h-96" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>{book.bookTitle}</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order....
                  </p>
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                  View
                </button>
              </Card>
            ))}
      </div>
    </div>
  );
}