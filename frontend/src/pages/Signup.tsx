import React from 'react';
import Navbar from '../components/Navbar';
import SignupHead from '../components/SignupHead';
import InputBox from '../components/InputBox';
import SignupFooter from '../components/SignupFooter';
import Button from '../components/Button';

// Import icons from FontAwesome
import { faUser, faPhone, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const handleSignup = () => {
    alert('Sign Up button clicked!');
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex justify-center items-center p-8 h-full w-full'>
        {/* Left side text */}
        <div className='flex justify-center items-center flex-col text-left w-1/2 h-full pr-12 mr-10'>
          <p>Lorem Ipsum is simply dummy text of the printing and</p>
          <p>typesetting industry. Lorem Ipsum has been</p>
          <p>the industry's standard printer took a galley</p>
          <p>dummy text ever since the 1500s, when an unknown</p>
        </div>

        {/* Right side form */}
        <div className='flex flex-col w-1/2 max-w-md p-3 border border-black rounded-lg'>
          <SignupHead />
          <InputBox placeholder="Name" icon={faUser} /> {/* User Icon */}
          <InputBox placeholder="Phone Number" type="tel" icon={faPhone} /> {/* Phone Icon */}
          <InputBox placeholder="Company Name" icon={faBuilding} /> {/* Building Icon */}
          <InputBox placeholder="Company Email" type="email" icon={faEnvelope} /> {/* Envelope Icon */}
          <SignupFooter />
          <Button name="Sign Up" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
