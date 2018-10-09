import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Form from './form';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <Form />
        </div>
    </div>
);

export default App;
