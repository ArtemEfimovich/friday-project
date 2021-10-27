import React from 'react';
import s from './Notification.module.css'
import email from './Email.png'

 const Notification = ()=> {

    return(
        <div className={s.page}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2 >Check Email</h2>
                </div>
                <div className={s.email}>
                    <img src={email} alt="send"/></div>
                <div className={s.placeholder}>
                    <span>We’ve sent an Email with instructions to dmitry.malykhin@mail.ru</span>
                </div>

            </div>
        </div>
    )
}

export default Notification;