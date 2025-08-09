


// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from "../../Context/AuthProvider";
// import LoadingSpinner from '../Loading/Loading';
// import SingleShelf from '../SingleBook/SingleShelf';
// import { FaSearch, FaFilter } from 'react-icons/fa';

// const BookShelf = () => {
//     const {user,loading: authLoading}=useContext(AuthContext)
//     const { loading, setLoading } = useContext(AuthContext);
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchWord, setsearchWord] = useState('');
//     const [statusFilter, setStatusFilter] = useState('All');

//     useEffect(() => {
//           if (authLoading || !user) return;;
//         fetch("https://virtual-bookshelf-server-ruddy.vercel.app/books")
//             .then((res) => res.json())
//             .then(data => {
//                 setData(data);
//                 setFilteredData(data);
//             })
//             .finally(() => setLoading(false));
//     }, [setLoading,user,authLoading]);

//    useEffect(() => {
//   if (authLoading || !user) return;

//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("https://virtual-bookshelf-server-ruddy.vercel.app/books");

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setData(data);
//       setFilteredData(data);
//     } catch (error) {
//       console.error("Failed to fetch books:", error);
//       // Optionally, show an error state here
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchBooks();
// }, [setLoading, user, authLoading]);


//     if (loading) return <LoadingSpinner />;

//     return (
//         <div className="bg-[url('https://i.ibb.co/qLydTBzd/peter-rovder-X-5k-MOSx-Lzw-unsplash.jpg')] p-2 lg:p-5 min-h-screen">
//             <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-white font-semibold mt-20 lg:mt-15">
//                 All Books
//             </h3>
            
            
//             <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-6 w-11/12 mx-auto">
              
//                 <div className="relative w-full md:w-1/2 lg:w-1/3">
//                     <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     <input
//                         type="text"
//                         placeholder="Search by title or author..."
//                         className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         value={searchWord}
//                         onChange={(e) => setsearchWord(e.target.value)}
//                     />
//                 </div>
                
                
//                 <div className="relative w-full md:w-auto">
//                     <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     <select
//                         className="appearance-none pl-10 pr-8 py-2 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         value={statusFilter}
//                         onChange={(e) => setStatusFilter(e.target.value)}
//                     >
//                         <option value="All">All </option>
//                         <option value="Read">Read</option>
//                         <option value="Reading">Reading</option>
//                         <option value="Want-to-Read">Want to Read</option>
//                     </select>
//                 </div>
//             </div>
       
//             <p className="text-white text-center mb-4">
//                 Showing {filteredData.length} {filteredData.length === 1 ? 'book' : 'books'}
//             </p>
            
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-5 mt-5 mx-auto pb-10">
//                 {filteredData.length > 0 ? (
//                     filteredData.map(single => <SingleShelf key={single._id} single={single} />)
//                 ) : (
//                     <div className="col-span-full text-center py-10">
//                         <p className="text-white text-xl">No books found matching your criteria</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BookShelf;



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from '../Loading/Loading';
import SingleShelf from '../SingleBook/SingleShelf';
import { FaSearch, FaFilter } from 'react-icons/fa';

const BookShelf = () => {
    const { user, loading: authLoading, setLoading } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchWord, setsearchWord] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    useEffect(() => {
        if (authLoading ) return;

        const fetchBooks = async () => {
            try {
                const res = await fetch("https://virtual-bookshelf-server-ruddy.vercel.app/books");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const books = await res.json();
                setData(books);
                setFilteredData(books);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [setLoading, user, authLoading]);

    // 🔍 Search & Filter Logic
    useEffect(() => {
        let updated = [...data];

        if (searchWord.trim()) {
            const lowerSearch = searchWord.toLowerCase();
            updated = updated.filter(book =>
                book.book_title?.toLowerCase().includes(lowerSearch) ||
                book.book_author?.toLowerCase().includes(lowerSearch)
            );
        }

        if (statusFilter !== "All") {
            updated = updated.filter(book =>
                book.reading_status?.toLowerCase() === statusFilter.toLowerCase()
            );
        }

        setFilteredData(updated);
    }, [searchWord, statusFilter, data]);

    if (authLoading) return <LoadingSpinner />;

    return (
        <div className="bg-[url('https://i.ibb.co/qLydTBzd/peter-rovder-X-5k-MOSx-Lzw-unsplash.jpg')] p-2 lg:p-5 min-h-screen">
            <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-white font-semibold mt-20 lg:mt-15">
                All Books
            </h3>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-6 w-11/12 mx-auto">
                <div className="relative w-full md:w-1/2 lg:w-1/3">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by title or author..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchWord}
                        onChange={(e) => setsearchWord(e.target.value)}
                    />
                </div>

                <div className="relative w-full md:w-auto">
                    <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                        className="appearance-none pl-10 pr-8 py-2 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Read">Read</option>
                        <option value="Reading">Reading</option>
                        <option value="Want-to-Read">Want to Read</option>
                    </select>
                </div>
            </div>

            <p className="text-white text-center mb-4">
                Showing {filteredData.length} {filteredData.length === 1 ? 'book' : 'books'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-5 mt-5 mx-auto pb-10">
                {filteredData.length > 0 ? (
                    filteredData.map(single => <SingleShelf key={single._id} single={single} />)
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-white text-xl">No books found matching your criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookShelf;
