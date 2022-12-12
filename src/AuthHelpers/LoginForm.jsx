import { Box } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ErrorAlert from '../Components/ErrorAlert';
import UsersService from '../services/UsersService';

const LoginForm = () => {
    const signIn = useSignIn();
    const [errorsArray, setErrorsArray] = useState([]);
    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Please enter your username'),
        password: Yup.string()
            .required('Please enter your password'),
     });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async(values) => {
            setErrorsArray([]);
            let data = JSON.stringify(values, null, 2);
            const response = await UsersService.authenticate(data);

            signIn({
                token: response.data.token,
                expiresIn: 720,
                tokenType: 'Bearer',
                authState: {
                    userId: response.data.id,
                    role: response.data.role,
                    username: response.data.username
                }
            })
            if (!response.data) {
                setErrorsArray(response.errors);
            }
            navigate('/');
        },
      });

    return (
        <div>
            <Box sx={{position: 'fixed', zIndex: 999, bottom: '20px', left: '20px'}}>
                    {errorsArray.map((err) => {
                        return (<ErrorAlert key={err}>{err}</ErrorAlert>)
                    })}
            </Box>
            <form className='form-container' onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {
                    formik.touched.username && Boolean(formik.errors.username) &&
                    <div className='error-container'>
                        <div className="error-messsage">
                            {formik.touched.username && formik.errors.username}
                        </div>
                    </div>
                }
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className='password'
                />
                {
                    formik.touched.password && Boolean(formik.errors.password) &&
                    <div className='error-container'>
                        <div className="error-messsage">
                            {formik.touched.password && formik.errors.password}
                        </div>
                    </div>
                }
                <button className='submit-button' type='submit'>Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;