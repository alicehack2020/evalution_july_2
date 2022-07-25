import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
    <Link className='nav' to="/blogs">Go to Blogs Listing</Link>
    </div>
  )
}

export default Home