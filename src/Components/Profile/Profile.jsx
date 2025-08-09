import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyPieChart from "../PieChart/PieChart";
import noData from '../../assets/nodata.json.json'
import Lottie from "lottie-react";
const Profile = () => {
  const { user,setLoading } = useContext(AuthContext);
 
    const [data, setData] = useState([]);
    
    


    useEffect(() => {
  const fetchBooks = async () => {
    try {
      // setLoading(true);
      const res = await fetch(`https://virtual-bookshelf-server-ruddy.vercel.app/books?email=${user.email}`);
      const result = await res.json();
      setData(result);
    
      
    } finally {
      setLoading(false);
    }
  };
  fetchBooks();
}, [user.email,setLoading,user.accessToken]);

const normalizedData = data.map(book => ({
  ...book,
  book_category: book.book_category?.trim().toLowerCase() || '',
}));

const filteredDataFiction = normalizedData.filter(cat => cat.book_category === 'fiction');
const filteredDataNonFiction = normalizedData.filter(cat => cat.book_category === 'non-fiction');
const filteredDataFantasy = normalizedData.filter(cat => cat.book_category === 'fantasy');




   
  return (
    <div className=" ">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row lg:gap-20 ">
          <div className="bg-black h-52 w-52 rounded-full overflow-hidden  mt-20 lg:mt-24">
            <img
              src={user.photoURL}
              className=" h-full w-full rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <h1 className=" text-2xl md:text-5xl font-bold">My Profile Info</h1>
            <p className="py-2 text-2xl font-semibold">
              Name : {user.displayName}
            </p>
            <p className="py-2 text-2xl font-semibold">Email : {user.email}</p>
          </div>
        </div>
      </div>
       <h3 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl mt-10">
          Summary of my books
        </h3>
        

      {
        data && data.length ? <>
        <div className="pie">

        
       
      
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5  ">
          <div className="w-full lg:w-1/2 h-80 mb-5 ">
            <MyPieChart 
            filteredDataFiction={filteredDataFiction} 
            filteredDataNonFiction={filteredDataNonFiction} 
            filteredDataFantasy={filteredDataFantasy}  />
          </div>
          <div className="space-y-4 text-lg font-semibold  lg:mt-20">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <span className="inline-block w-38 h-8 lg:w-48 lg:h-12 bg-[#0088FE] rounded"></span>
              <span>Fiction</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <span className="inline-block w-38 h-8 lg:w-48 lg:h-12 bg-[#00C49F] rounded"></span>
              <span>Non-Fiction</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <span className="inline-block w-38 h-8 lg:w-48 lg:h-12 bg-[#FFBB28] rounded"></span>
              <span>Fantasy</span>
            </div>
          </div>
        </div>
      </div>
        </>:
        <div className="flex flex-col items-center justify-center h-96 ">
   <Lottie animationData={noData} style={{width:'300px'}}>

   </Lottie>
  <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-red-600 ">No data available to display chart</p>
</div>

      }
      
    </div>
  );
};

export default Profile;
