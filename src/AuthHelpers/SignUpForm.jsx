import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import ErrorAlert from '../Components/ErrorAlert';
import { convertDate } from '../Helpers/DateHelper';
import UsersService from '../services/UsersService';

const SignUpForm = () => {
    const [errorsArray, setErrorsArray] = useState([]);

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
        genderId: Yup.number()
            .min(1, 'Select your gender')
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
            genderId: 0,
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signupSchema,
        onSubmit: async(values) => {
            setErrorsArray([]);
            values.birthdate = convertDate(values.birthdate);
            let data = JSON.stringify(values, null, 2);

            console.log("Posting user:",data);
            const response = await UsersService.addUser(data);
            console.log(response);
            if (!response.data) {
                setErrorsArray(response.errors);
            }
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
                name="username"
                type="text"
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
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {
                formik.touched.email && Boolean(formik.errors.email) &&
                <div className='error-container'>
                    <div className="error-messsage">
                        {formik.touched.email && formik.errors.email}
                    </div>
                </div>
            }
            <label htmlFor="birthdate">Birthdate</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    id='birthdate'
                    name='birthdate'
                    className='datepicker'
                    inputFormat="DD/MM/YYYY"
                    value={formik.values.birthdate}
                    onChange={newValue => formik.setFieldValue("birthdate", newValue)}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box sx={{
                            width: '102%',
                            display: 'flex', 
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
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
            {
                formik.touched.birthdate && Boolean(formik.errors.birthdate) &&
                <div className='error-container'>
                    <div className="error-messsage">
                        {formik.touched.birthdate && formik.errors.birthdate}
                    </div>
                </div>
            }
            <div className='gender'>
                <label htmlFor='genderId' className='gender-label'>
                    Select your gender:
                </label>
                <select 
                    id="genderId"
                    name="genderId"
                    className='gender-select'
                    value={formik.values.genderId}
                    onChange={formik.handleChange}
                >
                    <option value={0} disabled>Gender</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                </select>
            </div>
            {
                formik.touched.genderId && Boolean(formik.errors.genderId) &&
                <div className='error-container'>
                    <div className="error-messsage">
                        {formik.touched.genderId && formik.errors.genderId}
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
            <label htmlFor="passwordConfirmation">Re-enter password</label>
            <input 
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                className='password'
            />
            {
                formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation) &&
                <div className='error-container'>
                    <div className="error-messsage">
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                    </div>
                </div>
            }
            <button className='submit-button' type='submit'>Sign up</button>
        </form>
        </div>
    );
};

export default SignUpForm;