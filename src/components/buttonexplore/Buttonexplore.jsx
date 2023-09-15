import React from 'react'
import { Link } from 'react-router-dom'

const Buttonexplore = () => {
  return (
    <div className="d-grid text-center"> 
      <Link to={"/Cities"} className='btn btn-success m-3 p-2'>
        Explore Cities
      </Link>
    </div>
  )
}

export default Buttonexplore