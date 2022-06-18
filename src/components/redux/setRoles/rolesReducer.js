import { DELETE_ROLE, GET_ROLES, SET_ROLES } from "./rolesTypes";

const initialState = {
    data: [],
    error: ""
}

export const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLES:
            return { ...state,  data: [...state.data, action.payload ] }
        case GET_ROLES:
            return { ...state , data : action.payload}
            case DELETE_ROLE : 
            return {...state , data : state.data.filter((date)=>date.id !== action.payload)}

        default: return state

    }
}
