import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../services/API'
import { toast } from 'react-toastify'



export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/login', { role, email, password })
            //store token
            if (data.success) {
                localStorage.setItem('token', data.token);
                toast.success(data.message)
                // window.location.replace('/')
                console.log(data)
                if (role === "donor") {
                    window.location.replace('/organisation')
                } else if (role === "admin") {
                    window.location.replace('/admin')
                } else if (role === "hospital") {
                    window.location.replace('/')
                } else if (role === "organisation") {
                    window.location.replace('/')
                }
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)

//register  

export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ role, name, email, password, organisationName, hospitalName, age, city, website, phone }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/register', { role, name, email, password, organisationName, hospitalName, age, city, website, phone })
            if (data?.success) {
                toast.success(data.success);
                window.location.replace('/login')
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)


//current user

export const getCurrentUser = createAsyncThunk(
    'aith/getCurrentUser',
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get('/auth/current-user')
            if (res?.data) {
                return res?.data
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)


