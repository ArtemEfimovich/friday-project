import {cardsAPI, CardsType} from "../../dal/cards_api";
import {Dispatch} from "redux";
import {AppRootStateType} from "../store/store";

type ActionsType =
    ReturnType<typeof setCardsAC>



const initialState = {
    pageNumber: 1,
    showNumber: 3,
    cards:[] as Array<CardsType>,
    filter: '',
    cardQuestion:'',
    cardAnswer: '',
    newQuestion: '',
    newAnswer: '',
    updateQuestion:''

}

type InitialStateType = typeof initialState;

export const CardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CARDS':
            return {
                ...state, cards:[...action.cards]
            }
        default:
            return{...state}
    }
}


export const setCardsAC = (cards: Array<CardsType>) => ({type: 'SET-CARDS', cards})



export const getCardsTC =  (cardsPack_id:string)=>(dispatch: Dispatch<ActionsType>,getState:()=>AppRootStateType)=>{
    const pageNumber = getState().cards.pageNumber
    const showNumber = getState().cards.showNumber
    const filter = getState().cards.filter
    const cardQuestion = getState().cards.cardQuestion
    const cardAnswer = getState().cards.cardAnswer
    cardsAPI.getCard(cardAnswer,cardQuestion,cardsPack_id,pageNumber,showNumber,filter)
        .then(res=>{
            dispatch(setCardsAC(res.data.cards))
        })
}