import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Profile from "./ui/component/profile/Profile";
import LoginPage from "./ui/component/login/LoginPage";
import PasswordEntry from "./ui/component/password/PasswordEntry";
import RegistrationPage from "./ui/component/registration/RegistrationPage";
import NavLinkPage from "./ui/component/common/navlink/Navlink";

function App() {
  return (
    <div className="App">
        <NavLinkPage/>
        <Switch>
            <Route path="/profile" render={()=><Profile/>}/>
            <Route path="/login" render={()=><LoginPage/>}/>
            <Route path="/password" render={()=><PasswordEntry/>}/>
            <Route path="/registration" render={()=><RegistrationPage/>}/>
        </Switch>
    </div>
  );
}

export default App;
