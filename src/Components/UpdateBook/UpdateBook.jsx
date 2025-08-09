import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateBook = () => {
   
  const { user } = useContext(AuthContext);
const data=useLoaderData()


const handleForm = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const updatedForm = Object.fromEntries(formData.entries());

  // Convert string inputs to numbers
  updatedForm.total_page = parseInt(updatedForm.total_page);
  updatedForm.upvote = parseInt(updatedForm.upvote);

  axios
    .put(`https://virtual-bookshelf-server-ruddy.vercel.app/books/${data._id}`, updatedForm)
    .then((res) => {
      const { modifiedCount, matchedCount } = res.data;

      if (modifiedCount || matchedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your book has been updated successfully",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "No changes detected",
          text: "Update skipped as there were no changes.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong!");
    });
};


    return (
         <div className="hero bg-base-200 min-h-screen w-full mt-15 md:-mt-15 lg:mt-15">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full  max-w-sm md:max-w-2xl shrink-0 shadow-2xl ">
          <h3 className="text-2xl text-center font-semibold p-5">
            Update Your Book Now
          </h3>
          <form
            onSubmit={handleForm}
            className="card-body grid grid-cols-1 md:grid-cols-3 items-center gap-5"
          >
            {/* title  */}
            <div className="w-full md:col-span-2">
              <label className="label text-black ">Title</label>
              <input
                type="text"
                className="input w-full border-violet-700"
                placeholder="Add your title"
                name="book_title"
                required
                defaultValue={data.book_title}
              />
            </div>
            {/* category  */}
            <div className="w-full md:col-span-1">
              <label className="label text-black ">Category</label>
              <fieldset className="fieldset">
                <select
                defaultValue={data.book_category}
                  className="select w-full border-violet-700"
                  name="book_category"
                  required
                  
                >
                  <option disabled={true} >Pick a category</option>
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
                className="textarea  w-full border-violet-700 "
                name="book_overview"
                required
                defaultValue={data.book_overview}
              ></textarea>
            </div>
            {/* reading status  */}
            <div className="w-full md:col-span-1">
              <label className="label text-black ">Reading Status</label>
              <fieldset className="fieldset">
                <select
                defaultValue={data.reading_status}
                  className="select w-full border-violet-700"
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
                className="input w-full border-violet-700"
                placeholder="Page Total"
                name="total_page"
                required
                defaultValue={data.total_page}
              />
            </div>
            {/* upvote  */}
            <div className="md:col-span-1">
              <label className="label text-black">Total Upvote</label>
              <input
                type="number"
                className="input w-full border-violet-700"
                placeholder='Upvote'
                name="upvote"
                required
                defaultValue={data.upvote}
                readOnly
              />
            </div>
            {/* book_author  */}
            <div className="md:col-span-1">
              <label className="label text-black">Author Name</label>
              <input
                type="text"
                className="input w-full border-violet-700"
                placeholder="Enter Author Name"
                // defaultValue={user && user}
                // readOnly
                name="book_author"
                required
                defaultValue={data.book_author}
              />
            </div>
            {/* coverphoto */}
            <div className="md:col-span-2">
              <label className="label text-black">Cover Photo</label>
              <input
                type="url"
                className="input w-full border-violet-700"
                placeholder="Enter your books cover photo url"
                // defaultValue={user && user.displayName}
                // readOnly
                name="cover_photo"
                required
                defaultValue={data.cover_photo}
              />
            </div>

            {/* email  */}
            <div className="md:col-span-2">
              <label className="label text-black">User Email</label>
              <input
                type="email"
                className="input w-full border-violet-700"
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
                className="input w-full border-violet-700"
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
                Update Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
   
    );
};

export default UpdateBook;
// import React, { useContext } from 'react';
// import { AuthContext } from '../../Context/AuthProvider';
// import { useLoaderData } from 'react-router';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const UpdateBook = () => {
   
//   const { user } = useContext(AuthContext);
// const data=useLoaderData()
// console.log(data);

// const handleForm=(e)=>{
// e.preventDefault()
// const form=e.target
// const formData= new FormData(form)
// const updatedForm= Object.fromEntries(formData.entries())
// // console.log(updatedForm);

// axios.put(`https://virtual-bookshelf-server-ruddy.vercel.app/books/${data._id}`,updatedForm
  
// )
// .then((res) => {
//     console.log(res.data);
    
//         if (res.data.modifiedCount) {
//           Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Your book has been updated successfully",
//             showConfirmButton: true,
//             timer: 1500,
//           });
//         //    form.reset()
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("error");
//       });

// }

