import { type ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext, type UserContextType } from '../contexts/User/UserContext';

export const RequireAuth = ({ children }: { children: ReactNode }) => {

  const { profile } = useContext<UserContextType>(UserContext);

  if (!profile.isLogined) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return children;
};