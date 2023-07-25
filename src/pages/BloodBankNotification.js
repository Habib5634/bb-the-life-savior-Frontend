import React, { useState } from 'react'
import Layout from '../components/Shared/Layout/Layout'
import { useSelector } from 'react-redux'
import API from '../services/API'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Shared/Spinner'
const BloodBankNotification = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("unread");

    //   handle read notification
    const handleMarkAllRead = async () => {
        try {

            const { data } = await API.post(
                "/auth/get-all-notification",
                {
                    userId: user._id,
                }
            );

            if (data.success) {
                console.log(data);
                console.log(user?.seenNotification);

            }
        } catch (error) {

            console.log(error);
            console.log("somthing went wrong");
        }
    };

    // delete notifications
    const handleDeleteAllRead = async () => {
        try {

            const { data } = await API.post(
                "/auth/delete-all-notification",
                { userId: user._id }
            );

            if (data.success) {
                console.log(data.message);
            }
        } catch (error) {

            console.log(error);
            console.log("Somthing Went Wrong In Ntifications");
        }
    };
    return (
        <Layout>
            <div className="w-full flex flex-col items-center">
                <h4 className="p-3 text-center font-bold text-lg">
                    Notification Page
                </h4>

                <div className="w-full flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                    <div className="flex items-center space-x-2">
                        <button
                            className={`p-2 hover:text-blue-500 ${activeTab === 'unread' ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => setActiveTab('unread')}
                        >
                            Unread
                        </button>
                        <button
                            className={`p-2 hover:text-blue-500 ${activeTab === 'read' ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => setActiveTab('read')}
                        >
                            Read
                        </button>
                    </div>
                    {activeTab === 'unread' && (
                        <button
                            className="p-2 text-blue-500"
                            onClick={handleMarkAllRead}
                        >
                            Mark All Read
                        </button>
                    )}
                    {activeTab === 'read' && (
                        <button
                            className="p-2 text-blue-500"
                            onClick={handleDeleteAllRead}
                        >
                            Delete All Read
                        </button>
                    )}
                </div>

                {loading ? (<Spinner />) : (
                    <>
                        <div className={`w-full grid grid-cols-1 gap-4 ${activeTab === 'unread' ? '' : 'hidden'}`}>
                            {user?.notification.map((notificationMgs) => (
                                <div
                                    className="p-4 bg-white rounded-md shadow-md cursor-pointer"
                                    key={notificationMgs.id}
                                    onClick={() => navigate('/blood-bank')}
                                >
                                    {notificationMgs.message}
                                </div>
                            ))}
                        </div>

                        <div className={`w-full grid grid-cols-1 gap-4 ${activeTab === 'read' ? '' : 'hidden'}`}>
                            {user?.seenNotification.map((notification) => (
                                <div
                                    className="p-4 bg-white rounded-md shadow-md cursor-pointer"
                                    key={notification.id}
                                    onClick={() => navigate('/blood-bank')}
                                >
                                    {notification.message}
                                </div>
                            ))}
                        </div>
                    </>)}

                {/* <div className="w-full mt-8 flex justify-end">
            //     {activeTab === 'read' && (
            //         <button
            //             className="p-2 text-blue-500"
            //             onClick={handleDeleteAllRead}
            //         >
            //             Delete All Read
            //         </button>
            //     )}
            // </div> */}
            </div>
        </Layout>
    )
};

export default BloodBankNotification;