import React from 'react';
import './App.css';
import NavLinkPage from "./ui/component/common/navlink/Navlink";
import {Routes} from "./ui/component/routes/Routes";

function App() {
    return (
        <div className="App">
            <NavLinkPage/>
            <Routes/>
        </div>
    );
}

export default App;
