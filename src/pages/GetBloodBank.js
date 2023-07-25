import React, { useEffect, useState } from 'react'
import Layout from '../components/Shared/Layout/Layout'
import API from '../services/API';

const GetBloodBank = () => {
    const [bloodBank, setBloodBank] = useState([])

    const getBloodBankData = async () => {
        try {
            const { data } = await API.get("/auth/get-blood-bank");
            if (data.success) {
                setBloodBank(data.data);
                console.log(data)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodBankData();
    }, []);
    return (
        <Layout>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className=''>
                        <th className="py-2 px-4 border-b text-start">First Name</th>
                        <th className="py-2 px-4 border-b text-start">Last Name</th>
                        <th className="py-2 px-4 border-b text-start">Email</th>
                        <th className="py-2 px-4 border-b text-start">Phone</th>
                        <th className="py-2 px-4 border-b text-start">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bloodBank.map((record) => (
                        <tr key={record._id}>
                            <td className="py-2 px-4 border-b">{record.firstName}</td>
                            <td className="py-2 px-4 border-b">{record.lastName}</td>
                            <td className="py-2 px-4 border-b">{record.email}</td>


                            <td className="py-2 px-4 border-b">{record.phone}</td>

                            <td className="py-2 px-4 border-b">
                                {/* <div className="flex items-center">
                                    {record.status === "pending" ? (
                                        <button
                                            className="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600 focus:bg-green-700 focus:outline-none"
                                            onClick={() => handleAccountStatus(record, "approved")}
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
                                </div> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default GetBloodBank