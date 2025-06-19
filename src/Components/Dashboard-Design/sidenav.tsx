import { Home, LogOut, SquareUserRound } from "lucide-react"
import { FaDollarSign } from "react-icons/fa"
import { FaShop } from "react-icons/fa6"

import { Link } from "react-router"


export const Sidenav = () => {
  return (
    <div className="h-screen">
        <ul className="menu bg-gray-300 text-dark-300 shadow-lg min-w-full gap-2 text-base-content min-h-full">
            <li><Link to='profile'><SquareUserRound/>My Profile</Link></li>
            <li><Link to='orders'><FaShop className="text-green-500"/>Orders</Link></li>
            <li><Link to='my-payments'><FaDollarSign className="text-green-500"/>My Payment</Link></li>
            <li><Link to='#'><LogOut className="text-red-600"/>Logout</Link></li>
            <li><Link to='/'><Home className="text-green-500"/>Home</Link></li>
        </ul>
    </div>
  )
}
