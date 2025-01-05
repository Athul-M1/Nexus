import React, { useEffect, useState } from 'react';
import froza1 from '../assets/froza1.jpg';
import bmw from '../assets/bmw.jpg';
import valorant from '../assets/valorant.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { getAllGamesHome } from '../Services/allAPI';
import { baseUrl } from '../Services/baseURL';

const Home = () => {
  const [searchKey,setSearchKey]=useState('')
  const [games, setGames] = useState([])
  const getgames = async () => {
    const response = await getAllGamesHome(searchKey)
    setGames(response.data.products)
  }
  useEffect(() => {
    getgames()
  }, [searchKey])
  // console.log(games)
  return (
    <div className='full-body bg-dark text-light'>
      {/* Search Bar */}
      <div className='container py-3'>
        <form className="d-flex justify-content-center" role="search">
          <input
            className="form-control me-2 w-75 w-md-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>setSearchKey(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide container-fluid rounded-4 mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={froza1} className="d-block w-100" alt="froza horizon" />
          </div>
          <div className="carousel-item">
            <img src={bmw} className="d-block w-100" alt="bmw" />
          </div>
          <div className="carousel-item">
            <img src={valorant} className="d-block w-100" alt="valorant" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     {/* Cards Section */}
<div
  className="container"
  style={{
    maxHeight: '100vh', // Adjusts height relative to viewport
    overflowY: 'scroll',
  }}
>
  <div className="row g-3">
    {games?.map((item, index) => (
      <div className="col-12 col-md-6 col-lg-4" key={index}>
        <div className="card">
          <img
            src={`${baseUrl}/uploads/${item?.gameImage}`}
            className="card-img-top"
            alt={item.gameName || 'Game Image'}
          />
          <div className="card-body bg-dark text-light">
            <h5 className="card-title">{item.gameName}</h5>
            <p className="card-text">{item.description.slice(0, 36)}</p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Home;
