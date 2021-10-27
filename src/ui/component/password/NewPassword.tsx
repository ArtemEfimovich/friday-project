
import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import s from './NewPassword.module.css'
import {PATH} from "../routes/Routes";
import {setNewPasswordTC} from "../../../bll/reducers/password-recovery-reducer";
import SuperButton from "../common/button/Button";



export const NewPassword = () => {
    const dispatch = useDispatch()
    const [password, setPassword] = useState<string>('')

    const { token } = useParams<{token: string}>();

    const createNewPasswordHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setPassword(e.currentTarget.value)
    }

    const setNewPasswordHandler = ()=> {
        if(!password) return
        dispatch(setNewPasswordTC(password, token ))
        return <Redirect to={PATH.LOGIN} />
    }

    return (
        <div className={s.page}>
            <div className={s.container}>
                <div>
                    <h2 className={s.title}>Create new password</h2>
                </div>
                <div className={s.input}>
                    <input
                        value={password}
                        onChange={createNewPasswordHandler}
                    />
                </div>
                <div className={s.placeholder}>
                    <span> Create new password and we will send you further instructions to email</span>
                </div>
                <div className={s.button}>
                    <SuperButton
                        onClick={setNewPasswordHandler}
                    >Create new password
                    </SuperButton>
                </div>

            </div>
        </div>
    )
}

export default NewPassword;