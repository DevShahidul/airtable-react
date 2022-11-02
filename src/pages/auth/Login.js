import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { InputField } from '../../components';
import Switch from '../../components/Switch';
import { RequestLayout } from '../../layouts';

const Login = () => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const handleOnchange = (val) => {
    setEmail(val);
  }
  const handleSwitchOnchange = (val) => {
    setRememberMe(val);
    console.log('remember me? ',rememberMe);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();

    setIsEmailError(false)

    console.log('Form submited', 'event:', e, 'email:', email);
  }
  return (
    <RequestLayout title="Sign In">
      <Helmet>
        <title>AirTable | Login</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <InputField name="email" type="email" placeholder="jamie@oliver.com" label="Email" handleOnchange={handleOnchange} errorMessage="This email is required" isError={isEmailError} />
        <InputField name="password" type="password" placeholder="jamie@oliver.com" label="Password" handleOnchange={handleOnchange} errorMessage="This email is required" isError={isEmailError} />
        <Switch name="rememberMe" label="Remember me" handleOnchange={handleSwitchOnchange} />
      </form>
    </RequestLayout>
  )
}

export default Login