import React from 'react';
import s from './Button.module.css'

type ButtonPropsType={
    name:string
    onClickHandler:()=>void
}


const Button = ({name,onClickHandler}: ButtonPropsType) => {
    return (
        <div className={s.button}>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;