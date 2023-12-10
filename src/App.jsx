import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";

const App = () => {
  return (
    <Router basename="/beta-test-react-posts">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
