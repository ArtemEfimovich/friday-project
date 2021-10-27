type ActionsType =
    ReturnType<typeof setPacksAC>

const initialState = {
    pack: 'null'
}

type InitialStateType = {
    pack: string
}


export const CardPacksReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-PACKS':
            return {
                ...state, pack: action.pack
            }
        default:
            return{...state}
    }
}


export const setPacksAC = (pack:string) => ({type: 'SET-PACKS', pack} as const)