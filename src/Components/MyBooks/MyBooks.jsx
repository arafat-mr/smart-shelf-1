import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from "../Loading/Loading";
import MySingleBooks from "./MySingleBooks";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; 


    setIsLoading(true);
    // setLoading(true);

    fetch(`https://virtual-bookshelf-server-ruddy.vercel.app/books?email=${user.email}`)
      .then((res) => res.json())
      .then((books) => {
        setData(books || []);
      })
      .catch((err) => {
        console.error("Error fetching user's books:", err);
      })
      .finally(() => {
        setIsLoading(false);
        // setLoading(false);
      });
  }, [user?.email]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="mt-15 min-h-screen p-4  bg-[url('https://i.ibb.co/rGKtkfRQ/jess-bailey-X5g-Doys-Lb-Bc-unsplash.jpg')] bg-center bg-cover">
      {data.length === 0 ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <h3 className="text-2xl font-semibold text-center">
            No books found for: <span className="text-purple-600">{user?.email}</span>
          </h3>
        </div>
      ) : (
        <div>
          <h3 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            My Books
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((single) => (
              <MySingleBooks key={single._id} single={single} data={data} setData={setData} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
