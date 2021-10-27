import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import LoginPage from "../login/LoginPage";
import Profile from "../profile/Profile";
import PasswordRecovery from "../password/PasswordRecovery";
import NewPassword from "../password/NewPassword";
import Error404 from "../error/Error";
import Notification from "../password/Notification";
import SignUp from "../password/SignUp";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY:'/password-recovery',
    NOTIFICATION:'/notification',
    NEW_PASSWORD:'/new-password',
    TEST_PAGE:'/test'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                <Route path={PATH.REGISTRATION} render={() => <SignUp/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.NOTIFICATION} render={() => <Notification/>}/>
                <Route path={PATH.NEW_PASSWORD + '/:token' } render={() => <NewPassword/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

