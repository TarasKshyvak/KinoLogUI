import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUpForm = () => {
    const signupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Username length must be between 2 and 30')
            .max(30, 'Username length must be between 2 and 30')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        birthdate: Yup.date()
            .min(new Date('1910-01-01T00:00:00'), 'Accessible birthdate from year 1910 to today')
            .max(new Date(), 'Accessible birthdate from year 1910 to today')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        passwordConfirmation: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
     });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            birthdate: new Date('2000-01-01T00:00:00'),
            gender: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signupSchema,
        onSubmit: values => {
            let data = JSON.stringify(values, null, 2);
            console.log(data);
        },
      });

    return (
        <form className='form-container' onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="birthdate">Birthdate</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    id='birthdate'
                    name='birthdate'
                    inputFormat="DD/MM/YYYY"
                    value={formik.values.birthdate}
                    onChange={newValue => formik.setFieldValue("birthdate", newValue)}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box sx={{
                            width: '102%',
                            display: 'flex', 
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        }}>
                          <input
                            ref={inputRef}
                            {...inputProps}
                            className='date-input'
                          />
                          {InputProps?.endAdornment}
                        </Box>
                      )}
                />
            </LocalizationProvider>
            <div className='gender'>
                <label htmlFor='gender' className='gender-label'>
                    Select your gender:
                </label>
                <select 
                    id="gender"
                    name="gender"
                    className='gender-select'
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                >
                    <option value="" disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>            
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className='password'
            />
            <label htmlFor="passwordConfirmation">Re-enter password</label>
            <input 
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                className='password'
            />
            <button className='submit-button' type='submit'>Sign up</button>
        </form>
    );
};

export default SignUpForm;