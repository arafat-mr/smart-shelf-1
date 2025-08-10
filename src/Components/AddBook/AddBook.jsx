import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddBook = () => {
  const { user, upvote } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const finalForm = Object.fromEntries(formData.entries());

    axios
      .post("https://virtual-bookshelf-server-ruddy.vercel.app/books", finalForm)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your book has been added",
            showConfirmButton: true,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div className="hero min-h-screen w-full mt-15 md:-mt-15 lg:mt-15 bg-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm md:max-w-2xl shrink-0 shadow-2xl bg-transparent text-base-content border border-blue-200">
          <h3 className="text-2xl text-center font-semibold p-5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Add Your Book Now
          </h3>
          <form
            onSubmit={handleForm}
            className="card-body grid grid-cols-1 md:grid-cols-3 items-center gap-5"
          >
            {/* Title */}
            <div className="w-full md:col-span-2">
              <label className="label text-base-content">Title</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Add your title"
                name="book_title"
                required
              />
            </div>

            {/* Category */}
            <div className="w-full md:col-span-1">
              <label className="label text-base-content">Category</label>
              <select
                className="select select-bordered w-full"
                name="book_category"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Pick a category
                </option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Fantasy</option>
              </select>
            </div>

            {/* Overview */}
            <div className="md:col-span-3">
              <label className="label text-base-content">Overview</label>
              <textarea
                placeholder="Enter Overview Here"
                className="textarea textarea-bordered w-full"
                name="book_overview"
                required
              ></textarea>
            </div>

            {/* Reading Status */}
            <div className="w-full md:col-span-1">
              <label className="label text-base-content">Reading Status</label>
              <select
                className="select select-bordered w-full"
                name="reading_status"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Pick a status
                </option>
                <option>Read</option>
                <option>Reading</option>
                <option>Want-to-read</option>
              </select>
            </div>

            {/* Total Page */}
            <div className="md:col-span-1">
              <label className="label text-base-content">Total Page</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Page Total"
                name="total_page"
                required
              />
            </div>

            {/* Upvote */}
            <div className="md:col-span-1">
              <label className="label text-base-content">Total Upvote</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Upvote"
                name="upvote"
                required
                defaultValue={upvote}
                readOnly
              />
            </div>

            {/* Author Name */}
            <div className="md:col-span-1">
              <label className="label text-base-content">Author Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter Author Name"
                name="book_author"
                required
              />
            </div>

            {/* Cover Photo */}
            <div className="md:col-span-2">
              <label className="label text-base-content">Cover Photo</label>
              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="Enter your books cover photo url"
                name="cover_photo"
                required
              />
            </div>

            {/* User Email */}
            <div className="md:col-span-2">
              <label className="label text-base-content">User Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                defaultValue={user?.email}
                readOnly
                name="user_email"
                required
              />
            </div>

            {/* User Name */}
            <div className="md:col-span-1">
              <label className="label text-base-content">User Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Username"
                defaultValue={user?.displayName}
                readOnly
                name="user_name"
                required
              />
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                className="btn btn-outline btn-secondary mt-4 w-full"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
