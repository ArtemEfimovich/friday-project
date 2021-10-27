import axios,{AxiosResponse} from "axios";


const instance= axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    withCredentials: true,
})


export type LoginParamsType={
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}

export type LogOutParamsType={
    info:string;
    error:string;
}


export const authAPI={
    login(email:string,password:string,rememberMe:boolean){
        return instance
            .post<{email:string, password:string, rememberMe:boolean},AxiosResponse<LoginParamsType>>
            ('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete<LogOutParamsType>('auth/me')
    },
    userUpdate(name:string,avatar:string){
        return instance
            .put<{name:string, avatar:string},AxiosResponse<LoginParamsType>>('auth/me',{name,avatar})
    }

}