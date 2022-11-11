import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App () {
    return (
        <div className='App'>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;