import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { login } from '../Services/allAPI';
import { loginContext } from '../Context/Contextlogin';

const Login = () => {
    const {setLoginResponse} = useContext(loginContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async(e)=>{
        e.preventDefault()
        const {email,password} = user
        if (!email || !password) {
            alert("Please enter the email or password")
          }
        else{
            const response = await login(user)
            console.log(response)
            if(response.status==200){
                setLoginResponse(response)
                sessionStorage.setItem('user',JSON.stringify(response.data.existingUser))
                sessionStorage.setItem('token',response.data.token)
                alert("Login sucessful")
                if(response.data.existingUser.role == 1){
                    navigate('/admin/users')
                }else{
                    navigate('/home')
                }
            }
            else if(response.status==404){
                    alert(response.response.data.message)
            }
            else {
                alert("Server error")
                console.log(response)
              }
        }
    }
    return (
        <div className='w-100 d-flex align-items-center justify-content-center bg-dark' style={{ height: '90vh' }}>
            <div className="box w-25">
                <h1 className='text-center text-light mb-3'>Welcome Back</h1>
                <label htmlFor="" className='text-light ms-2'>Email</label>
                <input type="email" className='form-control mt-2 bg-dark text-white border-light ' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <label htmlFor="password" className='text-light mt-3 ms-2' >password</label>
                <input type="password" className='form-control mt-2  bg-dark text-white border-light' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <div className='w-100 d-flex justify-content-center'>
                    <input type="button" className='btn btn-info w-50 mt-5 ' value="Login"  onClick={(e)=>handleLogin(e)} />
                </div>
                <p className='text-light text-center mt-3'>New user? <Link to={'/signup'}>sign up</Link></p>
                <p className='text-light text-center mt-3'>forgot password ? <Link to={'/forgotpassword'}>click here</Link></p>

                <div className='d-flex justify-content-center mt-3'>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log(decoded)
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </div>
            </div>
        </div>
    )
}

export default Login