//     return (
//          <div className="hero bg-base-200 min-h-screen w-full mt-15 md:-mt-15 lg:mt-15">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full  max-w-sm md:max-w-2xl shrink-0 shadow-2xl ">
//           <h3 className="text-2xl text-center font-semibold p-5">
//             Update Your Book Now
//           </h3>
//           <form
//             onSubmit={handleForm}
//             className="card-body grid grid-cols-1 md:grid-cols-3 items-center gap-5"
//           >
//             {/* title  */}
//             <div className="w-full md:col-span-2">
//               <label className="label text-black ">Title</label>
//               <input
//                 type="text"
//                 className="input w-full border-violet-700"
//                 placeholder="Add your title"
//                 name="book_title"
//                 required
//                 defaultValue={data.book_title}
//               />
//             </div>
//             {/* category  */}
//             <div className="w-full md:col-span-1">
//               <label className="label text-black ">Category</label>
//               <fieldset className="fieldset">
//                 <select
//                 defaultValue={data.book_category}
//                   className="select w-full border-violet-700"
//                   name="book_category"
//                   required
                  
//                 >
//                   <option disabled={true} >Pick a category</option>
//                   <option>Fiction</option>
//                   <option>Non-Fiction</option>
//                   <option>Fantasy</option>
//                 </select>
//               </fieldset>
//             </div>

//             {/* over view  */}
//             <div className="md:col-span-3">
//               <label className="label text-black ">Overview</label>
//               <textarea
//                 type="text"
//                 placeholder="Enter Overview Here"
//                 className="textarea  w-full border-violet-700 "
//                 name="book_overview"
//                 required
//                 defaultValue={data.book_overview}
//               ></textarea>
//             </div>
//             {/* reading status  */}
//             <div className="w-full md:col-span-1">
//               <label className="label text-black ">Reading Status</label>
//               <fieldset className="fieldset">
//                 <select
//                 defaultValue={data.reading_status}
//                   className="select w-full border-violet-700"
//                   name="reading_status"
//                   required
//                 >
//                   <option disabled={true}>Pick a status</option>
//                   <option>Read</option>
//                   <option>Reading </option>
//                   <option>Want-to-read</option>
//                 </select>
//               </fieldset>
//             </div>
//             {/* total page  */}
//             <div className="md:col-span-1">
//               <label className="label text-black">Total Page</label>
//               <input
//                 type="number"
//                 className="input w-full border-violet-700"
//                 placeholder="Page Total"
//                 name="total_page"
//                 required
//                 defaultValue={data.total_page}
//               />
//             </div>
//             {/* upvote  */}
//             <div className="md:col-span-1">
//               <label className="label text-black">Total Upvote</label>
//               <input
//                 type="number"
//                 className="input w-full border-violet-700"
//                 placeholder='Upvote'
//                 name="upvote"
//                 required
//                 defaultValue={data.upvote}
//                 readOnly
//               />
//             </div>
//             {/* book_author  */}
//             <div className="md:col-span-1">
//               <label className="label text-black">Author Name</label>
//               <input
//                 type="text"
//                 className="input w-full border-violet-700"
//                 placeholder="Enter Author Name"
//                 // defaultValue={user && user}
//                 // readOnly
//                 name="book_author"
//                 required
//                 defaultValue={data.book_author}
//               />
//             </div>
//             {/* coverphoto */}
//             <div className="md:col-span-2">
//               <label className="label text-black">Cover Photo</label>
//               <input
//                 type="url"
//                 className="input w-full border-violet-700"
//                 placeholder="Enter your books cover photo url"
//                 // defaultValue={user && user.displayName}
//                 // readOnly
//                 name="cover_photo"
//                 required
//                 defaultValue={data.cover_photo}
//               />
//             </div>

//             {/* email  */}
//             <div className="md:col-span-2">
//               <label className="label text-black">User Email</label>
//               <input
//                 type="email"
//                 className="input w-full border-violet-700"
//                 placeholder="Email"
//                 defaultValue={user && user.email}
//                 readOnly
//                 name="user_email"
//                 required
//               />
//             </div>
//             {/* user name  */}
//             <div className="md:col-span-1">
//               <label className="label text-black">User Name</label>
//               <input
//                 type="text"
//                 className="input w-full border-violet-700"
//                 placeholder="Username"
//                 defaultValue={user && user.displayName}
//                 readOnly
//                 name="user_name"
//                 required
//               />
//             </div>

//             <div className="md:col-span-3">
//               <button
//                 type="submit"
//                 className="btn btn-outline btn-secondary mt-4 w-full"
//               >
//                 Update Book
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
   
//     );
// };

// export default UpdateBook;