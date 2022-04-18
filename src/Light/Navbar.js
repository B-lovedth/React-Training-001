import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Soma Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" className=''>Create Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar