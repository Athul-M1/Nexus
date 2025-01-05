import React, { useState } from 'react'
import { forgotPassword } from '../Services/allAPI'

const ForgotPassword = () => {
const [email,setEmail] = useState('')
const handleSubmit = async()=>{
  const reqBody = {email}
  const response = await forgotPassword(reqBody)
  // console.log(response);
  if(response.status==200){
    alert("Link to reset the password has sent to your email ")
  }
  else{
    alert("Something went wrong please ty again")
  }
}
  // console.log(email)
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
  <div className="col-11 col-md-6 col-lg-4 p-4 bg-white shadow rounded">
    <h3 className="text-center mb-4">Forgot Password</h3>
    <label htmlFor="email" className="form-label">Email Address</label>
    <input 
      type="email" 
      id="email" 
      className="form-control mb-3" 
      placeholder="Enter your email"
      onChange={(e)=>setEmail(e.target.value)}
    />
    <button className="btn btn-primary w-100" onClick={handleSubmit}>Reset Password</button>
  </div>
</div>
    </div>
  )
}

export default ForgotPassword