import React from 'react'
import auth from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

const Landingcomp = () => {

  const navigate = useNavigate()

const logoutfunc=()=>{
  signOut(auth)
  navigate('/')
}
  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
      {/* Logout button in top-right corner */}
      <button className="btn btn-danger position-absolute top-0 end-0 m-3" onClick={logoutfunc}>
        Logout
      </button>

      {/* Centered content with three links */}
      <div className="w-100 text-center">
      <h1 className="mb-4 w-100">
          <Link to={'/todo'} className="btn btn-success w-50 p-3 text-white">
            ToDo Lists Website
          </Link>
        </h1>
        <h1 className="mb-4 w-100">
          <Link to={'/weather'} className="btn btn-warning w-50 p-3 text-white">
            Weather Website
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Landingcomp