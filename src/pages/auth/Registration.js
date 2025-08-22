import React from 'react';
import '../../styles.css';
import './AuthForm.css';
import Title from '../../components/Title';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

function Registration() {
  return (
    <div className="authform-container">
      <Title text="Create an Account" subtitle="Sign up to find your next home" />
      <form className="authform-form">
        <TextField label="Full Name" name="fullName" type="text" placeholder="Enter your full name" />
        <TextField label="Email" name="email" type="email" placeholder="Enter your email" />
        <TextField label="Password" name="password" type="password" placeholder="Enter your password" />
        <TextField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm your password" />
        <Button text="Register" type="submit" />
      </form>
    </div>
  );
}

export default Registration;
