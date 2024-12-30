// /* eslint-disable react/prop-types */
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/create-account" />;
//   }
// };

// export default PrivateRoute;
/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return children; // Allow access to the protected route
  } else {
    return <Navigate to="/create-account" replace />; // Redirect to the login/signup page
  }
};

export default PrivateRoute;
