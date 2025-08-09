
import React from 'react';
import { FaStar } from 'react-icons/fa';

const PeopleThoughts = () => {
  return (
    <div>
      <div className="review mt-8">
        <h3 className="text-lg md:text-3xl bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent text-center mb-8 font-semibold">
          What Readers Say About Our Bookshelf
        </h3>
        <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1 */}
          <div
            data-aos="flip-down"
            className="card bg-secondary shadow-md rounded-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
                <img
                  src="https://i.ibb.co/xtkKZpJ3/images-q-tbn-ANd9-Gc-SD-MILXn5-t-MGu-L53z-C9yiswl3-Wt-Rw-E-ko-Q-s.jpg"
                  alt="Jhankar Mahbub"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-white text-center font-medium mb-4">
              This bookshelf website offers an incredible collection with a clean interface. I found rare gems and classics all in one place.
            </p>
            <p className="text-white text-center font-bold">- Jhankar Mahbub</p>
            <p className="text-white text-center text-sm font-semibold mb-3">
              Author & Educator
            </p>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="flip-right"
            className="card bg-secondary shadow-md rounded-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
                <img
                  src="https://i.ibb.co/Y7NTzRkD/Whats-App-Image-2025-05-23-at-06-06-15-8c36778c.jpg"
                  alt="Shafayat Mohammad"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-white text-center font-medium mb-4">
              The personalized book recommendations helped me discover new favorite authors easily. Highly recommend this platform!
            </p>
            <p className="text-white text-center font-bold">- Shafayat Mohammad</p>
            <p className="text-white text-center text-sm font-semibold mb-3">
              Book Reviewer & Blogger
            </p>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-white" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            data-aos="flip-left"
            className="card bg-secondary shadow-md rounded-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
                <img
                  src="https://i.ibb.co/rfXqWJRP/mypic2.jpg"
                  alt="Shifat Mahmud"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-white text-center font-medium mb-4">
              The site’s user-friendly interface made it simple to manage my reading list and track my progress effortlessly.
            </p>
            <p className="text-white text-center font-bold">- Shifat Mahmud</p>
            <p className="text-white text-center text-sm font-semibold mb-3">
              Frontend Developer & Avid Reader
            </p>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-white" />
            </div>
          </div>

          {/* Card 4 */}
          <div
            data-aos="flip-up"
            className="card bg-secondary shadow-md rounded-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
                <img
                  src="https://i.ibb.co/235nzTL5/Whats-App-Image-2025-05-23-at-05-52-23-2fefe4f3.jpg"
                  alt="Mohammad Naeem"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-white text-center font-medium mb-4">
              A fantastic resource for book lovers! The community and variety of books keep me coming back every day.
            </p>
            <p className="text-white text-center font-bold">- Mohammad Naeem</p>
            <p className="text-white text-center text-sm font-semibold mb-3">
              Senior Instructor & Book Enthusiast
            </p>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleThoughts;
