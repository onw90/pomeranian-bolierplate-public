import React, { useState } from 'react';
import './styles.css';
import { useFormInputs } from './useFormInputs';
import { loginSchema } from './schemas';
import * as yup from 'yup';
import { register, login } from '../../../Firebase/firebaseClient';

export const Login = ({ goToRegister }) => {
  const [inputs, handleInputChange] = useFormInputs();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    //console.log(inputs);
    try {
      const { email, password } = await loginSchema.validate(inputs);
      // register() zwraca promise
      const userCredential = await login(email, password);
      const user = userCredential.user;
      //console.log(user);
      setSuccessMessage('Udało się zalogować');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrorMessage(`Pole: ${error.path}, błąd: ${error.message} `);
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">e-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          //required
          autoComplete="off"
          onChange={handleInputChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          //required
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account?{' '}
        <button onClick={goToRegister} type="button">
          Register
        </button>
      </p>
      <p className="auth-form-error">{errorMessage}</p>
      <p className="auth-form-success">{successMessage}</p>
    </div>
  );
};
