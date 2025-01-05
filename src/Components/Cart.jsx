import React, { useEffect, useState } from 'react';
import './Cart.css';
import bgmi from '../assets/bgmi.jpg'
import { getFromCart, removeFromCart } from '../Services/allAPI';
import { baseUrl } from '../Services/baseURL';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [games,setGames]= useState([])
    const getData = async()=>{
        const token = sessionStorage.getItem('token')
        const user = sessionStorage.getItem('user')
        const userId = JSON.parse(user)?._id
        // console.log(userId)
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        } 
        const response = await getFromCart(userId,reqHeader)
        setGames(response.data.products)
        console.log(response)
    }
    const handleDelete = async(id)=>{
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        } 
        const response = await removeFromCart(id,reqHeader)
        getData()
    }
    useEffect(()=>{
        getData()
    },[])
    return (
      <div>
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Cart Items Table */}
          <div className="col-lg-9 col-md-8 col-12 mb-4">
            <div className="row g-4">
              {
                games?.map((game) => (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={game._id}>
                    <div className="card shadow-sm h-100">
                      <img 
                        src={`${baseUrl}/uploads/${game.productId?.gameImage || 'placeholder-image.jpg'}`} 
                        className="card-img-top" 
                        alt="Game" 
                        onError={(e) => e.target.src = 'placeholder-image.jpg'}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-primary">{game.productId?.gameName || 'Unknown Game'}</h5>
                        <p className="card-text text-muted">Genre: {game.productId?.gameGenre || 'N/A'}</p>
                        <p className="card-text">Price: {game.productId?.gamePrice || '0'}</p>
                        <p className="card-text">{game.productId?.description || 'No description available.'}</p>
                        <div className="mt-auto">
                          <Link to={`/order/${game._id}`} className="text-decoration-none">
                            <button className="btn btn-primary me-3">Buy Now</button>
                          </Link>
                          <button className="btn btn-danger" onClick={() => handleDelete(game._id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                !games?.length && (
                  <div className="col-12 text-center">
                    <p className="text-muted">No games available in your cart.</p>
                  </div>
                )
              }
            </div>
          </div>  
          {/* Cart Summary */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-center text-primary">Cart Summary</h3>
                <div className="mt-4">
                  <h5>Total Products: <span>{games?.length || 0}</span></h5>
                  <h5>Total Price: <span>{games?.reduce((total, game) => total + (game.productId?.gamePrice || 0), 0)}</span></h5>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-success w-75 mt-4 fw-bold">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
};
export default Cart;
