import React, {useEffect, useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import s from "./LoginPage.module.css"
import {AppRootStateType} from "../../../bll/store/store";
import {loginTC} from "../../../bll/reducers/login-reducer";
import {PATH} from "../routes/Routes";
import SuperInputText from "../common/input/Input";
import SuperCheckbox from "../common/checkbox/CheckBox";
import SuperButton from "../common/button/Button";


const LoginPage = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector<AppRootStateType>(state => state.login.isLogin)
    const errorMessage = useSelector<AppRootStateType>(state => state.login.error)

    interface State {
        password: string;
        email: string;
        rememberMe: boolean;
    }

    const [value, setValue] = useState<State>({
        password: '',
        email: '',
        rememberMe: false,
    })

    const handleInputChange = (props: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, [props]: e.target.value})
    }

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(value => ({...value, rememberMe: e.target.checked}))
    }

    const sendData = () => {
        dispatch(loginTC(value.email, value.password, value.rememberMe))
    }


    if (isLogin) {
        return <Redirect to={PATH.PROFILE}/>
    }


    return (
        <div className={s.page}>
            <div className={s.container}>
                <div>
                    <h2 className={s.title}>Sign In</h2>
                </div>
                {errorMessage && <div style={{color: 'red'}}>`{errorMessage}`</div>}
                <div className={s.input}>
                    <SuperInputText
                        type="text"
                        placeholder="Login"
                        value={value.email}
                        onChange={handleInputChange('email')}
                    />
                </div>
                <div className={s.input}>
                    <SuperInputText
                        type="password"
                        placeholder="Password"
                        value={value.password}
                        onChange={handleInputChange("password")}
                    />
                </div>
                <div>
                    <SuperCheckbox
                        checked={value.rememberMe}
                        children={"remember me"}
                        onChange={handleCheckBoxChange}
                    />
                </div>
                {errorMessage && <div className={s.link}>
                    <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot password ?</NavLink>
                </div>}
                <div className={s.button}>
                    <SuperButton
                        children={"Login"}
                        onClick={sendData}
                    />
                </div>
                <div className={s.link}>
                    <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;