import React, { useContext } from "react";
import profilePic from "../assets/cartimg.jpg";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../Context/Contextlogin";

const Profile = () => {
  const navigate = useNavigate()
  const {setLoginResponse} = useContext(loginContext)
  const handleLogout = ()=>{
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      navigate('/login')
      setLoginResponse('')
  }
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <header className="profile-header">
        <h1>Profile</h1>
        <button className="my-orders-btn">My Orders</button>
      </header>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-picture-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-details">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Username:</strong> Joyboy
          </p>
          <p>
            <strong>Email:</strong> joyboy@gmail.com
          </p>
          <p>
            <strong>Age:</strong> 21
          </p>
          <p>
            <strong>Gender:</strong> Male
          </p>
        </div>
        <div className="profile-actions w-25 d-flex justify-content-between">
          <button
            className="edit-profile-btn"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
          >
            Edit Profile
          </button>
          <button className="btn btn-danger" onClick={handleLogout}>logout</button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex={-1}
        aria-labelledby="editProfileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editProfileModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your age"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select className="form-select">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Profile Picture</label>
                  <input type="file" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
