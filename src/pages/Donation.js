import React, { useEffect, useState } from 'react'
import Layout from '../components/Shared/Layout/Layout'
import { useSelector } from 'react-redux'
import API from '../services/API'

const Donation = () => {

    const { user } = useSelector(state => state.auth)
    const [data, setData] = useState([])
    //find Donor Record
    const getDonors = async () => {
        try {
            const { data } = await API.post('/inventury/get-inventury-hospital', {
                filters: {
                    inventuryType: "in",
                    donor: user?._id
                }
            })
            console.log(data)
            if (data?.success) {
                setData(data?.inventury)
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDonors()
    }, [])
    return (
        <Layout>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className=''>
                        <th className="py-2 px-4 border-b text-start">bloodGroup</th>
                        <th className="py-2 px-4 border-b text-start">Donated At</th>
                        <th className="py-2 px-4 border-b text-start">Quantity</th>
                        <th className="py-2 px-4 border-b text-start">Email</th>
                        <th className="py-2 px-4 border-b text-start">inventuryType</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <tr key={record._id}>
                            <td className="py-2 px-4 border-b">{record.bloodGroup}</td>
                            <td className="py-2 px-4 border-b">
                                {new Date(record.createdAt).toLocaleDateString()} {new Date(record.createdAt).toLocaleTimeString()}
                            </td>
                            <td className="py-2 px-4 border-b">{record.quantity}</td>
                            <td className="py-2 px-4 border-b">{record.email}</td>
                            <td className="py-2 px-4 border-b">{record.inventuryType}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default Donation