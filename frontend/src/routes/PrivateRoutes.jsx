import { Navigate } from 'react-router-dom';

// just to find out if the user info piece of the state.
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  // replce ---to replace any past history

  if (userInfo) {
    return children;
  }

  return <Navigate to={'/login'} replace></Navigate>;
  // return userInfo ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default PrivateRoutes;
