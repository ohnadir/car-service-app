import React from 'react';
import useServices from '../Hooks/useServices';
import Slider from '../Slider/Slider';
import Experts from '../Experts/Experts'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <h1 className='text-center mt-8 text-2xl font-bold'>Services</h1>
                <Services></Services>
            </div>
            <div>
                <h2 className='text-center mt-8 text-2xl font-bold'>Experts</h2>
                <Experts></Experts>
            </div>
        </div>
    );
};

export default Home;