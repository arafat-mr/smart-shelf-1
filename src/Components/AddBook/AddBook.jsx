import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DatePicker from "react-date-picker";
import axios from "axios";
import Swal from "sweetalert2";

const AddBook = () => {
  const { user, upvote } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const finalForm = Object.fromEntries(formData.entries());
  

    // send data

    axios
      .post("https://virtual-bookshelf-server-ruddy.vercel.app/books",finalForm)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your book has been added",
            showConfirmButton: true,
            timer: 1500,
          });
           form.reset()
        }
      })
      .catch((err) => {
       
        alert("error");
      });
     
  };
  return (
    <div className="hero  min-h-screen w-full mt-15 md:-mt-15 lg:mt-15 bg-transparent ">
      <div className="hero-content flex-col lg:flex-row-reverse   ">
        <div className="card  w-full  max-w-sm md:max-w-2xl shrink-0 shadow-2xl bg-trasnparent text-white ">
          <h3 className="text-2xl text-center font-semibold p-5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent ">
            Add Your Book Now
          </h3>
          <form
            onSubmit={handleForm}
            className="card-body grid grid-cols-1 md:grid-cols-3 items-center gap-5 "
          >
            {/* title  */}
            <div className="w-full md:col-span-2 ">
              <label className="label text-black ">Title</label>
              <input
                type="text"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder="Add your title"
                name="book_title"
                required
              />
            </div>
            {/* category  */}
            <div className="w-full md:col-span-1">
              <label className="label text-black ">Category</label>
              <fieldset className="fieldset">
                <select
                  className="select bg-transparent text-black w-full border-violet-700"
                  name="book_category"
                  required
                >
                  <option disabled={true}>Pick a category</option>
                  <option>Fiction</option>
                  <option>Non-Fiction</option>
                  <option>Fantasy</option>
                </select>
              </fieldset>
            </div>

            {/* over view  */}
            <div className="md:col-span-3">
              <label className="label text-black ">Overview</label>
              <textarea
                type="text"
                placeholder="Enter Overview Here"
                className="textarea bg-transparent text-black w-full border-violet-700 "
                name="book_overview"
                required
              ></textarea>
            </div>
            {/* reading status  */}
            <div className="w-full md:col-span-1">
              <label className="label text-black ">Reading Status</label>
              <fieldset className="fieldset">
                <select
                  className="select bg-transparent text-black w-full border-violet-700"
                  name="reading_status"
                  required
                >
                  <option disabled={true}>Pick a status</option>
                  <option>Read</option>
                  <option>Reading </option>
                  <option>Want-to-read</option>
                </select>
              </fieldset>
            </div>
            {/* total page  */}
            <div className="md:col-span-1">
              <label className="label text-black">Total Page</label>
              <input
                type="number"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder="Page Total"
                name="total_page"
                required
              />
            </div>
            {/* upvote  */}
            <div className="md:col-span-1">
              <label className="label text-black">Total Upvote</label>
              <input
                type="number"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder='Upvote'
                name="upvote"
                required
                defaultValue={upvote}
                readOnly
              />
            </div>
            {/* book_author  */}
            <div className="md:col-span-1">
              <label className="label text-black">Author Name</label>
              <input
                type="text"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder="Enter Author Name"
                // defaultValue={user && user}
                // readOnly
                name="book_author"
                required
              />
            </div>
            {/* coverphoto */}
            <div className="md:col-span-2">
              <label className="label text-black">Cover Photo</label>
              <input
                type="url"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder="Enter your books cover photo url"
                // defaultValue={user && user.displayName}
                // readOnly
                name="cover_photo"
                required
              />
            </div>

            {/* email  */}
            <div className="md:col-span-2">
              <label className="label text-black">User Email</label>
              <input
                type="email"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder="Email"
                defaultValue={user && user.email}
                readOnly
                name="user_email"
                required
              />
            </div>
            {/* user name  */}
            <div className="md:col-span-1">
              <label className="label text-black">User Name</label>
              <input
                type="text"
                className="input bg-transparent text-black w-full border-violet-700"
                placeholder="Username"
                defaultValue={user && user.displayName}
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
