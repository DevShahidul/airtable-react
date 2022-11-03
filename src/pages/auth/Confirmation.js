import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthLayout } from '../../layouts';

const Confirmation = ({title, message}) => { 
  return (
    <AuthLayout title={title} isConfirmation={true}>
      <Helmet>
        <title>AirTable | Change Password</title>
      </Helmet>
      <p className="-mx-2">{message}</p>
      <div className="w-full">
        <Link to="/login" className="text-label font-bold text-sm w-full px-6 bg-white hover:bg-theme-gray transition-all duration-300 rounded shadow-main h-12 flex items-center justify-center">Back to Login</Link>
      </div>
    </AuthLayout>
  )
}

export default Confirmation;