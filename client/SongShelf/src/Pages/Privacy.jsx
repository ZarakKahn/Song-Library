import React from 'react';

const Privacy = () => {
  return (
    <div className='flex flex-col items-center justify-center h-auto bg-gray-100 p-6'>
      <div className='bg-white p-8 rounded-md shadow-md w-full max-w-4xl'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800 text-center'>Privacy Policy</h2>
        <p className='text-gray-700 mb-4'>
          Welcome to Mp3 Bee's Privacy Policy. Your privacy is critically important to us. Mp3 Bee is located at:
        </p>
        <p className='text-gray-700 mb-4'>
          Mp3 Bee <br />
          123 Music Street <br />
          Lahore, Punjab <br />
          Pakistan
        </p>
        <p className='text-gray-700 mb-4'>
          It is Mp3 Bee's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to our website (hereinafter, "us", "we", or "Mp3 Bee"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
        </p>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Information We Collect</h3>
        <p className='text-gray-700 mb-4'>
          We only collect information about you if we have a reason to do so – for example, to provide our Services, to communicate with you, or to make our Services better.
        </p>
        <ul className='list-disc list-inside text-gray-700 mb-4'>
          <li>Information you provide to us.</li>
          <li>Information we get from third parties.</li>
          <li>Information automatically collected.</li>
        </ul>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>How We Use Information</h3>
        <p className='text-gray-700 mb-4'>
          We use the information we collect in various ways, including to:
        </p>
        <ul className='list-disc list-inside text-gray-700 mb-4'>
          <li>Provide, operate, and maintain our website.</li>
          <li>Improve, personalize, and expand our website.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>Communicate with you, either directly or through one of our partners.</li>
        </ul>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Contact Us</h3>
        <p className='text-gray-700 mb-4'>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className='text-gray-700'>
          Email: support@mp3bee.com <br />
          Phone: +92 123 456 7890
        </p>
      </div>
    </div>
  );
};

export default Privacy;
