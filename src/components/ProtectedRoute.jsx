// src/components/ProtectedRoute.jsx
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // return <Navigate to="/" replace />;
    alert('LOGIN TO ACCESS THE POSTS PAGE!')
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
