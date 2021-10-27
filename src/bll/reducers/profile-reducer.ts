
const initState = {
    title: ''
}

export const ProfileReducer = (state = initState, action: ProfileACType)=> {
    switch (action.type) {
        case 'SHOW-PROFILE': {
            return {
                ...state,
                newPassword: action.title
            }
        }
        default:
            return state
    }

}


type ProfileACType = ReturnType<typeof profileAC>

export const profileAC = (title: string) => (
    {type: 'SHOW-PROFILE', title } as const )