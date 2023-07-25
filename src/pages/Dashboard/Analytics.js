import React, { useEffect, useState } from 'react'

import API from '../../services/API'
import Header from '../../components/Shared/Layout/Header'
const Analytics = () => {
    const [data, setData] = useState([])
    const [inventoryData, setInventoryData] = useState([]);
    //getBlood record
    const getBloodGroupData = async () => {
        try {
            const { data } = await API.get('/analytics/bloodGroups-data')
            if (data?.success) {
                setData(data?.bloodGroupData)
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    //lifeCycleMethod
    useEffect(() => {
        getBloodGroupData()
    }, [])

    //get function
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get("/inventury/get-recent-inventury");
            if (data?.success) {
                setInventoryData(data?.inventury);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRecords();
    }, []);


    return (
        <>
            <Header />
            <div className="flex flex-row flex-wrap">
                {data?.map((record, i) => (
                    <div
                        className="m-2 p-1 bg-white rounded-lg shadow-md"
                        key={i}

                    >
                        <div className="px-4 py-2">
                            <h1 className="bg-gray-200 text-gray-800 text-center text-xl font-bold mb-3">
                                {record.bloodGroup}
                            </h1>
                            <p className="text-gray-700">
                                Total In: <b>{record.totalIn}</b> (ML)
                            </p>
                            <p className="text-gray-700">
                                Total Out: <b>{record.totalOut}</b> (ML)
                            </p>
                        </div>
                        <div className="text-white bg-gray-800 py-2 px-4 text-center">
                            Total Available: <b>{record.availableBlood}</b> (ML)
                        </div>
                    </div>
                ))}
            </div>


            <div>
                <h1>Get Recent Blood Records</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className=''>
                            <th className="py-2 px-4 border-b text-start">Blood Group</th>
                            <th className="py-2 px-4 border-b text-start">Inventory Type</th>
                            <th className="py-2 px-4 border-b text-start">Quantity</th>
                            <th className="py-2 px-4 border-b text-start">Donar Email</th>
                            <th className="py-2 px-4 border-b text-start">TIme & Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((record) => (
                            <tr key={record._id}>
                                <td className="py-2 px-4 border-b">{record.bloodGroup}</td>
                                <td className="py-2 px-4 border-b">
                                    {record.inventuryType}
                                </td>
                                <td className="py-2 px-4 border-b">{record.quantity} (ML)</td>
                                <td className="py-2 px-4 border-b">{record.email}</td>
                                <td className="py-2 px-4 border-b">{new Date(record.createdAt).toLocaleDateString()} {new Date(record.createdAt).toLocaleTimeString()}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Analytics