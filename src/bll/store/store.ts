import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "../reducers/app-reducer";
import {LoginReducer} from "../reducers/login-reducer";
import {PasswordRecoveryReducer} from "../reducers/password-recovery-reducer";
import {ProfileReducer} from "../reducers/profile-reducer";
import {SignUpReducer} from "../reducers/sign-up-reducer";
import {CardsReducer} from "../reducers/cards-reducer";
import {CardPacksReducer} from "../reducers/card-packs-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    login: LoginReducer,
    passwordRecovery: PasswordRecoveryReducer,
    profile: ProfileReducer,
    signUp: SignUpReducer,
    cardPacks: CardPacksReducer,
    cards: CardsReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


