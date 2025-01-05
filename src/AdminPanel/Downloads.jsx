import React from 'react'
import Sidebar from './Sidebar'
const Downloads = () => {
  return (
    <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 mt-2">
          <Sidebar />
        </div>
        <div className="col-9">
          <h1 className='text-center mb-2 mt-1'> Downloads </h1>
          <div className="table-responsive">
            <table className="table table-hover table-bordered mt-2">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Game name</th>
                  <th scope="col">image</th>
                  <th scope="col">genre</th>
                  <th scope="col">Release date</th>
                  <th scope="col">Total downloads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>2020-01-01</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Downloads