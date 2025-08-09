

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import Review from "../Review/Review";

const BookDetails = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [book, setBook] = useState([]);
  const data = useLoaderData();
  const [userReview, setUserReview] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [displayUpvote, setDisplayUpvote] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { id: book_id } = useParams();
useEffect(() => {
  if (!user) return;
  setLoading(true);

  const bookDetails = data?.find((single) => single._id === book_id);
  if (bookDetails) {
    setBook(bookDetails);
    setDisplayUpvote(parseInt(bookDetails.upvote || 0));
  }

  setLoading(false);

  axios
    .get(`https://virtual-bookshelf-server-ruddy.vercel.app/reviews/books/${book_id}`)
    .then((res) => setUserReview(res.data))
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.message,
        showConfirmButton: true,
      });
    });
}, [data, book_id, setLoading, user]);


  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    if (user.email === book.user_email) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You cannot upvote your own book",
        showConfirmButton: true,
      });
      return;
    }

    try {
      setClicked(true);

      const res = await axios.put(
        `https://virtual-bookshelf-server-ruddy.vercel.app/books/${book_id}`,
        { upvote: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.modifiedCount > 0) {
        setDisplayUpvote((prev) => prev + 1);
        setBook((prev) => ({
          ...prev,
          upvote: parseInt(prev.upvote || 0) + 1,
        }));
      }
    } catch (error) {
      console.error("Upvote failed:", error);
      Swal.fire("Error", "Failed to upvote", "error");
    } finally {
      setTimeout(() => setClicked(false), 500);
    }
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;

    try {
      const res = await axios.patch(`https://virtual-bookshelf-server-ruddy.vercel.app/books/${book_id}`, {
        reading_status: newStatus,
      });

      if (res.data.modifiedCount > 0) {
        setBook((prev) => ({
          ...prev,
          reading_status: newStatus,
        }));
        Swal.fire("Success", "Reading status updated!", "success");
      }
    } catch (error) {
      console.error("Failed to update status:", error);
      Swal.fire("Error", "Could not update reading status.", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const alreadyReviewed = userReview.find(
      (rev) => rev.user_email === user.email
    );
    if (user.email === book.user_email) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your cannot review your own book",
        showConfirmButton: true,
      });
      return;
    }
    if (alreadyReviewed) {
      Swal.fire({
        icon: "info",
        title: "You already submitted a review",
        text: "You can only submit one review per book.",
      });
      return;
    }
    const review = {
      book_id,
      user_email: user.email,
      review_text: reviewText,
      created_at: new Date().toLocaleString(),
    };

    try {
      const res = await axios.post("https://virtual-bookshelf-server-ruddy.vercel.app/reviews", review);

      if (res.data.insertedId) {
        Swal.fire("Success!", "Review submitted successfully.", "success");
        setReviewText("");
        setReviews((prev) => [...prev, review]);
        setUserReview((prev) => [...prev, review]);
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      Swal.fire("Error!", "Failed to submit review.", "error");
    }
  };

  const handleReviewUpdate = (id, newText) => {
    setUserReview((prev) =>
      prev.map((rev) =>
        rev._id === id ? { ...rev, review_text: newText } : rev
      )
    );
  };

  const handleReviewDelete = (id) => {
    setUserReview((prev) => prev.filter((rev) => rev._id !== id));
  };

  return (
    <div className="">
      <h3 className=" mt-25   text-3xl font-semibold md:text-4xl text-center ">
        Book details
      </h3>
      <div className="hero  min-h-screen md:-mt-48 lg:-mt-10  ">
        <div className="hero-content flex-col md:flex-row -mt-52 lg:-mt-20  overflow-hidden ">
          <img
            src={book.cover_photo}
            className="md:max-w-sm rounded-lg shadow-2xl h-96 object-center object-cover "
          />
          <div className="space-y-2   max-w-full mx-auto px-4 overflow-auto break-words ">
            <h1 className="text-2xl md:text-4xl  font-bold">
              {book.book_title}
            </h1>
            <h1 className="text-xl md:text-3xl  font-medium">
              By : {book.book_author}
            </h1>
            <h1 className="text-xl w-full md:text-xl break-words font-medium">
              {book.book_overview}
            </h1>
            <h1 className="text-xl md:text-xl font-medium">
              Status:{" "}
              {user?.email === book.user_email ? (
                <select
                  value={book.reading_status}
                  onChange={handleStatusChange}
                  className="ml-2 border rounded px-2 py-1"
                >
                  <option value="Want-to-read">Want-to-read</option>
                  <option value="Reading">Reading</option>
                  <option value="Completed">Read</option>
                </select>
              ) : (
                book.reading_status
              )}
            </h1>
            <h1 className="text-xl md:text-xl  font-medium ">
              {book.book_category}
            </h1>
            <h1 className="text-xl md:text-xl  font-medium ">
              Total Page : {book.total_page}
            </h1>
            <h1 className="text-xl md:text-xl  font-medium ">
              Added By : {book.user_name}
            </h1>
            <h1 className="text-xl md:text-xl  font-medium ">
              Email : {book.user_email}
            </h1>
            <h1 className="text-xl md:text-xl  font-medium flex justify-start items-center gap-4  ">
              <span
                className={`cursor-pointer inline-flex items-center gap-1 transition-transform ${
                  clicked
                    ? "animate-bounce text-red-500 drop-shadow-[0_0_6px_red] "
                    : "text-red-400"
                }`}
                onClick={handleClick}
              >
                <FaHeart fill="red" size={28} />
              </span>
              {displayUpvote}
            </h1>
          </div>
        </div>
      </div>

      <h3 className="text-center text-2xl md:text-4xl md:-mt-72 lg:mt-0">
        Leave a review about:{" "}
        <span className="text-2xl md:text-4xl font-semibold">
          {book.book_title}
        </span>
      </h3>
      <div className="w-full p-3">
        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-xl mx-auto">
          <label className="block text-xl font-semibold mb-2">
            Leave a Review
          </label>
          <textarea
            className="textarea textarea-bordered w-full  min-h-[120px]"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
          <button className="btn btn-primary mt-4" type="submit">
            Submit Review
          </button>
        </form>
      </div>

      {/* all reviews  */}
      <div>
        <h3 className="text-center text-2xl md:text-4xl font-semibold">
          All reviews
        </h3>

        {userReview.length > 0 ? (
          <div className=" w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 mb-5">
            {userReview.map((single) => (
              <Review
                key={single._id}
                single={single}
                handleReviewUpdate={handleReviewUpdate}
                handleReviewDelete={handleReviewDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl md:text-4xl mt-5 mb-5 text-red-500 col-span-full">
            No reviews found for this book.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
