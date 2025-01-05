import React, { useEffect, useState } from 'react'
import { getGamesDetails, paymentMethod, placeOrder } from '../Services/allAPI'
import { useParams } from 'react-router-dom'
import './Orderpage.css'
const OrderPage = () => {
    const { id } = useParams()
    // console.log(id)
    const [products,setProducts]= useState([])
    console.log(products)
    const [data,setData]= useState({
        productId:id,
        paymentId:'',
        amount:products?.gamePrice
    })
    const gameDetails = async () => {
        const response = await getGamesDetails(id)
        console.log(response)
        setProducts(response.data)
    }
    useEffect(() => {
        gameDetails()

    },[])
    const buyNow = async(amount,paymentId)=>{
        const reqBody ={
            productId:data.productId,
            paymentId:paymentId,
            amount:amount
        }
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json'
        }
        const response = await placeOrder(reqBody,reqHeader)
        console.log(response)
    }

    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
    
          script.src = src;
    
          script.onload = () => {
            resolve(true)
          }
          script.onerror = () => {
            resolve(false)
          }
    
          document.body.appendChild(script);
        })
      }
    
    const payment = async () => {
        const reqBody={
            amount:products.gamePrice * 100
        }
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json'
        }
        const response = await paymentMethod(reqBody,reqHeader)
        handleRazorpayScreen(response.data.amount)
    }
        const handleRazorpayScreen = async (amount) => {
            const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")
            if (!res) {
                alert("Some error at razorpay screen loading")
                return;
            }
            const options = {
                key: 'rzp_test_YWob3NoKy2p5h6',
                amount: amount,
                currency: 'INR',

                handler: function (response) {
                    setData({...data,paymentId:response?.razorpay_payment_id})
                    buyNow(amount,response?.razorpay_payment_id)
                    // setResponseId(response.razorpay_payment_id)
                },
                theme: {
                    color: "#F4C430"
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }
    return (
        <>
            <div className="payment-container">
                <h1>Complete Your Payment</h1>
                <p>We only accept secure payments via Razorpay.</p>
                <button className="razorpay-button" onClick={payment} >
                    Pay with Razorpay
                </button>
            </div>
        </>
    )
}

export default OrderPage