
import {Dispatch} from "redux";
import {authAPI} from "../../dal/login_api";

type ActionsType =
    ReturnType<typeof loading> |
    ReturnType<typeof setError>

const initialState = {
    isLogin: false,
    error: null,
    name:null,
    avatar: null,
}

type InitialStateType = {
    isLogin: boolean
    error: string |null
    name: string |null
    avatar?:string|null

}

export const LoginReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-LOGIN': {
            return {...state, isLogin: action.value,
                name:action.name,avatar:action.avatar
            }
        }
        case "SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}


export const loading = (value: boolean,name: string,avatar?:string) => (
    {type: 'SET-LOGIN',
        value,name,avatar} as const)
export const setError = (error: string) => (
    {type: 'SET-ERROR', error} as const)


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then(response =>
            dispatch(loading(true,response.data.name,response.data.avatar)
            ))
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        })
}


export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout().then((res) => {
        dispatch(loading(false, '', ''))
    })
}

