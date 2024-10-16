import React from 'react';

function SignupFooter() {
  return (
    <div className='flex flex-col justify-center items-center p-3'> {/* Use flex-col and center alignment */}
      <div className='text-sm text-center'> {/* Ensure text is centered */}
        by clicking on proceed you will accept our
      </div>
      <div className='text-sm text-center mt-1'> {/* Small margin on top for spacing */}
        terms and conditions
      </div>
    </div>
  );
}

export default SignupFooter;
