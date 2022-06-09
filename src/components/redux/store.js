import { applyMiddleware, createStore } from "redux"
import { rolesReducer } from "./setRoles/rolesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

export const store = createStore(rolesReducer ,  composeWithDevTools(
    applyMiddleware(thunk)
  ))