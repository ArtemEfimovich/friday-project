import React from 'react';
import s from './CheckBox.module.css'


type CheckBoxType = {
    isChecked:boolean
}


const CheckBox = ({isChecked}:CheckBoxType) => {
    return (
        <div className={s.container}>
            <input type="checkbox" checked={isChecked}/>
        </div>
    );
};

export default CheckBox;