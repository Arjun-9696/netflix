import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { selectUser } from '../Redux/Reducers/reducer';
const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
