import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from '../constants/userConstants'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl } from '../../api';

export const login = (Account, Password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                'Application': 'json'
            },
            mode: 'no-cors',
        }
        const res = await axios.post(
            `${baseUrl}/_Account/LoginJwt`,
            { Account, Password },
            config
        )
        let data = res.data
        await AsyncStorage.setItem('token', data.access_token)
        dispatch(checkUser())
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.message })
        console.log(error)
    }
}
const checkUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const token = await AsyncStorage.getItem('token')
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }
        const res = await axios.get(`${baseUrl}/_Account/CheckUserInfo`,
            config
        )
        let data = res.data
        await AsyncStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.message })
        console.log(error)
    }
}
export default checkUser

export const careSeekerRegister = (userData) => async (dispatch) => {
    console.log(userData)
    try {
        dispatch({ type: REGISTER_REQUEST });
        const config = {
            headers: {
                'Application': 'json'
            },
            mode: 'no-cors',
        }

        const { data } = await axios.post(
            `${baseUrl}/_Account/Reg`,
            userData,
            config
        )
        dispatch({ type: REGISTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.message })
        console.log(error)
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}