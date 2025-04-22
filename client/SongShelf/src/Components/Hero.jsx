import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [musicFiles, setMusicFiles] = useState([]);

  useEffect(() => {
    const getMusic = async () => {
      try {
        const res = await axios.get('https://mp3bee.vercel.app/api/music');
        setMusicFiles(res.data);
      } catch (error) {
        console.error('Error fetching music files:', error);
      }
    };

    getMusic();
  }, []);

  return (
    <div className='relative'>
      <div className=''>
        <img src="pexels.jpg" alt="Hero Image" className='h-[600px] w-full md:h-screen md:w-screen ' />
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30'>
        <h1 className='text-4xl font-bold mb-4 text-white'>TRACKS</h1>
        <div className='w-full max-h-full overflow-y-auto'>
          <table className='w-full bg-black bg-opacity-5 rounded-md'>
            <thead>
              <tr>
                <th className='py-2 px-4 text-white'>Singer</th>
                <th className='py-2 px-4 text-white'>Song</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {musicFiles.map(file => (
                <tr key={file.id} className='bg-black bg-opacity-5'>
                  <td className='py-2 px-4 text-white'>{file.singer}</td>
                  <td className='py-2 px-4 text-gray-300'>{file.song}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
