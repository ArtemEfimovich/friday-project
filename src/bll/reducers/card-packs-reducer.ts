import {Dispatch} from "redux";
import {cardsAPI} from "../../dal/cards_api";

type ActionsType =
    ReturnType<typeof setPacksAC>

export type CardsPacksType={
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}



const initialState:InitialStateType = {
    cardsPacks:[
        {_id: "5eb6cef840b7bf1cf0d8122d",
            user_id: "5eb543f6bea3ad21480f1ee7",
            name: "no Name",
            path: "/def",// папка
            cardsCount: 25,
            grade: 0, // средняя оценка карточек
            shots: 0, // количество попыток
            rating: 0,// лайки
            type: "pack", // ещё будет "folder" (папка)
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
            __v: 0},
    ],
    cardPacksTotalCount: 14, // количество колод
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1, // выбранная страница
    pageCount: 4 // количество элементов на странице
}

type InitialStateType = {
    cardsPacks: Array<CardsPacksType>
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number //
}


export const CardPacksReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-PACKS':
            return {
                ...state, cardsPacks: action.cardsPacks.push()
            }
        default:
            return {...state}
    }
}


export const setPacksAC = (cardsPacks: CardsPacksType[]) => ({type: 'SET-PACKS', cardsPacks} as const)


export const getCardsPack =()=>(dispatch: Dispatch<ActionsType>)=>{
    cardsAPI.cardsPack()
        .then(res=>{
            dispatch(setPacksAC(res.data.data.cardPacks))
            debugger
        })
}
