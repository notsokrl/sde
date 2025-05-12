import React from 'react';
import Login from '../Components/Forms/Login';

const LoginForm = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default LoginForm;
