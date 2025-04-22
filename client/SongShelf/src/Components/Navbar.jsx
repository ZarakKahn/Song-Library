import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick= () => {
        navigate('/loginpage');
    };   
    return (
        <div className='flex flex-wrap items-center justify-between font-semibold text-gray-700 h-20 w-full bg-black p-4'>
            <div className='flex items-center'>
                <Link to='/'>
                    <img className='ms-2 w-14 h-14' src="/Audio.svg" alt="logo" />
                </Link>
                <p className='ms-2 font-bold text-xl text-[#16ade1]'>
                    Mp3 Bee
                </p>
            </div>
            <div className='flex flex-grow justify-end'>
                <input
                    type="Search"
                    placeholder='Search Music Here'
                    className='hidden md:block me-5 p-1 border-2 border-[#16ade1] rounded w-36 md:w-64 lg:w-80'
                />
                <button
                onClick={handleClick}
                    className='me-5 font-bold text-lg text-[#16ade1] hover:text-white hidden xs:block'
                >
                    Login
                </button>
                <button
                    className='md:hidden text-[#16ade1] hover:text-white'
                    aria-label='Search'
                >
                </button>
                <button
                    className='md:hidden text-[#16ade1] hover:text-white'
                    aria-label='Login'
                >
                </button>
            </div>
        </div>
    );
}

export default Navbar;
