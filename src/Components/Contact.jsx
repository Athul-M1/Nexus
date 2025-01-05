import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
<div>
 <div className='w-100  d-flex align-items-center justify-content-center bg-dark'>
  <div className="form-container mt-4">
    <h2 >Connect with us</h2>
    <form className="form">
      <div className="form-group">
        <label htmlFor="email">Company Email</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="textarea">How Can We Help You?</label>
        <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue=""/>
      </div>
      <button className="form-submit-btn" type="submit">Submit</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Contact