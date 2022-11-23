import React from 'react';

const submit = () => {
    
}

const LoginForm = () => {
    return (
        <form className='form-container' method="post" onSubmit={submit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                name="username" 
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                className='password'
            />
            <button className='submit-button'>Log in</button>
        </form>
    );
};

export default LoginForm;