import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='flex items-center justify-center h-auto bg-gray-100 p-6'>
            <div className='bg-white p-8 md:mb-28 md:mt-10 rounded-md shadow-md max-w-4xl'>
                <h2 className='text-3xl font-bold mb-6 text-gray-800 text-center'>About Us</h2>
                <p className='text-gray-700 mb-4'>
                    Welcome to Mp3 Bee! We are a dedicated team of music enthusiasts committed to providing you with the best music experience. Our platform offers a vast collection of music across different genres, ensuring there is something for everyone.
                </p>
                <p className='text-gray-700 mb-4'>
                    Our mission is to bring music lovers together and create a community where everyone can discover, share, and enjoy music. Whether you're looking for the latest hits, classic tracks, or hidden gems, Mp3 Bee has got you covered.
                </p>
                <p className='text-gray-700 mb-4'>
                    We believe in the power of music to inspire, uplift, and bring people together. That's why we're constantly updating our library to include the latest releases and timeless favorites. Our user-friendly interface makes it easy to explore and find the music you love.
                </p>
                <p className='text-gray-700 mb-4'>
                    Thank you for choosing Mp3 Bee as your go-to music source. We hope you enjoy your time here and find the perfect soundtrack for every moment.
                </p>
                <div className='flex justify-center mt-6'>
                    <Link to='/contact'>
                        <button className='bg-[#16ade1] text-white font-bold py-2 px-4 rounded hover:bg-[#139ac4] focus:outline-none focus:shadow-outline'>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
