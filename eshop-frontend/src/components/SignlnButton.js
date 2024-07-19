import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignInButton = () => {
  const { signInUrl } = useContext(AuthContext);

  const handleSignIn = () => {
    if (signInUrl) {
      window.location.href = signInUrl;
    } else {
      console.error("Sign-in URL is not set");
    }
  };

  return (
    <button onClick={handleSignIn}>Sign In</button>
  );
};

export default SignInButton;
