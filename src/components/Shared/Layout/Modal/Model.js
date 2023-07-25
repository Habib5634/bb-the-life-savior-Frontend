import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import InputType from '../../../Shared/Form/InputType'
import API from "../../../../services/API";
import { useSelector } from "react-redux";
const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inventuryType, setInventuryType] = useState("in");
    const [bloodGroup, setBloodGroup] = useState("")
    const [quantity, setQuantuty] = useState(0);
    const [email, setEmail] = useState("")
    const { user } = useSelector(state => state.auth)
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    ///Handel Model Submit 
    const handleModelSubmit = async () => {
        try {
            if (!bloodGroup || !quantity) {
                alert("please Provide All Fields")
            }
            const { data } = await API.post('/inventury/create-inventury', {

                email,
                organisation: user?._id,
                inventuryType,
                bloodGroup,
                quantity
            })
            if (data?.success) {
                alert("New Record Has been added")
                window.location.reload()
            }
        } catch (error) {
            alert(error.response.data.message)
            window.location.reload()

        }
    }

    return (
        <div>
            <h4 className="flex text-3xl" onClick={openModal}>
                <AiOutlinePlus className="mt-1 font-bold mx-2" /> Add Inventory
            </h4>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4">
                        <h1 className="text-2xl font-bold mb-4">Manage Blood record</h1>
                        <div>
                            <div className="flex items-center">
                                <span className="mr-2">Blood-Type:</span>
                                <div className="flex items-center mx-2">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-blue-500"
                                        name="inRadio"
                                        value="in"
                                        defaultChecked
                                        onChange={(e) => setInventuryType(e.target.value)}
                                    />
                                    <label htmlFor="in" className="ml-1">IN</label>
                                </div>
                                <div className="flex items-center mx-2">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-blue-500"
                                        name="inRadio"
                                        value="out"
                                        onChange={(e) => setInventuryType(e.target.value)}
                                    />
                                    <label htmlFor="out" className="ml-1">OUT</label>
                                </div>
                            </div>
                            <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setBloodGroup(e.target.value)}>
                                <option value={"O+"}>O+</option>
                                <option value={"O-"}>O-</option>
                                <option value={"A+"}>A+</option>
                                <option value={"A-"}>A-</option>
                                <option value={"B+"}>B+</option>
                                <option value={"B-"}>B-</option>
                                <option value={"AB+"}>AB+</option>
                                <option value={"AB- "}>AB-</option>
                            </select>

                            <InputType
                                labelText={'Donor Email'}
                                labelFor={'donorEmail'}
                                inputType={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <InputType
                                labelText={'Quantity'}
                                labelFor={'donorEmail'}
                                inputType={'Number'}
                                value={quantity}
                                onChange={(e) => setQuantuty(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleModelSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;