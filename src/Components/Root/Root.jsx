import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Footer/Footer';
import LoadingSpinner from '../Loading/Loading'
const Root = () => {
     const location =useLocation()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);

  
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);
    return (
        <div >
          {/*  */}
            <span className='fixed top-0 w-full  z-50 bg-gray-800/30 backdrop-blur-xl border-b border-gray-500/25 shadow-lg  '>

            <Navbar />
            </span>
            <div className=''>
{loading ? (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner />
          </div>
        ) : (
        
          <Outlet />
        )}
            </div>
            <Footer/>
        </div>
    );
};

export default Root;