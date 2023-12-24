import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='site-nav'>
        <Link to='/' className='site-title'>The news</Link>

        <div className='container'>
            <ul>
                <CustomLink to="/breaking">Breaking</CustomLink>
                <CustomLink to="/sports">Sports</CustomLink>
                <CustomLink to="/company">Company</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </ul>
        </div>
    </nav>
  )
}

function CustomLink({ to, children, props }) {
    const pn = window.location.pathname;
    const isActive = (pn === to);
    return (
        <li className={isActive ? 'active' : ''}>
            <Link className='nav-element' to={to} {... props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar