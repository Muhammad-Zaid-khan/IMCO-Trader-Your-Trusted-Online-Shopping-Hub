import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import TopNavigationBar from "./Components/Header/TopBar";
import Home from "./Pages/Home";
import RegisterPage from "./Components/Auth/Register.jsx";
import LoginPage from "./Components/Auth/Login.jsx";
import ForgotPasswordPage from "./Components/Auth/ForgotPassword.jsx";
import ResetPasswordPage from "./Components/Auth/ResetPassword.js";

function App() {
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;