import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import VerifyOTP from './pages/VerifyOtp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <Signup/> */}
      <VerifyOTP/>
     </div>
    </>
  )
}

export default App
