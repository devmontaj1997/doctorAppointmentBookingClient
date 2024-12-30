import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/publicPages/home/Home";
import About from "./pages/publicPages/about/About";
import Contact from "./pages/publicPages/contact/Contact";
import AllDoctors from "./pages/publicPages/allDoctors/AllDoctors";
import MyAppointment from "./pages/privatePages/myAppointment/MyAppointment";
import MyProfile from "./pages/privatePages/myProfile/MyProfile";
import Footer from "./components/footer/Footer";
import CreateAccount from "./pages/publicPages/createAccount/CreateAccount";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authorizedUserApiSlice } from "./reduxToolKit/features/user/userApiSlice";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PublicRoute from "./components/publicRoute/PublicRoute";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authorizedUserApiSlice());
    }
  }, [dispatch]);
  return (
    <>
      {location.pathname === "/create-account" ? "" : <Header />}

      <Routes>
      {/* Shared Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/all-doctors" element={<AllDoctors />} />
      <Route path="/all-doctors/:speciality" element={<AllDoctors />} />

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/my_appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Route>

      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/create-account" element={<CreateAccount />} />
      </Route>
    </Routes>

      {location.pathname === "/create-account" ? "" : <Footer />}

      <ToastContainer
        position="top-center"
        style={{ zIndex: "99999999" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
