import axios from "axios";
import { GET_ROLES, SET_ROLES, SET_ROLES_FAILER } from "./rolesTypes";



export const SetRols = (data) => async (dispatch) => {
    try {
        const result = await axios.post("http://localhost:3001/user", data)
        dispatch({
            type: SET_ROLES,
            payload: data,
        })
    } catch (error) {
        dispatch(
            {
                type: SET_ROLES_FAILER,
                error
            }
        )
    }
}

export const getRoles = (data) => async (dispatch) => {
    try {
        const result = await axios.get("http://localhost:3001/user")
        console.log(result);
        dispatch({
            type: GET_ROLES,
            payload: result.data
        })
    } catch (error) {
        dispatch(
            {
                type: SET_ROLES_FAILER,
                error
            }
        )
    }
}