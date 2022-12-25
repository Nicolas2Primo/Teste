import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Create from "./pages/Create";
import SignUpId from "./pages/SignUpId";
import SignUpPass from "./pages/SignUpPass";
import SignUp from "./pages/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import SignUpContextProvider from "./contexts/SignUpContext";

function App() {
  return (
    <SignUpContextProvider>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </SignUpContextProvider>
  );
}

export default App;
