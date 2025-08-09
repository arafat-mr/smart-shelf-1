import React from 'react';
import Slider from '../../Slider/SLider';
import PopularBooks from '../PopularBooks/PopularBooks';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import Counter from '../Counter/Counter';
   import PeopleThoughts from '../PeoplesThought/PeopleThoughts';
const Home = () => {
 

    return (
        <div  className='mt-11 lg:min-h-screen'>
           <Slider/>
           <PopularBooks />
           <FeaturedBooks/>
           <PeopleThoughts/>
           <Counter/>
        </div>
    );
};

export default Home;