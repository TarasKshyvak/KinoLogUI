import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react';

const submit = () => {
    
}

const SignUpForm = () => {
    const [value, setValue] = useState(dayjs('2000-01-01T00:00:00'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <form className='form-container' method="post" onSubmit={submit}>
            <label for="username">
                Username
            </label>
            <input id="username" type="text" name="username" className='input' />

            <label for="email">
                Email
            </label>
            <input id="email" type="text" name="email" className='input' />

            <label for="birthdate">
                Birthdate
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    id='birthdate'
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
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
                <label for='gender' className='gender-label'>
                    Select your gender:
                </label>

                <select id="gender" name="gender" className='gender-select'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            
            <label for="password">
                Password
            </label>
            <input id="password" type="password" name="password" className='password input'/>

            <label for="password-confirm">
                Re-enter password
            </label>
            <input 
                id="password-confirm"
                type="password"
                name="password-confirm"
                className='password input'
            />

            <button className='submit-button'>
                Sign up
            </button>
        </form>
    );
};

export default SignUpForm;