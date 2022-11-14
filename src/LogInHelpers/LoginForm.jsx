import React from 'react';

const LoginForm = () => {
    return (
        <form className='form-container' method="post">
            <label for="username">
                Username
            </label>
            <input id="username" type="text" name="username" />
            <label for="password">
                Password
            </label>
            <input id="password" type="password" name="password" className='password'/>
            <button className='submit-login'>
                Log in
            </button>
        </form>
    );
};

export default LoginForm;