import React from 'react';
import { RequireAuth } from 'react-auth-kit';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import SignOut from './pages/SignOut';
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
                    <Route path='/profile' element={
                        <RequireAuth loginPath={'/login'}>
                            <Profile />
                        </RequireAuth>
                    } />
                    <Route path='/signout' element={
                        <RequireAuth loginPath={'/login'}>
                            <SignOut />
                        </RequireAuth>
                    } />
                </Routes>
            </div>
        </div>
    );
};

export default App;