import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { login } from '../../app/features/auth/auth';
import { Button, InputField } from '../../components';
import Switch from '../../components/Switch';
import { AuthLayout } from '../../layouts';
import { validate } from '../../utilities/static';

const Login = () => {
  const initialValues = {email: '', password: '', rememberMe: false};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // const [rememberMe, setRememberMe] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues,[name]: value});
  }
  
  // Handle remember me switch
  const handleRememberSwitch = (checked) => {
    setFormValues({...formValues, rememberMe: checked});
    // setRememberMe(checked);
  }

  // Handle form submit function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formErrors));
    dispatch(login({
      email: formValues.email,
      password: formValues.password,
      rememberMe: formValues.rememberMe,
    }));
  }
  
  return (
    <AuthLayout title="Sign In">
      <Helmet>
        <title>AirTable | Login</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <InputField name="email" type="email" placeholder="jamie@oliver.com" label="Email" onChange={handleOnchange} errormessage={formErrors.email} value={formValues.email} />
        <InputField name="password" type="password" placeholder="*****" label="Password" onChange={handleOnchange} errormessage={formErrors.password} value={formValues.password} />
        <Switch name="rememberMe" label="Remember me" handleOnchange={handleRememberSwitch} />
        <div className="w-full space-y-4">
          <Button type="submit" className="w-full bg-theme-red hover:bg-theme-red-dark text-white disabled:bg-theme-gray disabled:text-disabled" text="Sign In" />
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