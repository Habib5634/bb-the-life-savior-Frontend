import React from 'react'
import { BiDonateBlood } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Header = () => {
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const location = useLocation()
    ///logout handler
    const handleLogout = () => {
        localStorage.clear()
        toast("Logout Succesfully")
        navigate('/login')

    }

    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4">
            <div className="flex items-center">
                <h1 className="text-white font-bold text-lg mr-4">Blood Bank</h1>
                <BiDonateBlood className="text-white text-xl" />
            </div>
            <div className="flex items-center">
                <p className="text-white mr-4">Welcome, {user?.name || user?.hospitalName || user?.organisationName} {"  "}! &nbsp;
                    <span>{user?.role}</span>
                </p>
                {user && (user.role === "admin" || user.role === "organisation") ? (
                    location.pathname === "/" ? (
                        <Link to="/analytics">Analytics</Link>
                    ) : (

                        <Link to={user.role === "admin" ? "/admin" : "/"}>Home</Link>
                    )
                ) : null}
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Header