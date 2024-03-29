import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"
import { API_URL } from "../baseUrl"

// const API_URL = "http://localhost:5000/api";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${API_URL}/auth/login`, user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        alert("Wrong Username or Password");
        dispatch(loginFailure());
    }
}