
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Review = ({ single, handleReviewUpdate, handleReviewDelete }) => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(single.review_text);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`https://virtual-bookshelf-server-ruddy.vercel.app/reviews/${single._id}`, {
        review_text: editedText,
      });
      if (res.data.modifiedCount > 0) {
        handleReviewUpdate(single._id, editedText);
        setIsEditing(false)
         Swal.fire({
                position: "center",
                icon: "success",
                title: 'Success',
                showConfirmButton: true,
              });
        
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      const res = await axios.delete(`https://virtual-bookshelf-server-ruddy.vercel.app/reviews/${single._id}`);
      if (res.data.deletedCount > 0) {
        handleReviewDelete(single._id);
        Swal.fire("Deleted!", "Your review has been deleted.", "success");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      Swal.fire("Error!", "Failed to delete review.", "error");
    }
  }
};

  return (
    <div>
      <div className="card bg-primary text-primary-content">
        <div className="card-body h-48 overflow-auto">
          {isEditing ? (
            <>
              <textarea
                className="textarea textarea-bordered bg-black text-white w-full mb-2"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <div className="flex space-x-3">
                <button
                  className="btn btn-sm btn-success"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setIsEditing(false);
                    setEditedText(single.review_text);
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p>{single.review_text}</p>
              <div className="card-actions justify-between items-center">
                <h2 className="card-title">-- {single.user_email}</h2>
                {/* <h2 className="card-title">-- {single.displayName}</h2> */}
              
                {user?.email === single.user_email && (
                  <div className="space-x-3">
                    <button
                      className="btn btn-sm btn-secondary btn-outline text-white"
                      onClick={() => setIsEditing(true)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-secondary btn-outline text-white"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
