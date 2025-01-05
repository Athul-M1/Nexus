import React, { useEffect, useState } from 'react'
import { getallOrders } from '../Services/allAPI'
import axios from 'axios'
import { baseUrl } from '../Services/baseURL'

const Allorders = () => {
    const [orders, setOrders] = useState([])
    const getAllOrders = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        const response = await getallOrders(reqHeader)
        console.log(response)
        setOrders(response.data)
    }
    useEffect(() => {
        getAllOrders()
    }, [])

    const invoicepdf = async (id) => {
        const token = sessionStorage.getItem('token')

      try {
           const invoiceResponse = await axios.post(`${baseUrl}/pdf-generation`,{id},{
               responseType:'blob', headers: {
                  'Content-Type': 'application/json','Authorization': `Bearer ${token}`
               }
           })
           console.log(invoiceResponse)
           
           const url = window.URL.createObjectURL(new Blob([invoiceResponse.data]))
   
           const link = document.createElement('a');
           link.href = url;
           link.setAttribute('download', `receipt-${id}.pdf`);
            document.body.appendChild(link);
           link.click();
         
      } catch (error) {
        console.error("Error in generating...!",error)
      }

    }



    return (
        <>
            <div className="container my-4">
                <h2 className="text-center mb-4">All Orders</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Download invoice</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                orders.map((order, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order.productId.gameName}</td>
                                        <td>{order.productId.gamePrice}</td>
                                        <td><span className="badge bg-success">Completed</span></td>
                                        <td><button className='btn btn-primary' onClick={()=>invoicepdf(order._id)}>download</button></td>
                                    </tr>
                                ))
                            }

                            {/* <tr>
              <td>002</td>
              <td>Jane Smith</td>
              <td>$200.00</td>
              <td><span className="badge bg-warning text-dark">Pending</span></td>
            </tr>
            <tr>
              <td>003</td>
              <td>Alice Johnson</td>
              <td>$300.25</td>
              <td><span className="badge bg-info text-dark">Shipped</span></td>
            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Allorders