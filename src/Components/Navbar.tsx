import { FaHome, FaInfo, FaPhone, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link , useNavigate } from 'react-router-dom'
import type { RootState } from '../Features/app/store'
import { GrDashboard } from 'react-icons/gr'
import { clearCredentials } from '../Features/auth/authSlice'


export const Navbar = () => {

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const handleLogout = () => {
    dispatch(clearCredentials())
    navigate('/login');
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to="/"><FaHome className='w-5 h-5 text-green-600' />Home</Link></li>
            <li><Link to="/Contact"><FaPhone className='w-5 h-5 text-green-600' />Contact</Link></li>
            <li><Link to="/about"><FaInfo className='w-5 h-5 text-green-600' />About</Link></li>
            <li><Link to="/login"><FaSignInAlt className='w-5 h-5 text-green-600' />Login</Link></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Sidney's App</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/"><FaHome className='w-5 h-5 text-green-600' />Home</Link></li>
          <li><Link to="/Contact"><FaPhone className='w-5 h-5 text-green-600' />Contact</Link></li>
          <li><Link to="/about"><FaInfo className='w-5 h-5 text-green-600' />About</Link></li>
        </ul>
      </div>

      {!isAuthenticated ? (
        <div className="navbar-end hidden lg:flex gap-2">
          <Link to="/login" className='btn bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200'>Sign In</Link>
          <Link to="/register" className='btn btn-ghost text-gray-700 hover:text-blue-700 hover:bg-orange-50'>
            <FaSignInAlt className='w-5 h-5 text-blue-600' />Register
          </Link>
        </div>
      ) : (
        <div className="navbar-end hidden lg:flex gap-2">
          <div className="dropdown dropdown-end bg-amber-200">
            <button className="btn btn-ghost flex items-center">
              <div className="flex items-center">
                <span className="text-dark">Hey, {user?.fullName || "User"}</span>
                <svg
                  className="w-6 h-6 text-orange-400" fill="none"
      stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <ul className="dropdown-content bg-neutral-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/dashboard/profile" className="flex items-center text-slate-950 hover:text-gray-300 mb-2">
                  <GrDashboard className="mr-3 text-xl text-orange-600" />
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="flex items-center text-slate-950 hover:text-gray-300">
                  <FaSignOutAlt className="text-xl text-orange-600 mr-3" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
