import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaSquareInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='flex flex-wrap justify-between items-center bg-black sm:h-auto md:h-28 py-4 px-8 bottom-0 w-full'>
            <div className='w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left text-[#a2e8ff]'>
                <p className='font-light text-lg text-[#16ade1]'>All Rights Reserved to Mp3 Bee</p>
            </div>
            <div className='w-full sm:w-auto mb-4 sm:mb-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left text-[#16ade1]'>
                <Link to='/' className='hover:text-white'>Home</Link>
                <Link to='/about' className='hover:text-white'>About Us</Link>
                <Link to='/contact' className='hover:text-white'>Contact</Link>
                <Link to='/privacy' className='hover:text-white'>Privacy Policy</Link>
            </div>
            <div className='w-full sm:w-auto flex justify-center sm:justify-start space-x-4 text-[#16ade1]'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook className='size-8 hover:text-white' /> </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <FaSquareInstagram className='size-8 hover:text-white' /> </a>
                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                    <FaSquareXTwitter className='size-8 hover:text-white' /> </a>
                <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                    <FaYoutube className='size-8 hover:text-white' /> </a>
            </div>
        </div>
    );
}

export default Footer;
