import React, { useEffect, useState } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/API'

const Hospital = () => {
    const [data, setData] = useState([])
    //find Donor Record
    const getHospitals = async () => {
        try {
            const { data } = await API.get('/inventury/get-hospitals')
            if (data?.success) {
                setData(data?.hospitals)
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getHospitals()
    }, [])

    return (
        <Layout>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className=''>
                        <th className="py-2 px-4 border-b text-start">Name</th>
                        <th className="py-2 px-4 border-b text-start">Donated At</th>
                        <th className="py-2 px-4 border-b text-start">Donor Email</th>
                        <th className="py-2 px-4 border-b text-start">Phone No</th>
                        <th className="py-2 px-4 border-b text-start">bloodGroup</th>
                        <th className="py-2 px-4 border-b text-start">Age</th>
                        <th className="py-2 px-4 border-b text-start">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <tr key={record._id}>
                            <td className="py-2 px-4 border-b">{record.hospitalName || record.organisationName + " (ORG)"}</td>
                            <td className="py-2 px-4 border-b">
                                {new Date(record.createdAt).toLocaleDateString()} {new Date(record.createdAt).toLocaleTimeString()}
                            </td>
                            <td className="py-2 px-4 border-b">{record.email}</td>
                            <td className="py-2 px-4 border-b">{record.phone}</td>
                            <td className="py-2 px-4 border-b">{record.bloodGroup}</td>
                            <td className="py-2 px-4 border-b">{record.age}</td>
                            <td className="py-2 px-4 border-b">{record.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default Hospital