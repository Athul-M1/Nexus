import React from 'react';
import Sidebar from './Sidebar';

const Earnings = () => {
  return (
    <div>
    <div className="container-fluid">
  <div className="row">
    <div className="col-3 mt-2">
      <Sidebar />
    </div>
    <div className="col-9">
      <h1 className='text-center mb-2 mt-1'> Earnings</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered mt-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User name</th>
              <th scope="col">Game Name</th>
              <th scope="col">Release date</th>
              <th scope="col">Reviews</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>BGMI</td>
              <td>2020-01-01</td>
              <td>It is a wonderful game Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias ex, ipsa magnam iste unde saepe illo ab est nobis ad! Sit necessitatibus nihil aut doloribus repellendus consequuntur, ratione et?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Earnings;
