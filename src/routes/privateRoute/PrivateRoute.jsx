import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Preloader from "../../pages/shared/Preloader/Preloader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Preloader></Preloader>;
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
