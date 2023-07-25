import { userLogin, userRegister } from '../redux/features/auth/authAction';
import store from '../redux/store'


export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!role || !email || !password) {
            return alert("Please provide all field")
        }
        store.dispatch(userLogin({ email, password, role }))
    } catch (error) {
        console.log(error)
    }
}


export const handleRegister = (e, role, name, email, password, organisationName, hospitalName, age, city, website, phone) => {
    e.preventDefault();
    try {
        store.dispatch(userRegister({ role, name, email, password, organisationName, hospitalName, age, city, website, phone }))
    } catch (error) {
        console.log(error)
    }
}