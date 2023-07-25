import React, { useEffect, useState } from 'react'
import Layout from '../components/Shared/Layout/Layout'
import API from '../services/API';
import { useSelector } from 'react-redux';

const BloodRequests = () => {
    const [bloodRequests, setBloodRequests] = useState([]);
    const { user } = useSelector(state => state.auth)
    // const [bloodRequestId, setBloodRequestId] = useState('');
    // const [status, setStatus] = useState('accepted');
    // const [notification, setNotification] = useState('');
    const [responseNotification, setResponseNotification] = useState('');
    // const [showNotification, setShowNotification] = useState(false);
    // const [acceptedUserName, setAcceptedUserName] = useState('');

    const getBloodRequests = async () => {
        try {
            const { data } = await API.get('/auth/get-blood-request'); // Replace this with your actual backend endpoint
            if (data.success) {
                setBloodRequests(data.data);
            }
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRequests();
    }, []);
    // Assuming you have the logged-in user's city and bloodGroup available in the user object
    const userCity = user?.city;
    const userBloodGroup = user?.bloodGroup;

    const handleRespond = async (request, status) => {
        try {
            const { data } = await API.post('/api/v1/auth/respond-blood-request', {
                bloodRequestId: request._id,
                status: status,
            });
            if (data.success) {
                // Update local state to reflect the updated status without full page refresh
                setBloodRequests(prevBloodRequests =>
                    prevBloodRequests.map(req =>
                        req._id === request._id ? { ...req, status: status } : req
                    )
                );
                // Store the blood request response message in local storage
                // localStorage.setItem('bloodRequestResponse', data.data.message);
                // Get the user's name who accepted the request
                // setAcceptedUserName(request.user.name);
                // setShowNotification(true);

                // Show the response notification to the user
                if (data.data.bloodNotification.length > 0) {
                    const notification = data.data.bloodNotification[0];
                    setResponseNotification(notification.message);
                }
            }
        } catch (error) {
            console.error(error);

            // Get the specific error message from the error object
            // const errorMessage = error.response
            //     ? error.response.data.message
            //     : 'Something went wrong while handling the blood request. Please try again later.';

            // // Show the error message to the user
            // alert(errorMessage);
        }
    };
    return (
        <Layout>
            {responseNotification && (
                <div className={`notification ${responseNotification.type}`}>
                    <p>{responseNotification.message}</p>
                </div>
            )}
            {/* {showNotification && (
                <p>{`Your blood request has been approved by ${acceptedUserName}.`}</p>
            )} */}
            <div>
                <h2>Blood Requests</h2>
                {bloodRequests.map(request =>
                    userCity === request.user.city && userBloodGroup === request.bloodGroup ? (
                        <div key={request._id}>
                            <p>User: {request.user.name}</p>
                            <p>Blood Group: {request.bloodGroup}</p>
                            <p>City: {request.user.city}</p>
                            <p>Quantity: {request.quantity}</p>
                            <p>Status: {request.status}</p>
                            {request.status === 'pending' ? (
                                <button
                                    className="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600 focus:bg-green-700 focus:outline-none"
                                    onClick={() => handleRespond(request, 'approved')}
                                >
                                    Approve
                                </button>
                            ) : (
                                <button
                                    className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600 focus:bg-red-700 focus:outline-none"
                                >
                                    Reject
                                </button>
                            )}

                            <hr />
                        </div>
                    ) : null
                )}
            </div>
            {user?.bloodNotification?.length > 0 &&
                user.bloodNotification[0].type === 'blood-request-response' && (
                    <div className="notification">
                        <p>
                            Your blood request has been approved by .
                        </p>
                    </div>
                )
            }
        </Layout>
    )
}

export default BloodRequests