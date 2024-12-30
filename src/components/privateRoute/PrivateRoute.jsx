import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
    if (localStorage.getItem("token")) {
        return <Outlet />;
      } else {
        return <Navigate to="/create-account" />;
      }
}

export default PrivateRoute