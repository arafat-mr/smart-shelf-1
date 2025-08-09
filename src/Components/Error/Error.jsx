// import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Error = () => {
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);
      // const location=useLocation()
    return (
        <div  data-aos="fade-up" className='lg:p-2 min-h-screen flex justify-center items-center  bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent'>
            {/* <Helmet key={location.pathname}>
                <title>Freelance Zone- Error</title>
            </Helmet> */}
<div className=' rounded mt-20 w-full p-2  h-[350px] lg:h-full lg:mt-0 flex flex-col justify-center items-center gap-4 lg:'>
       <h3 className='text-lg md:text-3xl mb-4 mulish font-semibold text-center animate-bounce'>Opps Page Not Found!</h3>
       <div>
        <img className='md:w-6/12 rounded-md mx-auto ' src="https://i.ibb.co/gMW5wMfj/HTML-Yeti-404-Page.gif" alt="" />
       </div>
      <Link to='/'  className='btn btn-primary bg-pink-500'>Back To Home</Link>
    </div>
    </div>
   
    );
};

export default Error;