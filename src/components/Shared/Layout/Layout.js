import React, { useState } from 'react'
import Header from './Header'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className='my-0'>
                <div><Header /></div>
                <div className="flex">
                    {/* Sidebar */}
                    <div
                        className={`w-1/4 h-screen  bg-gray-200 ${isSidebarOpen ? "block" : "hidden"
                            } md:block`}
                    >
                        {/* Sidebar content */}
                        <div className="p-4"><Sidebar /></div>
                    </div>

                    {/* Main Page */}
                    <div className="w-full md:w-3/4 bg-gray-100">
                        {/* Open/Close Sidebar Button */}
                        <button
                            className="md:hidden bg-gray-200 px-4 py-2"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? <AiOutlineClose className='bg-none' /> : <FaBars />}
                        </button>

                        {/* Main content */}
                        <div className="p-4">{children}</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Layout