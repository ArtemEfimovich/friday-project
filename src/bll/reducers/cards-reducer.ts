type ActionsType =
    ReturnType<typeof setCardsAC>

const initialState = {
    cards:"sadsafsdfs"
}

type InitialStateType = {
    cards: string |null
}


export const CardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CARDS':
            return {
                ...state, cards: action.cards
            }
        default:
            return{...state}
    }
}


export const setCardsAC = (cards: string) => ({type: 'SET-CARDS', cards})