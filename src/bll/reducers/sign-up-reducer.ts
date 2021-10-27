import {Dispatch} from "redux";
import {setAppStatusAC, setIsLoggedInAC} from "./app-reducer";
import {signUpAPI} from "../../dal/sign_up_api";

const initialState:InitialStateType = {
    error: null
}
export const SignUpReducer = (state:InitialStateType = initialState, action:ActionsType):InitialStateType=>{
    switch (action.type){
        case 'SIGNUP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}
export type InitialStateType = {
    error: string|null
}

//action creators
export const setSignUpError = (error: string | null) =>({type: 'SIGNUP/SET-ERROR', error} as const)

//types action creators
export type setSignUpErrorActionType = ReturnType<typeof setSignUpError>


type ActionsType = setSignUpErrorActionType

//thunk creators
export const signUpTC = (email: string, password:string) => (dispatch:Dispatch) =>{
    dispatch(setAppStatusAC('loading'))
    signUpAPI.createUser(email, password)
        .then(res =>{
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setIsLoggedInAC(true))

        })
        .catch(error=>{
            console.log({...error})
            dispatch(setSignUpError(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}