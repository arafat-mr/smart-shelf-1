
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { FaSearchengin } from "react-icons/fa";
import { Link } from "react-router";
import Aos from "aos";
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="py-5 w-full bg-gradient-to-r from-indigo-900/20 to-purple-900/20 lg:mt-0 bg-[url('https://i.ibb.co/CK5ZyCkS/tengyart-z-LETygk-HMv-Q-unsplash.jpg')] min-h-[80vh] bg-cover bg-center overflow-hidden relative">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ 
          autoplay:true,
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/80 !w-3 !h-3 !mx-1',
          bulletActiveClass: '!bg-emerald-400'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
          reverseDirection: false,
          disableOnInteraction: true,
        }}
        spaceBetween={15}
        slidesPerView={1}
        className="relative z-10  "
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full mx-auto md:h-[80vh] flex flex-col lg:flex-row justify-center gap-8 items-center md:items-start lg:items-center text-white p-5 lg:p-10">
            <motion.div 
              data-aos='fade-right'
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col justify-start items-start space-y-2 max-w-2xl "
            >
              <TypeAnimation
                sequence={[
                  'Every book is a doorway',
                  500,
                  'Every book is a doorway to a new world...',
                  2000
                ]}
                wrapper="h2"
                speed={30}
                className="text-2xl md:text-5xl font-light leading-tight "
                repeat={Infinity}
              />
              
              <motion.p className="text-md md:text-xl font-light opacity-90 ">
                Wander through whispered secrets of ancient tomes, get lost in modern tales that spark the imagination, and discover stories that stay with you long after the final page.
              </motion.p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to='/bookShelf' className="btn btn-lg bg-emerald-500 hover:bg-emerald-600 border-none text-white shadow-lg group">
                  <FaSearchengin size={20} className="mr-2 group-hover:rotate-6 transition-transform"/>
                  Explore The Shelf
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              data-aos='fade-left'
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-full lg:w-1/2 h-64 md:h-[50vh] lg:h-[70vh] relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                src="https://i.ibb.co/99NW3X9x/samantha-hentosh-akoc-AO9-QCHM-unsplash.jpg"
                alt="Book collection"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full mx-auto md:h-[80vh] flex flex-col lg:flex-row justify-center gap-8 items-center md:items-start lg:items-center text-white p-5 lg:p-10">
            <motion.div 
              data-aos='fade-right'
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col justify-start items-start space-y-2 max-w-2xl"
            >
              <TypeAnimation
                sequence={[
                  'Make your shelf',
                  500,
                  'Make your shelf uniquely yours...',
                  2000
                ]}
                wrapper="h2"
                speed={30}
                className="text-2xl md:text-5xl font-light leading-tight "
                repeat={Infinity}
              />
              
              <motion.p className="text-md md:text-xl font-light opacity-90">
                Arrange, tag, and style your collection exactly how you like—choose covers, colors, and categories to reflect your personal journey through every story.
              </motion.p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to='/addBook' className="btn btn-lg bg-amber-500 hover:bg-amber-600 border-none text-white shadow-lg group">
                  <FaSearchengin size={20} className="mr-2 group-hover:rotate-6 transition-transform"/>
                  Add Book To The Shelf
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              data-aos='fade-left'
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-full lg:w-1/2 h-64 md:h-[50vh] lg:h-[70vh] relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                src="https://i.ibb.co/GyGGVds/pexels-olenkabohovyk-3646172.jpg"
                alt="Personalized bookshelf"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full mx-auto md:h-[80vh] flex flex-col lg:flex-row justify-center gap-8 items-center md:items-start lg:items-center text-white p-5 lg:p-10">
            <motion.div 
              data-aos='fade-right'
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col justify-start items-start space-y-2 max-w-2xl"
            >
              <TypeAnimation
                sequence={[
                  'With every page turned',
                  500,
                  'With every page turned, a warm cup in hand...',
                  2000
                ]}
                wrapper="h2"
                speed={30}
                className="text-2xl md:text-5xl font-light leading-tight  "
                repeat={Infinity}
              />
              
              <motion.p className="text-md md:text-xl font-light opacity-90">
                Sit back as fragrant steam curls around whispered words, letting each sip and sentence carry you deeper into worlds both familiar and fantastical.
              </motion.p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to='/myBooks' className="btn btn-lg bg-rose-500 hover:bg-rose-600 border-none text-white shadow-lg group">
                  <FaSearchengin size={20} className="mr-2 group-hover:rotate-6 transition-transform"/>
                  Explore Your Books
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              data-aos='fade-left'
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-full lg:w-1/2 h-64 md:h-[50vh] lg:h-[70vh] relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                src="https://i.ibb.co/rRv24k8V/aaron-burden-4e-Ww-Sxa-Dhe4-unsplash.jpg"
                alt="Reading with coffee"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mt-10"></div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !text-white !left-2 md:!left-5 after:!text-xl"></div>
      <div className="swiper-button-next !text-white !right-2 md:!right-5 after:!text-xl"></div>
    </div>
  );
};

export default Slider;
