import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'
import { Link } from 'react-router-dom';
import userimg from '../assets/user.png'
import { loginContext } from '../Context/Contextlogin';

const Navbar = () => {
    const { loginResopnse } = useContext(loginContext)
    const [token, setToken] = useState('')
    const [user, setUser] = useState([])
    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
        const userDetails = sessionStorage.getItem('user')
        setUser(JSON.parse(userDetails))
    }, [loginResopnse])
    return (
        <div>
            <nav className=" navbar navbar-expand-lg bg-dark  ">
                <div className="container-fluid d-flex align-items-center justify-content-between " >
                    <Link to={'/'} className="navbar-brand text-light" >NEXUS</Link>
                    <button className="navbar-toggler" type="button" style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link to="/" className="nav-link active text-light" aria-current="page">
                                    Home
                                </Link>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Discover
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to={''} style={{ textDecoration: "none" }}>
                                        <li><a className="dropdown-item" aria-disabled >Select Genre</a></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <Link to={'/puzzle'}><li><a className="dropdown-item" href="#">Puzzle</a></li></Link>
                                        <Link to={'/action'}><li><a className="dropdown-item" href="#">Action</a></li></Link>
                                        <Link to={'/racing'}><li><a className="dropdown-item" href="#">Racing</a></li></Link>
                                        <Link to={'/story'}><li><a className="dropdown-item" href="#">story</a></li></Link>
                                    </Link>

                                </ul>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-evenly '>
                            {token &&
                                <>
                                    <Link to={'/cart'}>
                                        <button className='btn btn-outline-dark rounded-pill'> <i className="fa-solid fa-cart-shopping me-1"></i>Cart <span>3</span></button>
                                    </Link>
                                    <Link to={'/wishlist'}>
                                        <button className='btn btn-outline-dark ms-2 rounded-pill'><i className="fa-solid fa-heart"></i> Wishlist <span>4</span></button>
                                    </Link>
                                    <Link to={'/all-orders'}><button className='btn btn-outline-dark ms-2 rounded-pill'>All orders</button></Link>
                                    <Link to={'/profile'}>
                                        <img src={userimg} style={{ height: "30px", width: "30px", marginRight: "20px", filter: "invert(100%) brightness(100%) " }} className="mt-1 " alt="" />
                                    </Link>
                                </>}
                            {
                                !token &&
                                    <Link to={'/login'}>
                                        <button className='btn btn-outline-dark ms-2 rounded-pill'>Login</button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



// 