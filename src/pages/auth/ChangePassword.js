import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Button, InputField } from '../../components';
import { AuthLayout } from '../../layouts';

const Registration = () => {
  
  const [isEmailError, setIsEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    // console.log(password);
  }
  return (
    <AuthLayout title="Change Password">
      <Helmet>
        <title>AirTable | Change Password</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <InputField name="password" type="password" placeholder="*****" label="Password" handleOnchange={handlePasswordField} errorMessage="This Password is required" isError={isEmailError} inputValue={password} />
        <p className="text-label font-bold text-xs -mr-2">Min 10 characters, 1 lowercase, 1 uppercase, and 1 numeric.</p>
        <InputField name="password" type="password" placeholder="re-enter password" label="Password (again)" handleOnchange={handleConfirmPasswordField} errorMessage="This Confirm Password is required" isError={isEmailError} inputValue={confirmPassword} icon={true} />
        <div className="w-full h-[10px]"></div>
        <div className="w-full space-y-4">
          <Button styles="bg-theme-red hover:bg-theme-red-dark text-white disabled:bg-theme-gray disabled:text-disabled" text="Change Password" />
        </div>
        <div className="w-full h-8"></div>
      </form>
    </AuthLayout>
  )
}

export default Registration