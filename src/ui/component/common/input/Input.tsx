import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputPropsType ={
    onChangeHandler:(e:ChangeEvent<HTMLInputElement>) => void
}


const Input = () => {
    return (
        <div className={s.container}>
            <input type="text" />
        </div>
    );
};

export default Input;