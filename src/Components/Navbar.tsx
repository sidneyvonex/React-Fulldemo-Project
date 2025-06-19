
import { FaHome, FaInfo, FaPhone, FaSignInAlt } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div>
         <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to= "/">< FaHome className='w-5 h-5 text-green-600'/>Home</Link></li>
        <li><Link to="/Contact"><FaPhone className='w-5 h-5 text-green-600'/>Contact</Link></li>
        <li><Link to="/about"><FaInfo className='w-5 h-5 text-green-600'/>About</Link></li>
        <li><Link to="/dasboard"><MdSpaceDashboard  className='w-5 h-5 text-green-600'/>Dashboard</Link></li>
        <li><Link to="/login"><FaSignInAlt  className='w-5 h-5 text-green-600'/>Login</Link></li>
      </ul>
    </div>
    <Link  to = '/'className="btn btn-ghost text-xl">Sidney's App</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link to= "/">< FaHome className='w-5 h-5 text-green-600'/>Home</Link></li>
        <li><Link to="/Contact"><FaPhone className='w-5 h-5 text-green-600'/>Contact</Link></li>
        <li><Link to="/about"><FaInfo className='w-5 h-5 text-green-600'/>About</Link></li>
        <li><Link to="/dashboard"><MdSpaceDashboard  className='w-5 h-5 text-green-600'/>Dashboard</Link></li>
        <li><Link to="/login"><FaSignInAlt  className='w-5 h-5 text-green-600'/>Login</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className='btn btn-success text-white' to='/register'><FaSignInAlt  className='w-5 h-5 text-blue-600'/>Register</Link>
  </div>
</div>
    </div>
  )
}
