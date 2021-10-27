import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navlink.module.css'
import {PATH} from "../../routes/Routes";


const NavLinkPage = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
        </nav>

    );
};

export default NavLinkPage;