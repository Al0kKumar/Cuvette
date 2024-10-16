import React from 'react';
import Navbar from '../components/Navbar';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function VerifyOTP() {
  const handleVerify = () => {
    alert('OTP Verified!');
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex justify-center items-center h-full w-full p-8'>
        
        {/* Left side text (Lorem Ipsum with 15 words) */}
        <div className='flex justify-center items-center flex-col text-left w-1/2 h-full pr-12 -mr-6'>
          <p>
            Lorem Ipsum is simply dummy text used in the printing industry for 
            typesetting and page layout.
          </p>
        </div>

        {/* Right side form */}
        <div className='flex flex-col w-1/2 max-w-md p-6 border border-black rounded-lg justify-center items-center'>
          <h1 className='text-3xl mb-6'>Signup</h1> {/* Signup heading */}
          <h2 className='text-xl text-center mb-6'>Verify Email</h2> {/* Form title */}
          <InputBox placeholder="Enter OTP" icon={faEnvelope} type="text" /> {/* OTP Input */}
          <Button name="Verify" onClick={handleVerify} /> {/* Verify Button */}
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
