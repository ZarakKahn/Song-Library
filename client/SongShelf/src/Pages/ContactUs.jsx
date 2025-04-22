import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})

    const handleChange = (e) => {
        const [id, value] = e.target;
        setFormData((prevData) => ({...prevData, [id]: value}))
    }
    return (
        <div className='flex items-center justify-center h-auto bg-gray-100 p-6'>
            <div className='bg-white p-8 md:mb-28 md:mt-10 rounded-md shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-gray-800'>Contact Us</h2>
                <form onClick={handleChange}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='name'
                            type='text'
                            placeholder='Your name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='Your email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                            Message
                        </label>
                        <textarea
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='message'
                            placeholder='Your message'
                            rows='4'
                        ></textarea>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className='bg-[#16ade1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
