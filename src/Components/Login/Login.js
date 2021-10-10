import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  /*Now we use useAuth so remove the below line.........
   const { signInUsingGoogle, signInUsingGithub } = useFirebase(); */
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle}>Google Sign In</button>
      <br />
      <button onClick={signInUsingGithub}>GitHub Sign In</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;














