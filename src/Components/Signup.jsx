import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { googleSignIn, register, resendOtp, verifyOtp } from '../Services/allAPI';
import { GoogleLogin } from '@react-oauth/google';
import { loginContext } from '../Context/Contextlogin';

const Signup = () => {
      const {setLoginResponse} = useContext(loginContext)
  const [step, setstep] = useState(Number(sessionStorage.getItem('step')) || 1);
  const [otp, setotp] = useState('');
  const navigate = useNavigate();
  const [user, setuser] = useState({
    username: '',
    email: sessionStorage.getItem('email') || '',
    password: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = user;

  useEffect(() => {
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('step', step);
  }, [user.email, step]);

  const validateForm = () => {
    let errors = {};

    // Username validation
    if (!username.trim()) {
      errors.username = 'Username is required';
    } else if (!/^[A-Za-z\s\.]+$/.test(username)) {
      errors.username = 'Username can only contain letters, spaces, and periods';
    }

    // Email validation
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Password validation
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await register(user);
    if (response.status === 201) {
      setstep(2);
    } else if (response.status === 409) {
      alert(response.response.data.message);
    } else {
      alert('Server error');
      console.log(response);
    }
  };
  const handleVerification = async () => {
    const reqBody = { email, otp };
    const response = await verifyOtp(reqBody);
    if (response.status === 200) {
      alert('Registration successful');
      navigate('/login');
    } else if (response.status === 400) {
      alert('Invalid OTP');
    } else if (response.status === 410) {
      alert('OTP Expired');
    } else {
      alert('Server Error');
    }
  };

  const handleResend = async () => {
    const reqBody = { email };
    const response = await resendOtp(reqBody);
  };
//google sign in 
  const siginWithGoogle = async (token) => {
    const reqBody = { googleToken: token };
    const response = await googleSignIn(reqBody);

    if (response.status === 200) {
      setLoginResponse(response)
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      sessionStorage.setItem('token', response.data.token);
      navigate('/home');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <>
      {step === 1 ? (
        <div className="w-100 d-flex align-items-center justify-content-center bg-dark" style={{ height: '90vh' }}>
          <div className="box w-25">
            <h1 className="text-center text-light mb-3">Sign up</h1>
            <label htmlFor="" className="text-light ms-2 mt-3">Username</label>
            <input
              type="text"
              className={`form-control mt-2 bg-dark text-white border-light ${validationErrors.username ? 'is-invalid' : ''}`}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
            />
            <div className="invalid-feedback">{validationErrors.username}</div>

            <label htmlFor="" className="text-light ms-2 mt-3">Email</label>
            <input
              type="email"
              className={`form-control mt-2 bg-dark text-white border-light ${validationErrors.email ? 'is-invalid' : ''}`}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
            <div className="invalid-feedback">{validationErrors.email}</div>

            <label htmlFor="password" className="text-light mt-3 ms-2">Password</label>
            <input
              type="password"
              className={`form-control mt-2 bg-dark text-white border-light ${validationErrors.password ? 'is-invalid' : ''}`}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
            <div className="invalid-feedback">{validationErrors.password}</div>

            <div className="w-100 d-flex justify-content-center">
              <input type="button" className="btn btn-info w-50 mt-5" value="Create Account" onClick={(e) => handleClick(e)} />
            </div>

            <p className="text-light text-center mt-3">Have an account? <Link to={'/login'}>Login</Link></p>

            <div className="d-flex justify-content-center mt-3">
              <GoogleLogin
                onSuccess={(credentialResponse) => siginWithGoogle(credentialResponse.credential)}
                onError={() => console.log('Login Failed')}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container d-flex flex-column align-items-center justify-content-center w-50" style={{ minHeight: '40vh' }}>
          <h1 className="text-center mt-5">ENTER OTP</h1>
          <input
            type="text"
            className="form-control mb-3 w-100 w-md-75 w-lg-50"
            placeholder="Enter code"
            onChange={(e) => setotp(e.target.value)}
          />
          <button className="btn btn-primary w-25 w-md-50 mb-3" onClick={handleVerification}>Verify</button>
          <button className="btn btn-primary w-25 w-md-50 mb-3" onClick={handleResend}>Resend</button>
        </div>
      )}
    </>
  );
};

export default Signup;
