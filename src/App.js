import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import { UserStorage } from "./contexts/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="conta/*" element={<User />} />
          </Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
