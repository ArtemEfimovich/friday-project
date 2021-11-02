import axios,{AxiosResponse} from "axios";
import {CardsPacksType} from "../bll/reducers/card-packs-reducer";


type CardsParamsResponse = {
    cardPacks: Array<CardsPacksType>
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number //
}




const instance= axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    withCredentials: true,
})

export type CardResponseType = {
    cards: Array<CardsType>,
    packUserId: string,
    page: number,
    pageCount: number,
    cardsTotalCount: number,
    minGrade: number,
    maxGrade: number,
    token: string,
    tokenDeathTime: number
}

export type CardsType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    shots: number,
    type: string,
    user_id: string,
    created: string,
    updated: string,
    __v: number,
    _id: string
}

export const cardsAPI = {
    cardsPack(packName?: string|null,min?: number, max?:number,sortPacks?:any,page?: number,pageCount?: string,user_id?: string){
        return instance.get<{ params:{min?: number, max?:number,sortPacks?:any,page?: number,pageCount?: number,user_id?: string} },
            AxiosResponse<CardsParamsResponse>>("cards/pack",
            {params:{packName,min,max,sortPacks,page,pageCount,user_id}})
    },
    getCard(cardAnswer:string,cardQuestion: string,cardsPack_id: string, page?:number,pageCount?:number,sortCards?:string){
        return instance.get<{params:{cardAnswer:string,cardQuestion: string,cardsPack_id: string, page?:number,pageCount?:number,sortCards?:string}},
            AxiosResponse<CardResponseType>>('/cards/card',
            {params:{cardAnswer,cardQuestion,cardsPack_id,sortCards,page,pageCount}})
    }
}