import React from 'react'
import Form from '../../components/Shared/Form/Form'
import { useSelector } from 'react-redux'
import Spinner from '../../components/Shared/Spinner'
const Login = () => {
    const { loading, error } = useSelector(state => state.auth)


    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col md:flex-row h-screen">
                    {/* Left Section */}
                    <div className="w-full md:w-3/4 bg-gray-200 hidden md:block">
                        <img src="https://plus.unsplash.com/premium_photo-1661670160319-f54b8d711eeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/4 h-screen flex items-center justify-center">
                        <Form formTitle={"Login Page"} submitButton={"Login"} formType={"login"} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Login