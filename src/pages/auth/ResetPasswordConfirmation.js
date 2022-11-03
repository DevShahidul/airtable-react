import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { InputField } from '../../components';
import { AuthLayout } from '../../layouts';

const ForgotPassword = () => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [email, setEmail] = useState('');
  
  // Handle email field change function
  const handleEmailField = (val) => {
    setEmail(val);
  }

  // Handle form submit function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsEmailError(false)
    console.log(email);
  }
  return (
    <AuthLayout title="Lost Password?">
      <Helmet>
        <title>AirTable | Forgot Password</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <InputField name="email" type="email" placeholder="jamie@oliver.com" label="Email" handleOnchange={handleEmailField} errorMessage="This email is required" isError={isEmailError} inputValue={email} />
        <div className="w-full space-y-4">
          <Link to="./forgot-password-sent.html" className="w-full h-11 px-6 bg-theme-red hover:bg-theme-red-dark transition-all duration-300 text-white flex justify-center disabled:bg-theme-gray disabled:text-disabled items-center text-sm font-bold rounded">Recover Password</Link>
        </div>
        <div className="w-full h-11 px-6 flex items-center justify-center">
          <Link to="login" className="text-label font-bold text-sm hover:underline hover:decoration-2">Back to Login</Link>
        </div>
      </form>
    </AuthLayout>
  )
}


export default ForgotPassword