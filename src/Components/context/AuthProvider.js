import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  /*the previous line or below line are same either use props in the function then declare children = props or direct declare children into function replace props to children.
  
   const AuthProvider = (props) => {
    const { children } = props; */

  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;