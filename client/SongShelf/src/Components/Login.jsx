import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }
    ));
  };
  const handleLogin = async (e) => {
    try {
      const res = await axios.post(`http://localhost:8001/api/login`, {
        email: formData.email,
        password: formData.password
      });
      alert(res.data);
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  }
  return (
    <div className='flex items-center justify-center h-auto bg-gray-100 p-6'>
      <div className='bg-white p-8 xs:my-20 md:mb-56 md:mt-20 rounded-md shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800 text-center'>Login</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='Enter Email'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Enter Password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-[#16ade1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#139ac4]'
              type='submit'
            >
              Login
            </button>
            <Link className='inline-block align-baseline font-bold text-sm text-[#16ade1] hover:text-[#139ac4]' to='#'>
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
