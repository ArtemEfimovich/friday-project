import React from 'react';
import s from './Input.module.css'

type InputPropsType ={
    onChangeHandler:()=>void
}


const Input = ({onChangeHandler}:InputPropsType) => {
    return (
        <div className={s.container}>
            <input type="text" onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;