import React, { useContext, useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from "../Loading/Loading";

const PopularBooks = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
   if (authLoading) return;
    setLocalLoading(true);

    fetch("https://virtual-bookshelf-server-ruddy.vercel.app/books")
      .then((res) => res.json())
      .then((books) => {
        const sortedBooks = books.sort((a, b) => (b.upvote || 0) - (a.upvote || 0));
        setData(sortedBooks.slice(0, 9)); 
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      })
      .finally(() => {
        setLocalLoading(false);
      });
  }, [authLoading]);

  if (authLoading || localLoading) return <LoadingSpinner />;
  

  return (
    <div
      data-aos="fade-up"
      className="bg-[url('https://i.ibb.co/qLydTBzd/peter-rovder-X-5k-MOSx-Lzw-unsplash.jpg')] p-2 lg:p-5"
    >
      <h3 className="text-center text-lg md:text-2xl lg:text-4xl text-white font-semibold mt-3">
        Popular Books
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-5 mt-5 mx-auto">
        {data.map((single) => (
          <SingleBook key={single._id} single={single} />
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
