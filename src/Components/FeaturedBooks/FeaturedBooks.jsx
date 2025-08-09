import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const FeaturedBooks = () => {
    const { user, loading: authLoading } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (authLoading) return;

    const fetchBooks = async () => {
      try {
        const response = await fetch('https://virtual-bookshelf-server-ruddy.vercel.app/books');
        const data = await response.json();
        setBooks(data);

        const uniqueCategories = [];
        data.forEach(book => {
          if (!uniqueCategories.includes(book.book_category)) {
            uniqueCategories.push(book.book_category);
          }
        });

        setCategories(uniqueCategories.slice(0, 3));
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [authLoading, user]);

  
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const hoverEffect = {
        hover: {
            y: -10,
            scale: 1.1,
            rotate:-360,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };

    
    const categoryImages = {
        'Fantasy': "https://i.ibb.co/BK7J9sKp/christopher-stites-K8-K43-Gnv-N48-unsplash.jpg",
        'Fiction': "https://i.ibb.co/d4zmk2QR/seema-miah-l16-Lr9-Df-Uj-E-unsplash.jpg",
        'Non-Fiction': "https://i.ibb.co/KcYnZT2m/iraj-ishtiak-s1-JEQYy-Ffh-M-unsplash.jpg",
        'default': "https://i.ibb.co/23RXHWM8/kelly-sikkema-VBPz-Rgd7gfc-unsplash.jpg"
    };

    return (
        <motion.div 
            className="text-center bg-gradient-to-b from-indigo-50 to-purple-50 py-12 px-4"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <motion.h2 
                className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                variants={item}
            >
                Featured Categories
            </motion.h2>
            <motion.p 
                className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                variants={item}
            >
                Explore our most popular book collections
            </motion.p>

            {loading ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            ) : (
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
                    variants={container}
                    
                    
                     
                >
                    {categories.map((category, index) => {
                        const categoryBooks = books.filter(book => book.book_category === category);
                        const bookCount = categoryBooks.length;
                        
                        return (
                            <motion.div
                                key={category}
                                className="flex flex-col items-center"
                                variants={item}
                                whileHover="hover"
                                 whileTap={{ scale: 0.95 }}
                                
                               
                            >
                                <motion.div
                                    className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg"
                                    variants={hoverEffect}
                                    // animate={{ rotate: 360 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                    <img 
                                        className="w-full h-full object-cover"
                                        src={categoryImages[category] || categoryImages.default}
                                        alt={category}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-left">
                                        <motion.h3 
                                            className="text-3xl font-bold text-white"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0  }}
                                            transition={{ delay: 0.2 }}
                                             whileTap={{ scale: 0.95 }}
                                               
                                        >
                                            {category}
                                        </motion.h3>
                                        <motion.p 
                                            className="text-white flex items-center gap-1"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                             whileTap={{ scale: 0.95 }}
                                        >
                                            <FaBookOpen className="inline" /> {bookCount} books
                                        </motion.p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="mt-4 flex items-center gap-2 text-indigo-600 font-medium"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                   
                                  
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}
        </motion.div>
    );
};

export default FeaturedBooks;