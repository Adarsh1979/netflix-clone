import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"

const API_URL = "http://localhost:5000/api";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${API_URL}/auth/login`, user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}