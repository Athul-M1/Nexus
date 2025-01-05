import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open for PC

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-toggle btn btn-primary" onClick={toggleSidebar}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h5 className="sidebar-title text-center">Navigation</h5>
        <ul className="sidebar-links">
          <Link to={'/admin/users'}>
            <li><button className='btn btn-outline-dark w-100'>Users Management</button></li>
          </Link>
          <Link to={'/admin/games'}>
            <li><button className='btn btn-outline-dark w-100'>Games Management</button></li>
          </Link>
          <Link to={'/admin/downloads'}>
            <li><button className='btn btn-outline-dark w-100'>Downloads</button></li>
          </Link>
          <Link to={'/admin/reviews'}>
            <li><button className='btn btn-outline-dark w-100'>Products</button></li>
          </Link>
          <Link to={'/admin/earnings'}>
            <li><button className='btn btn-outline-dark w-100'>Total Earnings</button></li>
          </Link>    
         </ul>
      </aside>
    </>
  );
};

export default Sidebar;