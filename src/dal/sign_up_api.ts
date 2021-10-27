import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
    // headers: {
    //     'API-KEY': '5270c5b3-d507-4271-8572-1aea12195316'
    // }
})

export const signUpAPI = {
    createUser(email: string, password:string) {
        return instance.post<{ email: string,password:string }, AxiosResponse< SuccessResponseType >>('auth/register', {email,password});
    },
}

export type SuccessResponseType = {
    addedUser: {
        _id: string,
        email: string,
        rememberMe: boolean,
        isAdmin: boolean,
        name: string,
        verified: boolean,
        publicCardPacksCount: number,
        created: string,
        updated: string,
        __v: number
    }
}
// export type ErrorResponseType ={
//     error: string,
//     email: string,
//     in: string
// }