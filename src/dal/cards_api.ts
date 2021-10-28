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





export const cardsAPI = {
    cardsPack(){
        return instance.get<AxiosResponse<CardsParamsResponse>>("cards/pack")
    }
}