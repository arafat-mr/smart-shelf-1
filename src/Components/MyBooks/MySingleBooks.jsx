import axios from "axios";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MySingleBooks = ({ single, data, setData }) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://virtual-bookshelf-server-ruddy.vercel.app/books/${_id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success",
            });
            const remaining = data.filter((task) => task._id !== _id);
            setData(remaining);
          }
        });
      }
    });
  };
  return (
    <div className="">
      <div className="w-11/12 mx-auto   ">
        <div className="card bg-base-200  lg:w-96 shadow-sm">
          <Link to={`/books/${single._id}`}>
            <img
              className=" w-full h-48 object-cover object-center rounded-t-lg"
              src={single.cover_photo}
              alt="Shoes"
            />
          </Link>
          <div className="card-body  ">
            <h2 className="card-title font-semibold ">{single.book_title}</h2>
            <p className="text-lg font-semibold">By:{single.book_author}</p>
            <p className="font-semibold">{single.book_overview}</p>
            <p>Total Page : {single.total_page}</p>
             <p className=" ">{single.book_category}</p>
            <div className="card-actions items-center flex justify-start gap-4 md:gap-5 lg:gap-6">
             

              <Link
                to={`updateBooks/${single._id}`}
                className="btn btn-outline btn-sm btn-secondary font-semibold"
              >
                {" "}
                Update
              </Link>
              <button
                onClick={() => handleDelete(single._id)}
                className="btn btn-outline btn-sm btn-secondary font-semibold"
              >
                {" "}
                Delete
              </button>
                <Link to={`/books/${single._id}`} className="btn btn-outline btn-sm btn-secondary font-semibold">View Details</Link>
              <div className=" flex items-center justify-center gap-2 ">
                {" "}
                <button disabled>
                  <FaHeart className="btn-sm disabled" color="red" size={20} />
                </button>{" "}
                <span>{single.upvote}</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MySingleBooks;
