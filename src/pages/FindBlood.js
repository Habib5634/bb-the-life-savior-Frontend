import React, { useState } from 'react'
import Layout from '../components/Shared/Layout/Layout'
import InputType from '../components/Shared/Form/InputType'
import API from '../services/API';
import { useSelector } from 'react-redux';




const FindBlood = () => {
    const [bloodGroup, setBloodGroup] = useState('');
    const [quantity, setQuantity] = useState('');
    const [city, setCity] = useState('');
    const [notificationSent, setNotificationSent] = useState(false);
    const { user } = useSelector((state) => state.auth);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post('/auth/find-blood', { bloodGroup, quantity, city, userId: user._id });
            if (response.data.success) {
                setNotificationSent(true);
            }
        } catch (error) {
            console.log(error);
            // Handle error states here
        }
    };



    return (
        <Layout>
            <form onSubmit={handleFormSubmit}>


                <div className="mb-4">
                    <label htmlFor="bloodGroup" className="block text-gray-700 text-sm font-bold mb-2">
                        Blood Group:
                    </label>
                    <select
                        id="bloodGroup"
                        name="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <InputType
                    labelText={"Quantity"}
                    labelFor={"forQuantity"}
                    inputType={"number"}
                    name={"quantity"}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />



                <InputType
                    labelText={"City"}
                    labelFor={"forCity "}
                    inputType={"text"}
                    name={"city"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />




                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" >Send Notification</button>
                {notificationSent && <p>Notification sent successfully!</p>}
                {/* <p>{user?.bloodNotification}</p> */}
                {user?.bloodNotification?.length > 0 &&
                    user.bloodNotification[0].type === 'blood-request-response' && (
                        <div className="notification">
                            <p>
                                Your blood request has been approved by {user?.name}.
                            </p>
                            <p>
                                {user.bloodNotification[0].message}
                            </p>
                        </div>
                    )
                }
            </form>
        </Layout>
    )
}

export default FindBlood