import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import GenerateQR from "./pages/GenerateQR";
import AddBusiness from "./pages/AddBusiness";
import ContactUs from "./pages/ContactUs";
import AllBusiness from "./pages/AllBusiness";
import Activate from "./pages/Activate";
import OurServicesPage from "./pages/OurServicesPage ";
import Scanner from "./pages/Scan";

const App = () => {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  const PrivateRoute = ({ element, path }) => {
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/login" state={{ from: path }} replace />
    );
  };

  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/activate" element={<Activate />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route path="/services" element={<OurServicesPage />} />
            <Route path="/scan" element={<Scanner />} />
            <Route
                path="/business"
                element={<PrivateRoute element={<AllBusiness />} />}
            />
            <Route
                path="/business/add"
                element={<PrivateRoute element={<AddBusiness />} />}
            />
            <Route
                path="/qr/create"
                element={<PrivateRoute element={<GenerateQR />} />}
            />
            <Route
                path="/dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
            />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
  );
};

export default App;
