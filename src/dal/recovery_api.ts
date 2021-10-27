import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
        baseURL: 'https://neko-back.herokuapp.com/2.0/'
    }
)

export const recoveryApi = {
    recoveryPassword(email: string, from: string, message: any) {
        return instance.post<{ email: string,from:string,message:any }, AxiosResponse<ResponseType>>('auth/forgot', {email, from, message})
    },
    setNewPassword(newPassword:string,
                   resetPasswordToken: string){
        return instance.post<{ password: string,resetPasswordToken:string }, AxiosResponse<ResponseType>>('auth/set-new-password', {newPassword, resetPasswordToken})
    }
}

export type ResponseType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    __v: number,
    token: string,
    tokenDeathTime: number,
    avatar: string,
    deviceTokens: any
}