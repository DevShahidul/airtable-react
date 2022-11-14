import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, InputField } from '../../components';
import { AuthLayout } from '../../layouts';
import { inputs } from '../../utilities/static';

const Registration = () => {
  const initialValues = {userName: "", email: "", password: "", confirmPassword: ""}
  const [formValues, setFormValues] = useState(initialValues);
  const [focused, setFocused] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  
  // Handle email field change function
  // const handleNameField = (val) => {
  //   setName(val);
  // }
  // // Handle email field change function
  // const handleEmailField = (val) => {
  //   setEmail(val);
  // }
  // // Handle email field change function
  // const handlePasswordField = (val) => {
  //   setPassword(val);
  // }

  // // Handle email field change function
  // const handleConfirmPasswordField = (val) => {
  //   setConfirmPassword(val);
  // }

  // Handle input fields onchange
  const handleOnchange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  // Handle form submit function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const handleFocus = () => {
    setFocused(true);
  }


  return (
    <AuthLayout title="Sign Up">
      <Helmet>
        <title>AirTable | Sign Up</title>
      </Helmet>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        {inputs.map(input =>  {
            const allProps = Object.entries(input);
            return allProps.map(([name, attr]) => <InputField key={name} {...attr} pattern={name === 'confirmPassword' ? formValues.password : attr.pattern} name={name} onChange={handleOnchange} value={formValues[name]} onBlur={handleFocus} focused={focused.toString()} />)
          } 
        )}
        <div className="w-full space-y-4">
          <Button type="submit" className="w-full bg-theme-red hover:bg-theme-red-dark" text="Sign Up" />
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