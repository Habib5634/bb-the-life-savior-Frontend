import React, { useEffect } from 'react'
import { userMenu } from './Menus/userMenu'
import { Link, useLocation } from 'react-router-dom'
import { FaWarehouse, FaHandHoldingMedical } from "react-icons/fa"
import { BsHospital } from 'react-icons/bs'
import { GrOrganization } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import { BiSolidDonateHeart } from 'react-icons/bi'
const Sidebar = () => {
    const location = useLocation()
    const { user } = useSelector(state => state.auth)

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div>
            <div>
                {/* //for organisation role */}
                {(user?.role === 'organisation' || user?.status === 'approved') && (
                    <>
                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><FaWarehouse /></i>
                            <Link to="/">Inventury</Link>
                        </div>

                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/donor") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><FaHandHoldingMedical /></i>
                            <Link to="/donor">Donor</Link>
                        </div>

                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/hospital") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><BsHospital /></i>
                            <Link to="/hospital">Hospital</Link>
                        </div>
                    </>
                )}

                {/* for admin role */}
                {user?.role === 'admin' && (
                    <>
                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/donor-list") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><FaWarehouse /></i>
                            <Link to="/donor-list">Donor List</Link>
                        </div>

                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/hospital-list") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><FaHandHoldingMedical /></i>
                            <Link to="/hospital-list">Hospital List</Link>
                        </div>


                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/org-list") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><BsHospital /></i>
                            <Link to="/org-list">Organisation List</Link>
                        </div>

                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/blood-bank-notification") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><FaHandHoldingMedical /></i>
                            <Link to="/blood-bank-notification">Blood Bank Notification</Link>
                        </div>
                    </>
                )}


                {/* for donor and hospital role */}
                {(user?.role === "donor" || user?.role === "hospital") && (
                    <div
                        className={`flex pt-1 py-3 text-2xl ${isActive("/organisation") ? "bg-gray-800 rounded-sm text-white" : ""
                            }`}
                    >
                        <i className="px-1 pt-1"><GrOrganization /></i>
                        <Link to="/organisation">Organisation</Link>
                    </div>
                )}

                {/* only for donor role */}
                {user?.role === "donor" && (
                    <><div
                        className={`flex pt-1 py-3 text-2xl ${isActive("/donation") ? "bg-gray-800 rounded-sm text-white" : ""
                            }`}
                    >
                        <i className="px-1 pt-1"><BiSolidDonateHeart /></i>
                        <Link to="/donation">Donation</Link>
                    </div>

                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/apply-blood-bank") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><BiSolidDonateHeart /></i>
                            <Link to="/apply-blood-bank">Apply For Blood Bank</Link>
                        </div>


                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/get-blood-bank") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><BiSolidDonateHeart /></i>
                            <Link to="/get-blood-bank">All Blood Banks</Link>
                        </div>
                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/find-blood") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><BiSolidDonateHeart /></i>
                            <Link to="/find-blood">Find Blood</Link>
                        </div>

                        <div
                            className={`flex pt-1 py-3 text-2xl ${isActive("/blood-request") ? "bg-gray-800 rounded-sm text-white" : ""
                                }`}
                        >
                            <i className="px-1 pt-1"><BiSolidDonateHeart /></i>
                            <Link to="/blood-request">Blood Requests</Link>
                        </div>
                    </>
                )}
                {/* only for hospital role */}
                {user?.role === "hospital" && (
                    <div
                        className={`flex pt-1 py-3 text-2xl ${isActive("/consumer") ? "bg-gray-800 rounded-sm text-white" : ""
                            }`}
                    >
                        <i className="px-1 pt-1"><GrOrganization /></i>
                        <Link to="/consumer">Consumer</Link>
                    </div>
                )}



            </div>
        </div>
    )
}

export default Sidebar