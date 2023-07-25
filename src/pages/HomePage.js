import React, { useEffect, useState } from 'react'
import Spinner from '../components/Shared/Spinner'
import { useSelector } from 'react-redux'
import Layout from '../components/Shared/Layout/Layout'


import Modal from '../components/Shared/Layout/Modal/Model'
import API from '../services/API'
const HomePage = () => {
    const { loading, error } = useSelector(state => state.auth)
    const [data, setData] = useState([])

    //get inventury finction
    const getBloodRecord = async () => {
        try {
            const { data } = await API.get('/inventury/get-inventury')
            if (data?.success) {
                setData(data?.inventury)
                console.log(data?.inventury)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBloodRecord()
    }, [])



    return (
        <>
            <Layout>
                {error && <span>{alert(error)}</span>}
                {loading ? (<Spinner />) : (
                    <>
                        <Modal />
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className=''>
                                    <th className="py-2 px-4 border-b text-start">Blood Group</th>
                                    <th className="py-2 px-4 border-b text-start">Created At</th>
                                    <th className="py-2 px-4 border-b text-start">Donor Email</th>
                                    <th className="py-2 px-4 border-b text-start">Inventory Type</th>
                                    <th className="py-2 px-4 border-b text-start">Organisation</th>
                                    <th className="py-2 px-4 border-b text-start">Quantity</th>
                                    <th className="py-2 px-4 border-b text-start">Updated At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((record) => (
                                    <tr key={record._id}>
                                        <td className="py-2 px-4 border-b">{record.bloodGroup}</td>
                                        <td className="py-2 px-4 border-b">
                                            Time {new Date(record.createdAt).toLocaleTimeString()}<br />
                                            Date {new Date(record.createdAt).toLocaleDateString()}

                                        </td>
                                        <td className="py-2 px-4 border-b">{record.email}</td>
                                        <td className="py-2 px-4 border-b">{record.inventuryType}</td>
                                        <td className="py-2 px-4 border-b">{record.organisation}</td>
                                        <td className="py-2 px-4 border-b">{record.quantity}</td>
                                        <td className="py-2 px-4 border-b">{record.updatedAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </>
                )}
            </Layout>
        </>
    )
}

export default HomePage