import React from 'react';
import '../../styles.css';
import './AuthForm.css';
import Title from '../../components/Title';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

function SignIn() {
  return (
    <div className="authform-container">
      <Title text="Sign In" subtitle="Welcome back! Please sign in to continue." />
      <form className="authform-form">
        <TextField label="Email" name="email" type="email" placeholder="Enter your email" />
        <TextField label="Password" name="password" type="password" placeholder="Enter your password" />
        <Button text="Sign In" type="submit" />
      </form>
    </div>
  );
}

export default SignIn;
