import {Dispatch} from 'redux';
import {setAppStatusAC} from './app-reducer';
import {loading} from './login-reducer';
import {recoveryApi} from "../../dal/recovery_api";



const initState = {
    errorRecovery: '',
    errorNewPassword: '',
    newPassword: false
}

export const PasswordRecoveryReducer = (state = initState, action: RecoveryActionsType) => {
    {
        switch (action.type) {
            case 'FORGOT/ERROR-RECOVERY': {
                return {...state, errorRecovery: action.error}
            }
            case 'FORGOT/SET-NEW-PASSWORD': {
                return {...state, newPassword: action.newPassword}
            }
            case 'FORGOT/ERROR-NEW-PASSWORD': {
                return {...state, errorNewPassword: action.errorNewPassword}
            }
            default:
                return state
        }
    }
}

// types
type RecoveryActionsType =
    PasswordRecoverACType
    | ErrorPasswordRecoverACType
    | ErrorNewPasswordACType

type PasswordRecoverACType = ReturnType<typeof setNewPasswordAC>
type ErrorPasswordRecoverACType = ReturnType<typeof errorPasswordRecoverAC>
type ErrorNewPasswordACType = ReturnType<typeof errorNewPasswordAC>


// actions
export const setNewPasswordAC = (newPassword: boolean) => ({
    type: 'FORGOT/SET-NEW-PASSWORD', newPassword } as const)
export const errorPasswordRecoverAC = (error: string) => ({type: 'FORGOT/ERROR-RECOVERY', error} as const)
export const errorNewPasswordAC = (errorNewPassword: string) => ({
    type: 'FORGOT/ERROR-NEW-PASSWORD',
    errorNewPassword
} as const)

// thunks
export const passwordRecoverTC = (email: string, from:string,message:any) => (dispatch:Dispatch) =>{
    debugger
    dispatch(setAppStatusAC('loading'))
    recoveryApi.recoveryPassword(email, from, message)
        .then((res) =>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(loading(true,res.data.name,res.data.avatar))

        })
        .catch((err)=>{
            dispatch(errorPasswordRecoverAC(err.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const setNewPasswordTC = (password:string,resetPasswordToken:string) => (dispatch:Dispatch)=>{
    dispatch(setAppStatusAC('loading'))
    recoveryApi.setNewPassword(password,resetPasswordToken)
        .then((res)=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setNewPasswordAC(true))
        })
        .catch((err) =>{
            dispatch(errorNewPasswordAC(err.message))
            dispatch(setAppStatusAC('succeeded'))
        })
}