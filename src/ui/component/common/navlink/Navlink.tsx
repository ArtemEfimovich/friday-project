import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navlink.module.css'



const NavLinkPage = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/login">Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/password">Password</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/registration">Registration</NavLink>
            </div>
        </nav>

    );
};

export default NavLinkPage;