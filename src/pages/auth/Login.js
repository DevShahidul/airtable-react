import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, InputField } from '../../components';
import Switch from '../../components/Switch';
import { AuthLayout } from '../../layouts';

const Login = () => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle email field change function
  const handleEmailField = (val) => {
    setEmail(val);
  }

  // Handle password field change function
  const handlePasswordField = (val) => {
    setPassword(val);
  }

  // Handle remember me switch
  const handleRememberSwitch = (checked) => {
    setRememberMe(checked);
  }

  // Handle form submit function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsEmailError(false)
    console.log(rememberMe, email);
  }
  
  return (
    <AuthLayout title="Sign In">
      <Helmet>
        <title>AirTable | Login</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <InputField name="email" type="email" placeholder="jamie@oliver.com" label="Email" handleOnchange={handleEmailField} errorMessage="This email is required" isError={isEmailError} inputvalue={email} />
        <InputField name="password" type="password" placeholder="*****" label="Password" handleOnchange={handlePasswordField} errorMessage="This password is required" isError={isEmailError} inputvalue={password} />
        <Switch name="rememberMe" label="Remember me" handleOnchange={handleRememberSwitch} />
        <div className="w-full space-y-4">
          <Button styles="bg-theme-red hover:bg-theme-red-dark text-white disabled:bg-theme-gray disabled:text-disabled" text="Sign In" />
        </div>
        <div className="w-full h-8">
          <p className="flex space-x-[4px] items-cente text-xs">
            <span>Not registered yet?</span>
            <Link className="inline-block text-theme-red hover:underline hover:decoration-1" to="/sign-up">
                Create an account
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login