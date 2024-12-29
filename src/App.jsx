import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/publicPages/home/Home";
import About from "./pages/publicPages/about/About";
import Contact from "./pages/publicPages/contact/Contact";
import AllDoctors from "./pages/publicPages/allDoctors/AllDoctors";
import MyAppointment from "./pages/privatePages/myAppointment/MyAppointment";
import MyProfile from "./pages/privatePages/myProfile/MyProfile";
import Footer from "./components/footer/Footer";
import CreateAccount from "./pages/publicPages/createAccount/CreateAccount";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-doctors" element={<AllDoctors />} />
        <Route path="/all-doctors/:speciality" element={<AllDoctors />} />
        <Route path="/my_appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/create-account" element={<CreateAccount/>} />
      </Routes>

      <Footer/>
    </>
  );
};

export default App;
