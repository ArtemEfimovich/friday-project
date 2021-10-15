import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "../reducers/profile-reducer";
import authReducer from "../reducers/auth-reducer";
import registrationReducer from "../reducers/registration-reducer";



let rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    registration:registrationReducer
})


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store=store


export type AppStateType= ReturnType<typeof rootReducer>





export default store;