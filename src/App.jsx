import './App.css'
import Otp from './components/Otp'
function App() {
  return(
    <div className="main-div">
      <h1 className="">OTP verification</h1>
      <Otp number={5}/>
    </div>
  )
  
}

export default App
