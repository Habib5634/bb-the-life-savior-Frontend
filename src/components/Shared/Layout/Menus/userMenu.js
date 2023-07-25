import { FaWarehouse, FaHandHoldingMedical } from "react-icons/fa"
import { BsHospital } from 'react-icons/bs'
import { GrOrganization } from 'react-icons/gr'
export const userMenu = [
    {
        name: 'Inventury',
        path: "/",
        icon: <FaWarehouse />
    },
    {
        name: "Donor",
        path: "/donor",
        icon: <FaHandHoldingMedical />
    },
    {
        name: "Hospital",
        path: '/hospital',
        icon: <BsHospital />
    },
    {
        name: "Organisation",
        path: '/organisation',
        icon: <GrOrganization />
    }
]