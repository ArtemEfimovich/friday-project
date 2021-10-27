import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navlink.module.css'
import {PATH} from "../../routes/Routes";


const NavLinkPage = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.CARDS}>Cards</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.PACKS}>Packs</NavLink>
            </div>
        </nav>

    );
};

export default NavLinkPage;