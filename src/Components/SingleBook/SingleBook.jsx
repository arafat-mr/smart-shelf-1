import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router';
const SingleBook = ({single}) => {
    
    return (
       <div className="card bg-base-200 lg:w-96 shadow-sm">
  <figure>
    <img className=' w-full h-48 object-cover object-center'
      src={single.cover_photo}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
   
    <h2 className="card-title font-semibold ">
      {single.book_title}
      <div className="badge badge-secondary text-center">Popular </div>
    </h2>
    <p className='text-lg font-semibold'>By-{single.book_author}</p>
    <p>{single.book_overview}</p>
    <div className="card-actions justify-center">
      <div className="badge ">{single.book_category}</div>
      <div className="badge "> <FaHeart  color='red'/>{single.upvote}</div>
      {/* <Link to={`/books/${single._id}`} className="badge font-semibold">  Go to shelf</Link> */}
      <Link to={'/bookShelf'} className="badge font-semibold">  Go to shelf</Link>
    </div>
  </div>
</div>
    );
};

export default SingleBook;