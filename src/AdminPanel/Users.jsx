import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getusers } from '../Services/allAPI'
// import { all } from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
    const allusers = async () => {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      const response = await getusers(reqHeader)
      setUsers(response.data)
      // console.log(users)
    }
    useEffect(()=>{
      allusers()
    },[])
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-2">
            <Sidebar />
          </div>
          <div className="col-9">
            <h1 className='text-center mb-2 mt-1'> Manage Users </h1>
            <div className="table-responsive">
              <table className="table table-hover table-bordered mt-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    {/* <th scope="col">Downloaded games</th> */}
                    <th scope="col">Registration date</th>
                  </tr>
                </thead>
                <tbody>

                 {
                 users?.map((user,index)=>(
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>@mdo</td>
                    <td>2020-01-01</td>
                  </tr>
                 )) 
                 }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
