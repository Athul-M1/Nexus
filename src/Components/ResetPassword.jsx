import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../Services/allAPI'

const ResetPassword = () => {

  const { token } = useParams()
  const [message, setMessage] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate('')
  useEffect(() => {
    const decodedToken = jwtDecode(token)
    // console.log(decodedToken)
    const currentTime = Date.now() / 1000
    if (currentTime > decodedToken.exp) {
      setMessage("Link Expired")
      setTimeout(() => {
        navigate('/forgotpassword')
      }, 3000)
    }
  }, [token])
  const handleResetPassword = async () => {
    if (password != confirmPassword) {
      alert("Please enter the correct password")
    } else {
      const reqBody = {
        token, password
      }
      
      const response = await resetPassword(reqBody)
      console.log(response)
      if(response.status == 200){
        alert("Your password has been updated")
        navigate('/login')
      }
      else{
        alert("Something went wrong")
      }
    }  
  }
  
  return (

    <div>
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <div className="col-11 col-md-6 col-lg-4 p-4 bg-white shadow rounded">
          <h3 className="text-center mb-4">Change Password</h3>
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            type="password"
            id="newPassword"
            className="form-control mb-3"
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control mb-4"
            placeholder="Re-enter new password"
            onChange={(e) => { setConfirmPassword(e.target.value) }}
          />
          <button className="btn btn-success w-100" onClick={handleResetPassword}>Update Password</button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword