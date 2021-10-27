import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "./Profile.module.css"
import {AppRootStateType} from "../../../bll/store/store";
import {logoutTC} from "../../../bll/reducers/login-reducer";
import {PATH} from "../routes/Routes";
import SuperButton from "../common/button/Button";


 const Profile = () => {
    const isLogin = useSelector<AppRootStateType>(state => state.login.isLogin)
    const dispatch = useDispatch()
    const name = useSelector<AppRootStateType>(state => state.login.name)
    const avatar = useSelector<AppRootStateType>(state => state.login.avatar)

    const logoutHandler = () => {
        dispatch(logoutTC())
    }


    if (!isLogin) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={s.page}>
            <div className={s.container}>
                <div>
                    <h2 className={s.title}>
                        Profile
                    </h2>
                </div>
                <div>
                    `{avatar}`
                    <img src='' alt='avatar'/>
                </div>
                <div>
                    Name: {name}
                </div>
                <div className={s.button}>
                    <SuperButton
                        children={'Logout'}
                        onClick={logoutHandler}
                    />
                </div>
            </div>

        </div>
    )
}


export default Profile;