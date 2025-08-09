

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { FaUserFriends } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    // threshold: 0.4
  });

  return (
    <div>
      <h3 className="text-center bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent text-xl md:text-2xl font-semibold mt-10">
        Our Achievements
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 w-11/12 mx-auto">
        <div
          ref={ref}
          data-aos="fade-up"
          className="rounded-lg shadow overflow-auto bg-gradient-to-b from-pink-500 to-violet-500 flex flex-col justify-center items-center p-5"
        >
          <div className="text-white">
            <IoBookSharp size={50} />
          </div>
          <div className="text-xl font-bold text-white ml-2 mt-1">
            {inView && <CountUp delay={0.5} duration={3} end={5000} />}+
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-white text-center">
              Books Available in Our Collection
            </h3>
          </div>
        </div>
        <div
          ref={ref}
          data-aos="fade-up"
          className="rounded-lg shadow overflow-hidden bg-gradient-to-b from-pink-500 to-violet-500 flex flex-col justify-center items-center p-5"
        >
          <div className="text-white">
            <FaUserFriends size={40} />
          </div>
          <div className="text-xl font-bold text-white ml-2 mt-2">
            {inView && <CountUp delay={0.5} duration={3} end={1200} />}+
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-white text-center">
              Active Readers & Members
            </h3>
          </div>
        </div>
        <div
          ref={ref}
          data-aos="fade-up"
          className="rounded-lg shadow overflow-hidden bg-gradient-to-b from-pink-500 to-violet-500 flex flex-col justify-center items-center p-5"
        >
          <div className="text-white">
            <FaGlobeAmericas size={40} />
          </div>
          <div className="text-xl font-bold text-white ml-2 mt-1">
            {inView && <CountUp delay={0.5} duration={3} end={45} />}+
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-white text-center">
              Countries Where Readers Are From
            </h3>
          </div>
        </div>
        <div
          ref={ref}
          data-aos="fade-up"
          className="rounded-lg shadow overflow-hidden bg-gradient-to-b from-pink-500 to-violet-500 flex flex-col justify-center items-center p-5"
        >
          <div className="text-white">
            <IoMdEye size={40} />
          </div>
          <div className="text-xl font-bold text-white ml-2 mt-1">
            {inView && <CountUp delay={0.5} duration={3} end={100000} />}+
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-white text-center">
              Total Visits to Our Bookshelf Site
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
