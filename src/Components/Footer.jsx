import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
{/* Footer */}
<footer className="text-center text-lg-start bg-dark text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span className='text-light'>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f text-light" />
      </a>
      <a href className="me-4 text-reset ">
        <i className="fab fa-twitter text-light" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google text-light" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram text-light" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin text-light" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github text-light" />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-light" />NEXUS
          </h6>
          <p className='text-light'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-light">
            Category
          </h6>
          <p className='text-light'>
            <a href="#!" className="text-reset ">Puzzles</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset ">Adventure</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset ">Battle Royale</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset ">Sports</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-light">
            resources
          </h6>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Pricing</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Settings</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Orders</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Help</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold  text-light mb-4">Contact</h6>
          <p className='text-light'><i className="fas fa-home me-3 "  /> New York, NY 10012, US</p>
         <Link to={'/contact'}>
            <p className='text-light'>
              <i className="fas fa-envelope me-3 " />
                  nexus@gmail.com
            </p>
         </Link>
          <p className='text-light'><i className="fas fa-phone me-3 " /> + 01 234 567 88</p>
          <p className='text-light'><i className="fas fa-print me-3 " /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold text-light"  href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}
    </div>
  )
}

export default Footer