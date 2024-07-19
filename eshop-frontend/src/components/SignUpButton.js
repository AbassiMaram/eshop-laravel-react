import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignUpButton = () => {
  const { signInUrl } = useContext(AuthContext);

  const handleSignUp = () => {
    if (signInUrl) {
      window.location.href = signInUrl; // Assurez-vous que l'URL de redirection pour l'inscription est correcte
    } else {
      console.error("Sign-up URL is not set");
    }
  };

  return (
    <button onClick={handleSignUp}>Sign Up</button>
  );
};

export default SignUpButton;
