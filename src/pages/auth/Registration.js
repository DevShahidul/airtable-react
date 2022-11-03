import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, InputField } from '../../components';
import { AuthLayout } from '../../layouts';

const Registration = () => {
  
  const [isEmailError, setIsEmailError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Handle email field change function
  const handleNameField = (val) => {
    setName(val);
  }
  // Handle email field change function
  const handleEmailField = (val) => {
    setEmail(val);
  }
  // Handle email field change function
  const handlePasswordField = (val) => {
    setPassword(val);
  }

  // Handle email field change function
  const handleConfirmPasswordField = (val) => {
    setConfirmPassword(val);
  }

  // Handle form submit function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsEmailError(false)
    console.log(password, email);
  }
  return (
    <AuthLayout title="Sign Up">
      <Helmet>
        <title>AirTable | Sign Up</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <InputField name="name" type="text" placeholder="John Doe" label="Name" handleOnchange={handleNameField} errorMessage="This name is required" isError={isEmailError} inputValue={name} />
        <InputField name="email" type="email" placeholder="jamie@oliver.com" label="Email" handleOnchange={handleEmailField} errorMessage="This email is required" isError={isEmailError} inputValue={email} />
        <InputField name="password" type="password" placeholder="*****" label="Password" handleOnchange={handlePasswordField} errorMessage="This Password is required" isError={isEmailError} inputValue={password} />
        <InputField name="password" type="password" placeholder="*****" label="Confirm Password" handleOnchange={handleConfirmPasswordField} errorMessage="This Confirm Password is required" isError={isEmailError} inputValue={confirmPassword} />
        <div className="w-full space-y-4">
          <Button styles="bg-theme-red hover:bg-theme-red-dark text-white disabled:bg-theme-gray disabled:text-disabled" text="Sign Up" />
        </div>
        <div className="w-full h-8">
          <p className="flex space-x-[4px] items-cente text-xs">
            <span>Already have an Account?</span>
            <Link className="inline-block text-theme-red hover:underline hover:decoration-1" to="/login">
                Log in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Registration