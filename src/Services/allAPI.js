import { baseUrl } from "./baseURL"
import { commonAPI } from "./commonAPI"

// register new user
export const register = async(user)=>{
    return await commonAPI(`POST`,`${baseUrl}/register`,user,"")
}
//Login
export const login = async(user)=>{
    return await commonAPI(`POST`,`${baseUrl}/login`,user,"")
}

// Add new game
export const addgame = async(game,reqHeader)=>{  
    // console.log(game);
    return await commonAPI(`POST`,`${baseUrl}/addgame`,game,reqHeader)
}
//get games for admin
export const getGames = async(reqHeader)=>{
    return await commonAPI(`GET`,`${baseUrl}/games-admin`,"",reqHeader)
}
//delete game
export const deletgame = async(id,reqHeader)=>{
    return await commonAPI(`DELETE`,`${baseUrl}/delete-game/${id}`,{},reqHeader)
}
//edit
export const editgame = async(id,reqHeader,reqBody)=>{
    return await commonAPI('PUT',`${baseUrl}/edit-game/${id}`,reqBody,reqHeader)
}
//get game based on genre
export const getGenre= async(genre)=>{
    return await commonAPI('GET',`${baseUrl}/get-genre/${genre}`,"","")
}
//get single game
export const getGamesDetails = async(id)=>{
    return await commonAPI('GET',`${baseUrl}/product-details/${id}`,"","")
}
// add to cart
export const addToCart = async(id,reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseUrl}/add-to-cart/${id}`,reqBody,reqHeader)
}
//get data from cart
export const getFromCart = async(id,reqHeader)=>{
    return await commonAPI('GET',`${baseUrl}/get-games-from-cart/${id}`,"",reqHeader)
}
//removefrom cart

export const removeFromCart = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${baseUrl}/remove-from-cart/${id}`,{},reqHeader)
}

//add to wishlist 

export const addToWishlist = async(id,reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseUrl}/add-to-wishlist/${id}`,reqBody,reqHeader)
}

//get games from wishlist
export const getFromWishlist = async(id,reqHeader)=>{
    return await commonAPI('GET',`${baseUrl}/get-games-from-wishlist/${id}`,{},reqHeader)
}

// otp verification 
export const verifyOtp = async(reqBody)=>{
    return await commonAPI('POST',`${baseUrl}/otp-verification`,reqBody,"")
}
//resend otp
export const resendOtp = async(reqBody)=>{
    return await commonAPI('POST',`${baseUrl}/otp-resend`,reqBody,"")
}
//google sign in 
export const googleSignIn = async(reqBody)=>{
    return await commonAPI('POST',`${baseUrl}/google-signin`,reqBody,"")
}
//get all users for admin
export const getusers = async(reqHeader)=>{
    return await commonAPI('GET',`${baseUrl}/admin-users`,"",reqHeader)
}
//*************************password*****************************
// reset Password link
export const forgotPassword = async(reqBody)=>{
    return await commonAPI('POST',`${baseUrl}/forgotpassword`,reqBody,"")
}
//to reset password
export const resetPassword = async(reqBody)=>{
    return await commonAPI('PUT',`${baseUrl}/updatepassword`,reqBody,"") //////////
}
//payment
export const paymentMethod = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseUrl}/payment`,reqBody,reqHeader)
}
//buy now
export const placeOrder = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseUrl}/place-order`,reqBody,reqHeader)
}
//get all orders 
export const getallOrders = async(reqHeader)=>{
    return await commonAPI('GET',`${baseUrl}/get-orders`,"",reqHeader)
}
//get all games for home page 
export const getAllGamesHome = async(searchKey)=>{
    return await commonAPI('GET',`${baseUrl}/games?search=${searchKey}`,{},"")
}
//get product review
export const addProductReviews =async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${baseUrl}/product-review`,reqBody,reqHeader)
}
