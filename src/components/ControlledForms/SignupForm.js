import React from 'react'
import { useState } from 'react';
//https://www.dotnetcurry.com/reactjs/forms-using-react-functional-components-hooks

import {
    minMaxLength,
    validEmail,
    userExists,
  } from './validations';

function SignupForm() {
    const [user, setUser] = useState({});

    function handleChange (e){
        const { name, value } = e.target;
        //let formErrors = this.state.formErrors;
       
        switch (name) {
          case 'firstName':
            setUser({ ...user, firstName: value });
              
            break;
          case 'lastName':
                            
      setUser({ ...user, lastName: value });
            break;
          case 'email':
            setUser({ ...user, email: value });
                      
            break;
          case 'password':
            setUser({ ...user, password: value });
                      
            break;
          case 'confirmpassword':
            setUser({ ...user, confirmpassword: value });
                      
            break;
          default:
            break;
        }

        console.log(user)
      }

  return (
    <div className='App container col-6'>
    <h3>New User Registration Form</h3>
    <form noValidate>
      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='firstName'>First Name</label>
          <input
            className='form-control'
            placeholder='First Name'
            type='text'
            name='firstName'
            noValidate
            onBlur={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            className='form-control'
            placeholder='Last Name'
            type='text'
            name='lastName'
            noValidate
            onBlur={handleChange}
          />
        </div>
      </div>

      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input
          className='form-control'
          placeholder='Email'
          type='email'
          name='email'
          noValidate
          onBlur={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input
          className='form-control'
          placeholder='Password'
          type='password'
          name='password'
          noValidate
          onBlur={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='confirmpassword'>Confirm Password</label>
        <input
          className='form-control'
          placeholder='Password'
          type='password'
          name='confirmpassword'
          noValidate
          onBlur={handleChange}
        />
      </div>
      <div className='mb-3'>
        <button type='submit'>Create Account</button>
      </div>
    </form>
  </div>
  )
}

export default SignupForm