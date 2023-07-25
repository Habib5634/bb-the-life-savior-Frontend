import React, { useEffect, useState } from 'react'
import Layout from "../../components/Shared/Layout/Layout";
import API from '../../services/API';

const Donarlist = () => {
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.get("/admin/org-list");
            //   console.log(data);
            if (data?.success) {
                setData(data?.orgData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);

    //DELETE FUNCTION
    const handelDelete = async (id) => {
        try {
            let answer = window.prompt(
                "Are You SUre Want To Delete This Donar",
                "Sure"
            );
            if (!answer) return;
            const { data } = await API.delete(`/admin/delete-donor/${id}`);
            alert(data?.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className=''>
                        <th className="py-2 px-4 border-b text-start">Name</th>
                        <th className="py-2 px-4 border-b text-start">Email</th>
                        <th className="py-2 px-4 border-b text-start">Phone</th>
                        <th className="py-2 px-4 border-b text-start">Date</th>
                        <th className="py-2 px-4 border-b text-start">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <tr key={record._id}>
                            <td className="py-2 px-4 border-b">{record.name || record.organisationName + " (ORG)"}</td>
                            <td className="py-2 px-4 border-b">
                                {record.email}
                            </td>
                            <td className="py-2 px-4 border-b">{record.phone}</td>
                            <td className="py-2 px-4 border-b">{new Date(record.createdAt).toLocaleDateString()} {new Date(record.createdAt).toLocaleTimeString()}</td>
                            <td className="py-2 px-4 border-b"><button
                                className="btn btn-danger"
                                onClick={() => handelDelete(record._id)}
                            >
                                Delete
                            </button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default Donarlist