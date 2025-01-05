import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addProductReviews, addToCart, addToWishlist, getGamesDetails } from '../Services/allAPI'
import { baseUrl } from '../Services/baseURL'

const GameDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [newreview, setnewReview] = useState('')
    const [reviews, setreviews] = useState([])
    const navigate = useNavigate()
    // console.log(id)
    const getSingleGame = async () => {
        const response = await getGamesDetails(id)
        //   console.log(response)
        setDetails(response.data)
    }
    useEffect(() => {
        getSingleGame()
    }, [])
    // console.log(details)
    const handleAddtoCart = async () => {
        const token = sessionStorage.getItem('token')
        const user = sessionStorage.getItem('user')
        const userId = JSON.parse(user)?._id

        console.log(userId)
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        const reqBody = {
            productId: id
        }
        //   console.log(reqHeader)
        //   console.log(productId)
        const response = await addToCart(userId, reqBody, reqHeader)
        console.log(response.data)
        if (response.status == 200) {
            alert("Item added to the cart")
            navigate('/cart')
        }
        else if (response.status == 409) {
            alert("Item is already added to the cart")
            navigate('/cart')
        }
        else if (response.status == 401) {
            alert("Authorization Failed")
            navigate('/login')
        }
        else {
            alert("Internal server Error")
        }
    }
    const handleAddToWishlist = async () => {
        const token = sessionStorage.getItem('token')
        const user = sessionStorage.getItem('user')
        const userid = JSON.parse(user)?._id

        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }
        const reqBody = {
            gameId: id
        }
        const response = await addToWishlist(userid, reqBody, reqHeader)
        console.log(response)

        if (response.status == 200) {
            alert("game is added to the wishlist")
        }
        else if (response.status == 401) {
            alert("Authorization failed Please Login")
            navigate('/login')
        }
        else if (response.response.status == 409) {
            alert("Game is alreaddy added in the wishlist")
        }
        else {
            alert("Internal server error")
        }
    }

    const handleAddReview = async () => {
        console.log(id)
        const reqBody = {newreview, productId: id }
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        const response = await addProductReviews(reqBody, reqHeader)
        console.log(response)
        // setreviews(response.data)
    }
    console.log(newreview)
    return (
        <div>
            <div>
                <div className="container-fluid mt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12 mb-4 text-center">
                            <img
                                src={`${baseUrl}/uploads/${details?.gameImage || 'placeholder-image.jpg'}`}
                                alt="Game"
                                className="img-fluid rounded shadow-sm"
                                onError={(e) => e.target.src = 'placeholder-image.jpg'}
                            />
                            <div className='w-100 d-flex justify-content-around mt-3'>
                                <button className="btn btn-primary" onClick={handleAddtoCart}>Add to Cart</button>
                                <button className="btn btn-success" onClick={handleAddToWishlist}>Add to Wishlist</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                            <h1 className="text-primary mb-3">{details?.gameName || 'Game Name'}</h1>
                            <p className="text-muted">Category: {details?.gameGenre || 'Unknown'}</p>
                            <p className="text-dark">Description: {details?.description || 'No description available.'}</p>
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <Link to={`/order/${id}`} className="text-decoration-none">
                                    <button className="btn btn-warning">Buy Now</button>
                                </Link>
                            </div>
                            <div className="reviews w-100">
                                <div className="review-header mt-3">
                                    <h3 className='text-center'>Reviews</h3>

                                    <div className='d-flex'>
                                        <input type="text" className='form-control  w-75' placeholder='Add a review....'
                                            onChange={(e) => setnewReview(e.target.value)}
                                        />
                                        <button className='btn btn-success ms-3' onClick={handleAddReview}>Add Review</button>
                                    </div>
                                </div>
                                {/* //////////Map cheyyende sthalam//////// */}
                                {/* {
                                    reviews.map((review,index) => (
                                        <div className='review-body card w-100 mt'>
                                            <h5 className='card-title ms-3 mt-1'>{index}</h5>
                                            <hr className=' divider'/>
                                            <p className='card-bodys ms-3'></p>
                                        </div>
                                    ))
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default GameDetails