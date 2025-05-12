import React from 'react'
import error from '../assets/error.jpg';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
<div className="container d-flex flex-column justify-content-center align-items-center">
  <img src={error} alt="Not Found" className="img-fluid mb-4" style={{ maxWidth: "100%" , maxHeight:"58vh"}} />
  <p className="text-center">
    <Link to='/' className='btn btn-danger'>Go To Home Page</Link>
  </p>
</div>

  )
}

export default PageNotFound