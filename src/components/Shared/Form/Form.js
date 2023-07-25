import React, { useState } from 'react'
import InputType from './InputType'
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({ submitButton, formTitle, formType }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('donor')
    const [name, setName] = useState('')
    const [organisationName, setOrganisationName] = useState('')
    const [hospitalName, setHospitalName] = useState('')
    const [age, setAge] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [website, setWebsite] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')

    const validateAge = () => {
        if (parseInt(age) < 18) {
            alert("You are unable to donate blood. Because your age is less than 18 years");
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        } else if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter.");
            return false;
        } else if (!/[a-z]/.test(password)) {
            alert("Password must contain at least one lowercase letter.");
            return false;
        } else if (!/\d/.test(password)) {
            alert("Password must contain at least one number.");
            return false;
        } else if (!/[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>?`~]/.test(password)) {
            alert("Password must contain at least one special character.");
            return false;
        } else {
            return true;
        }
    };

    const handleAgeChange = (e) => {
        const newAge = e.target.value;
        setAge(newAge);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };






    return (
        <div>
            <form onSubmit={(e) => {
                if (formType === 'login') {
                    handleLogin(e, email, password, role)
                }
                else if (formType === 'register') {
                    // Validate age and password before handling registration form submission
                    const isAgeValid = validateAge();
                    const isPasswordValid = validatePassword();

                    if (isAgeValid && isPasswordValid) {
                        handleRegister(e, role, name, email, password, organisationName, hospitalName, age, city, website, phone);
                    }

                }
            }}>
                <h1 className='text-center font-bold  text-3xl'>{formTitle}</h1>
                <hr className='pb-10' />

                <div className="flex items-center mb-3">
                    <div className="form-check mr-1">
                        <input
                            type="radio"
                            className="form-check-input mr-1"
                            name="role"
                            id="donorRadio"
                            value={'donor'}
                            onChange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor='donorRadio'>Donor</label>
                    </div>
                    <div className="form-check mr-1">
                        <input
                            type="radio"
                            className="form-check-input mr-1"
                            name="role"
                            id="adminRadio"
                            value={'admin'}
                            onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor='adminRadio'>Admin</label>
                    </div>
                    <div className="form-check mr-1">
                        <input
                            type="radio"
                            className="form-check-input mr-1"
                            name="role"
                            id="hospitalRadio"
                            value={'hospital'}
                            onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor='hospitalRadio'>Hospital</label>
                    </div>
                    <div className="form-check mr-1">
                        <input
                            type="radio"
                            className="form-check-input mr-1"
                            name="role"
                            id="organisationRadio"
                            value={'organisation'}
                            onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor='organisationRadio'>Organisation</label>
                    </div>
                </div>
                {/* switch statement */}
                {(() => {
                    switch (true) {
                        case formType === 'login': {
                            return (
                                <>
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={"forEmail "}
                                        inputType={"email"}
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={"forPassword "}
                                        inputType={"password"}
                                        name={"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </>
                            )
                        }
                        case formType === 'register': {
                            return (
                                <>
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={"forEmail "}
                                        inputType={"email"}
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={"forPassword "}
                                        inputType={"password"}
                                        name={"password"}
                                        value={password}
                                        onBlur={validatePassword}
                                        onChange={handlePasswordChange}
                                    />
                                    {(role === "admin" || role === "donor") && (
                                        <>
                                            <InputType
                                                labelText={"Name"}
                                                labelFor={"forName "}
                                                inputType={"text"}
                                                name={"name"}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />

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
                                                labelText={"Age"}
                                                labelFor={"forAge "}
                                                inputType={"number"}
                                                name={"age"}
                                                value={age}
                                                onBlur={validateAge}
                                                onChange={handleAgeChange}
                                            />
                                        </>
                                    )}

                                    {role === "organisation" && (
                                        <>
                                            <InputType
                                                labelText={"OrganisationName"}
                                                labelFor={"forOrganisationName "}
                                                inputType={"text"}
                                                name={"organisationName"}
                                                value={organisationName}
                                                onChange={(e) => setOrganisationName(e.target.value)}
                                            />

                                            <InputType
                                                labelText={"Website"}
                                                labelFor={"forWebsite "}
                                                inputType={"text"}
                                                name={"website"}
                                                value={website}
                                                onChange={(e) => setWebsite(e.target.value)}
                                            />
                                        </>
                                    )}

                                    {role === "hospital" && (
                                        <>
                                            <InputType
                                                labelText={"HospitalName"}
                                                labelFor={"forHospitalName "}
                                                inputType={"text"}
                                                name={"hospitalName"}
                                                value={hospitalName}
                                                onChange={(e) => setHospitalName(e.target.value)}
                                            />

                                            <InputType
                                                labelText={"Website"}
                                                labelFor={"forWebsite "}
                                                inputType={"text"}
                                                name={"website"}
                                                value={website}
                                                onChange={(e) => setWebsite(e.target.value)}
                                            />
                                        </>
                                    )}






                                    <InputType
                                        labelText={"City"}
                                        labelFor={"forCity "}
                                        inputType={"text"}
                                        name={"city"}
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />

                                    <InputType
                                        labelText={"Phone"}
                                        labelFor={"forPhone "}
                                        inputType={"text"}
                                        name={"phone"}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />

                                </>
                            )
                        }
                    }
                })()}



                <div className='justify-between'>
                    {formType === 'login' ? (
                        <p>Not Registered yet ? Register
                            <Link to='/register' className='text-blue-500'  > Here! </Link>
                        </p>
                    ) : (
                        <p>Already Registered ? Login
                            <Link to='/login' className='text-blue-500'> Here! </Link>
                        </p>
                    )}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">{submitButton}</button>
                </div>

            </form>
        </div>
    )
}

export default Form