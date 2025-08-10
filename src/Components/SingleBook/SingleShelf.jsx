import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const SingleShelf = ({single}) => {
    return (
          <div className="card bg-base-200  lg:w-96 shadow-2xl ">
     <figure>
       <img className=' w-full h-48 object-cover object-center'
         src={single.cover_photo}
         alt="Shoes" />
     </figure>
     <div className="card-body  ">
      
       <h2 className="card-title font-semibold ">
         {single.book_title}
        
       </h2>
       <p className='text-lg font-semibold'>By-{single.book_author}</p>
       
       <div className="card-actions justify-start gap-1 md:gap-2 lg:gap-3">
         <div className="badge ">{single.book_category}</div>
         <div className="badge "> {single.reading_status}</div>
         <div className="badge "> <FaHeart  color='red'/>{single.upvote}</div>
         <Link to={`/bookShelf/${single._id}`} className="badge font-semibold"> View Details</Link>
       </div>
     </div>
   </div>
       );
};

export default SingleShelf;