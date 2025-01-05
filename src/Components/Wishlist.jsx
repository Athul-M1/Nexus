import React, { useEffect, useState } from 'react'
import './Wishlist.css'
import wishlistimage from '../assets/cartimg.jpg'
import { getFromWishlist } from '../Services/allAPI'

const Wishlist = () => {
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
        const response = await getFromWishlist(userId,reqHeader)
        console.log(response.data)
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            <div className="wishlist-container mt-5 ">
                <h1 className="wishlist-title">My Wishlist</h1>
                <div className="wishlist-item">
                    <img
                        src={wishlistimage}
                        alt="FROZA Horizon Adventures"
                        className="wishlist-item-image"
                    />
                    <div className="wishlist-item-details">
                        <h2>FROZA Horizon Adventures™</h2>
                        <p className="wishlist-item-type">Base Game</p>
                        <p className="wishlist-item-price">₹3,999</p>
                        <p className="wishlist-item-rewards">Earn 5% back in Epic Rewards</p>
                        <button className="wishlist-add-to-cart">Add To Cart</button>
                        <button className="wishlist-remove">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist