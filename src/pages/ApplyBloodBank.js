import React, { useState } from 'react'
import Layout from '../components/Shared/Layout/Layout'
import InputType from '../components/Shared/Form/InputType'
import API from '../services/API';
import { useNavigate } from 'react-router-dom';
const ApplyBloodBank = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [storageCapacity, setStorageCapacity] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [licienceNo, setLicienceNo] = useState('');
    const [userId, setUserId] = useState(''); // Add the userId state variable

    const navigate = useNavigate()

    const handleApplyBloodBank = async (e) => {
        e.preventDefault();

        try {
            const { data } = await API.post('/auth/apply-blood-bank', {
                firstName,
                lastName,
                phone,
                email,
                address,
                city,
                storageCapacity,
                startTime,
                endTime,
                licienceNo,
                userId,
            });
            if (data.success) {
                navigate('/organisation');
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                console.log(error.response.data.message);
            }
        }
    };




    return (
        <Layout>
            <form onSubmit={handleApplyBloodBank}>
                <InputType
                    labelText={"First Name"}
                    labelFor={"forFirstName "}
                    inputType={"text"}
                    name={"firstName"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <InputType
                    labelText={"Last Name"}
                    labelFor={"forLastName "}
                    inputType={"text"}
                    name={"email"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <InputType
                    labelText={"Phone No"}
                    labelFor={"forPhone "}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <InputType
                    labelText={"Email"}
                    labelFor={"forEmail "}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputType
                    labelText={"Address"}
                    labelFor={"forAddress "}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <InputType
                    labelText={"City"}
                    labelFor={"forCity "}
                    inputType={"text"}
                    name={"city"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <InputType
                    labelText={"Storage Capacity"}
                    labelFor={"forStorageCapacity "}
                    inputType={"number"}
                    name={"storageCapacity"}
                    value={storageCapacity}
                    onChange={(e) => setStorageCapacity(e.target.value)}
                />

                <InputType
                    labelText={"Licience No"}
                    labelFor={"forLicienceNo"}
                    inputType={"text"}
                    name={"licienceNo"}
                    value={licienceNo}
                    onChange={(e) => setLicienceNo(e.target.value)}
                />


                <InputType
                    labelText={"Start Time"}
                    labelFor={"forStartTime"}
                    inputType={"time"}
                    name={"startTime"}
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />

                <InputType
                    labelText={"End Time"}
                    labelFor={"forEndTime"}
                    inputType={"time"}
                    name={"endTime"}
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" >Apply</button>


            </form>
        </Layout>
    )
}

export default ApplyBloodBank